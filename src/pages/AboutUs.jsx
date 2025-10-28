import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Globe } from "lucide-react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>

      {/* Intro Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-blue-600">Globe Porter</span>, 
          we are redefining the way deliveries are made. With technology-driven 
          solutions, a reliable partner network, and a commitment to excellence, 
          we ensure that your goods reach their destination safely and on time. 
          Our mission is simple: to make logistics hassle-free, efficient, and 
          accessible for everyone.
        </p>
      </motion.div>

      {/* Mission / Vision / Reach */}
      <div className="grid gap-8 md:grid-cols-3">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To simplify logistics by offering transparent, reliable, and 
            affordable delivery solutions for individuals and businesses alike.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <p className="text-gray-600">
            Trust, efficiency, and innovation are at the core of what we do. 
            We believe in building long-term relationships with our customers.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Reach</h2>
          <p className="text-gray-600">
            With a growing presence across multiple cities, we are expanding 
            rapidly to bring Globe Porter services closer to you.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Meet Our Team
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Behind Globe Porter is a passionate team of professionals who work 
          tirelessly to deliver excellence. From logistics experts to tech 
          innovators, our team is committed to ensuring every delivery is a 
          success.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition-colors">
          Join Our Team
        </button>
      </motion.div>
    </div>
  );
}

export default AboutUs;
