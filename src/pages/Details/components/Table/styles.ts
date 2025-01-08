import styled from '@emotion/styled'

export const TableContainer = styled.table`
    width: 100%;
    max-width: 52.5rem;
    margin: auto;
    
    border-collapse: collapse;
`

export const Tr = styled.tr`
    
`

export const Td = styled.td`
    padding: 1rem .5rem;
`

export const FirstTd = styled(Td)`
    width: 50%;
`

export const LastTd = styled(Td)`
    text-align: right;
`


interface PropsToggleColor {
    variant: 'red' | 'blue' 
}

export const ToggleColor = styled.span<PropsToggleColor>`
    
`
