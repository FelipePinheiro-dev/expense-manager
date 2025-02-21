import { BoxStyled } from './styles'

import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

import { Box } from '@mui/material'
import { ArrowCircleDown, TrendingDown } from '@mui/icons-material'

import { useTotals } from '@/hooks/useTotals'
import { formatCurrency } from '@/formats/formatCurrency'

export function FavoriteCategoryCard() {
  const accumulator = useTotals()
  const valueFormatCurrency = formatCurrency.format(accumulator.totExpense)

  return (
    <Card>
      <Text variant="tertiary">Favorite Category (month)</Text>

      <Text variant="tertiary" size="sm">
        Studies
      </Text>

      <BoxStyled>
        <ArrowCircleDown className="red" />
        <Text as="strong" size="lg">
          {valueFormatCurrency}
        </Text>
      </BoxStyled>

      <BoxStyled>
        <TrendingDown className="red" />
        <Box>
          <Text variant="damage"> + 4% </Text>
          <Text variant="tertiary">from last month (Food) </Text>
        </Box>
      </BoxStyled>
    </Card>
  )
}
