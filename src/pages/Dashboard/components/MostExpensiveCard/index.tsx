import { BoxStyled } from './styles'

import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

import { Box } from '@mui/material'
import { ArrowCircleDown, TrendingDown } from '@mui/icons-material'

import { useTotals } from '@/hooks/useTotals'
import { formatCurrency } from '@/formats/formatCurrency'

export function MostExpensiveCard() {
  const accumulator = useTotals()

  const valueFormatCurrency = formatCurrency.format(accumulator.totExpense)
  const title = 'Banana'
  const formatNameLastTransaction = `(${title.length > 4 ? title.slice(0, 1) + '...' : title})`
  return (
    <Card>
      <Text variant="tertiary">Most Expensive (month)</Text>

      <Text variant="tertiary" size="sm">
        Hamburger
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
          <Text variant="damage"> + 24% </Text>

          <Text
            variant="tertiary"
            tooltip={title.toString()}
            placement="right-start"
          >
            {'from last month ' + formatNameLastTransaction}
          </Text>
        </Box>
      </BoxStyled>
    </Card>
  )
}
