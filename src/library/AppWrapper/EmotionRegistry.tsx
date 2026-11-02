import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode, useState } from 'react'

const createEmotionCache = () => {
  const cache = createCache({ key: 'css' })
  cache.compat = true

  // Records every style inserted during a render, so that
  // useServerInsertedHTML can output them into the document head
  const insert = cache.insert
  let inserted: { name: string; isGlobal: boolean }[] = []

  cache.insert = (...args) => {
    const [selector, serialized] = args
    if (cache.inserted[serialized.name] === undefined) {
      inserted.push({ name: serialized.name, isGlobal: !selector })
    }
    return insert(...args)
  }

  const flush = () => {
    const previous = inserted
    inserted = []
    return previous
  }

  return { cache, flush }
}

const EmotionRegistry = ({ children }: { children: ReactNode }) => {
  const [{ cache, flush }] = useState(createEmotionCache)

  useServerInsertedHTML(() => {
    const inserted = flush()
    if (inserted.length === 0) return null

    const getStyles = (name: string) => cache.inserted[name]
    const globals = inserted.filter(({ isGlobal }) => isGlobal)
    const scoped = inserted.filter(({ isGlobal }) => !isGlobal)

    return (
      <>
        {globals.map(({ name }) => (
          <style
            key={name}
            data-emotion={`${cache.key}-global ${name}`}
            dangerouslySetInnerHTML={{ __html: getStyles(name) as string }}
          />
        ))}
        {scoped.length > 0 && (
          <style
            data-emotion={`${cache.key} ${scoped.map(({ name }) => name).join(' ')}`}
            dangerouslySetInnerHTML={{
              __html: scoped.map(({ name }) => getStyles(name)).join(''),
            }}
          />
        )}
      </>
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}

export default EmotionRegistry
