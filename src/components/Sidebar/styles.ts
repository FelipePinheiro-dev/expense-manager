import styled from '@emotion/styled'

export const SidebarContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.customColors['green-800'],
  display: 'grid',
  gridTemplateRows: 'max-content max-content 1fr 60px',

  '> .subtitle': {
    padding: '1.2rem 1.6rem',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },

  '> .nav': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    a: {
      textDecoration: 'none',
      display: 'flex',
      gap: '1rem',

      '.text': {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem',
      },

      '.green-border-active': {
        width: '5px',
        height: '35px',
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
      },
    },

    '.active': {
      svg: {
      },

      '.text': {
      },

      '.green-border-active': {
      },
    },
  },
}))