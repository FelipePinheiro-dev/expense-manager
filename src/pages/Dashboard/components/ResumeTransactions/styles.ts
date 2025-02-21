import { styled, Card, CardContent } from '@mui/material'

export const ResumeTransactionsContainer = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.customColors['gray-200']}`,
  overflowY: 'auto',

  '@media(min-height: 1300px)': {
    height: 'max-content',
  },
}))

export const ResumeTransactionsContent = styled(CardContent)({
  display: 'flex',

  flexDirection: 'column',
  gap: '0.8rem',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
})
