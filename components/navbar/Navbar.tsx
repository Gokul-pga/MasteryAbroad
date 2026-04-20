"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  BookOpen,
  User,
  Phone,
  ArrowRight,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Award,
  Wrench,
  GitBranch,
} from "lucide-react";
import ContactForm from "../Modal/ContactForm";

type CourseKey =
  | "undergraduate"
  | "postgraduate"
  | "research"
  | "hnd"
  | "diploma"
  | "vet"
  | "pathway";

export default function Navbar() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const countries = [
    { name: "Canada", flag: "🇨🇦", path: "/countries/canada" },
    { name: "United Kingdom", flag: "🇬🇧", path: "/countries/uk" },
    { name: "Australia", flag: "🇦🇺", path: "/countries/australia" },
    { name: "Germany", flag: "🇩🇪", path: "/countries/germany" },
    { name: "Ireland", flag: "🇮🇪", path: "/countries/ireland" },
    { name: "USA", flag: "🇺🇸", path: "/countries/usa" },
    { name: "Singapore", flag: "🇸🇬", path: "/countries/singapore" },
    { name: "Malaysia", flag: "🇲🇾", path: "/countries/malaysia" },
    { name: "UAE", flag: "🇦🇪", path: "/countries/uae" },
    { name: "New Zealand", flag: "🇳🇿", path: "/countries/newzealand" },
    { name: "Europe", flag: "🇪🇺", path: "/countries/europe" },
    { name: "France", flag: "FR", path: "/countries/france" },
  ];
  const courseIcons: Record<CourseKey, React.ReactNode> = {
    undergraduate: <GraduationCap />,
    postgraduate: <Briefcase />,
    research: <FlaskConical />,
    hnd: <Award />,
    diploma: <BookOpen />,
    vet: <Wrench />,
    pathway: <GitBranch />,
  };
  const courses: { name: string; path: string; key: CourseKey }[] = [
    {
      name: "Undergraduation",
      path: "/courses/undergraduate",
      key: "undergraduate",
    },
    {
      name: "Post graduation",
      path: "/courses/postgraduate",
      key: "postgraduate",
    },
    { name: "Research Options", path: "/courses/research", key: "research" },
    { name: "HND", path: "/courses/hnd", key: "hnd" },
    { name: "Diplomas", path: "/courses/diploma", key: "diploma" },
    { name: "Vocational", path: "/courses/vet", key: "vet" },
    { name: "Twinning Programs", path: "/courses/pathway", key: "pathway" },
  ];

  const navItems = [
    { name: "Home", path: "/", icon: null },
    { name: "About", path: "/about", icon: null },
    { name: "Contact", path: "/contact", icon: null },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-[#020024] backdrop-blur-md shadow-lg border-b border-white/10`}
      >
        <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs sm:text-sm">
          <div className="w-full px-4 py-2 flex items-center justify-between gap-4">
            {/* Left: Headline */}
            <div className="flex-1 overflow-hidden whitespace-nowrap">
              <p className="animate-marquee font-medium text-sm md:text-base">
                {/* Main text - visible on all */}
                Study in USA, UK, Canada & Europe — End-to-End Admission, Visa &
                Scholarship Support
                {/* Mobile-only extra text */}
                <span className="md:hidden inline ml-3 text-white/90">
                  🎯 Personalized Guidance | High Visa Success | Free
                  Consultation | Admissions Open for 2026 Intake | Limited Seats
                  Available
                </span>
              </p>
            </div>

            {/* Right: Trust + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <span className="text-white/90">
                🎯 Personalized Guidance | High Visa Success | Free Consultation
                | Admissions Open for 2026 Intake | Limited Seats Available Book
                your slots
              </span>

              <button
                onClick={() => setOpen(true)}
                className="bg-white text-blue-600 px-3 py-1 rounded-md text-xs font-semibold hover:bg-gray-100 transition"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* <GraduationCap className="w-5 h-5 text-white" /> */}
                <Image
                  src="/Logo2.png"
                  alt="Logo"
                  width={170}
                  height={100}
                  className=""
                  priority
                  quality={80}
                />
              </div>
              <span className="text-xl capitalize font-bold bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent">
                MASTERYABROAD
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Regular Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="group relative px-4 py-2 text-sm font-medium transition-all duration-300"
                  style={{
                    color: isActive(item.path) ? "#FFD700" : "#9CA3AF",
                  }}
                >
                  <span className="relative inline-block">
                    {item.name}

                    {/* Bottom Border - Gold with animation */}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFED4E] transition-all duration-300 ${
                        isActive(item.path)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                      style={{
                        boxShadow: "0 0 8px rgba(255, 215, 0, 0.6)",
                      }}
                    />

                    {/* Glow effect on hover */}
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        textShadow: "0 0 8px rgba(255, 215, 0, 0.5)",
                      }}
                    />
                  </span>
                </Link>
              ))}

              {/* Countries Dropdown */}
              <div className="relative">
                {/* Button */}
                <button
                  onMouseEnter={() => setCountryOpen(true)}
                  onMouseLeave={() => setCountryOpen(false)}
                  className="group flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300"
                  style={{
                    color: countryOpen ? "#FFD700" : "#9CA3AF",
                  }}
                >
                  <Globe className="w-4 h-4" />

                  {/* Label + underline */}
                  <span className="relative inline-block">
                    Countries
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFED4E] transition-all duration-300 ${
                        countryOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      style={{
                        boxShadow: "0 0 8px rgba(255, 215, 0, 0.6)",
                      }}
                    />
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 transition-all duration-300 ${
                      countryOpen
                        ? "rotate-180 text-[#FFD700]"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  onMouseEnter={() => setCountryOpen(true)}
                  onMouseLeave={() => setCountryOpen(false)}
                  className={`absolute top-full left-0 mt-3 w-64 bg-white  max-h-96 overflow-y-auto rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                    countryOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="p-2">
                    {countries.map((country, idx) => (
                      <Link
                        key={idx}
                        href={country.path}
                        className="relative group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 hover:bg-[#030035]/5"
                      >
                        {/* Left gold indicator */}
                        {/* <span className="absolute left-0 top-0 h-full w-[2px] bg-[#FFD700] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" /> */}

                        <span className="text-xl">{country.flag}</span>

                        <span className="flex-1 text-sm font-medium text-gray-700 transition-all duration-300 ">
                          {country.name}
                        </span>

                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100  transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Courses Dropdown */}
              <div className="relative group">
                {/* Button */}
                <button
                  onMouseEnter={() => setCourseOpen(true)}
                  onMouseLeave={() => setCourseOpen(false)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300"
                  style={{
                    color: courseOpen ? "#FFD700" : "#9CA3AF",
                  }}
                >
                  <BookOpen className="w-4 h-4" />

                  <span className="relative">
                    Courses
                    {/* Gold underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#FFD700] to-[#FFED4E] transition-all duration-300 ${
                        courseOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      style={{
                        boxShadow: "0 0 8px rgba(255,215,0,0.6)",
                      }}
                    />
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      courseOpen ? "rotate-180 text-[#FFD700]" : ""
                    }`}
                  />
                </button>

                <div
                  onMouseEnter={() => setCourseOpen(true)}
                  onMouseLeave={() => setCourseOpen(false)}
                  className={`absolute top-full left-0 mt-3 w-72 bg-white  max-h-96 overflow-y-auto rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                    courseOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="p-2">
                    {courses.map((course, idx) => (
                      <Link
                        key={idx}
                        href={course.path}
                        className="relative group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 hover:bg-[#030035]/5"
                      >
                        {/* Left gold indicator (same as countries) */}
                        {/* <span className="absolute left-0 top-0 h-full w-[2px] bg-[#FFD700] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" /> */}

                        {/* Icon */}
                        <span className="w-6 h-6 text-gray-600  transition">
                          {courseIcons[course.key]}
                        </span>

                        {/* Text */}
                        <span className="flex-1 text-sm font-medium text-gray-700 transition-all duration-300 ">
                          {course.name}
                        </span>

                        {/* Arrow */}
                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100  transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {/* <User className="w-4 h-4" />
                Sign In */}
              </Link>
              {/* <button className="group relative overflow-hidden bg-linear-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-200 hover:shadow-xl transition-all duration-300">
                <span
                  onClick={() => setOpen(true)}
                  className="relative z-10 flex items-center gap-2"
                >
                  Contact Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg  hover:text-white text-[#020024] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-20 bg-[#020024] border-b border-gray-100 shadow-xl transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="p-4 space-y-2">
              {/* Mobile Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-100 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Countries Section */}
              <div className="px-4 py-2">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Study Destinations
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {countries.map((country, idx) => (
                    <Link
                      key={idx}
                      href={country.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#020024] rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="">{country.flag}</span>
                      <span className="text-sm ">{country.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Courses Section */}
              <div className="px-4 py-2">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Popular Programs
                  </span>
                </div>
                <div className="space-y-1">
                  {courses.map((course, idx) => (
                    <Link
                      key={idx}
                      href={course.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:text-[#020024] hover:bg-gray-50 transition-colors"
                    >
                      <span className="w-6 h-6 ">
                        {courseIcons[course.key]}
                      </span>
                      <span className="text-sm ">{course.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Actions */}
              {/* <div className="pt-4 px-4 space-y-2 border-t border-gray-100 mt-4">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  {/* <User className="w-4 h-4" />
                  Sign In */}
              {/* </Link> */}
              {/* <button
                  onClick={() => setOpen(true)}
                  className="w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                >
                  Contact Now
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
      <ContactForm
        headerText="Get in touch"
        open={open}
        onClose={() => setOpen(false)}
      />
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
