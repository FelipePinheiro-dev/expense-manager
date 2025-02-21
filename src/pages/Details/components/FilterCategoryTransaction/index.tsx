import { FilterAlt, FilterAltOff } from '@mui/icons-material'
import { CATEGORIES } from '@/constants/categories'

import { ColumnFiltersType } from '../../'

import { useState, MouseEvent } from 'react'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import { Box, useTheme } from '@mui/material'
interface Props {
  columnFilters: ColumnFiltersType
  handleFilterChange: (filter: { id: string; value: string | string[] }) => void
}

export function FilterCategoryTransaction({
  columnFilters = [],
  handleFilterChange,
}: Props) {
  const { customColors } = useTheme().palette

  const categoryFilter =
    columnFilters.find((transaction) => transaction.id === 'category')?.value ||
    []

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChoiceCategory = (category: string) => {
    if (typeof categoryFilter === 'string') return

    const newFilterValue = categoryFilter.includes(category)
      ? categoryFilter.filter((cat: string) => cat !== category)
      : [...categoryFilter, category]

    handleFilterChange({ id: 'category', value: newFilterValue })
  }

  return (
    <div>
      <Button
        variant="select"
        id="button-filter-category"
        aria-controls={open ? 'category-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '.375rem' }}>
          {categoryFilter.length > 0 ? <FilterAltOff /> : <FilterAlt />}
          <Typography>Category</Typography>
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
        <Typography
          sx={{
            padding: 1,
            fontWeight: 'bold',
            color: customColors['green-400'],
          }}
        >
          Filter by:
        </Typography>

        {CATEGORIES &&
          CATEGORIES.map((category, index) => (
            <MenuItem
              key={`${category.value}-${index}`}
              selected={categoryFilter.includes(category.value)}
              onClick={() => handleChoiceCategory(category.value)}
            >
              {category.name}
            </MenuItem>
          ))}
      </Menu>
    </div>
  )
}
