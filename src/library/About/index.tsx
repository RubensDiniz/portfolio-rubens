import { AboutInner, AboutText, AboutTools, AboutWrapper } from './styles'
import { useTranslations } from 'next-intl'

type AboutProps = {
  aboutIsOpen: boolean
}

export const About = ({ aboutIsOpen }: AboutProps) => {
  const t = useTranslations('Home')

  // A custom library was used because the height transition in CSS (for
  // anything other than a set value) does not work properly. AboutWrapper
  // below is a styled AnimateHeight from the lib.
  return (
    <AboutWrapper
      height={aboutIsOpen ? 'auto' : 0}
      duration={800}
      easing="ease"
      style={{
        transition: 'margin 1s, background-color 1s',
        margin: aboutIsOpen ? '1rem 0 1.25rem' : 0,
      }}
    >
      <AboutInner>
        <AboutText>
          {['1', '2'].map((key) => (
            <p key={key}>
              {t.rich(`about.texts.${key}`, {
                bold: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          ))}
        </AboutText>
        <AboutTools>
          <span>🛠️ React.js | Next.js | TypeScript</span>
          <p>🔨 Node.js | React Native | Unity</p>
          <p>{t('about.languages')}</p>
        </AboutTools>
      </AboutInner>
    </AboutWrapper>
  )
}
