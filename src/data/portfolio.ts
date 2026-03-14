// import { ExternalLink, Github, Mail, MapPin, Phone } from 'lucide-react'
// import healthScribeImg from '../assets/projects/health-scribe-final.png'
// import aiDevImg from '../assets/projects/ai-dev-final.png'

export const personalInfo = {
  name: "M. Sharjeel Saleem",
  title: "Full-Stack AI Prompt Engineer",
  subtitle: "Building AI-Driven Digital Experiences",
  tagline: "Transforming ideas into intelligent solutions through the power of AI and modern technology",
  email: "sharry00010@gmail.com",
  phone: "+92 332 5760344",
  location: "Pakistan",
  profileImage: "/profile_image.png",
  cvFile: "/M.Sharjeel_Saleem.pdf",

  bio: "I'm M. Sharjeel Saleem, a passionate Full-Stack AI Prompt Engineer who bridges the gap between cutting-edge artificial intelligence and practical software solutions. With over 1+ years of experience in AI-driven development and actively learning advanced AI/ML techniques, I specialize in creating intelligent applications that transform complex problems into elegant, user-friendly experiences.\n\nCurrently at Sideline Technologies, I leverage advanced AI tools like Cursor AI, Claude Code, and Trae AI to accelerate development workflows and build next-generation applications. My expertise spans from developing YOLOv8-powered computer vision systems for traffic management to creating AI-integrated communication platforms and machine learning models for predictive analytics.\n\nAs an AI Engineer in training, I'm continuously expanding my knowledge in deep learning, natural language processing, and modern AI frameworks. I believe in the power of AI to enhance human creativity and productivity, and I'm dedicated to crafting solutions that are not just functional, but truly intelligent.",

  social: {
    github: "https://github.com/Sharjeel-Saleem-06",
    linkedin: "https://www.linkedin.com/in/msharjeelsaleem/",
    twitter: "https://twitter.com/sharjeel_dev",
    email: "mailto:sharry00010@gmail.com",
    portfolio: "https://sharjeel-portfolio.netlify.app"
  }
}

