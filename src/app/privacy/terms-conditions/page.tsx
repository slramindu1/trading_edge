// src/app/privacy/terms-conditions/page.tsx
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Trading Edge</title>
        <meta name="description" content="Terms and Conditions for Trading Edge - Sri Lanka" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 text-white">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: May 9, 2025</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">General Overview</h2>
        <p className="mb-4">
          The services, education and content provided by Trading Edge are for educational purposes only. You must agree
          not to hold any person or entity responsible for your trading decisions. Trading Edge is <strong>not</strong> a certified
          financial advisor. Any information discussed does not guarantee or promise future profits or losses. By using
          this platform, you accept these terms in full.
        </p>
        <p className="mb-4">
          Trading Edge and/or its licensors own the intellectual property rights to the website and its material. You
          agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the services without express
          written permission. You also agree not to share Trading Edge&apos;s video links or community content.
        </p>
        <p className="mb-4">
          By viewing or using the content on this site, you agree it is for general education. You will not hold anyone
          responsible for losses or damages from use of the information provided. Trading has large potential rewards,
          but also large risks. Don&apos;t trade with money you can&apos;t afford to lose.
        </p>
        <p className="mb-4">
          This website does not offer to buy or sell futures, options or currencies. No representation is made that any
          account will or is likely to achieve profits or losses similar to those discussed. Past performance does not
          guarantee future results.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Future Price Modifications</h2>
        <p className="mb-4">
          Prices for our products may change at any time without notice. We reserve the right to modify or discontinue
          the service without liability. Existing members will not be charged for future added content.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Accuracy of Billing and Account Information</h2>
        <p className="mb-4">
          You agree to provide current, complete, and accurate purchase and account information. Your data is kept private
          and used only for invoicing purposes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Risk Disclaimer</h2>
        <p className="mb-4">
          Do not trade based solely on the information provided. Forex trading carries high risk and is not suitable for
          all investors. You acknowledge the risk of complete loss. All content is for educational purposes only. Trading
          Edge is not liable for any outcomes of your trading decisions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Termination</h2>
        <p className="mb-4">
          Sharing platform content (videos, PDFs, links) is strictly prohibited. If a member is found sharing such content,
          their access will be terminated immediately. Access may also be revoked if payment fails.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Refund Disclaimer</h2>
        <p className="mb-4">
          Due to the nature of our digital services, refunds are not offered under any circumstances. By purchasing, you
          agree to this no-refund policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Contact</h2>
        <p className="mb-4">
          Please contact us via email if you have any questions before purchasing.
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
