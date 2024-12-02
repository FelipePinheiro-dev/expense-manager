import { 
    DashboardContainer, 
    TotalCard, MiddleContentStyles, 
    TotalContainerStyles, 
    ChartContainer,
    PieContainer 
} from './styles'

import { ResumeTransactions } from '../../components/ResumeTransactions'
import { BasicPie } from '../../components/BasicPie'
import { BasicBar } from '../../components/BasicBar'
import { BasicHorizontalBar } from '../../components/BasicHorizontalBar'
import { MonetizationOn } from '@mui/icons-material'

export function Dashboard() {
    return (
        <DashboardContainer>
            <ResumeTransactions/>
            
            <MiddleContentStyles>
                <TotalContainerStyles>
                    <TotalCard>
                    <div>
                        Total Entries
                    </div>
                    
                    <div className='default'>
                        <span><MonetizationOn/></span>
                        <span className='currency'>15.300,00</span>
                    </div>
                    </TotalCard>
                
                    <TotalCard>
                    <div>
                        Total Expenses
                    </div>
                            
                    <div className='default'>
                        <span><MonetizationOn/></span>
                        <span className='currency'>1.400,00</span>
                    </div>
                    </TotalCard>
                </TotalContainerStyles>
                <ChartContainer>
                    <BasicBar/>
                    
                    <BasicHorizontalBar/>
                </ChartContainer>
            </MiddleContentStyles>
            
            <PieContainer>
                <BasicPie/>
            </PieContainer>
        </DashboardContainer>
    )
}