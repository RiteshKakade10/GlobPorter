import React from "react";
import InternationalDelivery from '../assets/Blogs/InternationalDeliveries.jpg';
import GlobalShipping from '../assets/Blogs/GlobalShipping.jpg';
import SecureDelivery from '../assets/Blogs/SecureDelivery.jpg';
import Insights from '../assets/Blogs/Insights.jpg';
import { Helmet } from "react-helmet-async";
const blogs = [
  {
    id: 1,
    title: "5 Tips for Faster International Deliveries",
    excerpt: "Learn how GlobePorter ensures timely and secure deliveries across borders.",
    image: InternationalDelivery,
    author: "Logistics Team",
    date: "Sep 17, 2025",
  },
  {
    id: 2,
    title: "Eco-Friendly Packaging for Global Shipping",
    excerpt: "How GlobePorter is reducing its carbon footprint with sustainable packaging.",
    image: GlobalShipping,
    author: "Sustainability Desk",
    date: "Sep 10, 2025",
  },
  {
    id: 3,
    title: "Top Security Practices for Safe Deliveries",
    excerpt: "An inside look at how we keep your parcels safe and secure worldwide.",
    image: SecureDelivery,
    author: "Operations Team",
    date: "Sep 5, 2025",
  },
];

function Blogs() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <Helmet>
       <title>Blogs|GlobePorter</title>
          <meta name="description" content="Need assistance? Contact GlobePorter support for bookings, deliveries, and enterprise solutions." />
      </Helmet>       
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          GlobePorter Insights
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Stay updated with the latest trends, tips, and stories from the world
          of delivery & logistics
        </p>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 hover:shadow-2xl transition-shadow duration-300">
          <img
            src={Insights}
            alt="Featured Delivery"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
              Inside GlobePorter: Revolutionizing Global Delivery Services
            </h2>
            <p className="text-gray-600 mb-4">
              Discover how our innovative approach to logistics is making
              cross-border delivery faster, safer, and greener.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-xs">
              <span>By GlobePorter Editorial</span>
              <span>Sep 20, 2025</span>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-gray-500 text-xs">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
