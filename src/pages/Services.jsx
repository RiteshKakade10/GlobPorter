import React from "react";
import { motion } from "framer-motion";
import { Truck, Package, Clock, Shield } from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: "Fast Delivery",
      description:
        "We provide quick and reliable delivery solutions across cities with real-time tracking.",
    },
    {
      icon: <Package className="w-10 h-10 text-green-600" />,
      title: "Parcel Handling",
      description:
        "From small packages to bulk goods, we handle deliveries with care and precision.",
    },
    {
      icon: <Clock className="w-10 h-10 text-purple-600" />,
      title: "On-Time Guarantee",
      description:
        "Our commitment is to deliver on time, ensuring your business runs smoothly.",
    },
    {
      icon: <Shield className="w-10 h-10 text-red-600" />,
      title: "Secure Shipping",
      description:
        "All deliveries are secured and insured, giving you peace of mind every step of the way.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to get started?
        </h3>
        <p className="text-gray-600 mb-6">
          Join thousands of happy customers who trust Globe Porter for
          deliveries every day.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition-colors">
          Book a Delivery
        </button>
      </motion.div>
    </div>
  );
}

export default Services;
