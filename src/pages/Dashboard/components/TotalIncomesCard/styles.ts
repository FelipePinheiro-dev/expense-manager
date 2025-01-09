import { Card, CardContent, Box, Typography, styled } from '@mui/material'

export const TotalIncomesCardContainer = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.customColors['gray-200']}`
}))

export const TotalIncomesCardContent = styled(CardContent)(({ theme }) => ({
    height: '100%',

    '.red': {
        color: theme.palette.customColors['red-500'] 
    },

    '.green': {
        color: theme.palette.customColors['green-200'] 
    }
}))

export const TotalIncomesBox = styled(Box)({
    display: 'flex',    
    alignItems: 'center',
    gap: '.3rem',
    fontSize: '2rem',
    fontWeight: 'bold',
})

export const TotalIncomesTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.customColors['gray-600'],
    display: 'flex',    
    alignItems: 'center',
    gap: '.3rem',
}))