import { BarChart } from '@mui/x-charts/BarChart'
import * as colors from '@mui/material/colors'

export function BasicBar() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Oct', 'Nov', 'Dec'] }]}
      series={[
        {   label: 'Entries',
            data: [2500, 3000, 4000], 
            color: colors.blue[500] 
        }, 
        {   label: 'Expenses',
            data: [1500, 1200, 2000],
            color: colors.red[500]
        }]}
      width={300}
      height={300}
    />
  )
}