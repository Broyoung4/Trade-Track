import React from "react";

const InventoryComp = ({item}) => {
  return (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.price * item.quantity}</td>
    </tr>
  );
};

export default InventoryComp;
