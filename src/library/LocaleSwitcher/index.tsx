import { LocaleDiv, LocaleSwitcherWrapper, MobileLocaleSwitcher } from './styles'
import { useTranslations } from 'next-intl'
import { Divider } from '@/library/Divider'
import brazil from '$/public/brazil.svg'
import { useLocale } from 'use-intl'
import us from '$/public/us.svg'
import Link from 'next-intl/link'
import Image from 'next/image'

export const LocaleSwitcher = () => {
  const currentLocale = useLocale()
  const t = useTranslations('Home')

  const locales = [
    {
      code: 'pt-BR',
      src: brazil,
      alt: t('br_flag'),
    },
    {
      code: 'en',
      src: us,
      alt: t('us_flag'),
    },
  ]

  return (
    <>
      <LocaleSwitcherWrapper>
        {locales.map((locale, index) => (
          <LocaleDiv key={locale.code} data-selected={currentLocale === locale.code}>
            <Link
              href="/"
              locale={locale.code}
              style={{
                filter: currentLocale !== locale.code ? 'grayscale(100%)' : '',
              }}
            >
              <Image src={locale.src} alt={locale.alt} />
            </Link>
            {index !== locales.length - 1 && <Divider />}
          </LocaleDiv>
        ))}
      </LocaleSwitcherWrapper>
      <MobileLocaleSwitcher>
        {locales.map((locale) => (
          <LocaleDiv key={locale.code} data-selected={currentLocale === locale.code}>
            {currentLocale === locale.code ? (
              <Image src={locale.src} alt={locale.alt} />
            ) : (
              <Link href="/" locale={locale.code} style={{ filter: 'grayscale(100%)' }}>
                <Image src={locale.src} alt={locale.alt} />
              </Link>
            )}
          </LocaleDiv>
        ))}
      </MobileLocaleSwitcher>
    </>
  )
}
