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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [pin, setPin] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [country, setCountry] = useState("Sri Lanka");
  const isCardPaymentDisabled = true;

  // Form field states
  const [fullName, setFullName] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [totalAmount, setTotalAmount] = useState(117);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendCode = async () => {
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch(
        "https://lms.tradingedgefx.com/Landing_res/send-code.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (data.success) {
        toast.success("Verification code sent to your email.");
        setIsCodeSent(true);
      } else {
        toast.error(data.message || "Failed to send code.");
      }
    } catch (err) {
      toast.error("Error sending code.");
    }
  };

  const handleVerify = async () => {
    try {
      const res = await fetch(
        "https://lms.tradingedgefx.com/Landing_res/verify-code.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, pin }),
        }
      );

      const data = await res.json();
      if (data.success) {
        setIsEmailVerified(true);
        toast.success("Email address verified successfully.");
      } else {
        toast.error("Invalid or expired code.");
      }
    } catch (err) {
      toast.error("Verification failed.");
    }
  };

  const handleApplyCoupon = async () => {
    if (!couponCode) return toast.error("Please enter a code");

    try {
      const res = await fetch(
        "https://lms.tradingedgefx.com/Landing_res/check-coupon.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: couponCode }),
        }
      );

      const data = await res.json();
      if (data.success) {
        setDiscountPercent(data.discount);
        const discounted = 117 - (117 * data.discount) / 100;
        setTotalAmount(Number(discounted.toFixed(2)));
        setIsCouponApplied(true);
        toast.success(`Coupon Applied! You saved ${data.discount}%`);
      } else {
        toast.error("Invalid or expired coupon code.");
      }
    } catch (error) {
      toast.error("Server error. Try again later.");
    }
  };

  const handlePayWithCard = () => {
    toast.error("Card payments are not available. Please select Upload Slip.");
  };

  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSlipUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleConfirmBankPayment = async () => {
    if (!selectedFile) {
      toast.error("Please select a bank slip to upload");
      return;
    }

    if (!fullName || !email) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("slip", selectedFile);
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("paymentDate", new Date().toISOString());

      const response = await fetch(
        "https://lms.tradingedgefx.com/Landing_res/upload-slip.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setUploadSuccess(true);
        toast.success("Bank slip uploaded successfully! ");
        toast.success("Your Account Will Be Activated Soon. Please Wait");
      } else {
        toast.error(data.message || "Failed to upload bank slip");
      }
    } catch (error) {
      toast.error("Error uploading bank slip");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="min-h-screen p-4 mt-8"> {/* Added mt-8 for top margin */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20">
          {/* Product Info - Mobile first */}
          <div className="space-y-3 flex flex-col order-2 md:order-1">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/assets/checkout1.png"
                alt="Photon Pro"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
                priority
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                Trading Edge 1 Year Pro Membership
              </h1>
              <p className="text-foreground">
                One-time payment = 1 Year Access
              </p>

              <div className="flex items-center gap-2">
                <p className="text-foreground">
                  All future course updates included
                </p>
                <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-foreground">
                <li>Trading Edge Course</li>
                <li>Trading Edge Flix</li>
                <li>Trading Edge Community</li>
                <li>Daily Market Outlook</li>
                <li>180+ Training Videos</li>
                <li>Mindset Room</li>
                <li>Trade Setups</li>
                <li>Weekly Strategy Sessions</li>
                <li>In-Depth Trade Reviews</li>
                <li>1-on-1 Mentor Messaging</li>
                <li>Live Q&A Calls</li>
                <li>Complete Profesional Toolset</li>
              </ul>
            </div>
          </div>

          {/* Checkout Form - Mobile first */}
          <Card className="p-4 bg-card text-card-foreground order-2 md:order-2 md:p-6 border-blue-400">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  <span
                    className={`inline-block transition-all duration-500 ease-in-out ${
                      isCouponApplied ? "line-through text-white scale-90" : ""
                    }`}
                  >
                    $117 USD
                  </span>
                </h2>

                <div className="border-t border-border mt-4 pt-4">
                  {isCouponApplied && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-foreground">Subtotal:</span>
                        <span className="text-foreground">$117</span>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-foreground">Discount:</span>

                        {/* Wrap right-side elements and align right */}
                        <div className="ml-auto flex items-center gap-2">
                          <span className="text-blue-500 font-semibold">
                            -{discountPercent}% ($
                            {((117 * discountPercent) / 100).toFixed(2)})
                          </span>
                          <button
                            onClick={() => {
                              setDiscountPercent(0);
                              setCouponCode("");
                              setTotalAmount(117);
                              setIsCouponApplied(false);
                            }}
                            className="text-blue-500 hover:text-blue-600 text-xl font-bold px-2"
                            title="Remove Discount"
                          >
                            &times;
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between font-semibold mt-4 pt-4 border-t border-border">
                        <span className="text-foreground">Due Now:</span>
                        <span className="text-foreground">
                          ${totalAmount} USD
                        </span>
                      </div>
                    </>
                  )}

                  {!isCouponApplied && (
                    <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-2 mt-2">
                      <span className="text-foreground">Discount:</span>
                      {/* Wrap textbox + button in a right-aligned container */}
                      <div className="ml-auto flex items-center gap-2 w-full md:justify-end ">
                        <Input
                          type="text"
                          placeholder="Enter code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="bg-black text-white border  rounded-md px-2 py-1 text-sm w-full h-9 md:w-72"
                        />
                        <Button
                          type="button"
                          onClick={handleApplyCoupon}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <form className="space-y-4 text-white">
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
                      setIsCodeSent(false);
                      setPin("");
                    }}
                    className={isEmailVerified ? "pr-10 border-green-500" : ""}
                  />
                  {isEmailVerified && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
                  )}
                </div>

                {isEmailEntered && !isEmailVerified && (
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <Input
                      type="text"
                      placeholder="Pin Number"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                    />
                    <Button
                      onClick={isCodeSent ? handleVerify : handleSendCode}
                      type="button"
                      className="w-full sm:w-auto"
                    >
                      {isCodeSent ? "Verify" : "Get"}
                    </Button>
                  </div>
                )}

                {/* Fields disabled until verified */}
                <fieldset
                  disabled={!isEmailVerified}
                  className={!isEmailVerified ? "opacity-50" : ""}
                >
                  <Input
                    id="name"
                    placeholder="Full Name"
                    className="mb-4"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <Input
                    id="address1"
                    placeholder="Address Line 1"
                    className="mb-4"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                  <Input
                    id="city"
                    placeholder="City"
                    className="mb-4"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Select onValueChange={setState}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AL">Colombo</SelectItem>
                        <SelectItem value="AK">Gampaha</SelectItem>
                        <SelectItem value="CA">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="zip"
                      placeholder="Zip/Postal Code"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
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
                        <p>Account Name: U.G.Dhanuka Prasad Chandrarathna</p>
                        <p>Bank: Commercial Bank</p>
                        <p>Acc No: 8023105603</p>
                        <p>Branch: Dambulla</p>
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

                  <div className="mt-4">
                    {paymentMethod === "card" && (
                      <Button
                        className="w-full opacity-50 cursor-not-allowed"
                        type="button"
                        onClick={handlePayWithCard}
                      >
                        Pay With Card
                      </Button>
                    )}

                    {paymentMethod === "slip" && (
                      <Button
                        className="w-full"
                        type="button"
                        onClick={handleConfirmBankPayment}
                        disabled={isUploading || uploadSuccess}
                      >
                        {isUploading
                          ? "Uploading..."
                          : uploadSuccess
                          ? "Uploaded Successfully"
                          : "Confirm Bank Payment"}
                      </Button>
                    )}
                  </div>
                </fieldset>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}