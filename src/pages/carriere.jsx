import React, { useState } from "react";
import Layouts from "@/src/layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "resume" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g. send data to server)
      console.log("Form data submitted:", formData);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required.";
    }
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required.";
    }
    if (!formData.resume) {
      errors.resume = "Resume is required.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Layouts>
      <PageBanner
        pageTitle="Get in touch!"
        breadTitle="Career"
        anchorLabel="Send message"
        anchorLink="/career"
        paddingBottom={1}
        align="center"
      />

      {/* Job Application Form */}
      <section id="contact" className="container mx-auto py-12">
        <h3 className="text-center text-3xl font-semibold mb-12">
          Send Us <span className="font-thin">Your CV</span>
        </h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 mx-auto max-w-md" /* This centers the form and sets the max width */
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border ${
                formErrors.name ? "border-red-600" : "border-gray-300"
              } rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              required
              aria-invalid={formErrors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            {formErrors.name && (
              <span id="name-error" className="text-red-600 text-sm">
                {formErrors.name}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border ${
                formErrors.email ? "border-red-600" : "border-gray-300"
              } rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              required
              aria-invalid={formErrors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {formErrors.email && (
              <span id="email-error" className="text-red-600 text-sm">
                {formErrors.email}
              </span>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border ${
                formErrors.phone ? "border-red-600" : "border-gray-300"
              } rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              required
              aria-invalid={formErrors.phone ? "true" : "false"}
              aria-describedby="phone-error"
            />
            {formErrors.phone && (
              <span id="phone-error" className="text-red-600 text-sm">
                {formErrors.phone}
              </span>
            )}
          </div>

          {/* Resume Input */}
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border ${
                formErrors.resume ? "border-red-600" : "border-gray-300"
              } rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
              required
              aria-invalid={formErrors.resume ? "true" : "false"}
              aria-describedby="resume-error"
            />
            {formErrors.resume && (
              <span id="resume-error" className="text-red-600 text-sm">
                {formErrors.resume}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#ff5733] text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Apply Now
          </button>
        </form>
      </section>
    </Layouts>
  );
};

export default Contact;
