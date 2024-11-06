import * as React from 'react'

import { css, cx } from 'styled-system/css'

import { createPolymorphicComponent } from '@/lib/create-polymorphic-component'
import type { WithCss } from '@/lib/styled-system/types'

interface BoxProps extends WithCss<React.ComponentProps<'div'>> {
  as?: React.ElementType
}

const Box = createPolymorphicComponent<'div', BoxProps>(
  React.forwardRef<HTMLDivElement, BoxProps>(
    ({ css: cssProp, className, as, ...props }, ref) => {
      const Comp = as || 'div'
      const rootClassName = cx(css(cssProp), className)
      return <Comp {...props} ref={ref} className={rootClassName} />
    }
  )
)

Box.displayName = 'Box'

export { Box }
