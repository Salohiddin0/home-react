import React from "react";

const TableRow = ({ row, toggleActive, handleIncrement, handleDecrement, handleDeleteRow }) => {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.phone}</td>
      <td>
        <input
          type="checkbox"
          checked={row.active}
          onChange={() => toggleActive(row.id)}
        />
      </td>
      <td>
        <button className="count-btn" onClick={() => handleDecrement(row.id)}>-</button>
        {row.count}
        <button className="count-btn" onClick={() => handleIncrement(row.id)}>+</button>
      </td>
      <td>
        <button className="delete-btn" onClick={() => handleDeleteRow(row.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
