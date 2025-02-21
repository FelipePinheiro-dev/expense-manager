import {
  DashboardContainer,
  Content,
  ChartsContainer,
  CardsContainer,
} from './styles'

import { TotalIncomesCard } from './components/TotalIncomesCard'
import { TotalExpensesCard } from './components/TotalExpensesCard'
import { MostExpensiveCard } from './components/MostExpensiveCard'
import { FavoriteCategoryCard } from './components/FavoriteCategoryCard'
import { ExpensesInPeriodChart } from './components/ExpensesInPeriodChart'
import { HigherExpensesChart } from './components/HigherExpensesChart'
import { NumberTransactionsEachCategoryChart } from './components/NumberTransactionsEachCategoryChart'

import { ResumeTransactions } from './components/ResumeTransactions'

export function Dashboard() {
  return (
    <DashboardContainer>
      <ResumeTransactions />

      <Content>
        <CardsContainer>
          <TotalIncomesCard />
          <TotalExpensesCard />
          <MostExpensiveCard />
          <FavoriteCategoryCard />
        </CardsContainer>

        <ChartsContainer>
          <ExpensesInPeriodChart />
          <HigherExpensesChart />
        </ChartsContainer>

        <NumberTransactionsEachCategoryChart />
      </Content>
    </DashboardContainer>
  )
}
