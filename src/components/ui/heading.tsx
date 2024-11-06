import * as React from 'react'

import { css, cva, cx, type RecipeVariantProps } from 'styled-system/css'

import type { WithCss } from '@/lib/styled-system/types'

const headingsStyles = cva({
  base: {
    color: 'foreground',
    letterSpacing: '-0.02em',
    marginBottom: '0.5em',
  },
  variants: {
    level: {
      1: {
        fontSize: '2.5em',
        fontWeight: '800',
      },
      2: {
        fontSize: '2em',
        fontWeight: '700',
      },
      3: {
        fontSize: '1.75em',
        fontWeight: '600',
      },
      4: {
        fontSize: '1.5em',
        fontWeight: '600',
      },
      5: {
        fontSize: '1.25em',
        fontWeight: 'normal',
      },
      6: {
        fontSize: '1em',
        fontWeight: 'normal',
      },
    },
  },
  defaultVariants: {
    level: 1,
  },
})

type HeadingVariants = NonNullable<RecipeVariantProps<typeof headingsStyles>>

interface HeadingProps
  extends WithCss<React.HTMLAttributes<HTMLHeadingElement>>,
    HeadingVariants {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ css: cssProp, className, ...props }, ref) => {
    const [variants, elementProps] = headingsStyles.splitVariantProps(props)
    const rootClassName = cx(
      css(headingsStyles.raw(variants), cssProp),
      className
    )

    const HeadingTag = `h${variants.level || 1}` as React.ElementType

    return <HeadingTag {...elementProps} ref={ref} className={rootClassName} />
  }
)

Heading.displayName = 'Heading'

export { Heading }
