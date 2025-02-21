import { BoxStyled } from './styles'

import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

import { ArrowCircleUp, TrendingUp } from '@mui/icons-material'
import { Box } from '@mui/material'

import { useTotals } from '@/hooks/useTotals'
import { formatCurrency } from '@/formats/formatCurrency'

export function TotalIncomesCard() {
  const accumulator = useTotals()
  const valueFormatCurrency = formatCurrency.format(accumulator.totIncome)
  return (
    <Card>
      <Text variant="tertiary">Total Incomes (month)</Text>

      <BoxStyled>
        <ArrowCircleUp className="green" />
        <Text as="strong" size="lg">
          {valueFormatCurrency}
        </Text>
      </BoxStyled>

      <BoxStyled>
        <TrendingUp className="green" />
        <Box>
          <Text variant="success"> +24% </Text>
          <Text variant="tertiary">from last month</Text>
        </Box>
      </BoxStyled>
    </Card>
  )
}
