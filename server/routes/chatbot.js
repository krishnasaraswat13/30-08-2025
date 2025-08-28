import express from 'express';

const router = express.Router();

// Simple AI chatbot endpoint (placeholder for ML model)
router.post('/symptom-check', async (req, res) => {
  try {
    const { symptoms, language = 'en' } = req.body;

    // This is a placeholder for actual AI/ML model integration
    const responses = {
      en: {
        fever: "Based on your symptoms of fever, it's recommended to rest, stay hydrated, and monitor your temperature. If fever persists above 101°F for more than 3 days, please consult a doctor.",
        headache: "Headaches can be caused by various factors including stress, dehydration, or lack of sleep. Try resting in a quiet, dark room and staying hydrated. Consult a doctor if severe or persistent.",
        cough: "For cough symptoms, ensure you're staying hydrated and consider warm liquids. If cough persists for more than a week or is accompanied by fever, please consult a healthcare provider.",
        default: "Thank you for sharing your symptoms. While I can provide general guidance, it's important to consult with a healthcare professional for proper diagnosis and treatment."
      },
      hi: {
        fever: "बुखार के लक्षणों के आधार पर, आराम करने, हाइड्रेटेड रहने और अपने तापमान की निगरानी करने की सलाह दी जाती है। यदि बुखार 3 दिनों से अधिक 101°F से ऊपर रहता है, तो कृपया डॉक्टर से सलाह लें।",
        headache: "सिरदर्द तनाव, निर्जलीकरण या नींद की कमी जैसे विभिन्न कारकों के कारण हो सकता है। शांत, अंधेरे कमरे में आराम करने और हाइड्रेटेड रहने की कोशिश करें।",
        default: "आपके लक्षण साझा करने के लिए धन्यवाद। उचित निदान और उपचार के लिए स्वास्थ्य पेशेवर से परामर्श करना महत्वपूर्ण है।"
      }
    };

    const symptomKey = symptoms.toLowerCase().includes('fever') ? 'fever' :
                       symptoms.toLowerCase().includes('headache') ? 'headache' :
                       symptoms.toLowerCase().includes('cough') ? 'cough' : 'default';

    const response = responses[language]?.[symptomKey] || responses.en.default;

    res.json({
      response,
      recommendation: "Please consider consulting with a doctor for personalized medical advice",
      urgency: symptomKey === 'fever' ? 'medium' : 'low',
      suggestedActions: [
        'Rest and stay hydrated',
        'Monitor symptoms',
        'Consult doctor if symptoms worsen'
      ]
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;