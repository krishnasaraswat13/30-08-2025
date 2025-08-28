import React from 'react';
import { Video, Globe, Database, Activity, Bot, Mic, Scale, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Video className="h-12 w-12 text-blue-600" />,
      title: 'Video Consultation with Doctors',
      description: 'Secure, high-quality video calls connecting rural patients with certified doctors across India.',
      benefits: ['24/7 Doctor availability', 'Secure video streaming', 'Consultation history'],
      color: 'blue'
    },
    {
      icon: <Globe className="h-12 w-12 text-green-600" />,
      title: 'Multilingual Support',
      description: 'Complete support for English, Hindi, and Punjabi to ensure comfortable communication.',
      benefits: ['Voice recognition in 3 languages', 'Text translation', 'Cultural sensitivity'],
      color: 'green'
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Offline Health Records',
      description: 'Comprehensive health records that sync automatically when internet connectivity returns.',
      benefits: ['Offline data storage', 'Auto-sync capability', 'Encrypted records'],
      color: 'purple'
    },
    {
      icon: <Activity className="h-12 w-12 text-red-600" />,
      title: 'Real-time Medicine Stock Updates',
      description: 'Live updates from local pharmacies ensuring medicine availability and pricing.',
      benefits: ['Live stock tracking', 'Price comparison', 'Pharmacy locations'],
      color: 'red'
    },
    {
      icon: <Bot className="h-12 w-12 text-indigo-600" />,
      title: 'AI Symptom Checker',
      description: 'Advanced AI chatbot for preliminary symptom assessment and medical triage.',
      benefits: ['Instant symptom analysis', 'Emergency detection', 'Treatment suggestions'],
      color: 'indigo'
    },
    {
      icon: <Mic className="h-12 w-12 text-orange-600" />,
      title: 'Voice-enabled Chatbot',
      description: 'Natural voice interaction for users who prefer speaking over typing.',
      benefits: ['Voice commands', 'Speech-to-text', 'Accessibility friendly'],
      color: 'orange'
    },
    {
      icon: <Scale className="h-12 w-12 text-teal-600" />,
      title: 'Scalable Solution',
      description: 'Built to serve millions of rural users across India with cloud infrastructure.',
      benefits: ['Cloud-based architecture', 'Auto-scaling', 'High availability'],
      color: 'teal'
    },
    {
      icon: <Shield className="h-12 w-12 text-pink-600" />,
      title: 'Secure & Compliant',
      description: 'HIPAA compliant platform with end-to-end encryption for patient privacy.',
      benefits: ['End-to-end encryption', 'HIPAA compliance', 'Data privacy'],
      color: 'pink'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
    indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
    pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Healthcare Features
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover how NIRAMYA's advanced features are transforming healthcare 
            access for rural communities across India.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${colorClasses[feature.color]} p-6 text-white`}>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">
                    {feature.title}
                  </h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses[feature.color]}`}></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NIRAMYA leverages cutting-edge technology to ensure reliability, 
              security, and scalability for rural healthcare delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React.js', desc: 'Modern Frontend' },
              { name: 'Node.js', desc: 'Scalable Backend' },
              { name: 'MongoDB', desc: 'Flexible Database' },
              { name: 'WebRTC', desc: 'Video Calls' },
              { name: 'AI/ML', desc: 'Symptom Analysis' },
              { name: 'JWT', desc: 'Secure Auth' },
              { name: 'Twilio', desc: 'Communication' },
              { name: 'Cloud', desc: 'Infrastructure' }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Future of Healthcare
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of patients and healthcare providers who are already 
            benefiting from NIRAMYA's innovative telemedicine platform.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;