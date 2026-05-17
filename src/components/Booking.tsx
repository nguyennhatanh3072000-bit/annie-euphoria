import type { TranslationCopy } from '../content/translations'
import { FadeIn } from './FadeIn'
import { HtmlBlock } from './HtmlBlock'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScKTpuKmy7IeDF6DWUC2oIrNLwICEDOCFixswMGJ6PRHMrw7g/viewform?usp=publish-editor'
const INSTAGRAM = 'https://www.instagram.com/annienniaa/'
const FACEBOOK = 'https://www.facebook.com/nhatanh.3007/'

export function Booking({ t }: { t: TranslationCopy }) {
  return (
    <section className="sec relative z-[1] mx-auto max-w-[1160px] px-14 py-[100px] max-[860px]:px-5 max-[860px]:py-[72px]" id="booking">
      <FadeIn>
        <p className="text-gold mb-[18px] flex items-center gap-4 text-[12px] tracking-[3px] uppercase before:h-px before:w-7 before:bg-gold before:opacity-60 before:content-['']">
          {t.bookEy}
        </p>
      </FadeIn>
      <FadeIn>
        <h2 className="playfair text-text mb-5 text-[clamp(34px,5vw,62px)] leading-[1.05] font-normal [&_em]:text-gold [&_em]:italic">
          Book a<br />
          <em>Reading.</em>
        </h2>
      </FadeIn>
      <FadeIn>
        <p className="text-text2 max-w-[540px] text-base leading-[1.85]">{t.bookLead}</p>
      </FadeIn>
      <FadeIn>
        <div className="mt-[52px] max-w-[680px]">
          <div className="bg-card border-border mb-7 border px-9 py-8">
            <div className="playfair text-gold mb-2.5 text-xl italic">{t.bookNoteTitle}</div>
            <HtmlBlock
              as="div"
              html={t.bookNoteBody}
              className="text-text2 text-sm leading-[1.8] [&_strong]:text-text [&_strong]:font-[400]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <a
              className="playfair bg-gold text-black block px-9 py-5 text-center text-[12px] tracking-[3px] uppercase no-underline transition-colors duration-300 hover:bg-gold2"
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
            >
              {t.bookBtn}
            </a>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                className="border-border text-text3 border px-6 py-3.5 text-center text-[12px] tracking-[2px] uppercase no-underline transition-all duration-300 hover:border-border2 hover:text-gold"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                📷 Instagram · @annienniaa
              </a>
              <a
                className="border-border text-text3 border px-6 py-3.5 text-center text-[12px] tracking-[2px] uppercase no-underline transition-all duration-300 hover:border-border2 hover:text-gold"
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
              >
                💬 Facebook · Magic Shop
              </a>
            </div>
          </div>
          <p className="text-text3 mt-5 text-center text-[13px] italic">{t.bookHint}</p>
        </div>
      </FadeIn>
    </section>
  )
}
