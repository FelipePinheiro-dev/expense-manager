import { GridViewRounded, ReceiptLong } from '@mui/icons-material'
import { SidebarContainer } from './styles'
import { Text } from '@/components/Text'
import { Heading } from '../Heading'

import { NavLink } from 'react-router-dom'
import { LogoApp } from '@/components/LogoApp'
import { Avatar } from '@/components/Avatar'

export function Sidebar() {
  return (
    <SidebarContainer>
      <div className="content">
        <LogoApp />
        <Heading size="sm" className="menu">
          Menu
        </Heading>
        <nav className="nav">
          <NavLink to="/">
            <GridViewRounded />
            <Text variant="secondary">Overview</Text>
          </NavLink>
          <NavLink to="/details">
            <ReceiptLong />
            <Text variant="secondary">Details</Text>
          </NavLink>
        </nav>
      </div>

      <Avatar />
    </SidebarContainer>
  )
}
