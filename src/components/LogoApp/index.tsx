import { LogoAppContainer } from './styles'
import { Heading } from '@/components/Heading'
import { LogoImage } from '@/components/LogoImage'

export function LogoApp() {
  return (
    <LogoAppContainer>
      <LogoImage />
      <Heading variant="primary" as="h1">
        Expense Manager
      </Heading>
    </LogoAppContainer>
  )
}
