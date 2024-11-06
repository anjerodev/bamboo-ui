import { ProgressBar } from 'react-aria-components'
import type { ProgressBarProps } from 'react-aria-components'
import { css, cva, cx } from 'styled-system/css'
import type { RecipeVariantProps } from 'styled-system/css'

import type { WithCss } from '@/lib/styled-system/types'

const progressCircleStyle = cva({
  base: {
    position: 'relative',
    color: 'primary',
  },
  variants: {
    size: {
      xs: {
        height: 4,
        width: 4,
      },
      sm: {
        height: 8,
        width: 8,
      },
      md: {
        height: 12,
        width: 12,
      },
      lg: {
        height: 14,
        width: 14,
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

type ProgressCircleVariants = NonNullable<
  RecipeVariantProps<typeof progressCircleStyle>
>
interface Props extends WithCss<ProgressBarProps>, ProgressCircleVariants {
  className?: string
  withPercentage?: boolean
}

const ProgressCircle = ({
  css: cssProp,
  className,
  withPercentage,
  ...props
}: Props) => {
  const radius = 14
  const circumference = parseFloat((radius * 2 * Math.PI).toFixed(2))
  const [variants, elementProps] = progressCircleStyle.splitVariantProps(props)

  return (
    <ProgressBar {...elementProps} className={css({ display: 'inline-flex' })}>
      {({ percentage, isIndeterminate }) => (
        <span
          className={cx(
            css(progressCircleStyle.raw(variants), cssProp),
            className
          )}
        >
          <svg
            viewBox="0 0 36 36"
            className={cx(
              css({
                display: 'block',
                width: 'full',
                color: 'currentColor',
                rotate: '-90deg',
              }),
              isIndeterminate &&
                css({ animation: 'progressSpin 1.4s infinite linear' })
            )}
          >
            <circle
              className={cx(
                css({
                  stroke: 'currentColor',
                  transition: 'stroke-dashoffset 0.3s',
                  transitionTimingFunction: 'easeIn',
                }),
                isIndeterminate &&
                  css({
                    animation: 'circularProgress 1.4s infinite ease-in-out',
                  })
              )}
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDasharray: `${circumference}px, ${circumference}px`,
                strokeDashoffset: isIndeterminate
                  ? 0
                  : circumference *
                    (percentage === undefined
                      ? 0
                      : 1 - (percentage <= 0 ? 1 : percentage) / 100),
              }}
            />
          </svg>

          {!isIndeterminate && withPercentage && (
            <span
              className={css({
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'xs',
              })}
            >
              {`${percentage}%`}
            </span>
          )}
        </span>
      )}
    </ProgressBar>
  )
}

ProgressCircle.displayName = 'ProgressCircle'

export { ProgressCircle }
