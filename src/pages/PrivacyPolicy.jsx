import React from "react";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Helmet>
        <title>Privacy Policy|GlobePorter</title>
         <meta name="description" content="Need assistance? Contact GlobePorter support for bookings, deliveries, and enterprise solutions." />
      </Helmet>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Privacy & Policy</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          We value your privacy. Learn how Globe Porter collects, uses, and
          safeguards your personal information.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal details: Name, phone number, email, and address.</li>
            <li>
              Transaction details: Payment history, invoices, booking records.
            </li>
            <li>
              Location data: GPS tracking for pickups, deliveries, and driver
              navigation.
            </li>
            <li>Technical data: Device type, IP address, browser details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">2. How We Use Your Data</h2>
          <p>
            Collected information is used to provide services, improve user
            experience, process payments, ensure security, and comply with
            regulations. We do not sell personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">3. Data Sharing</h2>
          <p>
            Data may be shared with trusted partners such as payment gateways,
            drivers, and government authorities (only when required by law).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">4. Data Security</h2>
          <p>
            We use encryption, firewalls, and secure servers to protect user
            data. However, no method of online transmission is 100% secure, and
            users acknowledge associated risks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">5. User Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and update your personal information.</li>
            <li>Request deletion of your data (subject to legal compliance).</li>
            <li>Opt-out of promotional communications.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">6. Policy Updates</h2>
          <p>
            Globe Porter may update this Privacy Policy from time to time. Users
            will be notified of major changes via email or app notifications.
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
