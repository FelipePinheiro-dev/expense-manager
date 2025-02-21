import { HTMLAttributes } from 'react'
import { HeadingContainer } from './styles'

export interface PropsHeading extends HTMLAttributes<HTMLHeadingElement> {
  children: string
  variant?: 'primary' | 'secondary'
  as?: keyof JSX.IntrinsicElements
  size?: 'sm' | 'md' | 'lg'
}

export function Heading({
  children,
  variant = 'primary',
  as = 'h2',
  size = 'md',
  ...props
}: PropsHeading) {
  return (
    <HeadingContainer as={as} variant={variant} size={size} {...props}>
      {children}
    </HeadingContainer>
  )
}
