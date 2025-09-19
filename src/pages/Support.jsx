import React from "react";
import { Headset, Truck, Package, Building2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

function Support() {
  return (
    <div className="support-page bg-white min-h-screen text-black">
      <Helmet>
        <title>Support - GlobePorter</title>
        <meta name="description" content="Need assistance? Contact GlobePorter support for bookings, deliveries, and enterprise solutions." />
      </Helmet>

      {/* Header */}
      <div className="text-center py-16 text-black">
        <h1 className="text-5xl font-extrabold mb-4">HELP CENTER</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Need assistance? We're happy to help, reach us out through the appropriate channels below.
        </p>
      </div>

      {/* Support Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
        {/* Customer Support */}
        <div className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <div className="p-4 bg-blue-50 rounded-full mr-6">
            <Headset className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">CUSTOMER SUPPORT</h3>
            <p className="text-gray-600">
              <a href="#" className="text-blue-600 underline">Click here</a> to read our FAQs.  
              For support with your bookings and queries, email{" "}
              <a href="mailto:help@globeporter.com" className="text-blue-600 underline">
                help@globeporter.com
              </a>{" "}
              or call <span className="text-blue-600">022 4410 4410</span>.
            </p>
          </div>
        </div>

        {/* Drive with Globe Porter */}
        <div className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <div className="p-4 bg-blue-50 rounded-full mr-6">
            <Truck className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">DRIVE WITH GLOBE PORTER</h3>
            <p className="text-gray-600">
              Are you a tempo truck owner? Increase your earnings by partnering with us.{" "}
              <a href="#" className="text-blue-600 underline">Click here</a> or call{" "}
              <span className="text-blue-600">97144 242323</span>.  
              Have a mini truck or bike? Earn by fulfilling delivery orders.{" "}
              <a href="#" className="text-blue-600 underline">Click here</a> or call{" "}
              <span className="text-blue-600">022 4410 4410</span>.
            </p>
          </div>
        </div>

        {/* Packers and Movers */}
        <div className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <div className="p-4 bg-blue-50 rounded-full mr-6">
            <Package className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">PACKERS AND MOVERS</h3>
            <p className="text-gray-600">
              For queries regarding house shifting, email{" "}
              <a href="mailto:packermover@globeporter.com" className="text-blue-600 underline">
                packermover@globeporter.com
              </a>{" "}
              or call <span className="text-blue-600">022 4410 4444</span> /{" "}
              <span className="text-blue-600">022 6268 4444</span>.
            </p>
          </div>
        </div>

        {/* Enterprise Services */}
        <div className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <div className="p-4 bg-blue-50 rounded-full mr-6">
            <Building2 className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">ENTERPRISE SERVICES</h3>
            <p className="text-gray-600">
              If you are an enterprise looking for logistics solutions,{" "}
              <a href="#" className="text-blue-600 underline">Click here</a> or email{" "}
              <a href="mailto:help@globeporter.com" className="text-blue-600 underline">
                help@globeporter.com
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Offices Section */}
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-bold">OUR OFFICES</h2>
        <p className="text-gray-400 mt-2">Coming soon: add office addresses, maps, or contact details.</p>
      </div>
    </div>
  );
}

export default Support;
