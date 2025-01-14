import { CardContainer } from './styles'
import { CardContent, CardHeader, useTheme } from '@mui/material'
import { BarChart } from '@mui/icons-material'

import { 
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts'
import { useMemo } from 'react'
//import { useQuery } from '@tanstack/react-query'
//import { getPopularProducts } from '@/api/getPopularProducts'
const higherExpenses = [
    { category: 'Food', amount: 45 },
    { category: 'Leisure', amount: 21 },
    { category: 'Studies', amount: 56 },
]

export function HigherExpensevesChart() {
    const colors = useTheme().palette.customColors
    const COLORS = useMemo(() => [
        colors['green-400'],
        colors['orange-500'], 
        colors['green-200'],
    ], [colors])
    
    /*
    const { data: popularProducts } = useQuery({
        queryKey: ['metrics', 'popular-products'],
        queryFn: getPopularProducts
    })
    */

    return (
        <CardContainer>
            <CardHeader
                title='Higher Expenses'
                subheader={<BarChart />}
            />

            <CardContent>
                { higherExpenses &&
                    <ResponsiveContainer width='100%' height={240}>
                        <PieChart style={{ fontSize: 12 }}>
                            <Pie 
                                dataKey='amount'
                                nameKey='category'
                                data={higherExpenses}
                                cx='50%'
                                cy='50%'
                                outerRadius={86}
                                innerRadius={64}
                                strokeWidth={8}
                                labelLine={false}
                                label={({
                                    cx,
                                    cy,
                                    midAngle,
                                    innerRadius,
                                    outerRadius,
                                    value,
                                    index,
                                }) => {
                                    const RADIAN = Math.PI / 180
                                    const radius = 12 + innerRadius + (outerRadius - innerRadius)
                                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                                    const y = cy + radius * Math.sin(-midAngle * RADIAN)
                                
                                    return (
                                    <text
                                        x={x}
                                        y={y}
                                        textAnchor={x > cx ? 'start' : 'end'}
                                        dominantBaseline="central"
                                    >
                                        {higherExpenses[index].category.length > 12
                                        ? higherExpenses[index].category.substring(0, 12).concat('...')
                                        : higherExpenses[index].category}{' '}
                                        ({value})
                                    </text>
                                    )
                                }}
                            >
                                {higherExpenses.map((_, index) => {
                                    return (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={COLORS[index]}
                                        />
                                    )
                                })}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                }
            </CardContent>
        </CardContainer>
    )
}