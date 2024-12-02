import { PieChart } from '@mui/x-charts/PieChart'
import * as colors from '@mui/material/colors'

export function BasicPie() {
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
              innerRadius: 20,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: - 45,
            },
          ]}
          width={250}
          height={400}
        />
  )
}