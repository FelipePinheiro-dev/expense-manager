import { styled, Card, CardContent } from '@mui/material'

export const CardContainer = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.customColors['gray-200']}`,
}))

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  height: '100%',
  minWidth: '17.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '.red': {
    color: theme.palette.customColors['red-500'],
  },

  '.green': {
    color: theme.palette.customColors['green-800'],
  },

  '&:hover': {
    backgroundColor: theme.palette.customColors.hover,
  },
}))
