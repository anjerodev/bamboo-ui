import { Text } from '@/components/ui/text'

export const Default = () => {
  return (
    <div>
      <Text>Hello Bamboo UI</Text>
      <Text css={{ fontSize: 'xl', fontWeight: 'semibold' }}>
        Hello Bamboo UI
      </Text>
    </div>
  )
}

export const AsSpan = () => {
  return (
    <Text>
      Hello{' '}
      <Text asSpan css={{ color: 'primary' }}>
        Bamboo UI
      </Text>
    </Text>
  )
}
