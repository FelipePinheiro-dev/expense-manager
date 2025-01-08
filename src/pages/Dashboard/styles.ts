import styled from '@emotion/styled'

export const DashboardContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: .75rem;
  padding: 1.2rem 1rem;
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

interface PropsTotalCard {
  variant: 'blue' | 'red'
}

export  const TotalCard = styled.div<PropsTotalCard>`
  width: 100%;
  padding: 1.2rem 1rem;

  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

 


  display: flex;
  flex-direction: column;
  gap: .75rem;

  .currency {
    display: flex;    
    align-items: center;
    gap: 1rem;
    font-size: 2.2rem;
    font-weight: bold;
   

    svg {
     
    }
  }
`
