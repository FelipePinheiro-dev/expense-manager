import styled from '@emotion/styled'

export const AvatarContainer = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  
  borderTop: `1px solid ${theme.palette.customColors['gray-800']}`,

  '> img': {
    width: '42px',
  },

  '> .author': {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.8rem',
    color: theme.palette.customColors['white'],

    span: {
      color: theme.palette.customColors['gray-600'],
    },
  },
}))
