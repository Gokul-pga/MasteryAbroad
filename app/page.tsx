"use client";
import Image from "next/image";
import {
  GraduationCap,
  Globe,
  ShieldCheck,
  LaptopIcon,
  AwardIcon,
  Users,
  Coins,
  ArrowRight,
  BookOpen,
  Briefcase,
  Sparkles,
  TrendingUp,
  Heart,
  Award,
  Clock,
  Lightbulb,
  Target,
  FileText,
  Shield,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import worldRotate from "../assets/lottie/World-rotation.json";
import worldMap from "../assets/lottie/World-map.json";
import Lottie from "lottie-react";
import { BsPassport } from "react-icons/bs";
import Link from "next/link";
import { coursesData } from "@/data/courses";
import { useRouter } from "next/navigation";
import { countriesData } from "@/data/countries";
import { useState } from "react";
import ContactForm from "@/components/Modal/ContactForm";

const iconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase />,
  lightbulb: <Lightbulb />,
  book: <BookOpen />,
  globe: <Globe />,
  growth: <TrendingUp />,
  idea: <Lightbulb />,
  health: <Briefcase />, // you can change later
};
export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedMagnet, setSelectedMagnet] = useState("");
  const leadMagnets = [
    {
      id: "profile",
      title: "Free Profile Evaluation",
      description:
        "Get personalized university recommendations based on your profile",
      icon: TrendingUp,
      color: "bg-purple-500",
    },
    {
      id: "universities",
      title: "Top 100 Universities List PDF",
      description: "Rankings, fees, scholarships, and requirements",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      id: "scholarship",
      title: "Scholarship Guide 2026",
      description: "$50,000+ in available scholarships",
      icon: Award,
      color: "bg-green-500",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMagnet) {
      alert("Please select a resource");
      return;
    }
    console.log("Lead captured:", { email, selectedMagnet });
    alert(`Check your email for the ${selectedMagnet} guide!`);
    setEmail("");
    setSelectedMagnet("");
  };
  const visibleCourses = Object.entries(coursesData)
    .slice(0, 3)
    .map(([key, course]) => ({
      title: course.name,
      description: course.hero.description,
      icon: iconMap[course.popularFields?.[0]?.icon] || <BookOpen />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      path: course.path,
    }));

  const reviews = [
    {
      name: "Shivani Reddy",
      university: "University of Toronto",
      country: "Canada",
      rating: 5,
      image: "/students/People.jpg",
      desc: "The entire process—from university selection to visa—was handled smoothly. Studying in Canada felt achievable with the right guidance.",
    },
    {
      name: "Alfred George",
      university: "Technical University of Munich",
      country: "Germany",
      rating: 5,
      image: "/students/People.jpg",
      desc: "I was unsure about studying in Germany, but the support I received made everything clear and manageable. Great experience overall.",
    },
    {
      name: "Pavini Chowdary",
      university: "Ulster University",
      country: "Ireland",
      rating: 5,
      image: "/students/People.jpg",
      desc: "Guidance on applications and scholarships really helped me secure my place in the UK. The process felt structured and stress-free.",
    },
    {
      name: "Bala Subramanian",
      university: "University of Melbourne",
      country: "Australia",
      rating: 4,
      image: "/students/People.jpg",
      desc: "Very supportive team throughout my journey. From choosing the right course to settling in Australia, everything was handled well.",
    },
    {
      name: "Saradhi Goud",
      university: "Southern New Hampshire University",
      country: "USA",
      rating: 5,
      image: "/students/People.jpg",
      desc: "Applying to top universities in the US was challenging, but the right mentorship made a huge difference in my success.",
    },
  ];
  const Userbenefits = [
    {
      title: "Global Recognition",
      desc: "Earn qualifications that are respected and recognized by top employers and institutions across the globe.",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      stat: "2000+",
      statLabel: "Global Partners",
    },
    {
      title: "Multicultural Growth",
      desc: "Immerse yourself in a diverse learning environment that builds your global network and cultural intelligence.",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      stat: "100+",
      statLabel: "Nationalities",
    },
    {
      title: "Career Advancement",
      desc: "Unlock high-paying career opportunities and clear pathways for immigration in the world's strongest economies.",
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      stat: "95%",
      statLabel: "Employed Within 6 Months",
    },
    {
      title: "Work While Studying",
      desc: "Support your lifestyle with part-time work rights (up to 20-24 hours/week) available in most major study destinations.",
      icon: <Coins className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      stat: "20-24 hrs",
      statLabel: "Work Hours/Week",
    },
    {
      title: "Post-Study Work Rights",
      desc: "Gain valuable international work experience with generous stay-back visas after completing your degree.",
      icon: <ShieldCheck className="w-6 h-6" />,
      gradient: "from-rose-500 to-pink-500",
      stat: "2-3 years",
      statLabel: "Stay Back Period",
    },
    {
      title: "Practical Learning",
      desc: "Benefit from industry-focused curriculums that prioritize hands-on experience and real-world application.",
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-500",
      stat: "70%",
      statLabel: "Practical Components",
    },
  ];
  const services = [
    {
      title: "University Shortlisting",
      description:
        "Personalized matches based on your profile, budget & career goals",
      outcome: "90% get into top 3 choices",
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "SOP & Application Support",
      description:
        "Professional guidance for compelling applications that stand out",
      outcome: "3x higher acceptance rate",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Visa Guidance",
      description: "End-to-end visa processing with mock interviews",
      outcome: "98% visa success rate",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Scholarship Assistance",
      description: "Find and win scholarships you qualify for",
      outcome: "Average $15,000 saved",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Career Coaching",
      description: "Resume prep, interview training, job search strategies",
      outcome: "85% placed within 6 months",
      icon: TrendingUp,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Peer Mentorship",
      description: "Connect with current students & alumni",
      outcome: "500+ mentor network",
      icon: Users,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const countries = Object.entries(countriesData)
    .slice(0, 6)
    .map(([key, country]) => ({
      key,
      name: country.name,
      flag: country.flag,
      desc: country.desc,
      features: country.features,
      image: country.hero.image,
      subtitle: country.hero.subtitle,
      // stats: country.stats?.slice(0, 2),
      path: `/countries/${key}`,
    }));

  const achievements = [
    { title: "Years of Experience", value: "5+", icon: <LaptopIcon /> },
    { title: "Success Story", value: "1,000+", icon: <AwardIcon /> },
    { title: "Country Programs", value: "14+", icon: <BsPassport /> },
  ];

  return (
    <main className="bg-white">
      {/* HERO SECTION - Refined with Glassmorphism */}
      <section className="relative h-[85vh] min-h-150 flex items-center overflow-hidden">
        <Image
          src={require("../assets/images/Hero-section-2.avif")}
          alt="Hero"
          fill
          priority
          className="object-cover scale-105" // Slight scale for depth
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl backdrop-blur-sm bg-white/10 p-8 rounded-3xl border border-white/20">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Your Future Awaits
            </span>
            <h1 className="text-6xl font-extrabold text-white leading-tight mb-6">
              Master Your <span className="primary-text ">Global</span> Journey
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We provide expert guidance to help you navigate the complexities
              of international education and secure your spot in world-class
              universities.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setOpen(true)}
                className="primary-bg hover:btn-gold text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
              >
                Book Free Consultation
              </button>
              <Link
                href="/courseLists"
                className="border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Academic Programs
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Courses
            </h2>
            <p className="text-xl text-gray-600">What We Offer</p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
              >
                <div
                  className={`${course.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={course.textColor}>{course.icon}</div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {course.description}
                </p>

                <button
                  onClick={() => {
                    router.push(course.path);
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all group/btn"
                >
                  {" "}
                  Explore more{" "}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />{" "}
                </button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <Link
              href="/courseLists"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-5 transition-all"
            >
              View All Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <style jsx>{`
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50 via-white to-gray-50" />
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-200 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-200 to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Key Benefits for{" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                International Students
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              MasteryAbroad provides the bridge to your global future with
              comprehensive benefits designed for student success.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Userbenefits.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-transparent"
              >
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Top Gradient Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${item.gradient} rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                {/* Icon Container */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${item.gradient} p-px mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <div
                      className={`text-gray-700 group-hover:text-white transition-colors duration-300`}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Stat Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full group-hover:bg-linear-to-r group-hover:from-blue-50 group-hover:to-cyan-50 transition-all duration-300">
                  <TrendingUp className="w-3 h-3 text-blue-600" />
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600">
                    {item.stat} {item.statLabel}
                  </span>
                </div>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent group-hover:w-2/3 transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">
                  Trusted by 1000+ Students
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">
                  5+ Years of Excellence
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">
                  98% Satisfaction Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
                Testimonials
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                What Our Students Say
              </h3>
            </div>
            <div className="hidden md:flex gap-4 mt-6 md:mt-0">
              <p className="text-gray-500 italic">
                Swipe to explore success stories →
              </p>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="min-w-75 md:min-w-112.5 snap-center bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100 relative group transition-all duration-300 hover:-translate-y-2"
              >
                {/* Floating Quote Icon */}
                <div className="absolute top-8 right-8 text-blue-100 group-hover:text-blue-600 transition-colors duration-500">
                  <svg
                    width="45"
                    height="35"
                    viewBox="0 0 45 35"
                    fill="currentColor"
                  >
                    <path d="M13.5 0C6.044 0 0 6.044 0 13.5c0 4.5 2.25 10.5 6.75 13.5 4.5 3 6.75 6 6.75 8h4.5c0-4-2.25-9-6.75-12-4.5-3-4.5-6-4.5-8.5 0-4.142 3.358-7.5 7.5-7.5h4.5V0h-9zm22.5 0c-7.456 0-13.5 6.044-13.5 13.5 0 4.5 2.25 10.5 6.75 13.5 4.5 3 6.75 6 6.75 8h4.5c0-4-2.25-9-6.75-12-4.5-3-4.5-6-4.5-8.5 0-4.142 3.358-7.5 7.5-7.5h4.5V0H36z" />
                  </svg>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={
                        index < review.rating
                          ? "text-orange-400"
                          : "text-gray-200"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                  "{review.desc}"
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-4 border-t pt-6">
                  {/* <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-600 p-0.5"> */}
                  {/* <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover rounded-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div> */}
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">
                      {review.university},{" "}
                      <span className="text-gray-500">{review.country}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Scrollbar CSS (Add to global CSS or use tailwind) */}
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
      {/* COUNTRIES - Destination Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-4xl ">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Study Destinations That{" "}
                <span className="text-blue-600">Transform Lives</span>
              </h2>
              <p className="text-gray-600">
                Choose from the world's most welcoming and prestigious academic
                hubs.
              </p>
            </div>
            <Link
              href="/countryLists"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-5 transition-all"
            >
              View All Destinations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {countries.map((country, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden shadow-xl h-112.5 bg-slate-900"
              >
                {/* Background Image */}
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Floating Flag */}
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

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Country Name */}
                  <h3 className="text-3xl font-bold text-white mb-2 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    {country.name}
                  </h3>

                  {/* Short Description (Visible initially) */}
                  <p className="text-blue-400 font-medium mb-4 group-hover:hidden transition-all">
                    {country.desc}
                  </p>

                  {/* Detailed Features (Visible on Hover) */}
                  <div className="hidden group-hover:block transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <ul className="space-y-2 mb-6">
                      {country.features?.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-200 text-xs leading-relaxed"
                        >
                          <span className="text-blue-400 mt-1">✔</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <Link href={country.path}>
                    <button className="group/btn relative px-6 py-3 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

                      <div className="flex items-center gap-2 text-white font-semibold text-sm">
                        <span>Explore {country.name}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 primary-bg">
        <div className="  rounded-[3rem] relative overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row items-center">
          {/* LEFT CONTENT */}
          <div className="flex-1 z-10 w-full">
            {/* Sub-header */}
            <div className="flex items-center gap-2 text-white mb-6 font-bold tracking-[0.2em] text-sm group">
              <span className="text-orange-500 animate-pulse">★</span>
              OUR ACHIEVEMENT
              <span className="text-orange-500 animate-pulse">★</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 leading-tight">
              We Proudly Represent
            </h2>

            {/* STATS ROW */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {achievements.map((item, i) => (
                <div key={i} className="flex items-center gap-6 relative group">
                  {/* SVG Icon (Placeholder - replace with your actual SVG components) */}
                  <div className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {/* Example Icon */}
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M4 19h16M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                      {item.value}
                    </span>
                    <span className="text-blue-200/70 text-sm md:text-base font-medium mt-1">
                      {item.title}
                    </span>
                  </div>

                  {/* Dotted Divider - Only between items */}
                  {i !== achievements.length - 1 && (
                    <div className="hidden lg:block h-12 w-px border-l-2 border-dotted border-orange-500/50 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT: FLOATING GLOBE */}
          <div className="relative mt-12 lg:mt-0">
            {/* Worldwide Badge */}
            <div className="absolute top-4 left-0 bg-white shadow-2xl rounded-full px-4 py-1.5 flex items-center gap-2 z-20 animate-bounce">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <span className="text-[#060370] font-black text-[10px] uppercase tracking-tighter">
                Worldwide
              </span>
            </div>

            {/* Lottie Container */}
            <div className="w-75 h-75 md:w-112.5 md:h-112.5 lg:scale-125 lg:translate-x-12">
              <Lottie animationData={worldRotate} loop={true} />
            </div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full -z-10" />
          </div>

          {/* Background Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </div>
        <div className="">
          <Lottie animationData={worldMap} loop={true} />
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              We Don't Just Guide — We{" "}
              <span className="text-blue-600">Guarantee Results</span>
            </h2>
            <p className="text-gray-600">
              Every service is designed to maximize your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`${service.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                >
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>

                <div className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  🎯 {service.outcome}
                </div>
              </div>
            ))}
          </div>

          {/* Free Consultation Banner */}
          <div className="mt-12 bg-gray-900 rounded-2xl p-6 text-center">
            <p className="text-white text-lg font-semibold">
              👉 Free Consultation | No Hidden Charges
            </p>
            <p className="text-gray-300 text-sm mt-1">
              Get personalized advice from our experts
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
              🎁 Free Resources
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Get Free Resources to Start Your Journey
            </h2>
            <p className="text-gray-600">
              No credit card required • Instant download
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {leadMagnets.map((magnet) => (
              <div
                key={magnet.id}
                onClick={() => setSelectedMagnet(magnet.id)}
                className={`cursor-pointer rounded-xl p-5 transition-all duration-300 ${
                  selectedMagnet === magnet.id
                    ? "ring-2 ring-blue-500 shadow-lg bg-white"
                    : "bg-white hover:shadow-md"
                }`}
              >
                <div
                  className={`${magnet.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}
                >
                  <magnet.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {magnet.title}
                </h3>
                <p className="text-gray-500 text-sm">{magnet.description}</p>
                {selectedMagnet === magnet.id && (
                  <CheckCircle className="w-5 h-5 text-green-500 mt-2" />
                )}
              </div>
            ))}
          </div>
          {/* Urgency Banner */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <p className="text-yellow-800 font-semibold">
              ⚡ Limited time: Get personalized counseling worth ₹5,000 for FREE
            </p>
          </div>{" "}
          <p className="text-xs text-gray-400 text-center mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
      {/*  */}
      <ContactForm
        headerText="Book Free Consultation"
        open={open}
        onClose={() => setOpen(false)}
      />
    </main>
  );
}
