import styled from '@emotion/styled'
import * as colors from '@mui/material/colors'

export const DashboardContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 20rem 1fr auto;
  gap: .75rem;
  padding: 1.2rem 1rem;
`

export const MiddleContentStyles = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: .75rem;
`

export const TotalContainerStyles = styled.div`
  display: flex;
  gap: .75rem;
`

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;

  width: 100%;
  height: 100%;
  background: ${colors.blue['50']};
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`

export  const TotalCard = styled.div`
  width: 100%;
  max-width: 20rem;
  padding: 1.2rem 1rem;

  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  color: ${props => props.theme.palette.text.disabled};
  background: ${colors.blue[50]};

  display: flex;
  flex-direction: column;
  gap: .75rem;

  .currency {
    white-space: nowrap;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${props => props.theme.palette.text.secondary};
  }
`

export const PieContainer = styled.div`
  height: 15.625rem;
  background: ${colors.blue[50]};
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`
