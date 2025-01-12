import { 
    MostExpensiveCardContainer, 
    MostExpensiveCardContent, 
    MostExpensiveBox, 
    MostExpensiveTypography,
    MostExpensiveName
} from './styles'

import { ArrowCircleDown, TrendingDown } from '@mui/icons-material'
import { useTotals } from '@/hooks/useTotals'
import { formatCurrency } from '@/formats/formatCurrency'

export function MostExpensiveCard() {
    const accumulator = useTotals()

    return (
        <MostExpensiveCardContainer>
            <MostExpensiveCardContent>
                <MostExpensiveTypography>
                    Most Expensive (month)
                </MostExpensiveTypography>

                <MostExpensiveName>Hamburger</MostExpensiveName>

                <MostExpensiveBox>
                    <ArrowCircleDown className='red'/>
                    {formatCurrency.format(accumulator.totExpense)}
                </MostExpensiveBox>

                <MostExpensiveTypography>
                    <TrendingDown className='red'/>
                    <span>
                        <span className='red'> + 24% </span>
                        <span>from last month (Banana)</span>
                    </span>
                </MostExpensiveTypography>
            </MostExpensiveCardContent>              
        </MostExpensiveCardContainer>
    )
}