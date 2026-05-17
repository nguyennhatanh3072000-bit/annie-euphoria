import { useEffect, useState } from 'react'
import { translations, type Lang } from './content/translations'
import { About } from './components/About'
import { Booking } from './components/Booking'
import { DecorativeLayers } from './components/DecorativeLayers'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'

type Theme = 'dark' | 'light'
type ServiceTab = 'tarot' | 'tea'

function SectionRule() {
  return (
    <hr className="border-border mx-14 my-0 border-0 border-t border-solid max-[860px]:mx-5" />
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('vi')
  const [theme, setTheme] = useState<Theme>('dark')
  const [serviceTab, setServiceTab] = useState<ServiceTab>('tarot')
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <DecorativeLayers />
      <Nav lang={lang} onLang={setLang} theme={theme} onTheme={setTheme} t={t} />
      <Hero t={t} />
      <SectionRule />
      <About t={t} />
      <SectionRule />
      <Services t={t} tab={serviceTab} onTab={setServiceTab} />
      <SectionRule />
      <Reviews t={t} />
      <SectionRule />
      <Booking t={t} />
      <Footer t={t} />
    </>
  )
}
