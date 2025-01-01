import React, { useState } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import AddRowForm from './AddRowForm'

const Home1 = () => {
  // State for table data
  const [rows, setRows] = useState([
    {
      id: 1,
      firstName: 'Salohiddin',
      lastName: 'Sulaymanov',
      phone: '+998903029683',
      active: true,
      count: 5
    }
  ])

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    count: 0
  })

  // Handle input changes
  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle adding a new row
  const handleAddRow = () => {
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      alert('Please fill in all fields!')
      return
    }

    const newRow = {
      id: rows.length + 1,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      active: true,
      count: Number(formData.count) || 0
    }
    setRows([...rows, newRow])
    setFormData({ firstName: '', lastName: '', phone: '', count: 0 }) // Clear input fields
  }

  // Handle deleting a row
  const handleDeleteRow = id => {
    setRows(rows.filter(row => row.id !== id))
  }

  // Handle toggling active checkbox
  const toggleActive = id => {
    setRows(
      rows.map(row => (row.id === id ? { ...row, active: !row.active } : row))
    )
  }

  // Handle count increment and decrement
  const handleIncrement = id => {
    setRows(
      rows.map(row => (row.id === id ? { ...row, count: row.count + 1 } : row))
    )
  }

  const handleDecrement = id => {
    setRows(
      rows.map(row =>
        row.id === id && row.count > 0 ? { ...row, count: row.count - 1 } : row
      )
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Manage Table</h3>
      {/* Form for adding new row */}
      <AddRowForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleAddRow={handleAddRow}
      />

      {/* Table */}
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <TableHeader />
        <tbody>
          {rows.map(row => (
            <TableRow
              key={row.id}
              row={row}
              toggleActive={toggleActive}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDeleteRow={handleDeleteRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home1
