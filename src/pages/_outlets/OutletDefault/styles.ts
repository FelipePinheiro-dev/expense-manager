import { Box, styled } from '@mui/material'

export const OutletDefaultContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: ' 16rem 1fr',
    height: '100vh',
    maxHeight: '100vh',
})

export const BoxContainer = styled(Box)({
    display: 'grid',
    gridTemplateRows: '6.25rem 1fr',
    height:' 100vh',
    maxHeight: '100vh',
})