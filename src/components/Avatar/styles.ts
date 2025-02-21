import { styled } from '@mui/material'

export const AvatarContainer = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',

  borderTop: `1px solid ${theme.palette.customColors['gray-800']}`,

  '.author': {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export const ImageStyled = styled('img')({
  width: 42,
  height: 42,
  borderRadius: 999,
  objectFit: 'cover',
})
