import styled from '@emotion/styled'
import * as colors from '@mui/material/colors'
import { TypeVariant } from '.'

export const TransactionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
   
    > svg {
        font-size: 1.5rem;
        color: ${props => props.theme.palette.primary.light};
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
    color: ${props => props.type === 'expense' ? colors.red[500] : colors.blue[500]};

    > svg {
        color: ${props => props.type === 'expense' ? colors.red[500] : colors.blue[500]};
    }
` 
