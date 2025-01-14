import { styled, Card } from '@mui/material'

export const CardContainer = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.customColors['gray-200']}`,
}))
