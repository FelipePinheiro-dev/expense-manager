import styled from '@emotion/styled'

export const FiltersContainer = styled('header')(({ theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    borderBottom: `1px solid ${theme.palette.customColors['gray-200']}`,
    
    span: {
      width: '20%',
    }
}))
  
