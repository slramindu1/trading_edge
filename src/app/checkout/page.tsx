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

    // Form field states
    const [fullName, setFullName] = useState("");
    const [address1, setAddress1] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);
    const [totalAmount, setTotalAmount] = useState(117);

    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    const handleSendCode = async () => {
      if (!isValidEmail(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }
    
      try {
        const res = await fetch("https://tradingedgefx.com/send-code.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
    
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
        const res = await fetch("https://tradingedgefx.com/verify-code.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, pin }),
        });
    
        const data = await res.json();
        if (data.success) {
          setIsEmailVerified(true);
          toast.success("Email address verified successfully."); // ✅ මෙය එකතු කරන්න
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
        const res = await fetch("https://tradingedgefx.com/check-coupon.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: couponCode }),
        });

        const data = await res.json();
        if (data.success) {
          setDiscountPercent(data.discount);
          const discounted = 117 - (117 * data.discount) / 100;
          setTotalAmount(Number(discounted.toFixed(2)));
          toast.success(`Coupon Applied! You saved ${data.discount}%`);
        } else {
          toast.error("Invalid or expired coupon code.");
        }
      } catch (error) {
        toast.error("Server error. Try again later.");
      }
    };

    const handlePayWithCard = () => {
      if (!email || !fullName || !address1 || !city) {
        toast.error("Please fill all required fields.");
        return;
      }

      const nameParts = fullName.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ") || "User";

      const payment = {
        sandbox: true,
        merchant_id: "1224246",
        return_url: "https://your-site.com/checkout-success",
        cancel_url: "https://your-site.com/checkout-cancel",
        notify_url: "https://your-site.com/notify",
        order_id: "ORDER_" + Date.now(),
        items: "Trading Edge Pro Membership",
        amount: "117.00",
        currency: "USD",
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: "0771234567",
        address: address1,
        city: city,
        country: country,
      };

      // @ts-ignore
      if (typeof payhere !== "undefined") {
        // @ts-ignore
        payhere.startPayment(payment);
      } else {
        alert("PayHere script not loaded.");
      }
    };

    function handleSlipUpload(event: ChangeEvent<HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    }

    return (
      <>
      <ToastContainer position="top-right" autoClose={4000} />
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
                  <h2 className="text-2xl font-bold text-foreground">$117 </h2>
                  <div className="border-t border-border mt-4 pt-4">
                    <div className="flex justify-between">
                      <span className="text-foreground">Subtotal:</span>
                      <span className="text-foreground">$117 </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-foreground">Discount:</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Enter code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="bg-black text-white border border-gray-300 rounded-md px-2 py-1 text-sm w-32"
                        />
                        <Button
                          type="button"
                          onClick={handleApplyCoupon}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between font-semibold mt-4 pt-4 border-t border-border">
                  <span className="text-foreground">Due Now:</span>
                  <span className="text-foreground">${totalAmount}</span>
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
                    <div className="flex items-center space-x-2">
                      <Input
                        type="text"
                        placeholder="Pin Number"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                      />
                      <Button
                        onClick={isCodeSent ? handleVerify : handleSendCode}
                        type="button"
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
                      className="mb-4 "
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

                    <div className="grid grid-cols-2 gap-4">
                      <Select onValueChange={setState}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AL">Alabama</SelectItem>
                          <SelectItem value="AK">Alaska</SelectItem>
                          <SelectItem value="CA">California</SelectItem>
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

                    <div className="mt-4">
                      {paymentMethod === "card" && (
                        <Button
                          className="w-full"
                          type="button"
                          onClick={handlePayWithCard}
                        >
                          Pay With Card
                        </Button>
                      )}
                      {paymentMethod === "slip" && (
                        <Button className="w-full" type="button">
                          Confirm Bank Payment
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
