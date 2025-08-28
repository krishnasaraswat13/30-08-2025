import React from 'react';
import { Github, Linkedin, Mail, Code, Palette, Database, Brain, Shield } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Arjun Singh",
      role: "Full-Stack Developer & Team Lead",
      bio: "MERN stack expert with 3+ years of experience in healthcare technology. Leading the technical architecture and development of NIRAMYA.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["React.js", "Node.js", "MongoDB", "System Architecture"],
      icon: <Code className="h-6 w-6" />,
      social: {
        github: "https://github.com/arjunsingh",
        linkedin: "https://linkedin.com/in/arjunsingh",
        email: "arjun@debugthugs.com"
      }
    },
    {
      name: "Priya Sharma",
      role: "Frontend Developer & UI/UX Designer",
      bio: "Creative frontend developer specializing in responsive design and user experience. Designing intuitive interfaces for rural healthcare access.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["React.js", "TailwindCSS", "UI/UX Design", "Responsive Design"],
      icon: <Palette className="h-6 w-6" />,
      social: {
        github: "https://github.com/priyasharma",
        linkedin: "https://linkedin.com/in/priyasharma",
        email: "priya@debugthugs.com"
      }
    },
    {
      name: "Rohit Kumar",
      role: "Backend Developer & Database Specialist",
      bio: "Backend expert focusing on scalable APIs and database optimization. Ensuring NIRAMYA can handle millions of rural users efficiently.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Node.js", "Express.js", "MongoDB", "API Development"],
      icon: <Database className="h-6 w-6" />,
      social: {
        github: "https://github.com/rohitkumar",
        linkedin: "https://linkedin.com/in/rohitkumar",
        email: "rohit@debugthugs.com"
      }
    },
    {
      name: "Anjali Patel",
      role: "AI/ML Developer",
      bio: "Machine learning specialist working on AI-powered symptom checking and multilingual support. Making healthcare AI accessible to rural communities.",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Python", "TensorFlow", "NLP", "Voice Recognition"],
      icon: <Brain className="h-6 w-6" />,
      social: {
        github: "https://github.com/anjalipatel",
        linkedin: "https://linkedin.com/in/anjalipatel",
        email: "anjali@debugthugs.com"
      }
    },
    {
      name: "Vikash Gupta",
      role: "Security & Integration Specialist",
      bio: "Cybersecurity expert ensuring HIPAA compliance and secure data handling. Integrating with government health systems and third-party APIs.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Cybersecurity", "JWT", "API Integration", "Compliance"],
      icon: <Shield className="h-6 w-6" />,
      social: {
        github: "https://github.com/vikashgupta",
        linkedin: "https://linkedin.com/in/vikashgupta",
        email: "vikash@debugthugs.com"
      }
    }
  ];

  const achievements = [
    "Selected for Smart India Hackathon 2025",
    "Problem Statement ID: 25018",
    "Focus on Rural Healthcare in Nabha",
    "Team of 5 dedicated developers",
    "MERN Stack Implementation",
    "AI-Powered Healthcare Solutions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Debug Thugs
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            The passionate team behind NIRAMYA, working to revolutionize 
            rural healthcare access through innovative technology.
          </p>
          <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-sm font-semibold">Smart India Hackathon 2025</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-sm">Problem ID: 25018</span>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five dedicated developers combining expertise in MERN stack, AI/ML, 
              and healthcare technology to build NIRAMYA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {member.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-4 border-t border-gray-200">
                    <a 
                      href={member.social.github}
                      className="text-gray-400 hover:text-gray-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-green-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Debug Thugs team's commitment to solving rural healthcare challenges 
              through innovative technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <p className="font-semibold text-gray-900">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission & Values
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">🎯 Mission</h3>
                  <p className="text-green-100">
                    To democratize healthcare access in rural India through 
                    innovative telemedicine technology, making quality healthcare 
                    available to every village.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">💡 Vision</h3>
                  <p className="text-green-100">
                    A future where geographical boundaries don't limit access to 
                    quality healthcare, powered by AI and human compassion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">🤝 Values</h3>
                  <p className="text-green-100">
                    Innovation, Accessibility, Security, Compassion, and 
                    Continuous Learning drive everything we do.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Why Debug Thugs?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Passionate about healthcare technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Deep understanding of rural challenges</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Strong technical expertise in MERN stack</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Commitment to scalable, secure solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Focus on user-centric design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about NIRAMYA or want to collaborate with Debug Thugs? 
            We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:team@debugthugs.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Our Team
            </a>
            <a 
              href="https://github.com/debugthugs/niramya"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;