// Mock data for Zafar Imam's Portfolio Website

export const personalInfo = {
  name: "ZAFAR IMAM",
  title: "Senior Software Engineer",
  tagline: "Crafting exceptional mobile experiences with 10 years of experience in mobile app development",
  email: "zafarimam512@gmail.com",
  phone: "+91 78349 08329",
  linkedin: "https://www.linkedin.com/in/zafarimam77/",
  github: "https://github.com/ZafarQuaere/",
  location: "Delhi, India",
  androidLogo: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwbG9nb3xlbnwwfHx8fDE3NTY3NDkxMDV8MA&ixlib=rb-4.1.0&q=85",
  developmentBg: "https://images.unsplash.com/photo-1604536264507-020ce894daf1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTY3NDkxMTB8MA&ixlib=rb-4.1.0&q=85"
};

export const aboutMe = {
  summary: "Seasoned Software Engineer with 10 years of expertise in creating and launching high-quality mobile applications. Skilled in designing robust project architectures using MVVM and MVP models, with a strong focus on building user-friendly cross-platform mobile solutions.",
  story: "My journey in mobile development began over a decade ago, and I've been passionate about creating innovative mobile applications that solve real-world problems. Throughout my career, I've led development teams, mentored junior developers, and consistently delivered high-quality mobile solutions for enterprise and consumer applications across Android and Flutter platforms.",
  highlights: [
    "10+ years of mobile app development experience",
    "Led development teams and mentored junior developers",
    "Published multiple successful apps on Google Play Store",
    "Expert in modern mobile architecture patterns (MVVM, MVP)",
    "Strong focus on cross-platform development and user experience"
  ]
};

export const skills = {
  "Mobile Development": [
    "Android Application Development",
    "Flutter Development",
    "Kotlin",
    "Dart",
    "Core Java",
    "Android Jetpack Components",
    "Material Design"
  ],
  "Architecture & Patterns": [
    "MVVM",
    "MVP",
    "Clean Architecture",
    "Repository Pattern",
    "OOP Principles"
  ],
  "Modern Android": [
    "Jetpack Compose",
    "Lifecycles",
    "NavGraph",
    "ViewModel",
    "LiveData",
    "DataBinding"
  ],
  "Reactive Programming": [
    "RxJava",
    "RxAndroid",
    "Kotlin Flows",
    "Coroutines"
  ],
  "Dependency Injection": [
    "Dagger",
    "Dagger2",
    "Hilt"
  ],
  "Database & Storage": [
    "SQLite",
    "Room DB",
    "DataStore",
    "SharedPreferences"
  ],
  "Testing & Quality": [
    "JUnit",
    "Mockito",
    "MockK",
    "Robolectric",
    "Appium Java"
  ],
  "Tools & Services": [
    "Android Studio",
    "Firebase",
    "Crashlytics",
    "MixPanel",
    "Git",
    "Jenkins",
    "Jira"
  ]
};

