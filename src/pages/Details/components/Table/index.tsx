import { TableContainer, ToggleColor } from './styles'

export function Table() {
    const isExpense = true

    return (
        <TableContainer>
            <tbody>
                
                <tr>
                    <td>Rockeseat</td>
                    <td><ToggleColor variant='red'>{isExpense && '-'} 159,99</ToggleColor></td>
                    <td>Studies</td>
                    <td>03/12/2024</td>
                    <td><ToggleColor variant='red'>Expense</ToggleColor></td>
                </tr>

                <tr>
                    <td>Site development</td>
                    <td><ToggleColor variant='blue'>12.000,00</ToggleColor></td>
                    <td>Coding</td>
                    <td>03/12/2024</td>
                    <td><ToggleColor variant='blue'>Entries</ToggleColor></td>
                </tr>

                <tr>
                    <td>Site development</td>
                    <td><ToggleColor variant='blue'>12.000,00</ToggleColor></td>
                    <td>Coding</td>
                    <td>03/12/2024</td>
                    <td><ToggleColor variant='blue'>Entries</ToggleColor></td>
                </tr>

                <tr>
                    <td>Site development</td>
                    <td><ToggleColor variant='blue'>12.000,00</ToggleColor></td>
                    <td>Coding</td>
                    <td>03/12/2024</td>
                    <td><ToggleColor variant='blue'>Entries</ToggleColor></td>
                </tr>

                <tr>
                    <td>Site development</td>
                    <td><ToggleColor variant='blue'>12.000,00</ToggleColor></td>
                    <td>Coding</td>
                    <td>03/12/2024</td>
                    <td><ToggleColor variant='blue'>Entries</ToggleColor></td>
                </tr>

                <tr>
                    <td>Site development</td>
                    <td><ToggleColor variant='blue'>12.000,00</ToggleColor></td>
                    <td>Coding</td>
                    <td>03/12/2024</td>
                    <td><ToggleColor variant='blue'>Entries</ToggleColor></td>
                </tr>

                <tr>
                    <td>Site development</td>
                    <td><ToggleColor variant='blue'>12.000,00</ToggleColor></td>
                    <td>Coding</td>
                    <td>03/12/2024</td>
                    <td><ToggleColor variant='blue'>Entries</ToggleColor></td>
                </tr>
            </tbody>
        </TableContainer>
    )
}