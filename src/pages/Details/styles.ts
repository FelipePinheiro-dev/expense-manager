import { 
    styled, 
    TableContainer, 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableCell,
} from '@mui/material'

export const DetailsContainer = styled('div')(({ theme }) => ({}))

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
    width: '100%',
}))

export const TableStyled = styled(Table)(({ theme }) => ({
    margin: '2.5rem auto',
    maxWidth: '90%'
}))

export const TableHeadStyled = styled(TableHead)(({ theme }) => ({}))
export const TableBodyStyled = styled(TableBody)(({ theme }) => ({}))
export const TableRowStyled = styled(TableRow)(({ theme }) => ({}))
export const TableCellStyled = styled(TableCell)(({ theme }) => ({
    position: 'relative'
}))