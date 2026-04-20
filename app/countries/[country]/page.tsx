"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { countriesData } from "@/data/countries";
import {
  MapPin,
  GraduationCap,
  CheckCircle,
  Star,
  Users,
  Award,
} from "lucide-react";

export default function CountryPage() {
  const params = useParams();
  const countryKey = params.country as string;

  const data = countriesData[countryKey as keyof typeof countriesData];

  if (!data) return <div className="p-10">Country not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={data.hero.image}
          alt={data.name}
          fill
          className="object-cover brightness-70"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">
            Study Destinations
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
            Study in <span className="text-blue-400">{data.name}</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -translate-y-12 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-xl flex items-center gap-6 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl">
                {stat.icon === "star" && <Star className="text-yellow-500" />}
                {stat.icon === "graduation" && (
                  <GraduationCap className="text-blue-500" />
                )}
                {stat.icon === "users" && <Users className="text-green-500" />}
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3">
            <div className="relative border-l-4 border-blue-600 pl-8 py-2">
              <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic">
                <span className="text-5xl font-serif text-blue-600 float-left mr-3 mt-1 leading-none">
                  {data.name.charAt(0)}
                </span>
                {data.intro.text}
              </p>
              <p className="mt-6 text-gray-600 text-lg leading-loose">
                <span className="text-blue-600 font-semibold underline decoration-blue-200 underline-offset-4">
                  {data.intro.highlight}
                </span>
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-87.5 aspect-4/3">
              <Image
                src={data?.intro?.image}
                alt={data.name}
                fill
                unoptimized
                className="object-cover rounded-4xl shadow-xl border-8 border-gray-50"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              A Global Hub for <br />
              <span className="text-blue-600">Research & Innovation</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {data.hero.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {data.tags.map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl text-blue-700 font-semibold text-sm"
                >
                  <CheckCircle size={16} /> {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {data.universities.map((uni, i) => (
              <div
                key={i}
                className={`relative rounded-3xl overflow-hidden h-64 ${
                  i % 2 === 0 ? "translate-y-8" : ""
                }`}
              >
                <Image
                  src={uni.img}
                  alt={uni.name}
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="25vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-bold text-blue-400 uppercase mb-1">
                    {uni.rank}
                  </p>
                  <p className="text-white font-bold text-sm leading-tight">
                    {uni.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {data.visa.title}
            </h2>

            <p className="text-gray-600 mb-8">{data.visa.description}</p>

            <div className="grid gap-4">
              {data.visa.requirements.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-6 text-gray-900">
              Visa Application Fees
            </h3>

            <div className="space-y-4">
              {data.visa.fees.map((fee, i) => (
                <div
                  key={i}
                  className={`flex justify-between ${
                    i !== data.visa.fees.length - 1
                      ? "pb-4 border-b border-gray-50"
                      : ""
                  }`}
                >
                  <span className="text-gray-600">{fee.label}</span>
                  <span className="font-bold text-gray-900">{fee.amount}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-center text-gray-400 italic">
              *Physical visa labels are not required for entry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Financial Planning
            </h2>
            <p className="text-gray-600 mt-2">
              A clear breakdown of your investment in {data.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6">
                Weekly Living Costs
              </h3>

              <ul className="space-y-4">
                {data.costs.map((c, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span className="text-gray-500">{c.category}</span>
                    <span className="font-semibold text-gray-900">
                      {c.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 flex flex-col gap-6  justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-blue-600 p-8 rounded-3xl text-white">
                  <p className="text-blue-100 text-sm font-medium mb-1">
                    Bachelor's Degree
                  </p>
                  <h4 className="text-2xl font-bold">
                    {data.tuition.bachelors}
                    <span className="text-lg font-light"> /yr</span>
                  </h4>
                </div>

                <div className="bg-gray-900 p-8 rounded-3xl text-white">
                  <p className="text-gray-400 text-sm font-medium mb-1">
                    Master's / Ph.D
                  </p>
                  <h4 className="text-2xl font-bold">
                    {data.tuition.masters}
                    <span className="text-lg font-light"> /yr</span>
                  </h4>
                </div>
              </div>

              {/* <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-sm">
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-gray-900">
                    Scholarship Opportunities
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Get expert help to secure merit-based financial aid.
                  </p>
                </div>

                <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                  Check Eligibility
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              Top-Ranked <span className="text-blue-600">Institutions</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg">
              Explore top universities with global impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.institutes.map((uni, i) => (
            <div
              key={i}
              className="group relative h-112.5 w-full rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <Image
                src={uni.img}
                alt={uni.name}
                fill
                quality={80}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute top-6 left-6">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/30 uppercase tracking-widest">
                  {uni.tag}
                </span>
              </div>

              <div className="absolute bottom-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <MapPin size={16} />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    {uni.location}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                  {uni.name}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                  {uni.desc}
                </p>

                {/* <div className="mt-6 flex items-center justify-between">
                  <button className="text-white text-sm font-bold flex items-center gap-2 hover:text-blue-400 transition-colors">
                    View Programs <Award size={16} />
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
