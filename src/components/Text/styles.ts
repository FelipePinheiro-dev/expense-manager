import { styled } from '@mui/material'

interface StyledTextProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'damage'
  size?: 'sm' | 'md' | 'lg'
}

export const TextContainer = styled('span')<StyledTextProps>(
  ({ theme, variant, size }) => ({
    width: '100%',
    lineHeight: '160%',

    ...(variant === 'primary' && {
      color: theme.palette.customColors['black'],
    }),

    ...(variant === 'secondary' && {
      color: theme.palette.customColors['gray-200'],
    }),

    ...(variant === 'tertiary' && {
      color: theme.palette.customColors['gray-600'],
    }),

    ...(variant === 'success' && {
      color: theme.palette.customColors['green-800'],
    }),

    ...(variant === 'damage' && {
      color: theme.palette.customColors['red-500'],
    }),

    ...(size === 'sm' && {
      fontSize: '0.875rem',
    }),

    ...(size === 'md' && {
      fontSize: '1rem',
    }),

    ...(size === 'lg' && {
      fontSize: '1.6rem',
    }),
  }),
)
