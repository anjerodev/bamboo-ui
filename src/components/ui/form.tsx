import * as React from 'react'

import { Form as AriaForm } from 'react-aria-components'
import type { FormProps as AriaFormProps } from 'react-aria-components'
import { css, cx } from 'styled-system/css'

import type { WithCss } from '@/lib/styled-system/types'

interface FormProps extends WithCss<Omit<AriaFormProps, 'className'>> {
  className?: string
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, css: cssProp, ...props }, ref) => {
    return (
      <AriaForm {...props} ref={ref} className={cx(css(cssProp), className)} />
    )
  }
)

Form.displayName = 'Form'

export { Form }
