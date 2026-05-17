import type { TranslationCopy } from '../content/translations'
import { FadeIn } from './FadeIn'

export function Reviews({ t }: { t: TranslationCopy }) {
  return (
    <section className="sec relative z-[1] mx-auto max-w-[1160px] px-14 py-[100px] max-[860px]:px-5 max-[860px]:py-[72px]" id="reviews">
      <FadeIn>
        <p className="text-gold mb-[18px] flex items-center gap-4 text-[12px] tracking-[3px] uppercase before:h-px before:w-7 before:bg-gold before:opacity-60 before:content-['']">
          {t.revEy}
        </p>
      </FadeIn>
      <FadeIn>
        <h2
          className="playfair text-text mb-5 text-[clamp(34px,5vw,62px)] leading-[1.05] font-normal [&_em]:text-gold [&_em]:italic"
          dangerouslySetInnerHTML={{ __html: t.revTitle }}
        />
      </FadeIn>
      <FadeIn>
        <div className="bg-border mt-[52px] grid grid-cols-3 gap-px max-[860px]:grid-cols-1">
          <div className="bg-black2 hover:bg-card px-8 py-9 transition-colors duration-300 max-[860px]:px-8 max-[860px]:py-9">
            <div className="text-gold mb-4 text-sm tracking-[3px]">★★★★★</div>
            <div className="playfair text-text mb-5 text-[17px] leading-[1.7] italic">{t.rev1text}</div>
            <div className="bg-border mb-3.5 h-px" />
            <div className="text-text3 text-[11px] tracking-[3px] uppercase">{t.revCustomer}</div>
            <div className="mt-[3px] text-[11px] tracking-[1px] text-[rgba(201,168,76,.5)]">{t.rev1svc}</div>
          </div>
          <div className="bg-black2 hover:bg-card px-8 py-9 transition-colors duration-300 max-[860px]:px-8 max-[860px]:py-9">
            <div className="text-gold mb-4 text-sm tracking-[3px]">★★★★★</div>
            <div className="playfair text-text mb-5 text-[17px] leading-[1.7] italic">{t.rev2text}</div>
            <div className="bg-border mb-3.5 h-px" />
            <div className="text-text3 text-[11px] tracking-[3px] uppercase">{t.revCustomer}</div>
            <div className="mt-[3px] text-[11px] tracking-[1px] text-[rgba(201,168,76,.5)]">{t.rev2svc}</div>
          </div>
          <div className="bg-black2 hover:bg-card px-8 py-9 transition-colors duration-300 max-[860px]:px-8 max-[860px]:py-9">
            <div className="text-gold mb-4 text-sm tracking-[3px]">★★★★★</div>
            <div className="playfair text-text mb-5 text-[17px] leading-[1.7] italic">{t.rev3text}</div>
            <div className="bg-border mb-3.5 h-px" />
            <div className="text-text3 text-[11px] tracking-[3px] uppercase">{t.revCustomer}</div>
            <div className="mt-[3px] text-[11px] tracking-[1px] text-[rgba(201,168,76,.5)]">Tarot Reading</div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
