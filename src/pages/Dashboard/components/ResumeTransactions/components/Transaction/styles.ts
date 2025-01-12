import { styled, Card, CardContent } from '@mui/material'

export const TransactionContainer = styled(Card)({})

export const TransactionContent = styled(CardContent)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    border: `1px solid ${theme.palette.customColors['gray-200']}`,

    '> svg': {
        fontSize: '1.5rem',
    },

    '.up': {
        color: theme.palette.customColors['green-200'],
    },

    '.down': {
        color: theme.palette.customColors['red-500'],
    },

    '&:hover': {
        backgroundColor: theme.palette.customColors.hover,
    }
}))

export const LayoutDefault = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '.3rem',

    time: {
        fontSize: '.7rem',
    }
})

export const LayoutLeft = styled(LayoutDefault)({
    flex: 1,
    alignItems: 'flex-end',
})
