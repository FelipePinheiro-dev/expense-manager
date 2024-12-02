import styled from '@emotion/styled'
import * as colors from '@mui/material/colors'

export const ResumeTransactionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    padding: .75rem 1rem;

    background: ${colors.blue['50']};
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    .title {
        color: ${props => props.theme.palette.text.disabled};
    }
`