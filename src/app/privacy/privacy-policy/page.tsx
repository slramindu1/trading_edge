// pages/privacy-policy.js
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Trading Edge</title>
        <meta name="description" content="Privacy Policy for Trading Edge - Sri Lanka" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 text-white">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: August 18, 2024</p>

        <p className="mb-4">
          This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
          information when you use our service and tells you about your privacy rights and how the law in Sri Lanka
          protects you.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>
        <p className="mb-2"><strong>Company:</strong> Refers to Trading Edge, based in Sri Lanka.</p>
        <p className="mb-2"><strong>Country:</strong> Refers to Sri Lanka.</p>
        <p className="mb-2"><strong>Service:</strong> Refers to the website operated by Trading Edge.</p>
        <p className="mb-2"><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.</p>
        <p className="mb-2"><strong>Usage Data:</strong> Data collected automatically when using the service.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Collecting and Using Your Personal Data</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Email address</li>
          <li>First and last name</li>
          <li>Phone number</li>
          <li>Address</li>
          <li>Usage Data such as IP, browser type, and device info</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Use of Personal Data</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and maintain our Service</li>
          <li>To manage your account</li>
          <li>To contact you via email, phone, or other channels</li>
          <li>To send you updates, marketing, and promotional content (only if you opt in)</li>
          <li>For internal analytics and improvements</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Retention of Data</h2>
        <p className="mb-4">
          We retain your personal data only for as long as necessary for the purposes outlined in this Privacy Policy,
          or to comply with applicable laws in Sri Lanka.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Data Transfer</h2>
        <p className="mb-4">
          Your data may be processed outside Sri Lanka but we will ensure adequate data protection safeguards are in
          place.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Your Data Protection Rights</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Right to access</li>
          <li>Right to rectify inaccurate data</li>
          <li>Right to erasure (in certain cases)</li>
          <li>Right to withdraw consent at any time</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to improve your browsing experience. You can manage your
          cookie preferences in your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Disclosure of Data</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To service providers (e.g., email delivery, hosting)</li>
          <li>To comply with Sri Lankan law or court orders</li>
          <li>To protect the rights or property of Trading Edge</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Children’s Privacy</h2>
        <p className="mb-4">
          Our service is not intended for individuals under the age of 13. If we learn we’ve collected data from a child
          under 13 without parental consent, we will delete it.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. Changes will be posted on this page with an updated
          "Last Updated" date.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact us at:
        </p>
        <ul className="list-none mt-2">
          <li>Email: support@tradingedge.lk</li>
          <li>Phone: +94 XX XXX XXXX</li>
          <li>Address: Trading Edge, Colombo, Sri Lanka</li>
        </ul>
      </main>
    </>
  );
}
