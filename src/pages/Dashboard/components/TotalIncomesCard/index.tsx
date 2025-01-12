import { 
    TotalIncomesCardContainer,
    TotalIncomesCardContent, 
    TotalIncomesBox,
    TotalIncomesTypography
} from './styles'

import { ArrowCircleUp, TrendingUp } from '@mui/icons-material'
import { useTotals } from '@/hooks/useTotals'
import { formatCurrency } from '@/formats/formatCurrency'

export function TotalIncomesCard() {
    const accumulator = useTotals()

    return (
        <TotalIncomesCardContainer>
            <TotalIncomesCardContent>
                 <TotalIncomesTypography>
                    Total Incomes (month)
                </TotalIncomesTypography>
                
                <TotalIncomesBox>
                    <ArrowCircleUp className='green'/>
                    {formatCurrency.format(accumulator.totIncome)}
                </TotalIncomesBox>

                <TotalIncomesTypography>
                    <TrendingUp className='green'/>
                    <span>
                        <span className='green'> +24% </span>
                        <span>from last month</span>
                    </span>
                </TotalIncomesTypography>
            </TotalIncomesCardContent>
        </TotalIncomesCardContainer>
    )
}