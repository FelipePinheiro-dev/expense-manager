import styled from '@emotion/styled'

export const NewTransactionContainer = styled.div``

export const NewTransactionContent = styled.div`
  padding: 1.4rem 3rem;
  width: 100%;
  max-width: 37.5rem;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 8px;

  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    font-size: 1.5rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`
