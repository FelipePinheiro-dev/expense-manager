import { Card, CardContent, Box, Typography, styled } from '@mui/material'

export const MostExpensiveCardContainer = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.customColors['gray-200']}`
}))

export const MostExpensiveCardContent = styled(CardContent)(({ theme }) => ({
    height: '100%',
    minWidth: '17.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '.red': {
        color: theme.palette.customColors['red-500'] 
    },

    '&:hover': {
        backgroundColor: theme.palette.customColors.hover,
    }
}))

export const MostExpensiveName = styled(Typography)({})

export const MostExpensiveBox = styled(Box)({
    display: 'flex',    
    alignItems: 'center',
    gap: '.3rem',
    fontSize: '1.6rem',
    fontWeight: 'bold',
})

export const MostExpensiveTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.customColors['gray-600'],
    display: 'flex',    
    alignItems: 'center',
    gap: '.3rem',
}))