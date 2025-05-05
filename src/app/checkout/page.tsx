"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PayHereButton } from "@/components/global/PaymentForm";

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [pin, setPin] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const [country, setCountry] = useState("United States");

  const handleSendCode = async () => {
    try {
      const res = await fetch("https://tradingedgefx.com/send-code.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Verification code sent to your email.");
      } else {
        alert("Failed to send code.");
      }
    } catch (err) {
      alert("Error sending code.");
    }
  };

  const handleVerify = async () => {
    try {
      const res = await fetch("https://tradingedgefx.com/verify-code.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pin }),
      });
  
      const data = await res.json();
      if (data.success) {
        setIsEmailVerified(true);
      } else {
        alert("Invalid or expired code.");
      }
    } catch (err) {
      alert("Verification failed.");
    }
  };
  

  function handleSlipUpload(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
        {/* Product Info */}
        <div className="space-y-6 flex flex-col">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/assets/mokup.avif"
              alt="Photon Pro"
              width={800}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              Trading Edge 1 Year Pro Membership
            </h1>
            <p className="text-foreground">One-time payment = 1 Year Access</p>

            <div className="flex items-center gap-2">
              <p className="text-foreground">
                All future course updates included
              </p>
              <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-3 w-3 text-primary-foreground" />
              </div>
            </div>

            <ul className="list-disc pl-5 space-y-1 text-foreground">
              <li>The Zero To Funded Course</li>
              <li>The Photon Service</li>
              <li>130+ Video Lessons</li>
              <li>50+ Hours of Training</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>

        {/* Checkout Form */}
        <Card className="p-6 bg-card text-card-foreground">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">$112 GBP</h2>
              <div className="border-t border-border mt-4 pt-4">
                <div className="flex justify-between">
                  <span className="text-foreground">Subtotal:</span>
                  <span className="text-foreground">$112 GBP</span>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              {/* Email Verification Section */}
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailEntered(!!e.target.value);
                    setIsEmailVerified(false);
                    setPin("");
                  }}
                  className={isEmailVerified ? "pr-10 border-green-500" : ""}
                />
                {isEmailVerified && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
                )}
              </div>

              {isEmailEntered && !isEmailVerified && (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Pin Number"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
                  <Button onClick={handleSendCode} type="button">
                    Get
                  </Button>
                  <Button onClick={handleVerify} type="button">
                    Verify
                  </Button>
                </div>
              )}

              {/* Fields disabled until verified */}
              <fieldset
                disabled={!isEmailVerified}
                className={!isEmailVerified ? "opacity-50" : ""}
              >
                <Input id="name" placeholder="Full Name" className="mb-4" />
                <Input
                  id="address1"
                  placeholder="Address Line 1"
                  className="mb-4"
                />
                <Input id="city" placeholder="City" className="mb-4" />

                <div className="grid grid-cols-2 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="AK">Alaska</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input id="zip" placeholder="Zip/Postal Code" />
                </div>

                {/* Payment Method */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    Payment Method
                  </div>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="flex items-center space-x-2 border border-border rounded-md p-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Card</Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border rounded-md p-3 mt-2">
                      <RadioGroupItem value="slip" id="slip" />
                      <Label htmlFor="slip">Upload Slip</Label>
                    </div>
                  </RadioGroup>
                </div>

                {paymentMethod === "slip" && (
                  <div className="space-y-4">
                    <Label>Upload Bank Payment Slip</Label>
                    <Input type="file" onChange={handleSlipUpload} />
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-semibold mb-2">Bank Details:</p>
                      <p>Account Name: Trading Edge Academy</p>
                      <p>Bank: Commercial Bank</p>
                      <p>Acc No: 123456789</p>
                      <p>Branch: Colombo 03</p>
                    </div>
                  </div>
                )}

                <div className="space-y-2 pt-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="subscribe" />
                    <Label htmlFor="subscribe" className="text-sm">
                      Subscribe to our email list.
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions.
                    </Label>
                  </div>
                </div>
                <div className="mt-4">{paymentMethod === "card" && <PayHereButton />}</div>

                {paymentMethod === "slip" && (
                  <Button className="w-full">Confirm Bank Payment</Button>
                )}
              </fieldset>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
