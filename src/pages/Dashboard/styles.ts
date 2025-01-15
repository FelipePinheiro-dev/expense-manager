import { Box, styled} from '@mui/material'

export const DashboardContainer = styled('div')({
  position: 'relative',
  width: 'calc(100vw - 16rem)',
  height: 'calc(100vh - 6.25rem)',
  maxWidth: '100%',
  maxHeight: '100%',
  overflowX: 'auto', 
  display: 'grid',
  gridTemplateColumns: '20rem 1fr',
  gap: '0.75rem',
  padding: '0.75rem',

  '@media(min-width: 1900px)': {
    width: '70vw',
    margin: 'auto'
  }
})

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '@media(min-width: 1900px)': {
    gap: '10rem'
  }
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

export const AbsoluteScrollControl = styled(Box)(({ theme }) => ({}))
