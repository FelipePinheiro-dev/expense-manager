import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { OutletDefault } from '../outlets/OutletDefault'
import { Dashboard } from '../pages/Dashboard'
import { Details } from '../pages/Details'
import { Analytics } from '../pages/Analytics'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <OutletDefault/>}>
                    <Route path='/' element={ <Dashboard/> }/>
                    <Route path='/details' element={ <Details/> }/> 
                    <Route path='/analytics' element={ <Analytics/> }/>              
                </Route>
            </Routes>
        </BrowserRouter>
    )
}