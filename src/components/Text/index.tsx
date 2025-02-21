import { HTMLAttributes } from 'react'
import { TextContainer } from './styles'
import { Tooltip, TooltipProps } from '@mui/material'

type TPlacement = TooltipProps['placement']

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements
  children: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'damage'
  size?: 'sm' | 'md' | 'lg'
  tooltip?: string
  placement?: TPlacement
}

export function Text({
  as = 'span',
  variant = 'primary',
  size = 'md',
  children,
  tooltip = '',
  placement = 'bottom',
  ...props
}: TextProps) {
  return (
    <Tooltip title={tooltip} placement={placement} arrow>
      <TextContainer as={as} variant={variant} size={size} {...props}>
        {children}
      </TextContainer>
    </Tooltip>
  )
}
