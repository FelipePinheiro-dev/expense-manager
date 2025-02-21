import { styled, Paper, Box } from '@mui/material'

export const TransactionContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  padding: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',

  '.up': {
    color: theme.palette.customColors['green-800'],
  },

  '.down': {
    color: theme.palette.customColors['red-500'],
  },

  '&:hover': {
    backgroundColor: theme.palette.customColors.hover,
  },
}))

export const BoxRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
})

export const BoxColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export const BoxColumnItemsEnd = styled(BoxColumn)({
  alignItems: 'flex-end',

  '> *': {
    textAlign: 'right',
  },
})
