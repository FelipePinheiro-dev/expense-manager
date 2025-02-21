import { AvatarContainer, ImageStyled } from './styles'
import { Text } from '@/components/Text'

export function Avatar() {
  return (
    <AvatarContainer>
      <ImageStyled src="http://github.com/FelipePinheiroRegina.png" />
      <div className="author">
        <Text as="strong" variant="secondary">
          Felipe Pinheiro
        </Text>
        <Text variant="tertiary" size="sm">
          felipe.pinheiro@cotefacil.com
        </Text>
      </div>
    </AvatarContainer>
  )
}
