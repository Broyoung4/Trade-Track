"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@/app/components/Form";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [item, setItem] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const createItem = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/inventory/new', {
        method: 'POST',
        body: JSON.stringify({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          userId: session?.user.id
        })
      })

      if(response.ok) {
        /* setItem({
          name: '',
          price: '',
          quantity: ''
        })
        setSubmitting(false) */
        router.push('/inventory')
      }
    } catch (error) {
      
    }
  };

  return (
    <Form
      item={item}
      setItem={setItem}
      submitting={submitting}
      handleSubmit={createItem}
    />
  );
};

export default page;
