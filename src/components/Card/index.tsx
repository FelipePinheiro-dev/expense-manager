import { ReactNode } from 'react'
import { CardContainer, CardContentStyled } from './styles'

interface PropsCard {
  children: ReactNode
}

export function Card({ children }: PropsCard) {
  return (
    <CardContainer>
      <CardContentStyled>{children}</CardContentStyled>
    </CardContainer>
  )
}
