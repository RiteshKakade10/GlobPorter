import React from "react";
import { Car, Clock, Headphones, CheckCircle } from "lucide-react"; 
import driverHero from "../assets/DriversPartner/driversPartner.jpg";
import driver1 from "../assets/DriversPartner/driversPartner.jpg"; 
import driver2 from "../assets/DriversPartner/driversPartner.jpg";
import { Helmet } from "react-helmet-async";

function DriverPartner() {
  return (
    <div className="driver-partner-page bg-gray-50 text-gray-800">
       <Helmet>
       <title>Driver Partner|GlobePorter</title>
          <meta name="description" content="Need assistance? Contact GlobePorter support for bookings, deliveries, and enterprise solutions." />
      </Helmet>   
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          src={driverHero}
          alt="Globe Porter Driver Partner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Drive with Globe Porter
          </h1>
          <p className="text-xl max-w-2xl mb-6 drop-shadow-md">
            Become a partner today and unlock the freedom to earn on your terms.  
            Flexible hours, reliable trips, and on-time payments.
          </p>
          <button className="px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition">
            Become a Partner
          </button>
        </div>
      </div>

      {/* Why Partner Section */}
      <section className="px-10 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Partner With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-50 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Clock className="mx-auto mb-4 w-12 h-12 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-2">Flexible Hours</h3>
            <p className="text-gray-600">
              Drive whenever you want. No fixed schedules. Be your own boss.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Car className="mx-auto mb-4 w-12 h-12 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-2">Weekly Earnings</h3>
            <p className="text-gray-600">
              Earn competitive payouts with weekly transfers, bonuses & tips.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Headphones className="mx-auto mb-4 w-12 h-12 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated partner support team is always there for you.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-10 py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          How to Get Started
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: "Sign Up Online", desc: "Register with your basic details." },
            { step: "Upload Documents", desc: "Submit license, ID, and vehicle papers." },
            { step: "Vehicle Verification", desc: "Complete quick inspection & approval." },
            { step: "Start Driving", desc: "Accept trips and earn instantly." },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full text-xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-10 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Partners Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="flex gap-6 items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={driver1}
              alt="Driver testimonial"
              className="w-20 h-20 rounded-full object-cover shadow"
            />
            <div>
              <p className="text-gray-600 italic">
                “Driving with Globe Porter has given me financial stability and
                freedom. I choose my hours and earn well.”
              </p>
              <h4 className="mt-4 font-semibold">– Rajesh K, Partner Driver</h4>
            </div>
          </div>
          <div className="flex gap-6 items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={driver2}
              alt="Driver testimonial"
              className="w-20 h-20 rounded-full object-cover shadow"
            />
            <div>
              <p className="text-gray-600 italic">
                “The app is smooth, trips are steady, and payments always on time.
                Highly recommend Globe Porter.”
              </p>
              <h4 className="mt-4 font-semibold">– Ayesha M, Partner Driver</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="px-10 py-20 bg-blue-600 text-white text-center rounded-t-3xl">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Start Driving?</h2>
        <p className="text-lg mb-6">
          Join thousands of partners already earning with Globe Porter.
        </p>
        <button className="px-12 py-4 bg-white text-blue-600 text-xl font-bold rounded-full shadow-lg hover:bg-gray-100 transition">
          Join as Driver Partner
        </button>
        <p className="mt-4">
          Questions? Email us at{" "}
          <a href="mailto:partners@globeporter.com" className="underline">
            partners@globeporter.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default DriverPartner;
