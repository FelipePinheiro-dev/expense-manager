import { FiltersContainer } from './styles'
import { ModalDateRange} from '../ModalDateRange'
import { SelectValue } from '../SelectValue'
import { useLocation } from 'react-router-dom'
import { SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
export function Filters() { 
    const [ selectCategory, setSelectCategory ] = useState('')
    const [ selectValue, setSelectValue ] = useState('')
    const [selectDate, setSelectDate ] = useState('')

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

    function handleChangeSelectCategory(event: SelectChangeEvent<string>) {
        setSelectCategory(event.target.value)
    }

    function handleChangeSelectValue(event: SelectChangeEvent<string>) {
        setSelectValue(event.target.value)
    }

    function handleChangeSelectDate(event: SelectChangeEvent<string>) {
        setSelectDate(event.target.value)
    }

    return (
        <FiltersContainer>
            <span>
                <SelectValue 
                    key={3} 
                    label='Dates' 
                    items={lastDates}
                    disable={disable}
                    value={selectDate}
                    onChange={handleChangeSelectDate}
                />
            </span>

            <span>
                <SelectValue 
                    key={1} label='Values' 
                    items={prices} 
                    disable={disable}
                    value={selectValue}
                    onChange={handleChangeSelectValue}
                />
            </span>
            
            <span>
                <SelectValue 
                    key={2} 
                    label='Category' 
                    items={category}
                    disable={disable}
                    value={selectCategory}
                    onChange={handleChangeSelectCategory}
                />
            </span>
           
            <span>
                <ModalDateRange disable={disable}/>
            </span>
            
        </FiltersContainer>
    )
}