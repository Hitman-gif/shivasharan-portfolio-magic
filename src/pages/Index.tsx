
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ChevronDown,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  GraduationCap,
  Trophy,
  Languages,
  Music,
  ChefHat
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  const technicalSkills = {
    languages: ['Java (Core & Advanced)', 'SQL', 'JavaScript'],
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    backend: ['Spring Boot', 'J2EE', 'Servlets', 'JSP', 'JDBC', 'REST APIs'],
    automation: ['Selenium WebDriver', 'Cucumber (BDD)', 'POM', 'API Testing (Postman, RestAssured)'],
    tools: ['Eclipse', 'VS Code', 'Git', 'GitHub', 'Maven', 'MySQL Workbench', 'Jenkins (basic)'],
    databases: ['MySQL', 'MongoDB'],
    concepts: ['OOP', 'MVC Architecture', 'Agile', 'SDLC']
  };

  const projects = [
    {
      title: "E-Commerce Test Automation Suite",
      description: "Automated user journeys like login, search, add to cart, and checkout. Built Cucumber-TestNG framework with POM and Extent Reports.",
      tech: ["Selenium", "Java", "Cucumber", "TestNG", "POM"],
      type: "Automation Testing",
      github: true
    },
    {
      title: "API Testing Framework (User Management API)",
      description: "Developed automated API tests using Java + RestAssured. Validated status codes, JSON schema, and response time.",
      tech: ["Java", "RestAssured", "JSON", "API Testing"],
      type: "API Testing",
      github: true
    },
    {
      title: "Wholesale Database Management System",
      description: "Created using Java (J2EE, Servlets), HTML/CSS, Bootstrap, and MySQL. Supports wholesale transactions and buyer-customer interactions.",
      tech: ["Java", "J2EE", "Servlets", "MySQL", "Bootstrap"],
      type: "Full Stack"
    },
    {
      title: "Multiple Disease Detection (Final Year Major Project)",
      description: "Built a health prediction web app based on user symptoms. Integrated user authentication and report generation features.",
      tech: ["Java", "Machine Learning", "Web Development", "Authentication"],
      type: "Web Application"
    }
  ];

  const experience = [
    {
      company: "Angodigital Technologies Pvt. Ltd",
      role: "Automation Test Engineer",
      period: "Dec 2024 – Present",
      description: "Designed and implemented test automation suites using Selenium WebDriver and Cucumber (BDD). Built modular Page Object Model (POM) frameworks with data-driven testing. Identified and reported UI/UX and functional defects, and worked closely with developers to fix them. Contributed to Sprint planning and test case design in Agile ceremonies.",
      current: true
    },
    {
      company: "Global Quest Technologies",
      role: "Java Full Stack Intern",
      period: "Jun 2024 – Dec 2024",
      description: "Built RESTful APIs with Spring Boot for internal and client-facing applications. Integrated MySQL databases for user management and business logic. Collaborated in Agile sprints to design and test full-stack features."
    },
    {
      company: "Aqmenz Automation Pvt. Ltd",
      role: "Full Stack Web Development Intern",
      period: "Jul 2023 – Sep 2023",
      description: "Developed responsive websites using HTML, CSS, and JavaScript. Designed backend logic with Java and connected to MySQL using JDBC."
    },
    {
      company: "Nano Robotics & Embedded Technologies",
      role: "Intern",
      period: "Aug 2023 – Sep 2023",
      description: "Gained foundational knowledge of embedded systems and software-hardware communication."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology – Computer Science Engineering",
      institution: "Sambhram Institute of Technology, VTU",
      period: "2020–2024",
      grade: "CGPA: 7.15"
    },
    {
      degree: "PUC – Science Stream",
      institution: "Hiremallur Ishwaran PU College, Dharwad",
      period: "2020",
      grade: "Percentage: 62.66%"
    },
    {
      degree: "SSLC",
      institution: "Government High School",
      period: "2018",
      grade: "Percentage: 73.66%"
    }
  ];

  const certifications = [
    "Selenium WebDriver with Java (Udemy)",
    "Postman API Testing",
    "Java Full Stack (Global Quest Technologies)"
  ];

  const achievements = [
    "1st Place – Inter-college Cricket League",
    "2nd Place – Inter-college Quiz Competition"
  ];

  const languages = ['English', 'Hindi', 'Kannada', 'Telugu'];
  const hobbies = ['Cooking', 'Listening to Music'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon!",
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <motion.h1 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SHIVASHARANAPPA
          </motion.h1>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-300 hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full p-2"
              >
                {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
            style={{ opacity, scale }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6 sm:mb-8"
            >
              <motion.h1 
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight break-words px-2"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  SHIVASHARANAPPA
                </span>
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Automation Test Engineer | Aspiring Java Full Stack Developer
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-sm sm:text-base text-gray-500 dark:text-gray-400 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-4 w-4" />
                <span className="break-all">shivasharanbsajjan@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="h-4 w-4" />
                <span>+91-8660835220</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="h-4 w-4" />
                <span>Bengaluru, India</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={handleDownloadResume} 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 text-sm sm:text-base"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full sm:w-auto transition-all duration-300 text-sm sm:text-base"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Summary
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl transition-all duration-500">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Versatile and results-driven professional with proven experience as an <strong>Automation Test Engineer</strong> and foundational skills in <strong>full-stack Java development</strong>. Proficient in developing robust automation frameworks using <strong>Selenium and Cucumber</strong>, while also capable of building RESTful services and integrating full-stack web applications. Demonstrated ability to ensure software quality, identify critical bugs, and optimize performance in <strong>Agile-driven teams</strong>. Eager to contribute to dynamic development teams while continuously enhancing technical capabilities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  variants={cardVariants}
                  whileHover="hover"
                  className="h-full"
                >
                  <Card className="h-full backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl transition-all duration-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-blue-600 capitalize text-lg">
                        {category === 'languages' && <Code className="h-5 w-5" />}
                        {category === 'frontend' && <Globe className="h-5 w-5" />}
                        {category === 'backend' && <Database className="h-5 w-5" />}
                        {category === 'automation' && <Award className="h-5 w-5" />}
                        {category === 'tools' && <Code className="h-5 w-5" />}
                        {category === 'databases' && <Database className="h-5 w-5" />}
                        {category === 'concepts' && <Globe className="h-5 w-5" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="secondary" className="hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl transition-all duration-500 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg sm:text-xl mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {project.type}
                          </Badge>
                          {project.github && (
                            <Badge variant="outline" className="text-xs text-blue-600">
                              <Github className="h-3 w-3 mr-1" />
                              GitHub
                            </Badge>
                          )}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl transition-all duration-500">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                          <CardTitle className="text-lg sm:text-xl text-blue-600 mb-1">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="flex items-center gap-1 text-xs">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </Badge>
                          {exp.current && (
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 lg:py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education & Achievements
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Card className="h-full backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl transition-all duration-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-600 text-lg sm:text-xl">
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {education.map((edu, index) => (
                          <motion.div 
                            key={index} 
                            className="border-l-2 border-blue-200 dark:border-blue-800 pl-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">{edu.degree}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.institution}</p>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-2">
                              <span className="text-xs sm:text-sm text-gray-500">{edu.period}</span>
                              <Badge variant="outline" className="text-xs">{edu.grade}</Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Certifications & Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Certifications */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl transition-all duration-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-purple-600 text-lg sm:text-xl">
                        <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                        Certifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {certifications.map((cert, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{cert}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl transition-all duration-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-yellow-600 text-lg sm:text-xl">
                        <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />
                        Achievements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {achievements.map((achievement, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <Trophy className="w-4 h-4 text-yellow-600" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Languages & Hobbies */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl transition-all duration-500">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-teal-600 text-base sm:text-lg">
                          <Languages className="h-4 w-4 sm:h-5 sm:w-5" />
                          Languages
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {languages.map((lang, index) => (
                            <motion.div
                              key={lang}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge variant="secondary" className="text-xs">
                                {lang}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl transition-all duration-500">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-pink-600 text-base sm:text-lg">
                          <Music className="h-4 w-4 sm:h-5 sm:w-5" />
                          Hobbies
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {hobbies.map((hobby, index) => (
                            <motion.div 
                              key={index} 
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.5 }}
                              viewport={{ once: true }}
                            >
                              {hobby === 'Cooking' && <ChefHat className="w-4 h-4 text-pink-600" />}
                              {hobby === 'Listening to Music' && <Music className="w-4 h-4 text-pink-600" />}
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{hobby}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Let's Work Together
            </h2>
            <motion.div 
              className="w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can collaborate on your next project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="backdrop-blur-sm bg-white/10 border-white/20 shadow-2xl">
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div variants={itemVariants}>
                        <label className="block text-white mb-2 font-semibold text-sm sm:text-base">Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                          placeholder="Your Name"
                          required
                        />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <label className="block text-white mb-2 font-semibold text-sm sm:text-base">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                          placeholder="your.email@example.com"
                          required
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-white mb-2 font-semibold text-sm sm:text-base">Subject</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                        placeholder="Project Discussion"
                        required
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-white mb-2 font-semibold text-sm sm:text-base">Message</label>
                      <textarea 
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all h-32 resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project..."
                        required
                      ></textarea>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit"
                        className="w-full bg-white text-blue-600 hover:bg-white/90 font-semibold py-3 transform transition-all duration-300 text-sm sm:text-base"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            className="mb-4 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © 2024 Shivasharanappa. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="mailto:shivasharanbsajjan@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
