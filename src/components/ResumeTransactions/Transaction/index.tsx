import { Rocket } from '@mui/icons-material'
import { TransactionContainer, LayoutDefault, LayoutLeft, TypeCurrency } from './styles'
import dayjs from 'dayjs'
export type TypeVariant = 'expense' | 'entries'

interface PropsTransaction {
    title: string,
    date: Date,
    category: string,
    variant: TypeVariant
}

export function Transaction({ variant, title, date, category }: PropsTransaction) {

    function symbols(type: TypeVariant) {
        if(type === 'entries') {
            return '+'
        } else {
            return '-'
        }
    }

    const dateCurrent = dayjs(date)
    const formatISO = dateCurrent.format('YYYY-MM-DD') // Format as '2024-12-02'
    const formatAbbreviated = dateCurrent.format('MMM DD, YYYY')

    return (
        <TransactionContainer>
            <Rocket/>
      
            <LayoutDefault>
                <span>{title}</span>
                <time dateTime={formatISO}>{formatAbbreviated}</time>
            </LayoutDefault>

            <LayoutLeft >
                <span>{category}</span>
                <TypeCurrency variant={variant}> {symbols(variant)} 159,90 </TypeCurrency>
            </LayoutLeft>
        </TransactionContainer>
    )
}