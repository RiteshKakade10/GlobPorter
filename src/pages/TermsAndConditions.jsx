import React from "react";
import { Helmet } from "react-helmet-async";

function TermsAndConditions() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Helmet>
        <title>TermsAndCondition|GlobePorter</title>
         <meta name="description" content="Need assistance? Contact GlobePorter support for bookings, deliveries, and enterprise solutions." />
      </Helmet>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Terms & Conditions</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Please read our terms carefully before using Globe Porter’s services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
          <p>
            Welcome to <span className="font-semibold">Globe Porter</span>. By
            accessing or using our logistics and transportation services, you
            agree to comply with the terms and conditions outlined here. If you
            do not agree, please discontinue use immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">2. Services</h2>
          <p>
            Globe Porter provides on-demand logistics, packers & movers, and
            enterprise delivery solutions. Service availability depends on
            location, vehicle type, and demand. We reserve the right to modify
            or discontinue services without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate information while booking services.</li>
            <li>Ensure goods comply with transport regulations.</li>
            <li>
              Avoid transporting prohibited or illegal items (e.g., hazardous
              materials, explosives, contraband).
            </li>
            <li>
              Ensure availability at pickup & drop-off points for smooth
              delivery.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">4. Payments</h2>
          <p>
            All payments must be made via Globe Porter’s authorized channels.
            Pricing may vary based on vehicle type, distance, demand, and other
            factors. Unpaid dues may result in suspension of services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">5. Limitation of Liability</h2>
          <p>
            While we ensure safe handling of goods, Globe Porter is not liable
            for damages caused by unforeseen circumstances such as accidents,
            natural disasters, or customer negligence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be
            resolved under the jurisdiction of the courts in Mumbai, India.
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
