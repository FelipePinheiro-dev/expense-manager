import { GridViewRounded, ReceiptLong, AccountBalance } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { SidebarContainer } from './styles'
import { LogoApp } from '../LogoApp'
import { Avatar } from '../Avatar'

export function Sidebar() {
    return (
        <SidebarContainer>   
            <LogoApp/>
            <span className='subtitle'>Menu</span>

            <nav className='nav'>
                <NavLink to='/'>
                    <span className='green-border-active'></span>
                    <div className='text'>
                        <GridViewRounded/>
                        <span>Overview</span>
                    </div>
                </NavLink>

                <NavLink to='/details'>
                    <span className='green-border-active'></span>
                    <div className='text'>
                        <ReceiptLong/>
                        <span>Details</span>
                    </div>
                </NavLink>

               {/*<NavLink to='/analytics'>
                    <span className='green-border-active'></span>
                    <div className='text'>
                        <BarChart/>
                        <span>Analytics</span>
                    </div>
                </NavLink>*/}

                <NavLink to='/transactions'>
                    <span className='green-border-active'></span>
                    <div className='text'>
                        <AccountBalance/>
                        <span>New Transaction</span>
                    </div>
                </NavLink>
            </nav>

            <Avatar/>
        </SidebarContainer >
    )
}