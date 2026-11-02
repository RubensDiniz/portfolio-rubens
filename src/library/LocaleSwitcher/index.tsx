import { LocaleDiv, LocaleSwitcherWrapper } from './styles'
import { useLocale, useTranslations } from 'next-intl'
import { Locale, LOCALES } from '@/library/Locales'
import { Divider } from '@/library/Divider'
import brazil from '$/public/brazil.svg'
import us from '$/public/us.svg'
import Link from 'next-intl/link'
import Image from 'next/image'

const FLAGS: Record<Locale, { src: typeof brazil; label: string }> = {
  'pt-BR': { src: brazil, label: 'br_flag' },
  en: { src: us, label: 'us_flag' },
}

export const LocaleSwitcher = () => {
  const currentLocale = useLocale()
  const t = useTranslations('Home')

  return (
    <LocaleSwitcherWrapper>
      {LOCALES.map((locale, index) => {
        const { src, label } = FLAGS[locale]
        const isCurrent = currentLocale === locale

        return (
          <LocaleDiv key={locale} data-selected={isCurrent}>
            {isCurrent ? (
              <Image src={src} alt={t('current_language')} />
            ) : (
              <Link href="/" locale={locale}>
                <Image src={src} alt={t(label)} />
              </Link>
            )}
            {index !== LOCALES.length - 1 && <Divider />}
          </LocaleDiv>
        )
      })}
    </LocaleSwitcherWrapper>
  )
}
