import { FilterAlt } from '@mui/icons-material'

import { useState, MouseEvent } from 'react'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/material'

export function FilterCategoryTransaction() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        variant='select'
        id="button-filter-category"
        aria-controls={open ? 'category-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '.375rem'}}>
            <FilterAlt/>
            <Typography>
                Category
            </Typography>
        </Box>
      </Button>
      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'button-filter-category',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
