import { OutletDefaultContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Filters } from '../../components/Filters'

export function OutletDefault() {
    return (
        <OutletDefaultContainer>
            <Sidebar/>
            <div className='main'>
                <Filters/>
                <Outlet/>
            </div>
        </OutletDefaultContainer>
    )
}