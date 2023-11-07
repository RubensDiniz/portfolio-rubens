'use client'
import { CompanyLink, Header, HomeWrapper } from './styles'
import { LocaleSwitcher } from '@/library/LocaleSwitcher'
import { useTranslations } from 'next-intl'
import { Photo } from '@/library/Photo'
import { About } from '@/library/About'
import { Links } from '@/library/Links'
import { useState } from 'react'

const Home = () => {
  const t = useTranslations('Home')
  const [aboutIsOpen, setAboutIsOpen] = useState(false)

  return (
    <HomeWrapper>
      <Photo />

      <Header>
        <span>Rubens Diniz</span>
        <p>
          {t('position')} @ <CompanyLink href={'https://app.starlight.sh/auth/login'}
                                         target="_blank">Starlight</CompanyLink>
        </p>
      </Header>

      <About aboutIsOpen={aboutIsOpen} />

      <Links aboutIsOpen={aboutIsOpen} setAboutIsOpen={setAboutIsOpen} />

      <LocaleSwitcher />
    </HomeWrapper>
  )
}

export default Home
