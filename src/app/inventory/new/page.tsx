"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@/app/components/Form";

const page = () => {
  const [submitting, setSubmitting] = useState(false);
  const [item, setItem] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const createItem = async (e) => {};

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
