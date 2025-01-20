import { TypeData } from '@/mocks/data'
import { CellMenuUpdateContainer } from './styles'

import { Button, Menu, MenuItem } from '@mui/material'
import { CellContext, Table } from '@tanstack/react-table'
import { useState, MouseEvent } from 'react'

interface PropsCellMenuUpdate {
  cell: CellContext<TypeData, string>,
  table: Table<TypeData>,
  items: {
    value: string,
    name: string
  }[]
}

export function CellMenuUpdate({ cell, table,  items }: PropsCellMenuUpdate) {
  const itemSelected = cell.getValue()
  // @ts-expect-error: updateData is a custom function defined in TableMeta
  const { updateData } = table.options.meta

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleChangeItemSelected= (
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
    <CellMenuUpdateContainer>
      <Button
        id="basic-button"
        variant='select'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {itemSelected}
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
        {items && items.map((item, index) => (
          <MenuItem 
            key={`${item.value}-${index}`}
            onClick={() => handleChangeItemSelected(cell.row.index, cell.column.id, item.value)}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </CellMenuUpdateContainer>
  )
}