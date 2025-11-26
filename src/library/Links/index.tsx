import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { AboutButton, LinkDiv, LinksWrapper } from './styles'
import { PageItemLink } from '@/library/PageItem'
import { Divider } from '@/library/Divider'
import { useTranslations } from 'next-intl'

type LinksProps = {
  aboutIsOpen: boolean
  setAboutIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Links = ({ aboutIsOpen, setAboutIsOpen }: LinksProps) => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('Home')

  useEffect(() => {
    if (!aboutIsOpen) aboutRef.current?.blur()
  }, [aboutIsOpen])

  const linkArray = [
    {
      url: 'https://www.linkedin.com/in/rubensadiniz/',
      label: 'Linkedin',
    },
    {
      url: 'https://github.com/RubensDiniz',
      label: 'GitHub',
    },
    {
      url: 'mailto:rubensadiniz@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <LinksWrapper>
      {linkArray.map((link) => (
        <LinkDiv key={link.label}>
          <PageItemLink href={link.url} target="_blank">
            {link.label}
          </PageItemLink>
          <Divider />
        </LinkDiv>
      ))}
      <LinkDiv>
        <PageItemLink href="/cv-rubens-diniz.pdf" download>
          CV
        </PageItemLink>
        <Divider />
      </LinkDiv>
      <AboutButton
        onClick={() => setAboutIsOpen(!aboutIsOpen)}
        aboutIsOpen={aboutIsOpen}
        ref={aboutRef}
      >
        {t('about.button')}
      </AboutButton>
    </LinksWrapper>
  )
}
