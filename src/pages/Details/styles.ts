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

export const Filters = styled('header')(({ theme }) => ({
  height: '6.25rem',
  border: `1px solid ${theme.palette.customColors['gray-200']}`,

  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem',
  gap: '2rem',
}))

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxHeight: 'calc(100vh - 6.25rem)',
  overflow: 'auto',
}))

export const TableStyled = styled(Table)(({ theme }) => ({
  margin: '2.5rem auto',
  maxWidth: '90%',
}))

export const TableHeadStyled = styled(TableHead)(({ theme }) => ({}))
export const TableBodyStyled = styled(TableBody)(({ theme }) => ({}))
export const TableRowStyled = styled(TableRow)(({ theme }) => ({}))
export const TableCellStyled = styled(TableCell)(({ theme }) => ({
  position: 'relative',
}))
