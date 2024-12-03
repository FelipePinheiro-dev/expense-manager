import { BarChart } from '@mui/x-charts/BarChart'
import * as colors from '@mui/material/colors'

export function BasicHorizontalBar() {
  return (
    <BarChart
        yAxis={[{ scaleType: 'band', data: ['Oct', 'Nov', 'Dec'] }]}
        xAxis={[{ scaleType: 'linear'}]}
        series={[
            {   label: 'Leisure',
                data: [1500, 2000, 3000],
                color: colors.red[500]
            },
            {   label: 'Studies',
              data: [2000, 1500, 500],
              color: colors.blue[500]
            },
            {   label: 'Market',
              data: [600, 800, 600],
              color: colors.green[500]
            },
          ]}
       

        layout='horizontal'
        width={300}
        height={220}
    />
  )
}