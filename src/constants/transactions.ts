type TypeTransactionsValues = 'expense' | 'income'
type TypeTransactionsNames = 'Expense' | 'Income'

export interface PropsTransactions {
  value: TypeTransactionsValues
  name: TypeTransactionsNames
}

export const TRANSACTIONS: PropsTransactions[] = [
  { value: 'expense', name: 'Expense' },
  { value: 'income', name: 'Income' },
]
