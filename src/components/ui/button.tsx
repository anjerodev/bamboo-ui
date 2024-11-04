'use client'

import * as React from 'react'

import { Button as AriaButton } from 'react-aria-components'
import type { ButtonProps as AriaButtonProps } from 'react-aria-components'
import { css, cva, cx } from 'styled-system/css'
import type { RecipeVariantProps } from 'styled-system/css'

import type { WithCss } from '@/types/components'

import { ProgressCircle } from '@/components/ui/progress-circle'

const buttonStyle = cva({
  base: {
    fontWeight: 'medium',
    userSelect: 'none',
    rounded: 'md',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-flex',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    transition: 'scale 0.15s token(easings.easeIn)',
    outline: 'none',
    _before: {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      bg: 'currentColor',
      opacity: 0,
      pointerEvents: 'none',
      transition: 'opacity 0.2s token(easings.easeIn)',
    },
    _hover: {
      _before: {
        opacity: 0.1,
      },
    },
    _focus: {
      _before: {
        opacity: 0.1,
      },
    },
    _active: {
      scale: 0.98,
      _before: {
        opacity: 0.2,
      },
    },
    _disabled: {
      pointerEvents: 'none',
      bg: 'muted',
      color: 'muted.foreground',
      borderColor: 'border/50',
    },
    _pending: {
      pointerEvents: 'none',
      bg: 'muted',
      color: 'muted.foreground',
      borderColor: 'border/50',
    },
  },
  variants: {
    variant: {
      default: {
        bg: 'bg',
        color: 'bg.foreground',
        border: '1px solid',
        borderColor: 'border',
      },
      primary: {
        bg: 'primary',
        color: 'primary.foreground',
        _hover: {
          _before: {
            opacity: 0.2,
          },
        },
        _active: {
          _before: {
            opacity: 0.3,
          },
        },
      },
      secondary: {
        bg: 'secondary',
        color: 'secondary.foreground',
      },
      ghost: {
        color: 'bg.foreground',
      },
      danger: {
        bg: 'error',
        color: 'error.foreground',
      },
    },
    size: {
      default: {
        px: 5,
        h: 10,
        _pending: { pl: 4 },
        '&:has(.leading-icon)': { pl: 4, '& .leading-icon': { size: 4 } },
        '&:has(.trailing-icon)': { pr: 4, '& .trailing-icon': { size: 4 } },
      },
      icon: { p: 2 },
      lg: {
        px: 6,
        h: 12,
        _pending: { pl: 5 },
        '&:has(.leading-icon)': { pl: 5, '& .leading-icon': { size: 5 } },
        '&:has(.trailing-icon)': { pr: 5, '& .trailing-icon': { size: 5 } },
      },
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
})

type ButtonProps = WithCss<Omit<AriaButtonProps, 'className'>> &
  RecipeVariantProps<typeof buttonStyle> & {
    className?: string
    leadingIcon?: React.ReactNode
    trailingIcon?: React.ReactNode
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { css: cssProp, className, children, leadingIcon, trailingIcon, ...props },
    ref
  ) => {
    const [variants, elementProps] = buttonStyle.splitVariantProps(props)
    const rootClassName = cx(css(buttonStyle.raw(variants), cssProp), className)

    return (
      <AriaButton {...elementProps} ref={ref} className={rootClassName}>
        {(renderProps) => (
          <>
            {(() => {
              if (renderProps.isPending) {
                return (
                  <ProgressCircle
                    aria-label="Loading"
                    isIndeterminate
                    size="xs"
                    css={{ color: 'muted.foreground' }}
                  />
                )
              }

              if (leadingIcon) {
                return <span className="leading-icon">{leadingIcon}</span>
              }

              return null
            })()}

            {typeof children === 'function' ? children(renderProps) : children}

            {trailingIcon && (
              <span className="trailing-icon">{trailingIcon}</span>
            )}
          </>
        )}
      </AriaButton>
    )
  }
)
Button.displayName = 'Button'

export { Button }