export const skillsData = {
  "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "Kotlin", "SQL"],
  "JavaScript Libraries & Frameworks": ["React.js", "Next.js", "Node.js", "Express.js"],
  "Web Frameworks": ["Express.js", "Fastify", "FastAPI"],
  "AI/ML": ["YOLOv8", "OpenCV", "NLP", "Deep Learning", "Machine Learning", "AI Prompt Engineering", "RAG", "Vector Search"],
  "Frontend": ["HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  "Mobile": ["React Native", "Kotlin", "Java", "iOS (Swift)"],
  "Database": ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
  "Optimization & Cost Control": ["Kani Token Optimization (JavaScript)", "Prompt Budgeting", "LLM Cost Tuning", "Inference Efficiency"],
  "Prompt Engineering & AI Tools": ["Cursor AI", "Claude", "Windsurf", "Trae AI", "Google Antigravity", "Vibe Coding"]
}

export const projects = [
  {
    id: 1,
    title: "ModelScope AI - Intelligent Model Intel",
    description: "A next-generation intelligence platform designed to analyze, compare, and recommend the best AI models for any use case using the ultra-fast Groq LPU engine.",
    longDescription: "ModelScope AI is an advanced platform that delivers deep technical insights and structured benchmarks for LLMs in milliseconds. It features an adaptive Glassmorphism UI, Markdown/Table generation, an API Playground, and a robust reliability system with 5-key API rotation to ensure 100% uptime for Groq's llama-3.3-70b-versatile model.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Groq AI", "Zustand", "Framer Motion", "React Markdown"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://modelscopeai.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/ModelScope_AI",
    image: "/projects/modelscope.jpg",
    status: "Completed",
    year: "2026",
    features: [
      "Sub-second AI analysis powered by Groq LPU",
      "Automatic structured benchmark markdown tables",
      "Advanced 5-key API rotation reliability system",
      "Adaptive Glassmorphism dark/light mode UI",
      "Built-in API playground and LLM cost calculator"
    ]
  },
  {
    id: 2,
    title: "BaatCheet - AI Chat Platform (Web)",
    description: "A multilingual AI-powered chat platform supporting Urdu, English, Hindi, and Roman Urdu. Features advanced AI models, voice chat, image generation, and team collaboration tools with 10K+ active users.",
    longDescription: "BaatCheet is a comprehensive AI communication platform that supports multiple languages and AI modes. Built with React, TypeScript, and integrated with multiple AI providers (Groq, OpenRouter, DeepSeek, Gemini), it offers chat, code generation, research, image generation, and team project collaboration features. The platform features 7 specialized AI modes, real-time streaming responses, 50 messages context memory, voice chat with text-to-speech, image generation with multiple models, and team collaboration with role-based access.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "AI/ML", "Groq", "Gemini", "TailwindCSS", "SSE Streaming"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://baatcheet-web.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/BaatCheet",
    image: "/projects/baatcheet-web.png",
    status: "Completed",
    year: "2024",
    features: [
      "7 specialized AI modes (Chat, Code, Research, Image Gen, Tutor, Creative, Math)",
      "Multilingual support (Urdu, English, Hindi, Roman Urdu)",
      "Voice chat with text-to-speech (4 natural voices)",
      "Image generation with 5 models (FLUX, Stable Diffusion, Playground)",
      "Team collaboration with role-based access (Admin, Moderator, Viewer)",
      "Real-time streaming responses via SSE",
      "50 messages context memory",
      "10K+ active users, 1M+ messages, 99.9% uptime, 4.9★ rating",
      "Hybrid search (semantic + keyword)",
      "Analytics dashboard with usage tracking"
    ]
  },
  {
    id: 3,
    title: "BaatCheet - AI Chat Platform (Android)",
    description: "Native Android app for BaatCheet with Jetpack Compose and Material 3. Features offline support, push notifications, and native performance for AI-powered multilingual communication.",
    longDescription: "BaatCheet Android is a native mobile application built with Kotlin and Jetpack Compose following Clean Architecture and MVVM patterns. It provides the complete BaatCheet experience on mobile with enhanced features like offline support, camera integration, and push notifications. The app uses Retrofit for API calls with SSE streaming, Room Database for local storage, Hilt for dependency injection, and Coil for image loading.",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "MVVM", "Retrofit", "Room DB", "Hilt", "Coil", "SSE Streaming"],
    category: "Mobile Application",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/Sharjeel-Saleem-06/BaatCheet_Android",
    image: "/projects/baatcheet-android.png",
    status: "Completed",
    year: "2024",
    downloadInfo: {
      available: true,
      type: "firebase",
      message: "Available via Firebase App Distribution. Contact me to get the download link!",
      contactEmail: "sharry00010@gmail.com",
      contactPhone: "+92 332 5760344",
      contactWhatsApp: "https://wa.me/923325760344?text=Hi!%20I%20want%20to%20install%20BaatCheet%20app"
    },
    features: [
      "Native Android performance with Kotlin",
      "Modern UI with Jetpack Compose & Material 3",
      "Offline support with Room Database",
      "Camera and gallery integration",
      "Push notifications for real-time updates",
      "Clean Architecture with MVVM pattern",
      "Real-time SSE streaming for chat",
      "Markdown rendering with syntax highlighting",
      "7 specialized AI modes (Chat, Code, Research, etc.)",
      "Firebase App Distribution for secure updates"
    ]
  },
  {
    id: 4,
    title: "BaatCheet - AI Chat Platform (iOS)",
    description: "Native iOS app for BaatCheet built with Swift and SwiftUI. Delivers a premium iPhone experience with smooth animations, haptic feedback, and full integration with Apple ecosystem features.",
    longDescription: "BaatCheet iOS is a native Swift application crafted for the Apple ecosystem with SwiftUI for a truly native look and feel. It brings the complete BaatCheet AI platform to iPhone with iOS-native features: Face ID / Touch ID authentication, Siri Shortcuts integration, Share Sheet support, widgets, and seamless iCloud sync. Follows Apple HIG guidelines with a clean, minimal design and fluid physics-based animations. Distributed via TestFlight for beta access.",
    technologies: ["Swift", "SwiftUI", "Combine", "URLSession", "CoreData", "Face ID", "TestFlight", "MVVM"],
    category: "Mobile Application",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/Sharjeel-Saleem-06/BaatCheet_iOS",
    image: "/projects/baatcheet-ios.png",
    status: "Completed",
    year: "2025",
    downloadInfo: {
      available: true,
      type: "testflight",
      message: "Available via TestFlight. Contact me to get your invite link!",
      contactEmail: "sharry00010@gmail.com",
      contactPhone: "+92 332 5760344",
      contactWhatsApp: "https://wa.me/923325760344?text=Hi!%20I%20want%20to%20install%20BaatCheet%20iOS%20app"
    },
    features: [
      "Native Swift & SwiftUI for true iPhone feel",
      "Face ID / Touch ID secure authentication",
      "7 specialized AI modes (Chat, Code, Research, etc.)",
      "Multilingual support (Urdu, English, Hindi, Roman Urdu)",
      "Real-time SSE streaming for AI responses",
      "CoreData local storage for offline access",
      "Haptic feedback & smooth physics animations",
      "iCloud sync across Apple devices",
      "TestFlight distribution for beta access",
      "Apple HIG compliant design"
    ]
  },
  {
    id: 5,
    title: "Kani Framework - AI Communication Platform",
    description: "An AI-integrated Next.js application for intelligent client communication. Built with modern web technologies and AI integration to streamline business communications and enhance productivity.",
    longDescription: "Kani Framework is a comprehensive communication platform that leverages AI to enhance client interactions. The application features intelligent message routing, automated responses, and AI-powered insights to improve communication efficiency.",
    technologies: ["Next.js", "React", "TypeScript", "AI Integration", "TailwindCSS", "Cursor AI"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://kani-llm-token-optimizer.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/Kani-LLM-Token-Optimizer",
    image: "/projects/kani.jpeg",
    status: "Completed",
    year: "2024",
    features: [
      "AI-powered communication",
      "Intelligent message routing",
      "Automated responses",
      "Client insights dashboard",
      "Real-time collaboration"
    ]
  },
  {
    id: 6,
    title: "DocConverter Pro",
    description: "A powerful, secure, and user-friendly document conversion platform supporting 15+ formats. Features professional-grade conversion with 99.9% uptime and has processed over 1M+ files for 50K+ active users.",
    longDescription: "DocConverter Pro is a comprehensive document conversion solution that handles multiple file formats with professional-grade accuracy. The platform emphasizes security and privacy, processing documents locally in the browser whenever possible.",
    technologies: ["React", "TypeScript", "Node.js", "File Processing APIs", "TailwindCSS"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://docconverter-pro-app.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/Doc-Converter-pro",
    image: "/projects/docconverter.png",
    status: "Completed",
    year: "2024",
    features: [
      "15+ format support",
      "Batch processing",
      "Secure conversion",
      "Professional-grade quality",
      "99.9% uptime"
    ]
  },
  {
    id: 7,
    title: "ImagePro - AI Image Processing",
    description: "Professional AI-powered image processing tools for conversion, editing, enhancement, and text extraction. Completely free and private with 1.2M+ images processed and support for 12 formats.",
    longDescription: "ImagePro offers a comprehensive suite of AI-powered image processing tools that work entirely in your browser. The platform provides professional-grade image manipulation capabilities while maintaining complete privacy and security.",
    technologies: ["React", "TypeScript", "AI/ML", "Canvas API", "WebAssembly", "TailwindCSS"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://imagepro-advanced.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/Image-pro",
    image: "/projects/imagepro.png",
    status: "Completed",
    year: "2024",
    features: [
      "AI-powered processing",
      "OCR text extraction",
      "Format conversion",
      "Image enhancement",
      "Privacy-focused"
    ]
  },
  {
    id: 8,
    title: "Autopilot Pro - AI-Powered Road Safety System",
    description: "An innovative AI-powered road safety system for smart vehicles using YOLOv8 deep learning technology. Features real-time detection of traffic signs, pedestrians, vehicles (LTV/HTV), and traffic lights with 93% accuracy and 50ms response time.",
    longDescription: "Autopilot Pro is a comprehensive vision-based AI system designed to make roads safer by detecting traffic signs, pedestrians, and vehicles in real-time. Built as a cost-effective alternative to LIDAR and RADAR systems, it uses high-definition cameras and advanced YOLOv8 deep learning models to analyze camera feeds and provide quick, accurate alerts. The system achieves 93% detection accuracy with a 50ms response time, enabling 24/7 continuous monitoring for intelligent traffic management and safety applications.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Deep Learning", "Computer Vision", "AI/ML", "React", "TypeScript", "Web Development"],
    category: "AI/Computer Vision",
    featured: true,
    liveUrl: "https://autopilot-pro.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/Autopilot-pro",
    image: "/projects/autopilot.png",
    status: "Completed",
    year: "2024",
    features: [
      "LTV/HTV Vehicle Detection & Classification",
      "Real-time Pedestrian Detection",
      "Traffic Light Detection & Recognition",
      "Traffic Sign Detection & Interpretation",
      "93% Detection Accuracy",
      "50ms Response Time",
      "24/7 Continuous Monitoring",
      "YOLOv8 Deep Learning Technology",
      "Vision-based AI System (Alternative to LIDAR/RADAR)",
      "Interactive Web Dashboard with Live Model Testing"
    ]
  },
  {
    id: 9,
    title: "StudyFlow - AI-Powered Learning Platform",
    description: "AI-powered gamified learning platform with 10+ game modes, adaptive quizzes, and global leaderboards. Features AI-generated quizzes, achievement system, and 50K+ active learners across 120+ countries.",
    longDescription: "StudyFlow is a cutting-edge gamified learning platform that transforms education into an engaging adventure. The platform uses AI to generate personalized quizzes tailored to each learner's style and knowledge level. With 10 exciting game modes including Adventure Mode, Battle Mode, Boss Fights, and Time Attack, learning becomes addictive and fun. The platform features global leaderboards, comprehensive analytics, and an achievement system to track progress.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "ShadCN UI", "Framer Motion", "AI/ML", "Gamification"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://studyflow-quizapp.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/Face-Reconition-Attendence-Sytem-",
    image: "/projects/studyflow.png",
    status: "Completed",
    year: "2025",
    features: [
      "AI-Powered Quiz Generation",
      "10 Engaging Game Modes",
      "Global Leaderboards",
      "Adaptive Learning System",
      "Achievement & XP System",
      "50K+ Active Learners",
      "120+ Countries",
      "Detailed Analytics Dashboard",
      "Multiple Quiz Categories",
      "Real-time Competitions"
    ]
  },
  {
    id: 10,
    title: "Face Recognition Attendance System",
    description: "Comprehensive attendance management system using Python, OpenCV, and MySQL. Features real-time face detection, CRUD operations, and AI-powered documentation with Cursor AI integration.",
    longDescription: "A complete face recognition system built for student attendance management. The system uses OpenCV for real-time face detection and recognition, with MySQL database for data storage and Tkinter for the user interface. Integrated with Cursor AI for dashboard UI development and comprehensive documentation.",
    technologies: ["Python", "OpenCV", "Excel", "Tkinter", "MySQL", "Cursor AI", "ChatGPT", "CRUD Operations"],
    category: "Computer Vision",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/Sharjeel-Saleem-06",
    image: "/projects/face-recognition.png",
    status: "Completed",
    year: "2024",
    features: [
      "Real-time face detection and recognition",
      "Student attendance management system",
      "CRUD operations with data integrity",
      "Excel integration for data export",
      "Tkinter-based user interface",
      "MySQL database for data storage",
      "Cursor AI integration for dashboard UI",
      "ChatGPT and Cursor AI for documentation"
    ]
  },
  {
    id: 11,
    title: "Student Performance Predictor",
    description: "ML-powered web application to predict student math scores based on demographic factors, parental education, and academic performance. Features 88% accuracy with 7 algorithms tested and instant predictions.",
    longDescription: "A comprehensive Machine Learning project that predicts student math scores using various demographic and academic factors. The system tests 7 different ML algorithms (Random Forest, Linear Regression, Gradient Boosting, XGBoost, CatBoost, AdaBoost, and Decision Tree) and selects the best performing model. Built with Flask for the web interface and Scikit-Learn for model training.",
    technologies: ["Python", "Flask", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "CatBoost", "Machine Learning", "Data Science"],
    category: "Machine Learning",
    featured: true,
    liveUrl: "https://student-performance-monitoring.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/student-performance-predictor",
    image: "/projects/student-predictor.png",
    status: "Completed",
    year: "2024",
    features: [
      "88% prediction accuracy (R² score)",
      "7 ML algorithms tested and compared",
      "Instant predictions in milliseconds",
      "Feature engineering with interaction features",
      "Data preprocessing pipeline",
      "GridSearchCV for hyperparameter tuning",
      "Flask web application",
      "Responsive modern UI design"
    ]
  },
  {
    id: 12,
    title: "AI ChatBot - LangChain & LangGraph",
    description: "A lightweight LangGraph + LangChain demo chatbot that streams responses and can call external tools (Wikipedia and Arxiv) through a simple graph architecture.",
    longDescription: "An intelligent chatbot built using LangGraph and LangChain frameworks. The chatbot features streaming responses, tool integration with Wikipedia and Arxiv for knowledge retrieval, and a graph-based architecture for managing conversation flow. Powered by Groq API for fast inference.",
    technologies: ["Python", "LangGraph", "LangChain", "LangSmith", "Groq API", "Wikipedia API", "Arxiv API", "NLP"],
    category: "AI/NLP",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/Sharjeel-Saleem-06/Langgraph-ChatBot",
    image: "/projects/chatbot-new.png",
    status: "Completed",
    year: "2024",
    features: [
      "LangGraph-based conversation flow",
      "LangChain integration for LLM orchestration",
      "Wikipedia tool for knowledge retrieval",
      "Arxiv tool for research paper queries",
      "Streaming chat responses",
      "Groq API for fast inference",
      "Graph-based architecture",
      "Easy to extend with new tools"
    ]
  },
  {
    id: 13,
    title: "AI Dev Updates - Real-Time News Aggregator",
    description: "Lightning-fast AI news aggregator for developers. Real-time updates on model launches, IDE updates, Cursor, Claude, GPT - everything you need to stay ahead. Powered by Groq Llama 3 with intelligent categorization.",
    longDescription: "AI Dev Updates is a comprehensive news aggregator built specifically for AI developers and vibe coders. The platform aggregates news from 29 curated RSS sources including OpenAI, Anthropic, Google AI, GitHub, and more. Using Groq's lightning-fast Llama 3 inference, it analyzes and categorizes articles in real-time, providing relevance scoring, technical impact assessment, and intelligent deduplication. Features include breaking news sections, advanced filtering, real-time search, and automatic refresh every 15 minutes. The system uses 10 rotating API keys for high availability and implements smart caching to reduce API calls by 85%. With dual-layer caching (7-day analysis cache + 15-minute news cache) and concurrent request protection, the platform delivers news in under 2 seconds while processing 2.9M tokens/day.",
    technologies: ["Next.js", "React", "TypeScript", "Groq API", "Llama 3", "RSS Feeds", "TailwindCSS", "Advanced Caching", "API Pool Management"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://aidevupdates.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/AI_News_Reporter",
    image: "/projects/p-aidev.jpg",
    status: "Completed",
    year: "2025",
    features: [
      "Real-time AI news aggregation from 29 sources",
      "Groq Llama 3 powered analysis",
      "Intelligent categorization & relevance scoring",
      "Breaking news section with priority indicators",
      "Advanced filtering by category and search",
      "10 rotating API keys with 99.9% uptime",
      "Smart caching reduces API calls by 85%",
      "Auto-refresh every 15 minutes",
      "Technical impact assessment",
      "Deduplication & error handling",
      "First load: ~2s, subsequent loads: <1s",
      "Processing 2.9M tokens/day efficiently"
    ]
  },
  {
    id: 14,
    title: "HealthScribe AI",
    description: "AI-powered health document management platform. Analyze medical records, track health metrics, and get personalized insights.",
    longDescription: "HealthScribe AI is an innovative platform designed to revolutionize how individuals manage their health information. By leveraging advanced AI technology, it allows users to upload and analyze medical records, automatically extracting key information such as medications, allergies, and diagnoses. The system provides personalized health insights, tracks vital metrics over time, and ensures that critical health data is always accessible and organized.",
    technologies: ["React", "TypeScript", "AI Integration", "TailwindCSS", "Vite", "Netlify"],
    category: "Web Application",
    featured: true,
    liveUrl: "https://healthscribee.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/Health_Scribe",
    image: "/projects/p-health.jpg",
    status: "Completed",
    year: "2025",
    features: [
      "AI-powered medical record analysis",
      "Smart health metric tracking",
      "Personalized health insights",
      "Secure document storage",
      "Medication management",
      "Interactive health dashboard"
    ]
  },
  {
    id: 15,
    title: "DocuChat AI - Chat with Documents",
    description: "AI-powered RAG document chat platform. Upload PDFs and images, ask questions, and get intelligent answers with source citations. Features hybrid search, streaming responses, and Google OAuth authentication.",
    longDescription: "DocuChat AI is a sophisticated RAG (Retrieval-Augmented Generation) application that allows users to upload documents (PDFs and images) and have intelligent conversations about their content. The platform uses Google Gemini 2.5 Flash for chat and vision capabilities, combined with OpenAI's text-embedding-3-small for vector embeddings. Documents are processed through smart chunking, embedded, and stored in PostgreSQL with pgvector for efficient similarity search. The hybrid search system combines 70% semantic search with 30% keyword matching to retrieve the most relevant context. Features include streaming responses via SSE, conversation history, source citations, dark/light theme, and comprehensive analytics dashboard.",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "pgvector", "Google Gemini", "OpenAI Embeddings", "TailwindCSS", "shadcn/ui", "Framer Motion", "RAG", "Vector Search"],
    category: "AI/RAG Application",
    featured: true,
    liveUrl: "https://docuchatai.lovable.app",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/docuchat-ai",
    image: "/projects/docuchat-ai.png",
    status: "Completed",
    year: "2025",
    features: [
      "RAG-powered document Q&A",
      "PDF & Image upload with OCR",
      "Google Gemini 2.5 Flash integration",
      "Hybrid search (70% semantic + 30% keyword)",
      "OpenAI text-embedding-3-small",
      "Streaming responses via SSE",
      "Source citations with relevance scores",
      "PostgreSQL + pgvector for vector storage",
      "Google OAuth authentication",
      "Dark/Light theme support",
      "Conversation history management",
      "Analytics dashboard",
      "Row Level Security (RLS)",
      "Smart document chunking (1000 chars, 200 overlap)"
    ]
  },
  {
    id: 16,
    title: "CodeSentinel AI - AI-Powered Code Analysis",
    description: "Professional static code analysis platform with AI-powered security scanning. Detect OWASP Top 10 vulnerabilities, analyze code quality, and get intelligent optimization suggestions. Features multi-language support and real-time analysis.",
    longDescription: "CodeSentinel AI is an enterprise-grade static code analysis tool that combines traditional security scanning with AI-powered intelligent optimization. The platform analyzes code across 15+ programming languages, detecting OWASP Top 10 vulnerabilities, code smells, and security issues in real-time. Using advanced AI algorithms, it provides context-aware suggestions for code improvements, best practices, and performance optimizations. Features include interactive control flow visualization, custom rule creation with AI assistance, senior architect-level reviews, and comprehensive export reports in multiple formats. The platform offers both enterprise-grade security analysis and AI-powered intelligent recommendations, making it perfect for development teams focused on code quality and security.",
    technologies: ["React", "TypeScript", "AI/ML", "Static Analysis", "TailwindCSS", "shadcn/ui", "Security Scanning", "OWASP", "Code Quality", "Flow Visualization"],
    category: "DevTools/Security",
    featured: true,
    liveUrl: "https://codesentinelai.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/codesentinel-ai",
    image: "/projects/codesentinel-ai.png",
    status: "Completed",
    year: "2025",
    features: [
      "Multi-language support (15+ languages)",
      "OWASP Top 10 vulnerability detection",
      "Real-time code analysis",
      "AI-powered code optimization",
      "Custom rule creation with AI",
      "Senior architect-level reviews",
      "Interactive control flow graphs",
      "Security analysis & scanning",
      "Code quality metrics",
      "Best practices enforcement",
      "Export reports in multiple formats",
      "Dark/Light theme support",
      "Advanced code metrics",
      "Intelligent suggestions"
    ]
  },
  {
    id: 17,
    title: "Learn RAG from Basics",
    description: "A complete, from-scratch implementation of a Retrieval-Augmented Generation (RAG) pipeline to eliminate LLM hallucinations.",
    longDescription: "Learn RAG from Basics is an open-source educational project that breaks down RAG into isolated, highly commented Python files. Built as the ultimate guide for software engineers, it covers data ingestion, text chunking, embedding generation using word vectors, mathematical similarity search (Cosine Distance) with ChromaDB, and prompt engineering. The project includes a complete vector search-augmented LLM pipeline with Groq and a beautiful Streamlit Web UI.",
    technologies: ["Python", "Groq AI", "ChromaDB", "Streamlit", "FastAPI", "Vector Embeddings", "RAG"],
    category: "AI/ML Development",
    featured: false,
    liveUrl: "https://learning-rag.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/Learn_RAG_from_Basics",
    image: "/projects/learn-rag.jpg",
    status: "Completed",
    year: "2026",
    features: [
      "End-to-end RAG architecture with text chunking",
      "Vector database integration (ChromaDB)",
      "High-speed LLM generation using Groq API",
      "Interactive QA Streamlit Web UI",
      "Comprehensive educational breakdown of Embeddings & Search"
    ]
  },
  {
    id: 18,
    title: "LLM Foundations - From Zero to AI Engineer",
    description: "A complete, interactive learning platform for mastering Large Language Models — from tokenization to AI agents in production.",
    longDescription: "LLM Foundations is an interactive educational platform designed for software engineers transitioning into Generative AI. It covers 14 advanced chapters across three phases (Foundations, Core Skills, and Advanced LLMs topics like RAG, LoRA, RLHF, DPO, and ReAct Agents). The platform features an adaptive Glassmorphism UI, a custom Reading Progress Bar, Sticky Navigation, Scroll Animations via Intersection Observer, and a massive set of 30 Interview Questions with optimal answers for AI Engineer roles.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Groq AI", "Sentence Transformers"],
    category: "Web Application",
    featured: false,
    liveUrl: "https://llm-foundations.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/Learn_LLM_foundations_from_Basics",
    image: "/projects/learn-llm.jpg",
    status: "Completed",
    year: "2026",
    features: [
      "14 in-depth chapters on LLMs, Attention, LoRA, and Agents",
      "Interactive code snippets and architecture visualizers",
      "30 professional-grade AI Engineer interview questions",
      "Responsive Dark Mode design with scroll-reveal animations",
      "Built natively with HTML/CSS/JS without frameworks"
    ]
  },
  {
    id: 19,
    title: "Prompt Craft Cursor",
    description: "An elite collection of meticulously engineered, role-based `.cursorrules` templates and system prompts for Cursor AI Editor.",
    longDescription: "Prompt Craft Cursor provides highly optimized, domain-specific AI instructions to push the capabilities of the Cursor AI Editor to its absolute limit. It contains modular prompts tailored for React/Next.js, Python/FastAPI, Node.js, and Android/Jetpack Compose. It enforces best practices, architecture (like Clean Architecture), strict linters, and leverages advanced cognitive models like Chain of Thought (CoT) and Tree of Thoughts (ToT) prompting strategies.",
    technologies: ["Prompt Engineering", "Cursor AI", "Markdown", "LLM Optimization", "CoT", "ToT"],
    category: "Developer Tools",
    featured: false,
    liveUrl: "https://promptcraftcursor.netlify.app/",
    githubUrl: "https://github.com/Sharjeel-Saleem-06/prompt_craft_cursor",
    image: "/projects/prompt-craft-actual.jpg",
    status: "Active",
    year: "2026",
    features: [
      "Domain-Specific .cursorrules templates for modern stacks",
      "Advanced cognitive prompting techniques (CoT, ToT)",
      "Strict security, typing, and architecture enforcements",
      "Modular prompt guidelines for styling and testing",
      "Custom Architect role definition for optimal AI behavior"
    ]
  }
]

export const experience = [
  {
    id: 20,
    position: "Full-Stack AI Prompt Engineer",
    company: "Sideline Technologies",
    companyUrl: "https://sideline-technologies.com",
    location: "Onsite",
    duration: "Jun 2025 – Current",
    type: "Full-time",
    description: "Building cross-platform mobile and web applications with AI integration. Leveraging advanced AI tools like Cursor AI, Claude Code, and Trae AI to accelerate development and improve productivity.",
    achievements: [
      "Enabled team in AI prompt engineering for enhanced development workflows",
      "Developed cross-platform mobile and web applications with AI integration",
      "Utilized AI tools including Cursor AI, Claude Code, and Trae AI for accelerated development",
      "Built intelligent applications that transform complex problems into elegant solutions",
      "Implemented AI-powered features for enhanced user experience and productivity",
      "Owned Android and iOS apps end-to-end (architecture to launch) and provide AI-powered support for both platforms"
    ],
    technologies: ["Python", "AI/ML", "YOLOv8", "Next.js", "React", "TypeScript", "Cursor AI", "Claude Code", "Trae AI", "Deep Learning", "Mobile Development"]
  },
  {
    id: 21,
    position: "Prompt Engineer",
    company: "ReactiveSpace",
    companyUrl: "https://reactivespace.com",
    location: "Onsite",
    duration: "April 2025 - May 2025",
    type: "Contract",
    description: "Specialized in AI prompt engineering and automation workflows. Developed innovative solutions using advanced AI tools and frameworks.",
    achievements: [
      "Automated workflows with Cursor AI for improved efficiency",
      "Developed Kani Framework Application using Next.js, TypeScript, React, and Tailwind CSS with Cursor AI",
      "Created NLP-based Chatbot with Cursor AI for intelligent communication",
      "Implemented AI-driven automation solutions for business processes",
      "Enhanced development productivity through AI tool integration"
    ],
    technologies: ["Cursor AI", "Next.js", "TypeScript", "React", "Tailwind CSS", "NLP", "AI Automation", "Chatbot Development"]
  },
  {
    id: 22,
    position: "Python Developer",
    company: "Dataventiv LLC",
    companyUrl: "https://dataventiv.com",
    location: "Remote",
    duration: "July 2024 - September 2024",
    type: "Internship",
    description: "Completed a comprehensive Python Developer internship focusing on data engineering, automation, and SCADA systems development.",
    achievements: [
      "Developed Python-based Modbus simulator for automation testing and validation",
      "Created SCADA UI with Ignition Perspective for industrial monitoring",
      "Implemented new features and enhancements with Ignition Perspective",
      "Built Face Recognition Attendance System using Python, OpenCV, Excel, Tkinter, and MySQL",
      "Integrated Cursor AI for dashboard UI development and documentation",
      "Applied real-time detection and recognition with CRUD operations and data integrity",
      "Used ChatGPT and Cursor AI for comprehensive project documentation"
    ],
    technologies: ["Python", "SCADA", "Ignition Perspective", "OpenCV", "Modbus", "Automation", "Tkinter", "MySQL", "Excel", "Cursor AI", "Data Engineering"]
  }
]

export const stats = [
  { label: "Projects", value: "14+", icon: "🚀" },
  { label: "Years Exp", value: "1+", icon: "⭐" },
  { label: "Client Satisfaction", value: "100%", icon: "💯" }
]

export const certifications = [
  {
    id: 6,
    title: "Discover the Art of Prompting",
    issuer: "Coursera",
    date: "March 14, 2026",
    description: "Successfully completed the certification on the art of prompting. Explored advanced prompt engineering techniques, contextual structuring, and effective interaction with Large Language Models.",
    skills: ["Prompt Engineering", "Generative AI", "LLMs", "Communication"],
    image: "/certifications/cert6.jpg"
  },
  {
    id: 1,
    title: "Maximize Productivity With AI Tools",
    issuer: "Coursera",
    date: "March 11, 2026",
    description: "Successfully completed the certification on maximizing productivity with Artificial Intelligence. Gained practical skills in utilizing advanced AI tools to automate complex tasks, optimize daily workflows, and significantly enhance professional efficiency using generative models.",
    skills: ["AI Tools", "Prompt Engineering", "Workflow Automation", "Productivity"],
    image: "/certifications/cert4.jpg"
  },
  {
    id: 2,
    title: "Google Cloud Certified Program - GenAI",
    issuer: "Google Cloud",
    date: "March 9, 2026",
    description: "Successfully completed the Google Cloud Computing Foundations course followed by the specialized program on Generative AI. Explores LLMs, prompting, and GenAI applications on GCP.",
    skills: ["Generative AI", "Google Cloud", "LLMs", "Prompt Engineering"],
    image: "/certifications/cert2.jpg"
  },
  {
    id: 3,
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class (IBM)",
    date: "July 24, 2024",
    description: "Foundational course on Python programming tailored for Data Science. Covers data structures, loops, functions, and introductory data manipulation libraries like Pandas and Numpy.",
    skills: ["Python", "Data Science", "Pandas", "Numpy"],
    image: "/certifications/cert3.jpg"
  },
  {
    id: 4,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "June 30, 2024",
    description: "Certified proficiency in API fundamentals, testing, and development using the Postman platform. Covers API requests, collections, environment variables, and automated testing.",
    skills: ["API Testing", "Postman", "REST APIs", "Automation"],
    image: "/certifications/cert1.jpg"
  },
  {
    id: 5,
    title: "The Python Programming A-Z Definitive Diploma",
    issuer: "Udemy",
    date: "February 9, 2024",
    description: "Complete and definitive diploma on Python programming covering everything from basics to advanced Python concepts, object-oriented programming, and file handling.",
    skills: ["Python", "Algorithms", "Object-Oriented Programming", "Software Development"],
    image: "/certifications/cert5.jpg"
  }
]
