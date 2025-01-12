import { ArrowCircleUp, ArrowCircleDown } from '@mui/icons-material'
import { TransactionContainer, TransactionContent, LayoutDefault, LayoutLeft } from './styles'
import { formatCurrency } from '../../../../../../formats/formatCurrency'
import dayjs from 'dayjs'
export type TypeVariant = 'income' | 'expense'

interface PropsTransaction {
    id?: string
    title: string,
    value: number,
    date: string,
    category: string,
    type: TypeVariant
}

interface Component {
    props: PropsTransaction
}

export function Transaction({ props }: Component) {
    const dateCurrent = dayjs(props.date)
    const formatISO = dateCurrent.format('YYYY-MM-DD') // Format as '2024-12-02'
    const formatAbbreviated = dateCurrent.format('MMM DD, YYYY')

    return (
        <TransactionContainer>
            <TransactionContent>
                { props.type && props.type === 'income' ? <ArrowCircleUp className='up'/> : <ArrowCircleDown className='down'/> }
                
                <LayoutDefault>
                    <span>{props.title}</span>
                    <time dateTime={formatISO}>{formatAbbreviated}</time>
                </LayoutDefault>
                
                <LayoutLeft>
                    <span>{props.category}</span>
                    <span> {formatCurrency.format(props.value)} </span>
                </LayoutLeft>
            </TransactionContent>
        </TransactionContainer>
    )
}