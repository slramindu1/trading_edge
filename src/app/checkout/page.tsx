"use client";

import { useState } from "react";
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
  const [country, setCountry] = useState("United States");
  const [paymentMethod, setPaymentMethod] = useState(""); // "", "card", or "slip"

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
        {/* Product Information */}
        <div className="space-y-6 flex flex-col">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/assets/mokup.avif"
              alt="Photon Pro Lifetime Membership"
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

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">What you'll get:</h3>
              <ul className="list-disc pl-5 space-y-1 text-foreground">
                <li>The Zero To Funded Course</li>
                <li>The Photon Service</li>
                <li>The Trading Floor (Discord)</li>
                <li>130+ Video Lessons</li>
                <li>50+ Hours of Step By Step Training</li>
                <li>Chart Exercises + Walkthroughs</li>
                <li>24/7 Support</li>
                <li>Minimum 3:1 R:R Trades</li>
                <li>Daily Chart Analysis + Markups</li>
                <li>Trade Recap Videos</li>
                <li>Daily Session Recap Videos</li>
                <li>Live Q&A Meetups</li>
                <li>Plug & Play Spreadsheets & Tools</li>
              </ul>
            </div>
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

                <div className="flex justify-between items-center mt-2">
                  <span className="text-foreground">Discount:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="bg-black text-white border border-gray-300 rounded-md px-2 py-1 text-sm w-32"
                    />
                    <Button
                      type="button"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Apply
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between font-semibold mt-4 pt-4 border-t border-border">
                  <span className="text-foreground">Due Now:</span>
                  <span className="text-foreground">$112 GBP</span>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              {/* Basic Info */}
              <Input id="email" type="email" placeholder="Email Address" />
              <Input id="name" placeholder="Full Name" />
              <Input id="address1" placeholder="Address Line 1" />
              <Input id="city" placeholder="City" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
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
                </div>
                <Input id="zip" placeholder="Zip/Postal Code" />
              </div>

              {/* Payment Method */}
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="font-semibold text-foreground">Payment Method</div>
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

              {/* Conditional Render for Upload Slip */}
              {paymentMethod === "slip" && (
                <div className="space-y-4">
                  <div>
                    <Label>Upload Bank Payment Slip</Label>
                    <Input type="file" />
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-semibold mb-2">Bank Details:</p>
                    <p>Account Name: Trading Edge Academy</p>
                    <p>Bank: Commercial Bank</p>
                    <p>Acc No: 123456789</p>
                    <p>Branch: Colombo 03</p>
                  </div>
                </div>
              )}

              {/* Agreement */}
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

              {/* Submit Buttons */}
              {paymentMethod === "card" && (
                 <PayHereButton />
              )}

              {paymentMethod === "slip" && (
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Confirm Bank Payment
                </Button>
              )}
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
