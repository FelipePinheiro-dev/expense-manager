import { BarChart } from '@mui/x-charts/BarChart'
import { useTheThereeBiggest } from '../../../../hooks/useTheThereeBiggest'

export function BasicBar() {
  const theThreeBiggest = useTheThereeBiggest()

  return (
    <BarChart
      xAxis={[{ data: ['Three biggest expenses'], scaleType: 'band' }]}
      slotProps={{legend: {padding: 0}}}
      series={theThreeBiggest}
      width={300}
      height={300}
    />
  )
}