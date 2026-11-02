import { NextIntlClientProvider } from 'next-intl'
import { DEFAULT_LOCALE, Locale, LOCALES } from '@/library/Locales'
import AppWrapper from '@/library/AppWrapper'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

const NAME = 'Rubens Diniz'

const getMessages = async (locale: string) => {
  if (!LOCALES.includes(locale as Locale)) notFound()

  return (await import(`@/messages/${locale}.json`)).default
}

// The default locale has no prefix in its URL
const getLocalePath = (locale: string) => (locale === DEFAULT_LOCALE ? '/' : `/${locale}`)

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const { description } = (await getMessages(locale)).Metadata
  const url = getLocalePath(locale)

  return {
    metadataBase: new URL('https://www.rubensdiniz.dev'),
    title: NAME,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LOCALES.map((code) => [code, getLocalePath(code)])),
        'x-default': getLocalePath(DEFAULT_LOCALE),
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: NAME,
      title: NAME,
      description,
      images: [{ url: '/profilepic.png', width: 720, height: 720, alt: NAME }],
    },
    twitter: { card: 'summary' },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppWrapper>{children}</AppWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}
