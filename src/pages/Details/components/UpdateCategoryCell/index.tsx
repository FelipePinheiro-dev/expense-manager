import { TypeData } from '@/mocks/data'
import { UpdateCategoryCellContainer } from './styles'
import { CATEGORIES } from '@/constants/categories'

import {Button, Menu, MenuItem } from '@mui/material'
import { CellContext, Table } from '@tanstack/react-table'
import { useState, MouseEvent } from 'react'

interface PropsUpdateCategoryCell {
  cell: CellContext<TypeData, string>
  table: Table<TypeData>
}

export function UpdateCategoryCell({ cell, table }: PropsUpdateCategoryCell) {
  const category = cell.getValue()
  // @ts-expect-error: updateData is a custom function defined in TableMeta
  const { updateData } = table.options.meta

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleChangeCategory = (
    rowIndex: number, 
    columnId: string, 
    value: string
  ) => {
    updateData(rowIndex, columnId, value)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <UpdateCategoryCellContainer>
      <Button
        id="basic-button"
        variant='select'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {category}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {CATEGORIES.map((category, index) => (
          <MenuItem 
            key={`${category.value}-${index}`}
            onClick={() => handleChangeCategory(cell.row.index, cell.column.id, category.value)}
          >
            {category.value}
          </MenuItem>
        ))}
      </Menu>
    </UpdateCategoryCellContainer>
  )
}