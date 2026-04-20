export const coursesData = {
  undergraduate: {
    name: "Undergraduate Programs",
    hero: {
      badge: "Bachelor's Programs",
      title: {
        normal: "Shape Your Future with a",
        highlight: "Global Degree",
      },
      description:
        "Undergraduate programs are typically the first level of university studies, lasting 3 to 4 years depending on the country and course.",
    },
    duration: "3–4 years",
    requirements:
      "High school diploma, English proficiency (IELTS/TOEFL), academic transcripts",
    idealFor:
      "Students completing secondary education and seeking a globally recognized degree.",
    popularFields: [
      {
        title: "Business & Finance",
        icon: "briefcase",
        color: "from-blue-500 to-cyan-500",
        jobs: ["Investment Banking", "Consulting", "Entrepreneurship"],
      },
      {
        title: "Engineering & Tech",
        icon: "lightbulb",
        color: "from-orange-500 to-red-500",
        jobs: ["Software Dev", "AI/ML", "Robotics"],
      },
      {
        title: "Health Sciences",
        icon: "health",
        color: "from-emerald-500 to-teal-500",
        jobs: ["Medicine", "Pharmacy", "Biotech"],
      },
      {
        title: "Arts & Design",
        icon: "book",
        color: "from-purple-500 to-pink-500",
        jobs: ["Graphic Design", "Architecture", "Fine Arts"],
      },
    ],
    whyChoose: {
      title: "Why Start with a Bachelor's Abroad?",
      description:
        "Studying abroad for your undergraduate degree allows you to adapt to a new culture early, master a foreign language, and build a global network.",
      benefits: [
        {
          title: "Early Global Exposure",
          desc: "Adapt to international environments from the beginning",
          icon: "globe",
        },
        {
          title: "Strong Foundation",
          desc: "Build deep academic knowledge in your field",
          icon: "book",
        },
      ],
    },
    path: "/courses/undergraduate",
  },

  postgraduate: {
    name: "Postgraduate Programs",
    hero: {
      badge: "Master’s Programs",
      title: {
        normal: "Advance Your Career with",
        highlight: "Expert Knowledge",
      },
      description:
        "Postgraduate or Master’s degrees are advanced academic programs for students who have completed a bachelor’s degree.",
    },
    duration: "1–2 years",
    requirements:
      "Relevant undergraduate degree, English proficiency, academic and professional references",
    idealFor:
      "Graduates aiming to specialize in a particular field or improve their career prospects.",
    popularFields: [
      {
        title: "MBA & Management",
        icon: "briefcase",
        color: "from-blue-500 to-indigo-500",
        jobs: ["Leadership", "Consulting", "Strategy"],
      },
      {
        title: "Data Science",
        icon: "lightbulb",
        color: "from-yellow-500 to-orange-500",
        jobs: ["Data Analyst", "AI Engineer", "ML Engineer"],
      },
    ],
    whyChoose: {
      title: "Why Choose a Master’s Degree Abroad?",
      description:
        "Master’s programs help you specialize, boost your career, and gain global industry exposure.",
      benefits: [
        {
          title: "Specialization",
          desc: "Gain expertise in a focused domain",
          icon: "briefcase",
        },
        {
          title: "Career Growth",
          desc: "Increase job opportunities and salary potential",
          icon: "growth",
        },
      ],
    },
    path: "/courses/postgraduate",
  },

  research: {
    name: "Research Degrees (MPhil / PhD)",
    hero: {
      badge: "Doctorate Programs",
      title: {
        normal: "Drive Innovation through",
        highlight: "Research Excellence",
      },
      description:
        "Research degrees focus on original academic research and are suited for students interested in academic, scientific, or professional research careers.",
    },
    duration: {
      mphil: "1–2 years",
      phd: "3–5 years",
    },
    requirements:
      "Master’s or bachelor’s degree with strong academic record, research proposal, supervisor consent",
    idealFor:
      "Students passionate about innovation, research, and scholarly contribution.",
    popularFields: [
      {
        title: "Scientific Research",
        icon: "lightbulb",
        color: "from-green-500 to-emerald-500",
        jobs: ["Scientist", "Lab Researcher"],
      },
      {
        title: "Academic Careers",
        icon: "book",
        color: "from-purple-500 to-indigo-500",
        jobs: ["Professor", "Lecturer"],
      },
    ],
    whyChoose: {
      title: "Why Pursue Research Degrees Abroad?",
      description:
        "Research programs allow you to contribute original knowledge, work with global experts, and build a strong academic or scientific career.",
      benefits: [
        {
          title: "Innovation & Discovery",
          desc: "Work on cutting-edge research and real-world problems",
          icon: "idea",
        },
        {
          title: "Academic Excellence",
          desc: "Collaborate with world-renowned professors",
          icon: "book",
        },
        {
          title: "Global Recognition",
          desc: "Earn internationally respected qualifications",
          icon: "globe",
        },
        {
          title: "Career in Research",
          desc: "Opportunities in academia, labs, and R&D",
          icon: "briefcase",
        },
      ],
    },
    path: "/courses/research",
  },

  hnd: {
    name: "Higher National Diplomas (HNDs)",
    hero: {
      badge: "HND Programs",
      title: {
        normal: "Fast-Track Your Career with",
        highlight: "Practical Education",
      },
      description:
        "HNDs are work-related (vocational) higher education qualifications offered mainly in the UK and select institutions globally.",
    },
    duration: "2 years full-time",
    requirements: "High school diploma, English proficiency",
    idealFor:
      "Students seeking a fast-track career or looking to progress to a final-year bachelor’s top-up degree.",
    popularFields: [
      {
        title: "Business",
        icon: "briefcase",
        color: "from-blue-500 to-cyan-500",
        jobs: ["Admin", "Sales"],
      },
      {
        title: "IT",
        icon: "lightbulb",
        color: "from-orange-500 to-red-500",
        jobs: ["Support", "Developer"],
      },
    ],
    whyChoose: {
      title: "Why Choose an HND Program?",
      description:
        "HND programs are practical, career-focused qualifications that prepare you for immediate employment or progression to a degree.",
      benefits: [
        {
          title: "Career-Focused Learning",
          desc: "Gain hands-on skills aligned with industry needs",
          icon: "wrench",
        },
        {
          title: "Faster Completion",
          desc: "Complete your qualification in just 2 years",
          icon: "growth",
        },
        {
          title: "Pathway to Degree",
          desc: "Progress to final-year bachelor's top-up programs",
          icon: "branch",
        },
        {
          title: "Affordable Education",
          desc: "Lower cost compared to full degrees",
          icon: "briefcase",
        },
      ],
    },
    path: "/courses/hnd",
  },

  diploma: {
    name: "Diplomas & Advanced Diplomas",
    hero: {
      badge: "Diploma Programs",
      title: {
        normal: "Gain Industry Skills with",
        highlight: "Practical Learning",
      },
      description:
        "Diploma courses are career-focused qualifications designed to provide industry-specific knowledge and practical skills.",
    },
    duration: {
      diploma: "1–2 years",
      advanced: "2–3 years",
    },
    requirements: "Varies; often high school completion",
    idealFor:
      "Students aiming to gain practical skills for immediate employment or further study.",
    popularFields: [
      {
        title: "Design",
        icon: "book",
        color: "from-pink-500 to-rose-500",
        jobs: ["Designer", "Animator"],
      },
      {
        title: "Business",
        icon: "briefcase",
        color: "from-blue-500 to-indigo-500",
        jobs: ["Marketing", "HR"],
      },
    ],
    whyChoose: {
      title: "Why Choose Diploma Programs?",
      description:
        "Diplomas provide practical, industry-relevant skills that help you enter the workforce quickly or continue your education.",
      benefits: [
        {
          title: "Skill-Based Learning",
          desc: "Focus on real-world, job-ready skills",
          icon: "wrench",
        },
        {
          title: "Short Duration",
          desc: "Complete courses quickly and start working",
          icon: "growth",
        },
        {
          title: "Flexible Pathways",
          desc: "Option to upgrade to advanced diplomas or degrees",
          icon: "branch",
        },
        {
          title: "Industry Exposure",
          desc: "Hands-on training and internships",
          icon: "briefcase",
        },
      ],
    },
    path: "/courses/diploma",
  },

  vet: {
    name: "Vocational Education & Training (VET)",
    hero: {
      badge: "VET Programs",
      title: {
        normal: "Learn by Doing with",
        highlight: "Hands-On Training",
      },
      description:
        "VET programs focus on practical skills and industry-based learning, often linked to specific trades or careers.",
    },
    duration: "6 months to 2 years",
    requirements: "High school or equivalent",
    idealFor:
      "Students looking for job-ready qualifications with hands-on training.",
    popularFields: [
      {
        title: "Construction",
        icon: "wrench",
        color: "from-gray-500 to-gray-700",
        jobs: ["Technician", "Supervisor"],
      },
      {
        title: "Hospitality",
        icon: "book",
        color: "from-yellow-500 to-orange-500",
        jobs: ["Chef", "Hotel Manager"],
      },
    ],
    whyChoose: {
      title: "Why Choose Vocational Training?",
      description:
        "VET programs focus on practical, hands-on training designed to prepare students for specific trades and industries.",
      benefits: [
        {
          title: "Hands-On Experience",
          desc: "Learn by doing with real-world training",
          icon: "wrench",
        },
        {
          title: "Job-Ready Skills",
          desc: "Direct entry into skilled professions",
          icon: "briefcase",
        },
        {
          title: "Flexible Duration",
          desc: "Short-term programs with quick outcomes",
          icon: "growth",
        },
        {
          title: "Industry Demand",
          desc: "High demand for skilled workers globally",
          icon: "globe",
        },
      ],
    },
    path: "/courses/vet",
  },

  pathway: {
    name: "Twinning / Pathway Programs",
    hero: {
      badge: "Pathway Programs",
      title: {
        normal: "Study Globally with",
        highlight: "Flexible Pathways",
      },
      description:
        "These programs allow students to start their studies in one country and complete them in another at a partner institution.",
    },
    duration: "Varies (1+2 or 2+2 years)",
    requirements: "Varies depending on institutions",
    idealFor:
      "Students seeking cost-effective and globally recognized degrees with international exposure.",
    popularFields: [
      {
        title: "International Transfer",
        icon: "branch",
        color: "from-indigo-500 to-purple-500",
        jobs: ["Global Careers"],
      },
    ],
    whyChoose: {
      title: "Why Choose Pathway Programs?",
      description:
        "Pathway programs offer a flexible and cost-effective way to earn international degrees while studying across multiple countries.",
      benefits: [
        {
          title: "Global Exposure",
          desc: "Study in multiple countries and cultures",
          icon: "globe",
        },
        {
          title: "Cost Savings",
          desc: "Reduce tuition by starting locally",
          icon: "briefcase",
        },
        {
          title: "Smooth Transition",
          desc: "Easier academic adaptation to foreign systems",
          icon: "book",
        },
        {
          title: "University Partnerships",
          desc: "Access top universities through collaborations",
          icon: "branch",
        },
      ],
    },
    path: "/courses/pathway",
  },
};
