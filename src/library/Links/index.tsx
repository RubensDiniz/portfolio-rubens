import { AboutButton, LinkDiv, LinksWrapper } from './styles'
import { PageItemLink } from '@/library/PageItem'
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
      label: 'Linkedin',
      target: '_blank',
    },
    {
      url: 'https://github.com/RubensDiniz',
      label: 'GitHub',
      target: '_blank',
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
          <PageItemLink href={link.url} target={link.target} data-text={link.label}>
            {link.label}
          </PageItemLink>
          <Divider />
        </LinkDiv>
      ))}
      <LinkDiv>
        <PageItemLink href="/cv-rubens-diniz.pdf" download data-text="CV">
          CV
        </PageItemLink>
        <Divider />
      </LinkDiv>
      <AboutButton
        type="button"
        onClick={() => setAboutIsOpen(!aboutIsOpen)}
        aboutIsOpen={aboutIsOpen}
        aria-expanded={aboutIsOpen}
        data-text={t('about.button')}
      >
        {t('about.button')}
      </AboutButton>
    </LinksWrapper>
  )
}
