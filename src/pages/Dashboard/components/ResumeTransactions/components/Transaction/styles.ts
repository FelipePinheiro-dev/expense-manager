import styled from '@emotion/styled'
import { TypeVariant } from './index'

export const TransactionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
   
    > svg {
        font-size: 1.5rem;
       
    }
`

export const LayoutDefault = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;        
`

export const LayoutLeft = styled(LayoutDefault)`
    flex: 1;
    align-items: flex-end;
`


export interface PropsType {
    type: TypeVariant
}

export const TypeCurrency = styled.span<PropsType>`
    

    > svg {
       
    }
` 
