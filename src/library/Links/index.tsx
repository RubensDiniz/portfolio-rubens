import { AboutButton, LinkDiv, LinksWrapper } from '@/library/Links/styles'
import { CustomLink } from '@/library/CustomLink'
import { Dispatch, SetStateAction } from 'react'
import { Divider } from '@/library/Divider'
import { useTranslations } from 'next-intl'

type LinksProps = {
  aboutIsOpen: boolean
  setAboutIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Links = ({ aboutIsOpen, setAboutIsOpen }: LinksProps) => {
  const t = useTranslations('Home')

  const linkArray = [
    {
      url: 'https://www.linkedin.com/in/rubensadiniz/',
      label: 'Linkedin'
    },
    {
      url: 'mailto:rubensadiniz@gmail.com',
      label: 'Email'
    },
    {
      url: 'https://github.com/RubensDiniz',
      label: 'GitHub'
    }
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
      >
        {t('about.button')}
      </AboutButton>
    </LinksWrapper>
  )
}
