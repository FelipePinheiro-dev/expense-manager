import styled from '@emotion/styled'

export const LogoAppContainer = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 2rem;

    > svg {
        color: ${props => props.theme.palette.primary.light};
    }   

    > h1 {
        font-size: 1.2rem;
        color: ${props => props.theme.palette.primary.contrastText};
        font-weight: 400;  
    }
     
`