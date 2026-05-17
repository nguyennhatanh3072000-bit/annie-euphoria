import type { TranslationCopy } from '../content/translations'
import { FadeIn } from './FadeIn'
import { HtmlBlock } from './HtmlBlock'

export function Hero({ t }: { t: TranslationCopy }) {
  return (
    <div className="relative z-[1] grid min-h-screen grid-cols-[1.1fr_1fr] items-center gap-20 pt-[100px] pr-14 pb-20 pl-14 max-[860px]:grid-cols-1 max-[860px]:gap-10 max-[860px]:px-5 max-[860px]:pt-[90px] max-[860px]:pb-[60px]">
      <div>
        <FadeIn>
          <div className="text-gold mb-7 flex items-center gap-4 text-[12px] tracking-[3px] uppercase before:h-px before:w-7 before:bg-gold before:opacity-60 before:content-['']">
            Tarot · Tea Leaf Reading · Since 2015
          </div>
        </FadeIn>
        <FadeIn delay="d1">
          <h1 className="playfair text-text mb-7 text-[clamp(48px,6.5vw,90px)] leading-[0.93] font-normal tracking-[-1px]">
            <span className="text-text block">Annie</span>
            <span className="text-gold block italic">Reading Room</span>
            <span className="text-text3 mt-3 block align-middle text-[0.48em] font-[200] tracking-[5px] not-italic">
              by Magic Shop · @byannie
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay="d2">
          <HtmlBlock
            as="p"
            html={t.heroDesc}
            className="text-text2 mb-10 max-w-[420px] border-l border-border pl-5 text-[15px] leading-[1.95] [&_em]:text-gold2 [&_em]:not-italic"
          />
        </FadeIn>
        <FadeIn delay="d3">
          <div className="flex flex-wrap gap-3">
            <a
              className="playfair bg-gold text-black inline-block px-[34px] py-3.5 text-[12px] tracking-[2px] uppercase no-underline transition-colors duration-300 hover:bg-gold2"
              href="#booking"
            >
              {t.btnBook}
            </a>
            <a
              className="border-border2 text-gold inline-block border px-[30px] py-3.5 text-[12px] tracking-[2px] uppercase no-underline transition-all duration-300 hover:bg-gold-dim"
              href="#services"
            >
              {t.btnSvc}
            </a>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay="d2">
        <div className="bg-border flex max-[860px]:hidden flex-col gap-px">
          <div className="bg-black2 hover:bg-card flex items-center gap-5 px-8 py-6 transition-colors duration-300">
            <div className="playfair text-gold w-[68px] shrink-0 text-[40px] leading-none font-normal">
              10
            </div>
            <HtmlBlock
              as="div"
              html={t.stat1}
              className="text-text2 text-[13px] leading-snug [&_strong]:text-text [&_strong]:mb-0.5 [&_strong]:block [&_strong]:text-[14px] [&_strong]:font-[300]"
            />
          </div>
          <div className="bg-black2 hover:bg-card flex items-center gap-5 px-8 py-6 transition-colors duration-300">
            <div className="playfair text-gold w-[68px] shrink-0 text-[40px] leading-none font-normal">
              3
            </div>
            <HtmlBlock
              as="div"
              html={t.stat2}
              className="text-text2 text-[13px] leading-snug [&_strong]:text-text [&_strong]:mb-0.5 [&_strong]:block [&_strong]:text-[14px] [&_strong]:font-[300]"
            />
          </div>
          <div className="bg-black2 hover:bg-card flex items-center gap-5 px-8 py-6 transition-colors duration-300">
            <div className="playfair text-gold w-[68px] shrink-0 text-[40px] leading-none font-normal">
              ∞
            </div>
            <HtmlBlock
              as="div"
              html={t.stat3}
              className="text-text2 text-[13px] leading-snug [&_strong]:text-text [&_strong]:mb-0.5 [&_strong]:block [&_strong]:text-[14px] [&_strong]:font-[300]"
            />
          </div>
          <div className="bg-black2 hover:bg-card flex items-center gap-5 px-8 py-6 transition-colors duration-300">
            <div className="playfair text-gold w-[68px] shrink-0 text-[40px] leading-none font-normal">
              🌙
            </div>
            <HtmlBlock
              as="div"
              html={t.stat4}
              className="text-text2 text-[13px] leading-snug [&_strong]:text-text [&_strong]:mb-0.5 [&_strong]:block [&_strong]:text-[14px] [&_strong]:font-[300]"
            />
          </div>
        </div>
      </FadeIn>
      <div className="text-text3 absolute bottom-9 left-14 flex items-center gap-3 text-[12px] tracking-[2px] uppercase max-[860px]:hidden">
        <div className="scrl-line" />
        <span>Scroll</span>
      </div>
    </div>
  )
}
