import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Rocket } from '@mui/icons-material'
import { colors } from '@mui/material'
import { styleList, styleListItem } from './styles'

export function ResumeTransactions() {
  return (
    <List sx={styleList}>
      <ListItem sx={styleListItem}>
        <Rocket sx={{color: colors.blue[700]}}/>
        <ListItemText primary="Rocketseat" secondary="Nov 29, 2024"/>
        <ListItemText primary="Studies" secondary="R$ 159,90"/>
      </ListItem>
      <ListItem sx={styleListItem}>
        <Rocket sx={{color: colors.blue[700]}}/>
        <ListItemText primary="Rocketseat" secondary="Nov 29, 2024"/>
        <ListItemText primary="Studies" secondary="R$ 159,90"/>
      </ListItem>
      <ListItem sx={styleListItem}>
        <Rocket sx={{color: colors.blue[700]}}/>
        <ListItemText primary="Rocketseat" secondary="Nov 29, 2024"/>
        <ListItemText primary="Studies" secondary="R$ 159,90"/>
      </ListItem>
    </List>
  )
}