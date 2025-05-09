import Link from "next/link"
import { ChevronRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Company Name</span>
            </Link>
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">Last updated: May 9, 2025</p>
            <p className="text-lg">
              We value your privacy and are committed to protecting your personal data. This privacy policy explains how
              we collect, use, and safeguard your information.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <div className="grid gap-2">
                {[
                  { id: "information-collection", title: "Information We Collect" },
                  { id: "information-use", title: "How We Use Your Information" },
                  { id: "information-sharing", title: "Information Sharing and Disclosure" },
                  { id: "data-security", title: "Data Security" },
                  { id: "your-rights", title: "Your Rights" },
                  { id: "cookies", title: "Cookies and Tracking Technologies" },
                  { id: "children", title: "Children's Privacy" },
                  { id: "changes", title: "Changes to This Privacy Policy" },
                  { id: "contact", title: "Contact Us" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center p-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Information We Collect */}
            <div id="information-collection" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Information We Collect</h2>
              <p className="mb-4">
                We collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Personal identifiers such as name, email address, and phone number</li>
                <li>Account credentials such as usernames and passwords</li>
                <li>Payment and billing information</li>
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
              </ul>
              <p>
                We collect this information when you register on our site, place an order, subscribe to our newsletter,
                respond to a survey, fill out a form, or interact with our website in any other way.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div id="information-use" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect about you for various purposes, including:</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>To provide and maintain our services</AccordionTrigger>
                  <AccordionContent>
                    We use your information to deliver the products and services you request, process transactions, and
                    send you related information including confirmations and invoices.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>To improve our website</AccordionTrigger>
                  <AccordionContent>
                    We use feedback and usage data to understand how our users use our services, to develop new
                    features, and to improve our existing offerings.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>To communicate with you</AccordionTrigger>
                  <AccordionContent>
                    We may use your contact information to send you promotional materials, newsletters, or other
                    communications about our services that may be of interest to you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>To protect our services</AccordionTrigger>
                  <AccordionContent>
                    We may use information to detect, prevent, and address technical issues, security breaches, and
                    fraudulent activities.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Information Sharing and Disclosure */}
            <div id="information-sharing" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
                Information Sharing and Disclosure
              </h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
                except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To trusted third parties who assist us in operating our website, conducting our business, or servicing
                  you
                </li>
                <li>To comply with legal requirements, such as responding to court orders and legal processes</li>
                <li>To protect our rights, property, or safety, or the rights, property, or safety of others</li>
                <li>In connection with a business transfer, such as a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            {/* Data Security */}
            <div id="data-security" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures include:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Card className="p-4 bg-secondary/50">
                  <h3 className="font-semibold mb-2">Encryption</h3>
                  <p className="text-sm">We use industry-standard encryption to protect sensitive data transmission</p>
                </Card>
                <Card className="p-4 bg-secondary/50">
                  <h3 className="font-semibold mb-2">Secure Networks</h3>
                  <p className="text-sm">Our systems are protected by firewalls and network access controls</p>
                </Card>
                <Card className="p-4 bg-secondary/50">
                  <h3 className="font-semibold mb-2">Regular Audits</h3>
                  <p className="text-sm">We conduct regular security assessments and vulnerability testing</p>
                </Card>
                <Card className="p-4 bg-secondary/50">
                  <h3 className="font-semibold mb-2">Access Controls</h3>
                  <p className="text-sm">We limit access to personal information to authorized personnel only</p>
                </Card>
              </div>
              <p>
                Despite our efforts, no method of transmission over the Internet or electronic storage is 100% secure.
                We cannot guarantee absolute security of your data.
              </p>
            </div>

            {/* Your Rights */}
            <div id="your-rights" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access the personal information we have about you</li>
                <li>The right to rectify inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict or object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div id="cookies" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>
              <div className="bg-card p-6 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Essential cookies: Necessary for the website to function properly</li>
                  <li>Preference cookies: Remember your preferences and settings</li>
                  <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                  <li>Marketing cookies: Track your browsing habits to deliver targeted advertising</li>
                </ul>
              </div>
            </div>

            {/* Children's Privacy */}
            <div id="children" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe that your child has
                provided us with personal information, please contact us so that we can take necessary actions.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div id="changes" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy. You
                are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div id="contact" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Contact Us</h2>
              <p className="mb-6">If you have any questions about this Privacy Policy, please contact us:</p>
              <Card className="p-6 bg-primary/10">
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> privacy@companyname.com
                  </p>
                  <p>
                    <strong>Phone:</strong> (123) 456-7890
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Privacy Street, City, State, ZIP
                  </p>
                </div>
                <div className="mt-6">
                  <Button className="w-full sm:w-auto">Contact Support</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="/terms" className="text-sm hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-sm hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
