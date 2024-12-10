import { ResumeTransactionsContainer } from './styles'
import { Transaction } from './Transaction'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export function ResumeTransactions() {
  const transactions = useSelector((state: RootState) => state.transactions.transactions)
  
  return (
    <ResumeTransactionsContainer>
        <span className='title'>Transactions</span>
        { transactions &&
          transactions.map((item) => (
            <Transaction key={item.id} props={item} />
          ))
        }
    </ResumeTransactionsContainer>
  )
}