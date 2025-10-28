// src/pages/Home.jsx
import React, { useState } from "react";
import HeroImage from "../assets/HomePage/deliveryman.png";
import AppStoreBadge from '../assets/HomePage/appstore.svg';
import PlayStoreBadge from '../assets/HomePage/GooglePlayStoreImage.png';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Services from "./Services";

function Home() {
  const services = [
    { name: "Truck", icon: "🚚" },
    { name: "Two Wheeler", icon: "🏍️" },
    { name: "Packers & Movers", icon: "📦" },
    { name: "Intercity Courier", icon: "🗺️" },
    { name: "Get Estimate", icon: "📊" },
  ];

  const serviceTabs = [
    "Tempo Services",
    "Mini Truck Services",
    "Bike Courier",
    "Intercity Courier",
    "Packers & Movers",
  ];
  const [activeTab, setActiveTab] = useState(serviceTabs[0]);

  const faqs = [
    { question: "What is Porter App?", answer: "Porter App is a logistics platform that provides on-demand transportation and courier services." },
    { question: "How do I use Porter App?", answer: "Download the app, create an account, choose your vehicle, and book your service online." },
    { question: "How do I book a tempo/mini truck/bike or intercity courier services online from the Porter app?", answer: "Select your service, enter pickup & drop location, choose vehicle, and confirm booking." },
    { question: "Does Porter transport between cities?", answer: "Yes, Porter provides intercity transportation services." },
    { question: "What are the items that are prohibited by Porter?", answer: "Prohibited items include hazardous materials, illegal substances, and perishable items requiring refrigeration." },
    { question: "What are the charges for goods transportation services by truck and two-wheelers?", answer: "Charges vary based on distance, vehicle type, and weight of goods. Please check the app for quotes." },
    { question: "Does Porter provide Packers and Movers services?", answer: "Yes, Porter offers Packers and Movers services for household and office relocation." },
    { question: "What types of goods does Porter transport?", answer: "Porter transports furniture, parcels, electronics, machinery, and general goods." },
    { question: "How long does it take to transport goods via Porter?", answer: "Delivery times depend on distance, vehicle type, and traffic conditions." },
    { question: "Does Porter provide mini trucks like Tata Ace on monthly contract?", answer: "Yes, Porter provides mini trucks on monthly or contractual basis depending on business requirements." },
    { question: "How does an API Integration with Porter work?", answer: "API integration allows businesses to connect their system directly with Porter for automated booking and tracking." },
    { question: "How does an API integration solve business problems?", answer: "It streamlines logistics operations, reduces manual intervention, and provides real-time updates for deliveries." },
    { question: "What vehicle categories are available via the APIs?", answer: "API supports mini trucks, tempo services, bikes, and intercity courier vehicles." },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Home|GlobePorter</title>
         <meta name="description" content="Need assistance? Contact GlobePorter support for bookings, deliveries, and enterprise solutions." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left hidden md:block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Delivery, Our Priority
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6">
              Trusted by thousands, delivered with care.  
              Fast, reliable, and global delivery services at your fingertips.
            </p>
            <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition block mx-auto">
              Learn More
            </button>

          </div>

          {/* Right Hero Image */}
          <div className="flex justify-center">
            <img
              src={HeroImage}
              alt="Delivery"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </section>


      <section className="relative w-full bg-gray-50 py-10 md:py-16">
      <Link to="/" className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-green-400 flex items-center">
          GlobePorter
          <span className="ml-1 text-[10px] border px-1 rounded-sm align-super">
            TM
          </span>
        </h1>
        <h2 className="text-green-400 text-sm mt-1">Your Delivery, Our Priority</h2>
      </Link>

      {/* Text + Buttons */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Get the GlobePorter App Now!
        </h2>
        <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-xl mb-6">
          Your world, one tap away — trusted by thousands, delivered with care.
        </p>

        {/* App store badges */}
        <div className="flex gap-4">
          <a
            href="https://apps.apple.com" // replace with your iOS app link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AppStoreBadge}
              alt="Download on the App Store"
              className="h-12 sm:h-14"
            />
          </a>
          <a
            href="https://play.google.com" // replace with your Android app link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={PlayStoreBadge}
              alt="Get it on Google Play"
              className="h-12 sm:h-14"
            />
          </a>
        </div>
      </div>
    </section>

    {/* Services*/}
      
      <div>
        <Services/>
      </div>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-2 md:px-6 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-8 text-black text-sm sm:text-base">
          In case you have more questions, feel free to reach out to us.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left px-4 py-4 bg-green-100 text-black font-medium flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span className="text-2xl">{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <div className="px-4 py-4 bg-white text-gray-700 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
