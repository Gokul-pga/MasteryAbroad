"use client";
import {
  Clock,
  GraduationCap,
  Globe2,
  BookOpen,
  Lightbulb,
  Briefcase,
  Wrench,
  GitBranch,
  TrendingUp,
  Globe,
} from "lucide-react";
import { coursesData } from "@/data/courses";
import { useParams } from "next/navigation";
import { GiHealthNormal } from "react-icons/gi";

const iconMap = {
  briefcase: <Briefcase className="w-6 h-6" />,
  lightbulb: <Lightbulb className="w-6 h-6" />,
  book: <BookOpen className="w-6 h-6" />,
  wrench: <Wrench className="w-6 h-6" />,
  branch: <GitBranch className="w-6 h-6" />,
  health: <GiHealthNormal className="w-6 h-6" />,
};
const benefitIconMap = {
  globe: <Globe className="w-5 h-5" />,
  book: <BookOpen className="w-5 h-5" />,
  briefcase: <Briefcase className="w-5 h-5" />,
  growth: <TrendingUp className="w-5 h-5" />,
  wrench: <Wrench className="w-5 h-5" />,
  branch: <GitBranch className="w-5 h-5" />,
  idea: <Lightbulb className="w-5 h-5" />,
};
export default function UndergraduateDetails() {
  const params = useParams();
  const courseKey = params.course as string;

  const data = coursesData[courseKey as keyof typeof coursesData];

  if (!data) return <div className="p-10">{data} Courses not found</div>;
  const fields = data?.popularFields || [];
  const whyChoose = data?.whyChoose || {};

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-5 pb-20">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="flex flex-row gap-5">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-6">
                  <span className="hover:text-blue-600 cursor-pointer">
                    Home
                  </span>
                  <span>/</span>

                  <span className="text-blue-600">Our Courses</span>
                </nav>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
                  <GraduationCap className="w-4 h-4" />
                  <span>{data?.hero?.badge}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {data?.hero?.title?.normal}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {data?.hero?.title?.highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {data?.hero?.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* <button className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200">
                  Explore Programs
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button> */}

                <button className="bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                  Free Consultation
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-4">
              {/* Duration */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Clock className="text-blue-600 mb-3" size={28} />
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Duration
                </p>

                <p className="text-xl font-bold text-gray-900">
                  {typeof data?.duration === "string"
                    ? data.duration
                    : Object.values(data?.duration || {}).join(" / ")}
                </p>

                <p className="text-sm text-gray-500 mt-1">Full-time study</p>
              </div>

              {/* Recognition (static for now) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Globe2 className="text-green-600 mb-3" size={28} />
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Recognition
                </p>
                <p className="text-xl font-bold text-gray-900">Global</p>
                <p className="text-sm text-gray-500 mt-1">
                  Internationally accredited
                </p>
              </div>

              {/* Ideal For */}
              <div className="col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-xl text-white">
                <GraduationCap className="text-blue-200 mb-3" size={28} />

                <p className="text-blue-100 text-sm font-medium uppercase tracking-wide">
                  Ideal For
                </p>

                <p className="text-lg font-medium leading-relaxed">
                  {data?.idealFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
              How to Apply
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entry Requirements
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Everything you need to secure your spot at a top-tier
              international university.
            </p>
          </div>
          <button className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-all">
            Download Guide
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, i) => (
            <div
              key={i}
              className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <div className="text-blue-600">{req.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {req.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {req.desc}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Popular Majors Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Explore Your Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Popular Study Fields
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from a wide range of disciplines taught by world-class
              faculty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fields.map((major, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${major.color} flex items-center justify-center mb-5 text-white shadow-lg`}
                >
                  {iconMap[major.icon as keyof typeof iconMap]}
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {major.title}
                </h4>

                <div className="flex flex-wrap gap-2 mb-4">
                  {major.jobs.map((job, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {job}
                    </span>
                  ))}
                </div>

                {/* <button className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore Programs
                  <ArrowRight className="w-4 h-4" />
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      {/* <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Partner Institutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Top Universities
            </h2>
            <p className="text-gray-600 text-lg">
              We partner with 500+ accredited universities worldwide
            </p>
          </div>
          <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All Universities
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {universities.map((uni, i) => (
            <div
              key={i}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{uni.name}</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {uni.location}
                  </p>
                </div>
              </div>
              <p className="text-sm text-blue-600 font-medium">{uni.rank}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Why Choose Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
                Why Choose This Path
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                {whyChoose?.title}
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                {whyChoose?.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyChoose?.benefits?.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {
                        benefitIconMap[
                          benefit.icon as keyof typeof benefitIconMap
                        ]
                      }
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {benefit.title}
                      </p>
                      <p className="text-sm text-blue-100">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Ready to Start?
                </h3>
                <p className="text-blue-100 mt-2">
                  Get personalized guidance from our education experts
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Book Free Counseling
                </button>
                <button className="w-full bg-transparent text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  Browse All Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