export const experience = [
  {
    id: 1,
    title: "Associate Staff Engineer",
    company: "Nagarro",
    location: "Remote",
    duration: "November 2021 - Present",
    type: "Full-time",
    description: "Leading Android development initiatives and architectural decisions for multiple high-impact mobile applications.",
    responsibilities: [
      "Spearheaded development of multiple Android applications using modern architecture principles",
      "Engineered scalable solutions with MVVM and Android Jetpack components",
      "Developed reusable UI components, reducing development time for new features",
      "Mentored team of junior developers, conducting regular code reviews and discussions"
    ],
    technologies: ["Kotlin", "Android Jetpack", "MVVM", "Jetpack Compose", "Hilt", "Coroutines"]
  },
  {
    id: 2,
    title: "Lead Engineer",
    company: "HCL Technologies Pvt Ltd",
    location: "India",
    duration: "November 2017 - October 2021",
    type: "Full-time",
    description: "Led development teams working on enterprise-level Android and Flutter applications with focus on scalability and performance.",
    responsibilities: [
      "Led development teams working on enterprise-level Android applications",
      "Developed cross-platform mobile applications using Flutter and Dart",
      "Implemented architecture patterns and best practices across multiple projects",
      "Collaborated with cross-functional teams to deliver high-quality mobile solutions",
      "Optimized app performance and maintained CI/CD pipelines"
    ],
    technologies: ["Android", "Flutter", "Kotlin", "Dart", "Java", "MVP", "RxJava", "Retrofit", "Git"]
  },
  {
    id: 3,
    title: "Android Application Developer",
    company: "Optiontown",
    location: "Delhi, India",
    duration: "April 2016 - November 2017",
    type: "Full-time",
    description: "Developed and maintained the core Optiontown Android application with focus on user experience and performance.",
    responsibilities: [
      "Developed and maintained the Optiontown Android application",
      "Implemented key features and functionality while ensuring smooth user experience",
      "Collaborated with design and backend teams to integrate API services",
      "Participated in agile development processes and release management"
    ],
    technologies: ["Android", "Java", "SQLite", "REST APIs", "Material Design"]
  },
  {
    id: 4,
    title: "Android Application Developer",
    company: "Quaere-e-Technologies Pvt Ltd",
    location: "NOIDA, India",
    duration: "September 2015 - April 2016",
    type: "Full-time",
    description: "Created Android applications from concept to deployment with emphasis on Material Design guidelines.",
    responsibilities: [
      "Created Android applications from concept to deployment on Google Play Store",
      "Designed and implemented user interfaces following Material Design guidelines",
      "Integrated third-party libraries and services for enhanced functionality",
      "Performed testing and debugging to ensure app stability and performance"
    ],
    technologies: ["Android", "Java", "Material Design", "SQLite", "Third-party APIs"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Uncle Delivery",
    subtitle: "On-demand logistics and delivery platform",
    description: "A comprehensive logistics and delivery app connecting users with local drivers for on-demand parcel and goods transportation.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.uncledelivery.user",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
    problemStatement: "Traditional courier services lack real-time tracking and instant booking capabilities, causing inconvenience for users needing quick delivery solutions.",
    keyFeatures: [
      "Real-time tracking with live location updates",
      "Instant booking with driver matching algorithm",
      "Secure payment gateway integration",
      "Push notifications for delivery status updates",
      "Rating and review system for drivers"
    ],
    techStack: {
      language: "Kotlin",
      architecture: "MVVM + Repository Pattern",
      ui: "Material Design + Custom Views",
      stateManagement: "LiveData + StateFlow",
      networking: "Retrofit + OkHttp + Coroutines",
      database: "Room + DataStore",
      di: "Hilt",
      other: "Firebase, Google Maps, WorkManager, Glide"
    },
    challenges: [
      {
        challenge: "Real-time location tracking with minimal battery consumption",
        solution: "Implemented optimized location updates using FusedLocationProvider with smart interval adjustments based on delivery status"
      },
      {
        challenge: "Handling offline scenarios during delivery process",
        solution: "Built robust offline-first architecture using Room database with automatic sync when connectivity is restored"
      }
    ],
    results: [
      "Successfully published on Google Play Store",
      "Achieved 40% faster delivery matching through optimized algorithms",
      "Reduced app crashes by 85% through comprehensive error handling"
    ]
  },
  {
    id: 2,
    title: "TOD (Watch Football & Movies)",
    subtitle: "Premium streaming platform for sports and entertainment",
    description: "A subscription-based streaming platform offering live sports broadcasting and extensive library of movies and TV shows.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.todtv.tod",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
    problemStatement: "Users needed a unified platform to access both live sports content and entertainment media with seamless streaming experience across devices.",
    keyFeatures: [
      "High-quality live sports streaming with multiple resolution options",
      "Personalized content recommendations using ML algorithms",
      "Multi-device synchronization and continue watching feature",
      "Offline download capability for selected content",
      "Social features for sharing and discussing content"
    ],
    techStack: {
      language: "Kotlin",
      architecture: "Clean MVVM + Use Cases",
      ui: "Jetpack Compose + Material 3",
      stateManagement: "Kotlin Flow + Compose State",
      networking: "Retrofit + OkHttp + Coroutines",
      database: "Room + DataStore",
      di: "Hilt",
      other: "ExoPlayer, Firebase, Coil, WorkManager"
    },
    challenges: [
      {
        challenge: "Optimizing video streaming performance across different network conditions",
        solution: "Implemented adaptive bitrate streaming with intelligent quality adjustment based on network speed and device capabilities"
      },
      {
        challenge: "Managing large content catalogs with efficient caching",
        solution: "Developed smart caching strategy using Room database with LRU eviction policy and background sync"
      }
    ],
    results: [
      "Published on Google Play with 100K+ downloads",
      "Achieved 99.5% uptime for live streaming events",
      "Reduced content loading time by 60% through optimized caching"
    ]
  },
  {
    id: 3,
    title: "Ulta Beauty",
    subtitle: "Comprehensive beauty retail and discovery platform",
    description: "A feature-rich beauty retail app enabling users to discover, try, and purchase cosmetics with personalized recommendations and virtual try-on capabilities.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ulta&hl=en_IN",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403248?w=600&h=400&fit=crop",
    problemStatement: "Beauty shoppers needed a comprehensive platform to discover products, access virtual try-on features, and make informed purchase decisions with personalized recommendations.",
    keyFeatures: [
      "Virtual try-on using AR technology",
      "AI-powered personalized product recommendations",
      "Loyalty program integration with points tracking",
      "Extensive product catalog with detailed reviews",
      "Social sharing and beauty community features"
    ],
    techStack: {
      language: "Kotlin",
      architecture: "MVVM + Repository + Use Cases",
      ui: "Material Design + Custom Components",
      stateManagement: "LiveData + Flow",
      networking: "Retrofit + GraphQL + Coroutines",
      database: "Room + DataStore",
      di: "Hilt",
      other: "ARCore, Firebase, Glide, CameraX"
    },
    challenges: [
      {
        challenge: "Implementing accurate AR-based virtual try-on feature",
        solution: "Integrated ARCore with custom face detection algorithms and optimized rendering for real-time makeup application"
      },
      {
        challenge: "Handling large product catalogs with complex filtering",
        solution: "Implemented efficient pagination with Room database indexing and search optimization using FTS4"
      }
    ],
    results: [
      "Successfully integrated with existing Ulta ecosystem",
      "Improved user engagement by 45% through AR features",
      "Achieved 4.5+ app store rating through enhanced UX"
    ]
  },
  {
    id: 4,
    title: "Ghatna Chakra",
    subtitle: "Comprehensive exam preparation platform",
    description: "An educational app focused on competitive exam preparation, particularly for Indian government exams, offering study materials, quizzes, and mock tests.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ssgcp.app",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    problemStatement: "Students preparing for competitive exams lacked a comprehensive platform offering quality study materials, practice tests, and performance analytics in one place.",
    keyFeatures: [
      "Comprehensive study materials organized by subjects",
      "Adaptive mock tests with real exam simulation",
      "Detailed performance analytics and progress tracking",
      "Offline access to downloaded content",
      "Discussion forums for peer learning"
    ],
    techStack: {
      language: "Kotlin",
      architecture: "MVVM + Clean Architecture",
      ui: "Material Design + Custom Views",
      stateManagement: "LiveData + StateFlow",
      networking: "Retrofit + OkHttp + Coroutines",
      database: "Room + SQLCipher",
      di: "Dagger Hilt",
      other: "Firebase, WorkManager, PDFRenderer"
    },
    challenges: [
      {
        challenge: "Secure content delivery to prevent piracy of premium study materials",
        solution: "Implemented content encryption using SQLCipher and secure PDF rendering with watermarking"
      },
      {
        challenge: "Creating engaging quiz interface with complex question types",
        solution: "Developed flexible question framework supporting multiple formats with smooth animations and instant feedback"
      }
    ],
    results: [
      "Published on Google Play with 50K+ active users",
      "Achieved 92% exam success rate among premium users",
      "Reduced content piracy by 95% through security measures"
    ]
  },
  {
    id: 5,
    title: "Toyota Link",
    subtitle: "Connected car companion for Toyota vehicles",
    description: "A comprehensive connected car app designed to enhance the Toyota driving experience through vehicle diagnostics, remote control features, and navigation tools.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=au.com.toyota.EntuneToyota&hl=en_IN",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=400&fit=crop",
    problemStatement: "Toyota owners needed a unified platform to monitor vehicle health, access remote features, and enhance their driving experience through connected services.",
    keyFeatures: [
      "Real-time vehicle diagnostics and health monitoring",
      "Remote start, lock/unlock, and climate control",
      "GPS tracking and anti-theft features",
      "Maintenance reminders and service scheduling",
      "Integration with Toyota's ecosystem services"
    ],
    techStack: {
      language: "Kotlin",
      architecture: "MVVM + Repository Pattern",
      ui: "Material Design + Automotive UX",
      stateManagement: "LiveData + Flow",
      networking: "Retrofit + WebSocket + Coroutines",
      database: "Room + DataStore",
      di: "Hilt",
      other: "Firebase, Google Maps, Bluetooth LE, WorkManager"
    },
    challenges: [
      {
        challenge: "Ensuring reliable communication with vehicle systems via multiple protocols",
        solution: "Implemented robust communication layer with fallback mechanisms supporting Bluetooth LE, WiFi, and cellular connections"
      },
      {
        challenge: "Optimizing battery usage for continuous vehicle monitoring",
        solution: "Developed smart polling mechanism with adaptive intervals based on vehicle state and user preferences"
      }
    ],
    results: [
      "Successfully deployed across Toyota's global markets",
      "Achieved 98% uptime for critical remote functions",
      "Improved customer satisfaction scores by 35%"
    ]
  },
  {
    id: 6,
    title: "Lexus Inform",
    subtitle: "Premium connected experience for Lexus vehicles",
    description: "An elite connected car application providing Lexus owners with advanced vehicle control, premium services, and luxury-focused features.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=au.com.intelematics.EntuneLexus&hl=en_AU",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop",
    problemStatement: "Lexus owners expected a premium connected experience that matched the luxury standards of their vehicles with advanced features and seamless integration.",
    keyFeatures: [
      "Premium vehicle diagnostics with predictive maintenance",
      "Advanced remote climate and seat control",
      "Concierge services integration",
      "Premium navigation with traffic optimization",
      "Exclusive Lexus owner benefits and services"
    ],
    techStack: {
      language: "Kotlin",
      architecture: "Clean MVVM + Domain Layer",
      ui: "Material Design + Luxury UX Components",
      stateManagement: "Kotlin Flow + Compose State",
      networking: "Retrofit + gRPC + Coroutines",
      database: "Room + Encrypted Storage",
      di: "Hilt",
      other: "Firebase, Google Maps Premium, Bluetooth, TensorFlow Lite"
    },
    challenges: [
      {
        challenge: "Delivering premium user experience with luxury-grade performance standards",
        solution: "Implemented sophisticated UI animations with 60fps guarantee and zero-latency interactions using Jetpack Compose"
      },
      {
        challenge: "Integrating with complex Lexus ecosystem and third-party premium services",
        solution: "Built flexible adapter pattern architecture supporting multiple service providers with seamless failover mechanisms"
      }
    ],
    results: [
      "Launched across premium Lexus markets globally",
      "Achieved 99.9% uptime for premium services",
      "Maintained 4.8+ app store rating through superior UX"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    title: "Oracle Certified Java SE 6 Programmer",
    issuer: "Oracle",
    certificateId: "oc1375277",
    date: "2015",
    description: "Comprehensive certification covering core Java programming concepts and best practices."
  },
  {
    id: 2,
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "2024",
    description: "Modern certification covering AI/ML concepts and their practical applications in software development."
  }
];

export const education = {
  degree: "Bachelor of Technology (Computer Science)",
  institution: "JNTU Hyderabad",
  year: "2014",
  description: "Comprehensive computer science education covering algorithms, data structures, software engineering, and mobile application development."
};