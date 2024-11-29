import styled from '@emotion/styled'

export const OutletDefaultContainer = styled.div`
    display: grid;
    grid-template-columns: 256px 1fr;
    height: 100vh;

    .main {
        display: grid;
        grid-template-rows: 100px 1fr;
        height: 100vh;
    }
`