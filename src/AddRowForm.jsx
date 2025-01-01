import React from 'react'
import './Home.css'

const AddRowForm = ({ formData, handleInputChange, handleAddRow }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type='text'
        name='firstName'
        placeholder='First Name'
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='lastName'
        placeholder='Last Name'
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='Phone'
        value={formData.phone}
        onChange={handleInputChange}
      />
      <input
        type='number'
        name='count'
        placeholder='Count'
        value={formData.count}
        onChange={handleInputChange}
      />
      <button className='add-btn' onClick={handleAddRow}>Add</button>
    </div>
  )
}

export default AddRowForm
