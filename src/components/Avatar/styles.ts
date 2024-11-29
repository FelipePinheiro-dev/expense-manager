import styled from '@emotion/styled'

export const AvatarContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    
    border-top: 1px solid ${props => props.theme.palette.primary.light};

    > img {
        width: 42px;
    }

    > .author {
        display: flex;
        flex-direction: column;
        font-size: .8rem;
        
        color: ${props => props.theme.palette.primary.contrastText};

        span {
            color: #F5F5F5;
        }
    }
`