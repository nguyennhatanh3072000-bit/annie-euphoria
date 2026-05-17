import { useEffect, useRef, useState, type ReactNode } from 'react'

export function FadeIn({
  className = '',
  delay,
  children,
}: {
  className?: string
  delay?: 'd1' | 'd2' | 'd3'
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (e) =>
        e.forEach((x) => {
          if (x.isIntersecting) setVis(true)
        }),
      { threshold: 0.1 },
    )
    obs.observe(el)
    if (el.getBoundingClientRect().top < window.innerHeight) setVis(true)
    return () => obs.disconnect()
  }, [])

  const delayClass =
    delay === 'd1'
      ? 'delay-100'
      : delay === 'd2'
        ? 'delay-200'
        : delay === 'd3'
          ? 'delay-300'
          : ''

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[750ms] ease-out ${delayClass} ${vis ? 'translate-y-0 opacity-100' : 'translate-y-[18px] opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
