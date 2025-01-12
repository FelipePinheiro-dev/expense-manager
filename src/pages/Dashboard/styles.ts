import styled from '@emotion/styled'

export const DashboardContainer = styled('div')({
  width: '100%',
  height: 'calc(100vh - 6.25rem)',
  display: 'grid',
  gridTemplateColumns: '20rem 1fr',
  gap: '0.75rem',
  padding: '0.75rem',
})

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const CardsContainer = styled('div')({
  display: 'flex',
  gap: '1rem',
})

export const ChartsContainer = styled('div')({
  
})