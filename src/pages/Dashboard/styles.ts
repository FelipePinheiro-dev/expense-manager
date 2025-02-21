import { Box, styled } from '@mui/material'

export const DashboardContainer = styled(Box)({
  position: 'relative',
  width: 'calc(100vw - 16rem)',
  maxWidth: '100%',
  height: '100vh',
  maxHeight: '100%',
  overflowX: 'auto',
  display: 'grid',
  gridTemplateColumns: '20rem minmax(1180px, 1fr)',
  gap: '0.75rem',
  padding: '0.75rem',

  '@media(min-width: 2000px)': {
    width: '70vw',
    margin: 'auto',
  },
})

export const Content = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '@media(min-width: 2000px)': {
    gap: '10rem',
  },
})

export const CardsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
})

export const ChartsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 1fr)',
  gap: '1rem',
})
