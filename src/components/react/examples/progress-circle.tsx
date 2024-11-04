import { Button } from '@/components/ui/button'
import { ProgressCircle } from '@/components/ui/progress-circle'
import { useState } from 'react'
import { css } from 'styled-system/css'

export const Default = () => (
  <div className={css({ display: 'flex', gap: 8, alignItems: 'center' })}>
    <ProgressCircle value={25} size="xs" />
    <ProgressCircle value={50} />
    <ProgressCircle value={75} size="md" />
    <ProgressCircle value={100} size="lg" />
  </div>
)

export const Controllable = () => {
  const [value, setValue] = useState(0)

  const handleValueChange = (value: number) => {
    setValue((prev) => {
      const result = prev + value
      if (result > 100) return 100
      if (result < 0) return 0
      return result
    })
  }

  return (
    <div className={css({ display: 'flex', gap: 8, alignItems: 'center' })}>
      <Button onPress={() => handleValueChange(-25)}>- 25</Button>
      <ProgressCircle value={value} />
      <Button onPress={() => handleValueChange(25)}>+ 25</Button>
    </div>
  )
}

export const Indeterminate = () => <ProgressCircle isIndeterminate />

export const WithPercentage = () => (
  <ProgressCircle value={75} size="lg" withPercentage />
)

export const CustomColor = () => (
  <div className={css({ display: 'flex', gap: 8, alignItems: 'center' })}>
    <ProgressCircle
      value={75}
      className={css({
        color: 'blue.500',
      })}
    />
    <ProgressCircle
      value={75}
      className={css({
        color: 'yellow.500',
      })}
    />
    <ProgressCircle
      value={75}
      className={css({
        color: 'pink.500',
      })}
    />
    <ProgressCircle
      value={75}
      className={css({
        color: 'orange.500',
      })}
    />
  </div>
)
