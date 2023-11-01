import { AboutText, AboutTools, AboutWrapper } from '@/library/About/styles'
import { useTranslations } from 'next-intl'

type AboutProps = {
  aboutIsOpen: boolean
}

export const About = ({ aboutIsOpen }: AboutProps) => {
  const t = useTranslations('Home')
  const keys = ['1', '2'] as const

  return (
    <AboutWrapper aboutIsOpen={aboutIsOpen}>
      <AboutText>
        {keys.map((key) => (
          <p key={key}>
            {t.rich(`about.texts.${key}`, {
              bold: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
        ))}

      </AboutText>
      <AboutTools>
        <span>
          🛠️ React.js | Next.js
        </span>
        <p>
          🔨 Python | Node.js | Unity
        </p>
        <p>
          {t('about.languages')}
        </p>
      </AboutTools>
    </AboutWrapper>
  )
}
