import { styled } from '@mui/material'

export const SidebarContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.customColors['green-800'],
  display: 'grid',
  gridTemplateRows: '1fr 60px',

  '.content': {
    padding: '10px',

    '.menu': {
      marginTop: 32,
      marginBottom: 16,
    },
  },

  '.nav': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    a: {
      textDecoration: 'none',
      display: 'flex',
      gap: '1rem',

      svg: {
        color: theme.palette.customColors['gray-200'],
      },
    },

    '.active': {
      svg: {
        color: theme.palette.customColors['green-200'],
      },
    },
  },
}))
