import { BarChart } from '@mui/x-charts/BarChart'
import * as colors from '@mui/material/colors'

export function BasicHorizontalBar() {
  return (
    <BarChart
        yAxis={[{ scaleType: 'band', data: ['Oct', 'Nov', 'Dec'] }]}
        xAxis={[{ scaleType: 'linear'}]}
        series={[
            {   label: 'Higher Expenses',
                data: [1500, 1200, 2000],
                color: colors.red[500]
            },
        ]}

        layout='horizontal'
        width={300}
        height={220}
    />
  )
}