import { TableContainer, ToggleColor, Tr, Td, FirstTd, LastTd } from './styles'

export function Table() {
    const isExpense = true

    return (
        <TableContainer>
            <tbody>
                <Tr>
                    <FirstTd>Rockeseat</FirstTd>
                    <Td><ToggleColor variant='red'>{isExpense && '-'} 159,99</ToggleColor></Td>
                    <Td>Studies</Td>
                    <Td>03/12/2024</Td>
                    <LastTd><ToggleColor variant='red'>Expense</ToggleColor></LastTd>
                </Tr>
            </tbody>
        </TableContainer>
    )
}