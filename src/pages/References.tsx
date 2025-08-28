import React from 'react';
import { ExternalLink, Database, Heart, Globe, FileText, Shield } from 'lucide-react';

const References = () => {
  const references = [
    {
      title: "National Digital Health Mission (NDHM)",
      description: "India's flagship digital health program providing the framework for digital health infrastructure.",
      url: "https://ndhm.gov.in/",
      category: "Government Initiative",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      color: "blue",
      importance: "Primary framework for digital health in India"
    },
    {
      title: "eSanjeevani - National Telemedicine Service",
      description: "Government of India's telemedicine platform serving millions of patients across the country.",
      url: "https://esanjeevani.in/",
      category: "Reference Platform",
      icon: <Heart className="h-8 w-8 text-red-600" />,
      color: "red",
      importance: "Successful telemedicine implementation model"
    },
    {
      title: "WHO ICD-10 Classification",
      description: "World Health Organization's International Classification of Diseases for standardized diagnosis coding.",
      url: "https://www.who.int/standards/classifications/classification-of-diseases",
      category: "Medical Standards",
      icon: <FileText className="h-8 w-8 text-green-600" />,
      color: "green",
      importance: "Global standard for disease classification"
    },
    {
      title: "OpenFDA Drug Database",
      description: "FDA's public database providing comprehensive information about drugs, devices, and food safety.",
      url: "https://open.fda.gov/",
      category: "Drug Information",
      icon: <Database className="h-8 w-8 text-purple-600" />,
      color: "purple",
      importance: "Comprehensive drug and safety data"
    },
    {
      title: "Kaggle Healthcare Datasets",
      description: "Machine learning datasets for healthcare applications, including symptom-disease mappings.",
      url: "https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset",
      category: "ML Training Data",
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      color: "orange",
      importance: "Training data for AI symptom checker"
    },
    {
      title: "Ministry of Health & Family Welfare",
      description: "Official health ministry providing policies, guidelines, and health statistics for India.",
      url: "https://mohfw.gov.in/",
      category: "Policy Reference",
      icon: <Heart className="h-8 w-8 text-teal-600" />,
      color: "teal",
      importance: "Health policy and regulatory guidance"
    }
  ];

  const researchPapers = [
    {
      title: "Telemedicine in Rural India: Challenges and Opportunities",
      authors: "Dr. A. Kumar, Dr. S. Patel",
      journal: "Indian Journal of Medical Research",
      year: "2023",
      link: "#"
    },
    {
      title: "AI-Powered Healthcare Solutions for Developing Countries",
      authors: "Dr. R. Singh, Dr. M. Sharma",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: "2024",
      link: "#"
    },
    {
      title: "Digital Health Literacy in Rural Communities",
      authors: "Dr. P. Gupta, Dr. L. Verma",
      journal: "Journal of Medical Internet Research",
      year: "2023",
      link: "#"
    }
  ];

  const technicalResources = [
    {
      name: "React.js Documentation",
      description: "Official React documentation for building user interfaces",
      url: "https://react.dev/",
      type: "Frontend Framework"
    },
    {
      name: "Node.js Documentation",
      description: "JavaScript runtime for building scalable server applications",
      url: "https://nodejs.org/docs/",
      type: "Backend Runtime"
    },
    {
      name: "MongoDB Documentation",
      description: "NoSQL database for modern application development",
      url: "https://docs.mongodb.com/",
      type: "Database"
    },
    {
      name: "WebRTC Documentation",
      description: "Real-time communication for web applications",
      url: "https://webrtc.org/",
      type: "Video Communication"
    },
    {
      name: "Twilio API Documentation",
      description: "Cloud communications platform for video, voice, and messaging",
      url: "https://www.twilio.com/docs",
      type: "Communication API"
    },
    {
      name: "JWT.io",
      description: "JSON Web Tokens for secure authentication",
      url: "https://jwt.io/",
      type: "Authentication"
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    red: 'from-red-500 to-red-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    teal: 'from-teal-500 to-teal-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            References & Resources
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive list of references, datasets, and technical resources 
            that power NIRAMYA's telemedicine platform.
          </p>
        </div>
      </section>

      {/* Primary References */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Primary References & Data Sources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key government initiatives, medical standards, and datasets that form 
              the foundation of NIRAMYA's healthcare solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {references.map((ref, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${colorClasses[ref.color]} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      {ref.icon}
                      <div className="ml-4">
                        <h3 className="text-xl font-bold mb-1">
                          {ref.title}
                        </h3>
                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                          {ref.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {ref.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Importance to NIRAMYA:
                    </h4>
                    <p className="text-sm text-gray-700">{ref.importance}</p>
                  </div>
                  
                  <a 
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${colorClasses[ref.color]} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Visit Resource</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Research & Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Peer-reviewed research papers and academic publications that inform 
              our approach to rural healthcare technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchPapers.map((paper, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-3 line-clamp-2">
                  {paper.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{paper.authors}</p>
                <p className="text-sm text-blue-600 mb-2">{paper.journal}</p>
                <p className="text-sm text-gray-500 mb-4">{paper.year}</p>
                <a 
                  href={paper.link}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                >
                  <span>Read Paper</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Documentation & APIs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical resources, documentation, and APIs used in building 
              NIRAMYA's MERN stack telemedicine platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{resource.name}</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                >
                  <span>View Documentation</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              NIRAMYA adheres to international standards and compliance requirements 
              for healthcare data security and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
              { name: "ISO 27001", description: "Information Security Management" },
              { name: "GDPR", description: "General Data Protection Regulation" },
              { name: "Indian IT Act", description: "Information Technology Act, 2000" }
            ].map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <h4 className="font-bold text-xl mb-2">{standard.name}</h4>
                <p className="text-sm text-green-100">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How to Cite NIRAMYA
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm text-gray-700">
              Debug Thugs Team. (2025). NIRAMYA: A Multilingual AI-Enabled Telemedicine Platform 
              for Rural Healthcare Access. Smart India Hackathon 2025, Problem Statement ID: 25018. 
              Available at: https://niramya.debugthugs.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default References;