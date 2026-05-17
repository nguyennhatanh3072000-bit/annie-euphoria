import type { Lang, TranslationCopy } from '../content/translations'

type Theme = 'dark' | 'light'

export function Nav({
  lang,
  onLang,
  theme,
  onTheme,
  t,
}: {
  lang: Lang
  onLang: (l: Lang) => void
  theme: Theme
  onTheme: (th: Theme) => void
  t: TranslationCopy
}) {
  return (
    <nav className="border-border fixed top-0 right-0 left-0 z-[100] flex h-[68px] items-center justify-between border-b px-14 backdrop-blur-[20px] max-[860px]:px-5" style={{ background: 'var(--nav-bg)' }}>
      <a
        className="playfair text-gold text-[15px] font-normal tracking-[4px] uppercase italic no-underline"
        href="#"
      >
        Magic Shop
      </a>
      <ul className="nav-links flex list-none gap-10 max-[860px]:hidden">
        <li>
          <a
            className="text-text3 text-[12px] tracking-[2px] uppercase no-underline transition-colors duration-300 hover:text-gold"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-text3 text-[12px] tracking-[2px] uppercase no-underline transition-colors duration-300 hover:text-gold"
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="text-text3 text-[12px] tracking-[2px] uppercase no-underline transition-colors duration-300 hover:text-gold"
            href="#reviews"
          >
            Reviews
          </a>
        </li>
        <li>
          <a
            className="text-text3 text-[12px] tracking-[2px] uppercase no-underline transition-colors duration-300 hover:text-gold"
            href="#booking"
          >
            Booking
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="border-border text-text3 hover:text-gold cursor-pointer border px-[11px] py-[5px] text-[13px] transition-all duration-300"
          onClick={() => onTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀' : '☽'}
        </button>
        <div className="flex gap-0.5">
          <button
            type="button"
            className={`cursor-pointer border px-[11px] py-[5px] text-[11px] tracking-[1.5px] uppercase transition-all duration-300 ${
              lang === 'vi'
                ? 'border-border2 text-gold'
                : 'border-border text-text3 hover:border-border hover:text-text2'
            }`}
            onClick={() => onLang('vi')}
          >
            VI
          </button>
          <button
            type="button"
            className={`cursor-pointer border px-[11px] py-[5px] text-[11px] tracking-[1.5px] uppercase transition-all duration-300 ${
              lang === 'en'
                ? 'border-border2 text-gold'
                : 'border-border text-text3 hover:border-border hover:text-text2'
            }`}
            onClick={() => onLang('en')}
          >
            EN
          </button>
        </div>
        <a
          className="playfair bg-gold text-black px-[22px] py-2.5 text-[12px] tracking-[2px] uppercase no-underline transition-colors duration-300 hover:bg-gold2"
          href="#booking"
        >
          {t.navCta}
        </a>
      </div>
    </nav>
  )
}
