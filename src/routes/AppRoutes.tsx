import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { OutletDefault } from '../outlets/OutletDefault'
import { Dashboard } from '../pages/Dashboard'
import { Details } from '../pages/Details'
// import { Analytics } from '../pages/Analytics'
import { NewTransaction } from '../pages/NewTransaction'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <OutletDefault/>}>
                    <Route path='/' element={ <Dashboard/> }/>
                    <Route path='/details' element={ <Details/> }/> 
                    {/*<Route path='/analytics' element={ <Analytics/> }/>*/}
                    <Route path='/transactions'  element={ <NewTransaction/>}/>          
                </Route>
            </Routes>
        </BrowserRouter>
    )
}