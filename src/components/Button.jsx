"use client";
import { getMessageFromApi } from "@/services/getMessageFromApi";
import React from "react";

const Button = () => {
  const handleMessage = async () => {
    const { message } = await getMessageFromApi();
    alert(message)
  };


  return <button onClick={()=> handleMessage()} className="btn btn-ghost">Get Message FromApi</button>;
};

export default Button;
