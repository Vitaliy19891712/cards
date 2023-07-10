import s from './typography.module.scss'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type TypographyPropsType<T extends ElementType = 'span'> = {
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
  children?: ReactNode
  className?: string
  mb?: number | string
  mt?: number | string
  mr?: number | string
  ml?: number | string
  mx?: number | string
  my?: number | string
  as?: T
}

export const Typography = <T extends ElementType = 'span'>(
  props: TypographyPropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyPropsType<T>>
) => {
  const {
    children,
    variant = 'body1',
    className,
    as: Component = 'span',
    style,
    mr,
    ml,
    mt,
    mb,
    mx,
    my,
    ...rest
  } = props
  const styles = {
    ...(mr && { marginRight: mr }),
    ...(ml && { marginLeft: ml }),
    ...(mt && { marginTop: mt }),
    ...(mb && { marginBottom: mb }),
    ...(mx && { marginRight: mx, marginLeft: mx }),
    ...(my && { marginTop: my, marginBottom: my }),
    ...style,
  }
  return (
    <Component className={`${s[variant]} ${className}`} style={styles} {...rest}>
      {children}
    </Component>
  )
}
