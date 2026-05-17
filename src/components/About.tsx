import type { TranslationCopy } from '../content/translations'
import { FadeIn } from './FadeIn'
import { HtmlBlock } from './HtmlBlock'

const ABOUT_IMG = '/images/about-card.png'

export function About({ t }: { t: TranslationCopy }) {
  return (
    <section className="sec relative z-[1] mx-auto max-w-[1160px] px-14 py-[100px] max-[860px]:px-5 max-[860px]:py-[72px]" id="about">
      <FadeIn>
        <HtmlBlock
          as="p"
          html={t.aboutEy}
          className="text-gold mb-[18px] flex items-center gap-4 text-[12px] tracking-[3px] uppercase before:h-px before:w-7 before:bg-gold before:opacity-60 before:content-['']"
        />
      </FadeIn>
      <FadeIn>
        <HtmlBlock
          as="h2"
          html={t.aboutTitle}
          className="playfair text-text mb-5 text-[clamp(34px,5vw,62px)] leading-[1.05] font-normal [&_em]:text-gold [&_em]:italic"
        />
      </FadeIn>
      <div className="mt-14 grid grid-cols-[1fr_1.5fr] items-start gap-[72px] max-[860px]:grid-cols-1 max-[860px]:gap-9">
        <FadeIn>
          <div className="max-[860px]:mx-auto max-[860px]:max-w-[260px]">
            <img
              src={ABOUT_IMG}
              alt="The Sun tarot card illustration"
              className="block h-full w-full rounded object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay="d1">
          <div>
            <HtmlBlock
              as="div"
              html={t.aboutQ}
              className="playfair text-text border-border mb-7 border-b pb-7 text-[21px] leading-[1.65] italic"
            />
            <p className="text-text2 mb-[18px] text-[15px] leading-[1.9]">{t.aboutP1}</p>
            <p className="text-text2 mb-[18px] text-[15px] leading-[1.9]">{t.aboutP2}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {t.chip.map((c) => (
                <span
                  key={c}
                  className="border-border text-text3 border px-4 py-1.5 text-[12px] tracking-[1.5px] uppercase transition-all duration-300 hover:border-border2 hover:text-gold"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
