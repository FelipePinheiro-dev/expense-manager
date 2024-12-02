import { FiltersContainer } from './styles'
import { ModalDateRange} from '../ModalDateRange'
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
            <SelectValue key={1} label='Values' items={prices}/>
            <SelectValue key={2} label='Category' items={category}/>
            <ModalDateRange/>
        </FiltersContainer>
    )
}