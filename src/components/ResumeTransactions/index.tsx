import { ResumeTransactionsContainer } from './styles'
import { Transaction } from './Transaction'

export function ResumeTransactions() {
  const date = new Date()
  
  return (
    <ResumeTransactionsContainer>
        <span className='title'>Transactions</span>
        <Transaction key={1} title='Rocketseat' category='Studies' date={date} variant='expense'/>
        <Transaction key={2} title='Site' category='Work' date={date} variant='entries'/>
        <Transaction key={3} title='Speed Fitness' category='Health' date={date} variant='expense'/>
        <Transaction key={4} title='Rocketseat' category='Studies' date={date} variant='expense'/>
        <Transaction key={5} title='Site' category='Work' date={date} variant='entries'/>
        <Transaction key={6} title='Speed Fitness' category='Health' date={date} variant='expense'/>
        <Transaction key={7} title='Rocketseat' category='Studies' date={date} variant='expense'/>
        <Transaction key={8} title='Site' category='Work' date={date} variant='entries'/>
        <Transaction key={9} title='Speed Fitness' category='Health' date={date} variant='expense'/>
        <Transaction key={10} title='Rocketseat' category='Studies' date={date} variant='expense'/> 
    </ResumeTransactionsContainer>
  )
}