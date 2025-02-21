import {
  ResumeTransactionsContainer,
  ResumeTransactionsContent,
} from './styles'
import { Heading } from '@/components/Heading'
import { Transaction } from './components/Transaction'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'

export function ResumeTransactions() {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions,
  )
  const onlyn10Transactions = transactions.slice(0, 10)

  return (
    <ResumeTransactionsContainer>
      <ResumeTransactionsContent>
        <Heading variant="secondary" size="sm">
          Transactions
        </Heading>

        {onlyn10Transactions &&
          onlyn10Transactions.map((item) => (
            <Transaction key={item.id} props={item} />
          ))}
      </ResumeTransactionsContent>
    </ResumeTransactionsContainer>
  )
}
