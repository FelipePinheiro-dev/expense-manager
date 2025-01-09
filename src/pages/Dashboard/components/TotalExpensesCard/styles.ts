import { Card, CardContent, Box, Typography, styled } from '@mui/material'

export const TotalExpensesCardContainer = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.customColors['gray-200']}`
}))

export const TotalExpensesCardContent = styled(CardContent)(({ theme }) => ({
    height: '100%',

    '.red': {
        color: theme.palette.customColors['red-500'] 
    }
}))

export const TotalExpensesBox = styled(Box)({
    display: 'flex',    
    alignItems: 'center',
    gap: '.3rem',
    fontSize: '2rem',
    fontWeight: 'bold',
})

export const TotalExpensesTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.customColors['gray-600'],
    display: 'flex',    
    alignItems: 'center',
    gap: '.3rem',
}))