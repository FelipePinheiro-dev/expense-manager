import { PieChart } from '@mui/x-charts/PieChart'
import * as colors from '@mui/material/colors'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { TypeCategories } from '../../../../constants/categories'

export function BasicPie() {
  const { transactions } = useSelector((state: RootState) => state.transactions)

  const categories = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'expense') {
      switch(transaction.category) {
        case TypeCategories.BUSINESS:
          acc[0].value += transaction.value
          break
  
        case TypeCategories.CLOTHINGS:
          acc[1].value += transaction.value
          break
  
        case TypeCategories.FOOD:
          acc[2].value += transaction.value
          break
        
        case TypeCategories.LEISURE:
          acc[3].value += transaction.value
          break
        
        case TypeCategories.SPORTS:
          acc[4].value += transaction.value
          break
        
        case TypeCategories.STUDIES:
          acc[5].value += transaction.value
          break
        
        case TypeCategories.UTILITIES:
          acc[6].value += transaction.value
          break
      }
    }

    return acc
  }, [
      { id: 1, value: 0, label: "Business",  color: colors.red['100']},
      { id: 2, value: 0, label: "Clothings", color: colors.red['200']},
      { id: 3, value: 0, label: "Food", color: colors.red['300']},
      { id: 4, value: 0, label: "Leisure", color: colors.red['400']},
      { id: 5, value: 0, label: "Sports", color: colors.red['500']},
      { id: 6, value: 0, label: "Studies", color: colors.red['600']},
      { id: 7, value: 0, label: "Utilities", color: colors.red['700']}
    ]
  )

  const categoriesFiltered = categories.filter((item) => item.value !== 0)

  return (
        <PieChart
          series={[
            { 
              data: categoriesFiltered,
              cx: 50,
            },
          ]}
          width={300}
          height={300}
        />
  )
}