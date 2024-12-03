import styled from '@emotion/styled'
import * as colors from '@mui/material/colors'

export const TableContainer = styled.table`
    width: 100%;
    max-width: 52.5rem;
    margin: auto;
    
    border-collapse: collapse;

    tbody {
        tr {
            border-bottom: 8px solid ${props => props.theme.palette.background.default};
            background: ${colors.blue[50]};
        }
        
        
        td {
            padding: 1rem .5rem;
        }

        td:first-child {
            width: 50%;
        }
    }
`

interface PropsToggleColor {
    variant: 'red' | 'blue' 
}

export const ToggleColor = styled.span<PropsToggleColor>`
    color: ${props => props.variant === 'red' ? colors.red[500] : colors.blue[500]};
`
