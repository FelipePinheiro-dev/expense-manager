import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { OutletDefault } from '../pages/_outlets/OutletDefault'
import { Dashboard } from '../pages/Dashboard'
import { Details } from '../pages/Details'
import { NewTransaction } from '../pages/NewTransaction'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutletDefault />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details" element={<Details />} />
          <Route path="/transactions" element={<NewTransaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
