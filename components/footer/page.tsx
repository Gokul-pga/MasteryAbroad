"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Mail, MapPin, Phone, ArrowRight, ArrowUp } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { countriesData } from "@/data/countries";
import { coursesData } from "@/data/courses";
import { Autocomplete, TextField } from "@mui/material";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ✅ UPDATED COUNTRIES WITH PATHS
  const countries = [
    { name: "Australia", path: "/countries/australia" },
    { name: "Canada", path: "/countries/canada" },
    { name: "Europe", path: "/countries/europe" },
    { name: "Ireland", path: "/countries/ireland" },
    { name: "Malaysia", path: "/countries/malaysia" },
    { name: "New Zealand", path: "/countries/newzealand" },
    { name: "Singapore", path: "/countries/singapore" },
    { name: "UAE - Dubai", path: "/countries/uae" },
    { name: "UK", path: "/countries/uk" },
    { name: "USA", path: "/countries/usa" },
    { name: "France", path: "/countries/france" },
  ];

  const quickLinks = [
    { name: "About us", href: "/about" },
    { name: "Our Courses", href: "/courseLists" },
    { name: "Countries", href: "/countryLists" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="w-5 h-5" />,
      href: "https://www.facebook.com",
      color: "hover:bg-blue-600",
    },
    {
      icon: <BsInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com",
      color: "hover:bg-pink-600",
    },
    {
      icon: <LiaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com",
      color: "hover:bg-blue-700",
    },
    {
      icon: <X className="w-5 h-5" />,
      href: "https://www.twitter.com",
      color: "hover:bg-black",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    course: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const countryOptions = Object.values(countriesData);
  const courseOptions = Object.values(coursesData);
  const whatsappNumber = "919345108970";

  const handleSubmit = () => {
    const { name, country, course } = formData;

    if (!name || !country || !course) {
      alert("Please fill all fields");
      return;
    }

    const message = encodeURIComponent(
      `Hi, this is ${name}.
  I’m interested in studying in ${country}.
  I would like to know more about ${course} programs, admission process, visa, and scholarships.`
    );

    const link = `https://wa.me/${whatsappNumber}?text=${message}`;

    // ✅ Open WhatsApp FIRST
    window.open(link, "_blank");

    // ✅ Then reset form
    setFormData({
      name: "",
      country: "",
      course: "",
    });

    // ✅ Close modal
    setIsModalOpen(false);
  };
  return (
    <footer className="primary-bg text-white pt-20 pb-10 relative overflow-hidden">
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-5 rounded-2xl w-[90%] max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative border-b border-gray-100 pb-4 mb-4">
              <h2 className="text-xl font-bold text-gray-800 text-center">
                Quick Enquiry
              </h2>
              <p className="text-sm text-gray-500 text-center mt-1">
                Fill in your details to get started
              </p>

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-0 right-0 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4 ">
              {/* Name */}
              <TextField
                className="mt-3"
                fullWidth
                label="Your Name"
                variant="outlined"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />

              {/* Country Autocomplete */}
              <Autocomplete
                className="mt-3"
                options={Object.values(countriesData).map((c: any) => ({
                  label: c.name,
                }))}
                value={
                  Object.values(countriesData)
                    .map((c: any) => ({ label: c.name }))
                    .find((c) => c.label === formData.country) || null
                }
                onChange={(e, newValue) =>
                  setFormData({
                    ...formData,
                    country: newValue?.label || "",
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Country"
                    variant="outlined"
                  />
                )}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />

              {/* Course Autocomplete */}
              <Autocomplete
                options={Object.values(coursesData).map((c: any) => ({
                  label: c.name,
                }))}
                value={
                  Object.values(coursesData)
                    .map((c: any) => ({ label: c.name }))
                    .find((c) => c.label === formData.course) || null
                }
                onChange={(e, newValue) =>
                  setFormData({
                    ...formData,
                    course: newValue?.label || "",
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Course"
                    variant="outlined"
                  />
                )}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 shadow-md"
              >
                Continue
              </button>
            </div>

            {/* Footer */}
            <p className="text-sm text-center text-gray-400 mt-4 pt-2 border-t border-gray-100">
              We'll never share your information with third parties
            </p>
            <p className="text-xs text-center text-gray-400 ">
              Get a callback in 10 minutes
            </p>
          </div>
        </div>
      )}
      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-500 text-white shadow-2xl transition-all duration-500 hover:bg-blue-600 hover:-translate-y-2 ${
          showScroll
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-6 h-6 animate-bounce" />
      </button>
      <div
        onClick={() => setIsModalOpen(true)}
        className={`fixed right-8 z-50 cursor-pointer transition-all duration-500 ${
          showScroll ? "bottom-28" : "bottom-8"
        }`}
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute w-16 h-16 rounded-full bg-green-500 opacity-30 animate-ping"></span>
          <span className="absolute w-20 h-20 rounded-full bg-green-500 opacity-20 animate-ping delay-200"></span>

          <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-2xl animate-[heartbeat_1.5s_ease-in-out_infinite]">
            <FaWhatsapp className="w-7 h-7" />
          </div>
        </div>
      </div>
      {/* Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter italic">
              MASTERY<span className="text-blue-400">ABROAD</span>
            </h2>

            <p className="text-blue-100/60 text-sm">
              Your trusted partner in international education. We guide you
              through every step of your journey to study abroad.
            </p>

            <div>
              <p className="text-xs font-bold text-blue-400 mb-3">
                Follow us on :
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">
              Countries
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {countries.map((country) => (
                <Link
                  key={country.name}
                  href={country.path}
                  className="text-blue-100/60 hover:text-white text-sm flex items-center gap-2 group transition"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
                  {country.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100/60 hover:text-white flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 text-blue-500 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="text-blue-400 w-5 h-5 mt-1" />
                <p className="text-blue-100/60 text-sm">
                  106A, Second Floor <br />
                  Sengupta Street, Ramnagar <br />
                  Ganthipuram, Coimbatore-641009
                </p>
              </div>

              <div className="flex gap-4">
                <Phone className="text-blue-400 w-5 h-5" />
                <div className="text-blue-100/60 text-sm">
                  <p>+91 9345108970</p>
                  <p>+33 744920475</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-blue-400 w-5 h-5" />
                <a
                  href="mailto:info@masteryabroad.in"
                  className="text-blue-100/60 hover:text-blue-400 text-sm"
                >
                  info@masteryabroad.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-blue-200">
            © {new Date().getFullYear()} Mastery Abroad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
