import { PieChart } from '@mui/x-charts/PieChart'
import { useExpenseByCategories } from '../../../../hooks/useExpenseByCategories'

export function BasicPie() {
  const categoriesFiltered = useExpenseByCategories()
  
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