import { CellContext, Table } from '@tanstack/react-table'
import { TypeData } from '@/mocks/data'
import { CellInputUpdateContainer } from './styles'
import { useEffect, useState } from 'react'

interface Props {
  cell: CellContext<TypeData, string | number>
  table: Table<TypeData>
  type: 'text' | 'number'
}

export function CellInputUpdate({ cell, table, type }: Props) {
  const initialValue = cell.getValue()
  const [value, setValue] = useState(initialValue)

  function onBlur() {
    if (table.options.meta) {
      // @ts-expect-error: updateData is a custom function defined in TableMeta
      table.options.meta.updateData(cell.row.index, cell.column.id, value)
    }
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <CellInputUpdateContainer
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
