import React from 'react'
import TableRow from './TableRow'

const TableBody = ({ rows, onIncrement, onDecrement, onToggleActive }) => {
  return (
    <tbody>
      {rows.map(row => (
        <TableRow
          key={row.id}
          row={row}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onToggleActive={onToggleActive}
        />
      ))}
    </tbody>
  )
}

export default TableBody
