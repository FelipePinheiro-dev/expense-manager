import { useCustomSelector } from './useSelector'
import { useMemo } from 'react'

export function useTotais() {
    const { transactions } = useCustomSelector((state) => state.transactions)
    
    const accumulator = useMemo(() => {
        return transactions.reduce((acc, item) => {
            if(item.type === 'income') {
                acc.totIncome += item.value
            } else {
                acc.totExpense += item.value
            }
    
            return acc
        }, { totIncome: 0, totExpense: 0})
    }, transactions)

    return accumulator
}