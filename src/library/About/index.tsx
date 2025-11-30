import { AboutInner, AboutText, AboutTools, AboutWrapper } from './styles'
import { Height } from 'react-animate-height'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

type AboutProps = {
  aboutIsOpen: boolean
}

export const About = ({ aboutIsOpen }: AboutProps) => {
  const t = useTranslations('Home')
  const [height, setHeight] = useState<Height>(0)

  useEffect(() => {
    setHeight(aboutIsOpen ? 'auto' : 0)
  }, [aboutIsOpen])

  // A custom library was used because the height transition in CSS (for
  // anything other than a set value) does not work properly. This
  // implementation is present in this component's height state, its useEffect
  // and in AboutWrapper below (which is a styled AnimateHeight from the lib).
  return (
    <AboutWrapper
      height={height}
      duration={800}
      easing="ease"
      style={{
        transition: 'margin 1s, background-color 1s',
        margin: aboutIsOpen ? '1rem 0 1.25rem' : 0,
      }}
    >
      <AboutInner>
        <AboutText>
          {['1', '2'].map((key) => (
            <p key={key}>
              {t.rich(`about.texts.${key}`, {
                bold: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          ))}
        </AboutText>
        <AboutTools>
          <span>🛠️ React.js | Next.js</span>
          <p>🔨 Python | Node.js | Unity</p>
          <p>{t('about.languages')}</p>
        </AboutTools>
      </AboutInner>
    </AboutWrapper>
  )
}
