import type { TranslationCopy } from '../content/translations'
import { HtmlBlock } from './HtmlBlock'

const INSTAGRAM = 'https://www.instagram.com/annienniaa/'
const FACEBOOK = 'https://www.facebook.com/nhatanh.3007/'

export function Footer({ t }: { t: TranslationCopy }) {
  return (
    <footer className="border-border relative z-[1] grid grid-cols-[1.2fr_1fr_1fr] gap-14 border-t px-14 pt-14 pb-11 max-[860px]:grid-cols-1 max-[860px]:gap-9 max-[860px]:px-5 max-[860px]:pt-11 max-[860px]:pb-11">
      <div>
        <div className="playfair text-gold mb-2.5 text-[22px] tracking-[2px] italic">Magic Shop</div>
        <HtmlBlock
          as="div"
          html={t.ftSub}
          className="text-text3 text-[11px] tracking-[1.5px] leading-[1.9]"
        />
      </div>
      <div>
        <div className="text-text3 mb-[18px] text-[12px] tracking-[2.5px] uppercase">Navigation</div>
        <div className="flex flex-col gap-2.5">
          <a
            className="text-text2 text-sm no-underline transition-colors duration-300 hover:text-gold"
            href="#about"
          >
            About
          </a>
          <a
            className="text-text2 text-sm no-underline transition-colors duration-300 hover:text-gold"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-text2 text-sm no-underline transition-colors duration-300 hover:text-gold"
            href="#reviews"
          >
            Reviews
          </a>
          <a
            className="text-text2 text-sm no-underline transition-colors duration-300 hover:text-gold"
            href="#booking"
          >
            {t.ftBook}
          </a>
        </div>
      </div>
      <div>
        <div className="text-text3 mb-[18px] text-[12px] tracking-[2.5px] uppercase">Connect</div>
        <div className="flex flex-col gap-2.5">
          <a
            className="text-text2 text-sm no-underline transition-colors duration-300 hover:text-gold"
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
          >
            Instagram · @annienniaa
          </a>
          <a
            className="text-text2 text-sm no-underline transition-colors duration-300 hover:text-gold"
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
          >
            Facebook · Magic Shop
          </a>
        </div>
      </div>
      <div className="border-border text-text3 col-span-full mt-11 flex justify-between border-t pt-[22px] text-[11px] max-[860px]:flex-col max-[860px]:items-center max-[860px]:gap-1.5 max-[860px]:text-center">
        <span>© 2025 Annie Reading Room · Magic Shop</span>
        <span>Clarity for your next chapter.</span>
      </div>
    </footer>
  )
}
