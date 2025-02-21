import { styled } from '@mui/material'

import { PropsHeading } from '.'

export const HeadingContainer = styled('h2')<PropsHeading>(
  ({ theme, variant, size }) => ({
    fontWeight: 400,

    ...(variant === 'primary' && {
      color: theme.palette.customColors['gray-200'],
    }),

    ...(variant === 'secondary' && {
      color: theme.palette.customColors['black'],
    }),

    ...(size === 'sm' && {
      fontSize: '1.25rem',
    }),

    ...(size === 'md' && {
      fontSize: '1.5rem',
    }),

    ...(size === 'lg' && {
      fontSize: '2rem',
    }),
  }),
)
