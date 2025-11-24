import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { AboutButton, LinkDiv, LinksWrapper } from './styles'
import { CustomLink } from '@/library/CustomLink'
import { Divider } from '@/library/Divider'
import { useTranslations } from 'next-intl'

type LinksProps = {
  aboutIsOpen: boolean
  setAboutIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Links = ({ aboutIsOpen, setAboutIsOpen }: LinksProps) => {
  const aboutRef = useRef<HTMLAnchorElement>(null)
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
      url: 'mailto:rubensadiniz@gmail.com',
      label: 'Email',
    },
    {
      url: 'https://github.com/RubensDiniz',
      label: 'GitHub',
    },
  ]

  return (
    <LinksWrapper>
      {linkArray.map((link) => (
        <LinkDiv key={link.label}>
          <CustomLink href={link.url} target="_blank">
            {link.label}
          </CustomLink>
          <Divider />
        </LinkDiv>
      ))}
      <AboutButton
        href={'/'}
        onClick={() => setAboutIsOpen(!aboutIsOpen)}
        aboutIsOpen={aboutIsOpen}
        ref={aboutRef}
      >
        {t('about.button')}
      </AboutButton>
    </LinksWrapper>
  )
}
