import { AvatarContainer } from './styles'

export function Avatar() {
    return (
        <AvatarContainer>
            <img src="http://github.com/FelipePinheiroRegina.png"/>
            <div className='author'>
                <strong>Felipe Pinheiro</strong>
                <span>felipe.pinheiro@cotefacil.com</span>
            </div>
        </AvatarContainer>
    )
}