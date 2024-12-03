import styled from '@emotion/styled'
import * as colors from '@mui/material/colors'

export const NewTransactionContainer = styled.div`
`

export const NewTransactionContent = styled.div`
    padding: .75rem 1rem;
    width: 100%;
    max-width: 37.5rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    background: ${colors.blue[50]};
    border-radius: 8px;

    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > h1 {
        font-size: 1.2rem;
        color: ${props  => props.theme.palette.text.disabled};
    }

    > form {
        display: flex;
        flex-direction: column;
        gap: .75rem;

        .default {
            display: flex;
            justify-content: space-between;

            .select {
                width: 16.5rem;
            }
        }

        .newtransaction {
            display: flex;
            justify-content: end;
        }
    }
`