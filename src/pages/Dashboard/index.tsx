import { 
    DashboardContainer, 
    Content,
    ChartsContainer,
    CardsContainer,
} from './styles'

import { TotalIncomesCard } from './components/TotalIncomesCard'
import { TotalExpensesCard } from './components/TotalExpensesCard'
import {  MostExpensiveCard } from './components/MostExpensiveCard'
import { FavoriteCategoryCard } from './components/FavoriteCategoryCard'
import { ExpenseveInPeriodChart } from './components/ExpenseveInPeriodChart'


import { ResumeTransactions } from './components/ResumeTransactions'

export function Dashboard() {
    return (
        <DashboardContainer>
            <ResumeTransactions/>
            
            <Content>
                <CardsContainer>
                    <TotalIncomesCard/>
                    <TotalExpensesCard/>
                    <MostExpensiveCard/>
                    <FavoriteCategoryCard/>
                </CardsContainer>

                <ChartsContainer>
                    <ExpenseveInPeriodChart/>
                </ChartsContainer>
            </Content>
        </DashboardContainer>
    )
}