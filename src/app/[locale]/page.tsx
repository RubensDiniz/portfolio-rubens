'use client'
import { CompanyLink, Header, HomeWrapper } from './styles'
import { LocaleSwitcher } from '@/library/LocaleSwitcher'
import { useTranslations } from 'next-intl'
import { PhotoAndTheme } from '@/library/PhotoAndTheme'
import { About } from '@/library/About'
import { Links } from '@/library/Links'
import { useState } from 'react'

const Home = () => {
  const t = useTranslations('Home')
  const [aboutIsOpen, setAboutIsOpen] = useState(false)

  return (
    <HomeWrapper>
      <PhotoAndTheme />

      <Header>
        <span>Rubens Diniz</span>
        <p>
          {t('position')}{' '}
          <span>
            {t('at')}{' '}
            <CompanyLink href={'https://www.rate.com/'} target="_blank" data-text="Rate">
              Rate
            </CompanyLink>
          </span>
        </p>
      </Header>

      <About aboutIsOpen={aboutIsOpen} />

      <Links aboutIsOpen={aboutIsOpen} setAboutIsOpen={setAboutIsOpen} />

      <LocaleSwitcher />
    </HomeWrapper>
  )
}

export default Home
