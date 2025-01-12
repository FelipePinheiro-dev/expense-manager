import { ResumeTransactionsContainer, ResumeTransactionsContent } from './styles'
import { Transaction } from './components/Transaction'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'

export function ResumeTransactions() {
  const transactions = useSelector((state: RootState) => state.transactions.transactions)
  const onlyn10Transactions = transactions.slice(0, 10)

  return (
    <ResumeTransactionsContainer>
      <ResumeTransactionsContent>
        <span className='title'>Transactions</span>
          { onlyn10Transactions &&
            onlyn10Transactions.map((item) => (
              <Transaction key={item.id} props={item}/> 
            ))
          }
      </ResumeTransactionsContent>
    </ResumeTransactionsContainer>
  )
}