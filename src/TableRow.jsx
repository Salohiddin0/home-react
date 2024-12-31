import React from 'react'

const TableRow = ({ row, onIncrement, onDecrement, onToggleActive }) => {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.phone}</td>
      <td>
        <input
          type='checkbox'
          checked={row.active}
          onChange={() => onToggleActive(row.id)}
        />
      </td>
      <td>
        <button onClick={() => onDecrement(row.id)}>-</button>
        {` ${row.count} `}
        <button onClick={() => onIncrement(row.id)}>+</button>
      </td>
      <td>
        <button>👤</button>
      </td>
    </tr>
  )
}

export default TableRow
