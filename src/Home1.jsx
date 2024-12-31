import React, { useState } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import Css from './Home.css'

const Home1 = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      phone: '+998941211112',
      active: true,
      count: 16
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      phone: '+998941211113',
      active: true,
      count: 4
    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'theBird',
      phone: '+998941211111',
      active: true,
      count: 2
    },
    {
      id: 4,
      firstName: 'Larry',
      lastName: 'theBird',
      phone: '+998941211111',
      active: true,
      count: 2
    },
    {
      id: 5,
      firstName: 'Larry',
      lastName: 'theBird',
      phone: '+998941211111',
      active: true,
      count: 2
    }
  ])

  // Countni oshirish
  const incrementCount = id => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.id === id ? { ...row, count: row.count + 1 } : row
      )
    )
  }

  // Countni kamaytirish
  const decrementCount = id => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.id === id && row.count > 0 ? { ...row, count: row.count - 1 } : row
      )
    )
  }

  // Aktiv statusni o'zgartirish
  const toggleActive = id => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.id === id ? { ...row, active: !row.active } : row
      )
    )
  }

  return (
    <div>
      <button style={{ marginBottom: '10px' }}>Add</button>
      <table border='1' style={{ width: '100%', marginTop: '10px' }}>
        <TableHeader />
        <TableBody
          rows={rows}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onToggleActive={toggleActive}
        />
      </table>
    </div>
  )
}

export default Home1
