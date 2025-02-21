import {
  TransactionContainer,
  BoxRow,
  BoxColumn,
  BoxColumnItemsEnd,
} from './styles'
import { Text } from '@/components/Text'

import { ArrowCircleUp, ArrowCircleDown } from '@mui/icons-material'

import { formatCurrency } from '@/formats/formatCurrency'
import dayjs from 'dayjs'

export type TypeVariant = 'income' | 'expense'

interface PropsTransaction {
  id?: string
  title: string
  value: number
  date: string
  category: string
  type: TypeVariant
}

interface Component {
  props: PropsTransaction
}

export function Transaction({ props }: Component) {
  const dateCurrent = dayjs(props.date)
  const formatISO = dateCurrent.format('YYYY-MM-DD')
  const formatAbbreviated = dateCurrent.format('MMM DD, YYYY')
  const valueFormatCurrency = formatCurrency.format(props.value)
  const isExpense = props.type === 'expense'
  return (
    <TransactionContainer elevation={3}>
      <BoxRow>
        {isExpense ? (
          <ArrowCircleDown className="down" />
        ) : (
          <ArrowCircleUp className="up" />
        )}
        <BoxColumn>
          <Text variant="tertiary" size="sm">
            {props.title}
          </Text>
          <time dateTime={formatISO}>
            <Text variant="tertiary" size="sm">
              {formatAbbreviated}
            </Text>
          </time>
        </BoxColumn>
      </BoxRow>

      <BoxColumnItemsEnd>
        <Text variant="tertiary" size="sm">
          {props.category}
        </Text>
        <Text variant={isExpense ? 'damage' : 'success'} size="sm">
          {(isExpense ? ' - ' : '') + valueFormatCurrency}
        </Text>
      </BoxColumnItemsEnd>
    </TransactionContainer>
  )
}
