import styled from '@emotion/styled'

export const LogoAppContainer = styled('span')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '.8rem',
  padding: '2rem',

  '> svg': {
    color: theme.palette.customColors['green-200'],
  },

  '> h1': {
    fontSize: '1.2rem',
    color: theme.palette.customColors['white'],
    fontWeight: 400,
  },
}))