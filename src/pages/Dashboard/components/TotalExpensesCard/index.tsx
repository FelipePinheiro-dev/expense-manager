import { 
    TotalExpensesCardContainer, 
    TotalExpensesCardContent, 
    TotalExpensesBox, 
    TotalExpensesTypography 
} from './styles'

import { ArrowCircleDown, TrendingDown } from '@mui/icons-material'
import { useTotals } from '@/hooks/useTotals'
import { formatCurrency } from '@/formats/formatCurrency'

export function TotalExpensesCard() {
    const accumulator = useTotals()

    return (
        <TotalExpensesCardContainer>
            <TotalExpensesCardContent>
                <TotalExpensesTypography>
                    Total Expenses (month)
                </TotalExpensesTypography>
                
                <TotalExpensesBox>
                    <ArrowCircleDown className='red'/>
                    {formatCurrency.format(accumulator.totExpense)}
                </TotalExpensesBox>

                <TotalExpensesTypography>
                    <TrendingDown className='red'/>
                    <span>
                        <span className='red'> -24% </span>
                        <span>from last month</span>
                    </span>
                </TotalExpensesTypography>
            </TotalExpensesCardContent>              
        </TotalExpensesCardContainer>
    )
}