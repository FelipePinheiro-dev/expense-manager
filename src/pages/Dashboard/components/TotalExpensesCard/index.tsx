import { BoxStyled } from './styles'

import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

import { ArrowCircleDown, TrendingDown } from '@mui/icons-material'
import { Box } from '@mui/material'

import { useTotals } from '@/hooks/useTotals'
import { formatCurrency } from '@/formats/formatCurrency'

export function TotalExpensesCard() {
  const accumulator = useTotals()
  const valueFormatCurrency = formatCurrency.format(accumulator.totExpense)

  return (
    <Card>
      <Text variant="tertiary">Total Expenses (month)</Text>

      <BoxStyled>
        <ArrowCircleDown className="red" />
        <Text as="strong" size="lg">
          {valueFormatCurrency}
        </Text>
      </BoxStyled>

      <BoxStyled>
        <TrendingDown className="red" />

        <Box>
          <Text variant="damage"> -24% </Text>
          <Text variant="tertiary">from last month</Text>
        </Box>
      </BoxStyled>
    </Card>
  )
}
