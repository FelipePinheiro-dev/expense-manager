import * as colors from '@mui/material/colors'
import { TypeCategoriesENUM } from '../constants/categories'
import { useCustomSelector } from './useSelector'
import { useMemo } from 'react'

export function useExpenseByCategories() {
    const { transactions } = useCustomSelector((state) => state.transactions)


    const categories = useMemo(() => {
        return transactions.reduce((acc, transaction) => {
            if(transaction.type === 'expense') {
              switch(transaction.category) {
                case TypeCategoriesENUM.BUSINESS:
                  acc[0].value += transaction.value
                  break
          
                case TypeCategoriesENUM.CLOTHINGS:
                  acc[1].value += transaction.value
                  break
          
                case TypeCategoriesENUM.FOOD:
                  acc[2].value += transaction.value
                  break
                
                case TypeCategoriesENUM.LEISURE:
                  acc[3].value += transaction.value
                  break
                
                case TypeCategoriesENUM.SPORTS:
                  acc[4].value += transaction.value
                  break
                
                case TypeCategoriesENUM.STUDIES:
                  acc[5].value += transaction.value
                  break
                
                case TypeCategoriesENUM.UTILITIES:
                  acc[6].value += transaction.value
                  break
              }
            }
        
            return acc
          }, [
              { id: 1, value: 0, label: 'Business',  color: colors.red['100']},
              { id: 2, value: 0, label: 'Clothings', color: colors.red['200']},
              { id: 3, value: 0, label: 'Food', color: colors.red['300']},
              { id: 4, value: 0, label: 'Leisure', color: colors.red['400']},
              { id: 5, value: 0, label: 'Sports', color: colors.red['500']},
              { id: 6, value: 0, label: 'Studies', color: colors.red['600']},
              { id: 7, value: 0, label: 'Utilities', color: colors.red['700']}
            ]
          )
    }, [transactions])
    

    const categoriesFiltered = categories.filter((item) => item.value !== 0)
    return categoriesFiltered
}