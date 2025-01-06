import { useMemo } from 'react'
import { useCustomSelector } from './useSelector'
import * as colors from '@mui/material/colors'

export function useTheThereeBiggest() {
    const { transactions } = useCustomSelector((state) => state.transactions)

    const theThreeBiggest = useMemo(() => {
        return transactions.reduce((acc, transaction) => {
        if(transaction.type === 'expense' && transaction.value > acc[0].data[0]) { // 1° position
            acc[2].data[0] = acc[1].data[0] // third position receives second position
            acc[1].data[0] = acc[0].data[0] // second position gets first position
            acc[0].data[0] = transaction.value // first position receives the highest value
    
            acc[2].label = acc[1].label// third position receives second position
            acc[1].label = acc[0].label // second position gets first position
            acc[0].label = transaction.title // first position receives the highest value
    
        } else if(transaction.type === 'expense' && transaction.value > acc[1].data[0]) { // 2° position
            acc[2].data[0] = acc[1].data[0] // third position receives second position
            acc[1].data[0] = transaction.value // second position receives the second highest value
    
            acc[2].label = acc[1].label// third position receives second position
            acc[1].label = transaction.title // second position receives the second highest value
    
        } else if(transaction.type === 'expense' && transaction.value > acc[2].data[0]) { // 3° position
            acc[2].data[0] = transaction.value // third position receives the third highest value
    
            acc[2].label = transaction.title
        }
    
        return acc
        }, [
        {label: '', data: [0], color: colors.red['900']},
        {label: '', data: [0], color: colors.red['700']},
        {label: '', data: [0], color: colors.red['500']}
        ])
    }, [transactions])

    return theThreeBiggest
}