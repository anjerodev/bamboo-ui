import * as React from 'react'

import { css, cx } from 'styled-system/css'

import type { WithCss } from '@/lib/styled-system/types'

interface TextProps
  extends WithCss<React.HTMLAttributes<HTMLParagraphElement>> {
  asSpan?: boolean
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ asSpan, css: cssProp, className, ...props }, ref) => {
    const Comp = asSpan ? 'span' : 'p'
    return <Comp {...props} ref={ref} className={cx(css(cssProp), className)} />
  }
)

Text.displayName = 'Text'

export { Text }
