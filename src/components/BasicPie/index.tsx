import { PieChart } from '@mui/x-charts/PieChart'
import * as colors from '@mui/material/colors'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
//import { TypeCategories, TypeCategory } from '../../constants/categories'

export function BasicPie() {
  const { transactions } = useSelector((state: RootState) => state.transactions)

  /*
  const categories = transactions.reduce((acc, transaction) => {
    switch(transaction.category) {
      case TypeCategories.BUSINESS:
        acc.business += transaction.value
        break

      case TypeCategories.CLOTHINGS:
        acc.clothings += transaction.value
        break

      case TypeCategories.FOOD:
        acc.food += transaction.value
        break
      
      case TypeCategories.LEISURE:
        acc.leisure += transaction.value
        break
      
      case TypeCategories.SPORTS:
        acc.sports += transaction.value
        break
      
      case TypeCategories.STUDIES:
        acc.studies += transaction.value
        break
      
      case TypeCategories.UTILITIES:
        acc.utilities += transaction.value
        break
    }

    return acc
  }, { business: 0, clothings: 0, food: 0, leisure: 0, sports: 0, studies: 0, utilities: 0 })
  */

  const categories = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.value
    return acc
  }, {
    Business: 0,
    Clothings: 0,
    Food: 0,
    Leisure: 0,
    Sports: 0,
    Studies: 0,
    Utilities: 0,
  })

  const onlyGreaterThanZero = Object.fromEntries(
    Object.entries(categories).filter(([_, value]) => value !== 0)
  )
  console.log(onlyGreaterThanZero)

  return (
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 1500, label: 'Expenses', color: colors.red[500]},
                { id: 1, value: 2500, label: 'Entries', color: colors.blue[500]},
              ],
              cx: 100,
              cy: 80,
            },
          ]}
          width={200}
          height={400}
        />
  )
}