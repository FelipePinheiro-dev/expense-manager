import { 
    DashboardContainer, 
    Content,
    ChartContainer,
    TotalContainerStyles,
} from './styles'

import { TotalIncomesCard } from './components/TotalIncomesCard'
import { TotalExpensesCard } from './components/TotalExpensesCard'


import { ResumeTransactions } from './components/ResumeTransactions'
import { BasicPie } from './components/BasicPie'
import { BasicBar } from './components/BasicBar'


export function Dashboard() {
    return (
        <DashboardContainer>
            <ResumeTransactions/>
            
            <Content>
                <TotalContainerStyles>
                    <TotalIncomesCard/>
                    <TotalExpensesCard/>
                </TotalContainerStyles>

                <ChartContainer>
                    <BasicPie/>
                    <BasicBar/>
                </ChartContainer>
            </Content>
        </DashboardContainer>
    )
}