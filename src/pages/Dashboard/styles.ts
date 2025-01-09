import styled from '@emotion/styled'

export const DashboardContainer = styled.div`
  width: 100%;
  max-height: 100vh;

  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: .75rem;
  padding: 1.2rem 1rem;

  
  > * {
    border: 1px solid red;
  }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const TotalContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const ChartContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`
