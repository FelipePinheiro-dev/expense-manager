import { FiltersContainer } from './styles'
import { BasicModal } from '../BasicModal'
import { SelectValue } from '../SelectValue'

export function Filters() {
    const category = [
        {value: 'studies', name: 'Studies'},
        {value: 'leisure', name: 'Leisure'}
    ]

    const prices = [
        {value: '100', name: '100'},
        {value: '200', name: '200'}
    ]
    return (
        <FiltersContainer>
            <SelectValue label='Values' items={prices}/>
            <SelectValue label='Category' items={category}/>
            <BasicModal/>
        </FiltersContainer>
    )
}