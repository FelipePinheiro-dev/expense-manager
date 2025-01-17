import { styled, Input } from '@mui/material'

export const UpdateTableCellContainer = styled(Input)(({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
}))