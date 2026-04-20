"use client";

import Link from "next/link";
import { ArrowRight, Star, GraduationCap, Users } from "lucide-react";
import { countriesData } from "@/data/countries";
import Image from "next/image";

// icon mapping
const statIconMap: Record<string, React.ReactNode> = {
  star: <Star className="w-4 h-4" />,
  graduation: <GraduationCap className="w-4 h-4" />,
  users: <Users className="w-4 h-4" />,
};

export default function CountriesPage() {
  const countries = Object.entries(countriesData).map(([key, country]) => ({
    key,
    name: country.name,
    flag: country.flag,
    image: country.hero.image,
    subtitle: country.hero.subtitle,
    stats: country.stats?.slice(0, 2),
    path: `/countries/${key}`,
  }));

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Study Destinations
          </h1>
          <p className="text-gray-600 text-lg">
            Explore top countries for your international education journey
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <Link key={country.key} href={country.path}>
              <div className="group relative cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={40}
                      height={40}
                      className="rounded-full h-10 w-10 object-cover"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    {country.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {country.subtitle}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {country.stats?.map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {statIconMap[stat.icon]}
                        {stat.value}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
                    Explore Country
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
