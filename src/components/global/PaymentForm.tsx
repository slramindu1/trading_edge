"use client";

import { Button } from "@/components/ui/button";

export function PayHereButton() {
  const handlePayHere = () => {
    // Buyer information
    const payment = {
      sandbox: true, // true for testing, false for production
      merchant_id: "1224246", // replace with your Merchant ID
      return_url: "http://localhost:3000/checkout/success",
      cancel_url: "http://localhost:3000/checkout/cancel",
      notify_url: "http://localhost:3000/api/payhere",

      order_id: "Item001",
      items: "Trading Course",
      amount: "1000.00",
      currency: "LKR",
      first_name: "Kasun",
      last_name: "Perera",
      email: "kasun@example.com",
      phone: "0771234567",
      address: "No.1, Galle Road",
      city: "Colombo",
      country: "Sri Lanka",
    };

    // PayHere SDK call
    // @ts-ignore
    payhere.startPayment(payment);
  };

  return (
    <Button
      onClick={handlePayHere}
      className="w-full bg-green-600 hover:bg-green-700 text-white"
    >
      Pay with PayHere
    </Button>
  );
}
