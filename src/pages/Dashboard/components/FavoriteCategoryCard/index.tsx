import { 
    FavoriteCategoryCardContainer, 
    FavoriteCategoryCardContent,
    FavoriteCategoryName, 
    FavoriteCategoryBox, 
    FavoriteCategoryTypography 
} from './styles'

import { ArrowCircleDown, TrendingDown } from '@mui/icons-material'
import { useTotals } from '@/hooks/useTotals'
import { formatCurrency } from '@/formats/formatCurrency'

export function FavoriteCategoryCard() {
    const accumulator = useTotals()

    return (
        <FavoriteCategoryCardContainer>
            <FavoriteCategoryCardContent>
                <FavoriteCategoryTypography>
                    Favorite Category (month)
                </FavoriteCategoryTypography>
                
                <FavoriteCategoryName>Studies</FavoriteCategoryName>

                <FavoriteCategoryBox>
                    <ArrowCircleDown className='red'/>
                    {formatCurrency.format(accumulator.totExpense)}
                </FavoriteCategoryBox>

                <FavoriteCategoryTypography>
                    <TrendingDown className='red'/>
                    <span>
                        <span className='red'> + 4% </span>
                        <span>from last month (Food) </span>
                    </span>
                </FavoriteCategoryTypography>
            </FavoriteCategoryCardContent>              
        </FavoriteCategoryCardContainer>
    )
}