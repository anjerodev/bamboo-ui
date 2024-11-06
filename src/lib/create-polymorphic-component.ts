/**
 * Copied from packages/@mantine/core/src/core/factory/create-polymorphic-component.ts
 */

type ExtendedProps<Props = object, OverrideProps = object> = OverrideProps &
  Omit<Props, keyof OverrideProps>

type ElementType =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>

type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<
  C,
  React.ComponentPropsWithoutRef<C>
>

type ComponentProp<C> = {
  as?: C
}

type InheritedProps<C extends ElementType, Props = object> = ExtendedProps<
  PropsOf<C>,
  Props
>

export type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>['ref']
  : never

export type PolymorphicComponentProps<
  C,
  Props = object,
> = C extends React.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & {
      ref?: PolymorphicRef<C>
      renderRoot?: (props: any) => any
    }
  : Props & {
      as: React.ElementType
      renderRoot?: (props: Record<string, any>) => any
    }

export function createPolymorphicComponent<
  ComponentDefaultType,
  Props,
  StaticComponents = Record<string, never>,
>(component: any) {
  type ComponentProps<C> = PolymorphicComponentProps<C, Props>

  type _PolymorphicComponent = <C = ComponentDefaultType>(
    props: ComponentProps<C>
  ) => React.ReactElement

  type ComponentProperties = Omit<
    React.FunctionComponent<ComponentProps<any>>,
    never
  >

  type PolymorphicComponent = _PolymorphicComponent &
    ComponentProperties &
    StaticComponents

  return component as PolymorphicComponent
}
