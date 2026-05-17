type HtmlBlockProps = {
  html: string
  className?: string
  as?: 'div' | 'p' | 'span' | 'h2'
}

export function HtmlBlock({ html, className, as: Tag = 'div' }: HtmlBlockProps) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
