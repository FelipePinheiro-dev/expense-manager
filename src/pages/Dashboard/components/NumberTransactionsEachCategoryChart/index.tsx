import { CardContainer } from './styles'
import { CardContent, CardHeader, useTheme } from '@mui/material'

import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'


const data = [
    { amount: 25, category: 'Studies' },
    { amount: 32,  category: 'Leisure' },
    { amount: 78,  category: 'Business' },
    { amount: 89,  category: 'Clothings' },
    { amount: 10,  category: 'Food' },
    { amount: 87, category: 'Sports' },
    { amount: 41, category: 'Utilities' },
]

export function NumberTransactionsEachCategoryChart() {
    const colors = useTheme().palette.customColors
     
    return (
        <CardContainer>
            <CardHeader/>
            <CardContent>
                <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={data}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar 
                            dataKey="amount" 
                            fill={colors['green-400']} 
                            activeBar={<Rectangle fill={colors['green-200']} stroke={colors['green-800']}/>} 
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </CardContainer>
    )
}
    
    