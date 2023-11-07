import { NextIntlClientProvider } from 'next-intl'
import AppWrapper from '@/library/AppWrapper'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rubens Diniz',
  description: 'My portfolio',
}

export default async function LocaleLayout({ children, params: { locale } }: {
  children: ReactNode
  params: { locale: string }
}) {
  let messages

  try {
    messages = (await import(`$/public/locale/${locale}/home.json`)).default
  } catch (error) {
    notFound()
  }

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
  return [{ locale: 'pt-BR' }, { locale: 'en' }]
}
