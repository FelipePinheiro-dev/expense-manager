import { ThumbDown, ThumbUpSharp } from '@mui/icons-material'
import { TransactionContainer, LayoutDefault, LayoutLeft, TypeCurrency } from './styles'
import { formatCurrency } from '../../../formats/formatCurrency'
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
    function symbols(type: TypeVariant) {
        if(type === 'income') {
            return '+'
        } else {
            return '-'
        }
    }

    const dateCurrent = dayjs(props.date)
    const formatISO = dateCurrent.format('YYYY-MM-DD') // Format as '2024-12-02'
    const formatAbbreviated = dateCurrent.format('MMM DD, YYYY')

    return (
        <TransactionContainer>
            { props.type && props.type === 'income' ? 
                    <TypeCurrency type={props.type}>
                        <ThumbUpSharp/>
                    </TypeCurrency>  
                    : 
                    <TypeCurrency type={props.type}>
                        <ThumbDown/>
                    </TypeCurrency> 
            }
            
            <LayoutDefault>
                <span>{props.title}</span>
                <time dateTime={formatISO}>{formatAbbreviated}</time>
            </LayoutDefault>

            <LayoutLeft >
                <span>{props.category}</span>
                <TypeCurrency type={props.type}> {symbols(props.type)} {formatCurrency.format(props.value)}</TypeCurrency>
            </LayoutLeft>
        </TransactionContainer>
    )
}