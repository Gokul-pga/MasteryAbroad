"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { coursesData } from "@/data/courses";

// optional icon map (reuse your existing one)
const iconMap: Record<string, React.ReactNode> = {
  briefcase: <BookOpen />,
  lightbulb: <BookOpen />,
  book: <BookOpen />,
  globe: <BookOpen />,
};

export default function CoursesPage() {
  const courses = Object.entries(coursesData).map(([key, course]) => ({
    key,
    title: course.name,
    description: course.hero.description,
    duration: course.duration,
    path: course.path || `/courses/${key}`,
    icon: iconMap[course.popularFields?.[0]?.icon] || <BookOpen />,
  }));

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h1>
          <p className="text-gray-600 text-lg">
            Discover programs tailored for your global career journey
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.key} href={course.path}>
              <div className="group cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100">
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 text-blue-600 group-hover:scale-110 transition">
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Duration */}
                <p className="text-sm text-gray-400 mb-4">
                  Duration:{" "}
                  <span className="font-medium text-gray-700">
                    {typeof course.duration === "string"
                      ? course.duration
                      : "Multiple options"}
                  </span>
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
