"use client";
import Image from "next/image";
import {
  Globe,
  Users,
  FileCheck,
  Rocket,
  MapPin,
  Clock,
  Heart,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  BookOpen,
  Briefcase,
  GraduationCap,
  Home,
  Phone,
  UserCheck,
  Plane,
  Target,
  FileText,
  DollarSign,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ContactForm from "@/components/Modal/ContactForm";

export default function AboutPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Target,
      title: "University Shortlisting",
      desc: "Get the best-fit universities based on your profile",
      benefit: "90% get into top 3 choices",
    },
    {
      icon: FileText,
      title: "Application & SOP Support",
      desc: "Strong applications that stand out",
      benefit: "3x higher acceptance rate",
    },
    {
      icon: Shield,
      title: "Visa Assistance",
      desc: "Step-by-step guidance with high approval rate",
      benefit: "98% visa success rate",
    },
    {
      icon: DollarSign,
      title: "Scholarship Guidance",
      desc: "Maximize your chances of financial aid",
      benefit: "$50K+ secured on average",
    },
    {
      icon: Home,
      title: "Pre-Departure Support",
      desc: "Accommodation, travel & student essentials",
      benefit: "24/7 student support",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Free Consultation",
      desc: "Discuss your goals",
      color: "blue",
    },
    {
      number: "02",
      icon: UserCheck,
      title: "Profile Evaluation",
      desc: "Shortlist universities",
      color: "purple",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Application Process",
      desc: "Handle documentation",
      color: "green",
    },
    {
      number: "04",
      icon: Plane,
      title: "Visa & Departure",
      desc: "Fly with confidence ✈️",
      color: "orange",
    },
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global University Network",
      desc: "Access Top Institutions across the USA, UK, Australia, Canada & more.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Student Counseling",
      desc: "Get expert 1-on-1 guidance tailored to your goals.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Hassle-Free Visa Guidance",
      desc: "From documents to interviews, we simplify every step.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast & Transparent Application Process",
      desc: "Quick, clear, and fully trackable admissions.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Regional Expertise, Global Reach",
      desc: "Deep local knowledge with international connections.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "5+ Years of Industry Experience",
      desc: "Learn from leaders who have shaped 10,000+ success stories.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Post-Admission Support",
      desc: "We are here for students not just till admission, but throughout their academic journey and beyond.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Strong Partner Network",
      desc: "Backed by a Trusted Ecosystem of recruitment experts.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];
  const stats = [
    {
      value: "5+",
      label: "Years of Experience",
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      value: "1k+",
      label: "Success Stories",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-50",
    },
    {
      value: "500+",
      label: "University Partners",
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-50",
    },
    {
      value: "98%",
      label: "Visa Success",
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      color: "bg-amber-50",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900" />
        </div>

        {/* Animated Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white">
                About MasteryAbroad
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              "Not Just A Degree,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                The Globe is Wide
              </span>
              "
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Your trusted partner in global education, turning dreams into
              reality for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Rooted in Experience,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Driven By Innovation
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Mastery Abroad is dedicated to helping students achieve their
                dream of studying overseas. With expert guidance and a
                student-first approach, we simplify the entire process—from
                choosing the right university to securing your visa.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe in transparency, personalized support, and delivering
                real results. Having worked closely with Top universities across
                the world, we bring insider knowledge, credibility, and
                unmatched expertise to the table.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-gray-800 font-semibold italic">
                  "We are not new to this — We are Rooted in Experience, Driven
                  By Innovation. That's what makes us different. That's what
                  makes us MasteryAbroad."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="font-bold text-gray-900">5+ Years</p>
                    <p className="text-sm text-gray-500">Industry Experience</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="font-bold text-gray-900">1000+</p>
                    <p className="text-sm text-gray-500">Success Stories</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-emerald-600" />
                    </div>
                    <p className="font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-500">University Partners</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="font-bold text-gray-900">98%</p>
                    <p className="text-sm text-gray-500">Visa Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MasteryAbroad Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                MasteryAbroad?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              What makes us different. What makes us your trusted partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                    <div
                      className={`text-gray-700 transition-all duration-300`}
                    >
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
              <Star className="w-3 h-3" />
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Complete</span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Study Abroad Solutions
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end guidance to help you achieve your international
              education dreams
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                onMouseEnter={() => setActiveService(idx)}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="absolute inset-[1px] bg-white rounded-2xl -z-10" />

                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3">{service.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                    ✨ {service.benefit}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full">
              <span>👉 Free Consultation | No Hidden Charges</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS SECTION - Vertical Timeline */}
      {/* ============================================ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm mb-4">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your <span className="text-purple-600">Journey</span> Starts Here
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Four simple steps to turn your study abroad dream into reality
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-[27px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />
                )}

                {/* Step Number */}
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className={`w-6 h-6 text-${step.color}-600`} />
                    <h3 className="text-xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.desc}</p>

                  {/* {idx === 0 && (
                    <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition">
                      Book Free Consultation →
                    </button>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header to give context to the stats */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
              Our Impact
            </h2>
            <p className="text-3xl md:text-4xl font-black text-gray-900">
              Trusted by students worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-[2.5rem] border border-gray-100 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Background Glow on Hover */}
                <div
                  className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${stat.color}`}
                />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                  >
                    {stat.icon}
                  </div>

                  {/* Value with Counter Animation style */}
                  <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2 tracking-tighter">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-gray-500 font-medium text-lg leading-tight">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-100 shadow-xl">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Global Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who trusted MasteryAbroad to
              shape their future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  router.push("/countryLists");
                }}
                className="bg-white text-gray-700 px-8 py-3 rounded-full font-semibold border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
              >
                Explore Countries
              </button>
            </div>
          </div>
        </div>
      </section>
      <ContactForm
        headerText="Book Free Consultation"
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
