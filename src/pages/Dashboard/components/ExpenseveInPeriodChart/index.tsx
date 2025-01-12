import { CardContainer, CustomTooltipContainer } from './styles'
import { CardContent, CardHeader, useTheme } from '@mui/material'

import { 
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Tooltip,
} from 'recharts'

//import { useMemo, useState } from 'react'
//import dayjs from 'dayjs'

interface DataPoint {
    date: string
    total: number
    category?: string
}
const data: DataPoint[] = [
    { date: '01/01/25', total: 4000, category: 'Food' },
    { date: '02/01/25', total: 3000, category: 'Transport' },
    { date: '03/01/25', total: 2000, category: 'Entertainment' },
    { date: '04/01/25', total: 2780, category: 'Health' },
    { date: '05/01/25', total: 651, category: 'Utilities' },
    { date: '06/01/25', total: 758, category: 'Shopping' },
    { date: '07/01/25', total: 632, category: 'Miscellaneous' },
  ]
  
interface Payload {
    payload: {
        category: string
    }
    value: number
}

interface CustomTooltipProps {
    active?: boolean
    payload?: Payload[]
    label?: string
}
  
function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
    if (active && payload && payload.length) {
        return (
            <CustomTooltipContainer>
                <p className="label">{`Date: ${label}`}</p>
                <p className="intro">{`Total: ${payload[0].value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>
                <p className="desc">{`Category: ${payload[0].payload.category}`}</p>
            </CustomTooltipContainer>
        )
    }

    return null
}

export function ExpenseveInPeriodChart() {
    const theme = useTheme()
    /*
    const [ dateRange, setDateRange ] = useState<DateRange | undefined>({
        from: dayjs().subtract(7, 'days').toDate(),
        to: new Date()
    })

    const { data: revenueInPeriod } = useQuery({
        queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
        queryFn: () => getDailyRevenueInPeriod({
            from: dateRange?.from,
            to: dateRange?.to
        })
    })

    const chartData = useMemo(() => {
        return revenueInPeriod?.map(chartItem => {
            return {
               date:  chartItem.date,
               receipt: chartItem.receipt / 100
            }
        })
    }, [revenueInPeriod])
    */
    return (
        <CardContainer>
            <CardHeader 
                title='Expenses in the period'
                subheader='Last 7 days'
            />
            <CardContent>
                { data && 
                    <ResponsiveContainer width='100%' height={240}>
                        <LineChart data={data} style={{ fontSize: 12 }}>
                            <XAxis 
                                dataKey='date'
                                tickLine={false}
                                dy={16}
                            />

                            <YAxis 
                                stroke='#888' 
                                axisLine={false} 
                                tickLine={false} 
                                width={80}
                                tickFormatter={(value: number) => value.toLocaleString('pt-BR', { 
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            />
                            
                            <CartesianGrid vertical={false} className='stroke-muted'/>
                            <Tooltip content={ <CustomTooltip /> }/>
                            <Line 
                                type='linear' 
                                strokeWidth={2} 
                                dataKey="total"
                                stroke={theme.palette.primary.main}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                }
            </CardContent>
        </CardContainer>
    )
}