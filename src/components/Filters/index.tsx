import { FiltersContainer } from './styles'
import { ModalDateRange} from '../ModalDateRange'
import { SelectValue } from '../SelectValue'
import { useLocation } from 'react-router-dom'
export function Filters() { 
    // logic to disable filters
    const location = useLocation()
    const disable = location.pathname === '/transactions' 
    
    const category = [
        {value: 'studies', name: 'Studies'},
        {value: 'leisure', name: 'Leisure'}
    ]

    const prices = [
        {value: '100', name: '100'},
        {value: '200', name: '200'}
    ]

    const lastDates = [
        {value: '7days', name: 'Last 7 days'},
        {value: '30days', name: 'Last 30 days'},
        {value: 'lastyear', name: 'Last year'}
    ]
    return (
        <FiltersContainer>
            <span>
                <SelectValue 
                    key={3} 
                    label='Dates' 
                    items={lastDates}
                    disable={disable}
                />
            </span>

            <span>
                <SelectValue 
                    key={1} label='Values' 
                    items={prices} 
                    disable={disable}
                />
            </span>
            
            <span>
                <SelectValue 
                    key={2} 
                    label='Category' 
                    items={category}
                    disable={disable}
                />
            </span>
           
            <span>
                <ModalDateRange disable={disable}/>
            </span>
            
        </FiltersContainer>
    )
}