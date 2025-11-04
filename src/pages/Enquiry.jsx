import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

function Enquiry() {
  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const enquiryOptions = [
    "Delivery Inquiry",
    "Support Request",
    "Feedback",
    "Partnership",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.userType) newErrors.userType = "Select user type";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.enquiryType) newErrors.enquiryType = "Select enquiry type";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      try {
        // Hardcoded backend URL
        const response = await fetch("https://glob-porter-backend.vercel.app/api/enquiry", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


        const data = await response.json();

        if (response.ok) {
          setSubmitted(true);
          setServerError("");
          setFormData({
            userType: "",
            name: "",
            email: "",
            phone: "",
            enquiryType: "",
            message: "",
          });
          setErrors({});
        } else {
          setServerError(data.error || "Something went wrong");
          setSubmitted(false);
        }
      } catch (err) {
        console.error("Error submitting enquiry:", err);
        setServerError(
          "Failed to submit. Please check your network or try again later."
        );
        setSubmitted(false);
      }
    } else {
      setErrors(formErrors);
      setSubmitted(false);
      setServerError("");
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Helmet>
        <title>Enquiry | GlobePorter</title>
        <meta
          name="description"
          content="Need assistance? Contact GlobePorter support for bookings, deliveries, and enterprise solutions."
        />
      </Helmet>

      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-600 text-center">
          GlobePorter Enquiry
        </h2>

        {submitted && (
          <p className="bg-green-100 text-green-700 p-3 mb-4 rounded text-center">
            Thank you! Your enquiry has been submitted.
          </p>
        )}

        {serverError && (
          <p className="bg-red-100 text-red-700 p-3 mb-4 rounded text-center">
            {serverError}
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4 md:space-y-6">
          {/* User Type */}
          <div>
            <label className="block mb-1 font-semibold">I am a</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Select --</option>
              <option value="Customer">Customer</option>
              <option value="Driver">Driver</option>
            </select>
            {errors.userType && (
              <p className="text-red-500 text-sm mt-1">{errors.userType}</p>
            )}
          </div>

          {/* Name & Phone */}
          <div className="md:flex md:space-x-4">
            <div className="md:flex-1 mb-4 md:mb-0">
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="md:flex-1">
              <label className="block mb-1 font-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Enquiry Type */}
          <div>
            <label className="block mb-1 font-semibold">Enquiry Type</label>
            <select
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Select --</option>
              {enquiryOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.enquiryType && (
              <p className="text-red-500 text-sm mt-1">{errors.enquiryType}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default Enquiry;
