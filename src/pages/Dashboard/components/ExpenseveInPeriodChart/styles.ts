import { styled, Card } from '@mui/material'


export const CardContainer = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.customColors['gray-200']}`,
    gridColumn: 'span 6',
}))

export const CustomTooltipContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.customColors.white,
    border: `1px solid ${theme.palette.customColors['gray-200']}`,
    padding: '.5rem',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
}))