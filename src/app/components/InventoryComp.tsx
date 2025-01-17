'use client'
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const InventoryComp = ({item, handleEdit, handleDelete}) => {
  return (
    <tr key={item.id}>
      <td>{item.itemName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.price * item.quantity}</td>
      <td><button>Delete</button></td>
      <td>{item.creator.username}</td>
    </tr>
    
  );
};

export default InventoryComp;


