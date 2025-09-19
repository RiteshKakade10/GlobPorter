import React from "react";
import heroImg from "../assets/Enterprise/enterpriseHero.jpg"; 
import { Helmet } from "react-helmet-async";

function Enterprise() {
  return (
    <div className="enterprise-container bg-gray-50 text-gray-800">
      <Helmet>
        <title>EntePrise|GlobePorter</title>
         <meta name="description" content="Need assistance? Contact GlobePorter support for bookings, deliveries, and enterprise solutions." />
      </Helmet>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-16">
        <img
          src={heroImg}
          alt="Enterprise Logistics"
          className="w-full h-full object-cover rounded-b-2xl shadow-md"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Globe Porter Enterprise Solutions
          </h1>
          <p className="text-lg max-w-2xl">
            Scalable logistics, fleet management, and delivery services tailored
            for businesses of all sizes. Optimize operations, reduce costs, and
            ensure reliability with Globe Porter Enterprise.
          </p>
        </div>
      </div>

      {/* Features / What you get */}
      <div className="px-10 features-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="feature-card p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Custom Fleet Solutions</h2>
          <p className="text-gray-600">
            Dedicated vehicle fleets, route optimization, and real-time tracking
            to meet your specific delivery volume.
          </p>
        </div>
        <div className="feature-card p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">
            Advanced Analytics & Reporting
          </h2>
          <p className="text-gray-600">
            Dashboard with delivery performance, cost insights, delivery times,
            and more, helping you make data-driven decisions.
          </p>
        </div>
        <div className="feature-card p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">SLA & Priority Support</h2>
          <p className="text-gray-600">
            Guaranteed delivery timeframes, priority customer support, and
            dedicated account management for your operations.
          </p>
        </div>
      </div>

      {/* Use Cases / Industries */}
      <div className="use-cases mb-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Use Cases & Industries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="use-case-card p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">E-Commerce & Retail</h3>
            <p className="text-gray-600">
              Handle high daily parcel volumes, offer same-day delivery, reverse
              logistics and COD options.
            </p>
          </div>
          <div className="use-case-card p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">Food & Grocery</h3>
            <p className="text-gray-600">
              Cold chain compliance, express delivery, flexible delivery slots
              to serve end customers reliably.
            </p>
          </div>
          <div className="use-case-card p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">Healthcare & Pharma</h3>
            <p className="text-gray-600">
              Secure delivery, temperature controlled, compliance with
              regulatory standards.
            </p>
          </div>
          <div className="use-case-card p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">
              Manufacturing & Warehousing
            </h3>
            <p className="text-gray-600">
              Bulk logistics, timely pickups, inventory transfers, site
              deliveries.
            </p>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="how-it-works mb-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <ol className="timeline max-w-3xl mx-auto space-y-8 list-decimal list-inside text-gray-700">
          <li>
            <strong>Consultation & Planning:</strong> We assess your logistics
            needs, business scale, delivery frequency and special requirements.
          </li>
          <li>
            <strong>Setup & Integration:</strong> API integrations, onboarding
            your system, fleet allocation, custom dashboards.
          </li>
          <li>
            <strong>Operations & Execution:</strong> Real-time pickup, delivery
            tracking, customer notifications, SLA enforcement.
          </li>
          <li>
            <strong>Continuous Support & Optimization:</strong> Monitoring,
            feedback loops, process improvements, scaling up as needed.
          </li>
        </ol>
      </div>

      {/* Call to Action */}
      <div className="text-center px-10">
        <button className="btn-primary px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
          Request Enterprise Demo
        </button>
        <p className="mt-4 text-gray-600">
          Or contact our sales team at{" "}
          <a
            href="mailto:sales@globeporter.com"
            className="text-blue-600 underline"
          >
            sales@globeporter.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Enterprise;
