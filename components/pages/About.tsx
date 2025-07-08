
import React from 'react';
import Card from '../ui/Card';

/**
 * The About page, containing information about the application, mission, and contact details.
 */
const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <div className="text-center">
            <h2 className="text-3xl font-bold text-highlight">Search and 'Rescue Operations'</h2>
            <p className="mt-2 text-lg text-accent">Powered by GuardianWing Technology</p>
        </div>
      </Card>

      {/* Mission Statement */}
      <Card title="Our Mission">
        <p className="text-accent leading-relaxed">
            Our mission is to leverage cutting-edge drone technology and artificial intelligence to accelerate search and rescue operations, reduce response times, and ultimately save lives. We provide first responders with the tools they need to make critical decisions when every second counts.
        </p>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <Card title="Contact Information">
            <div className="space-y-2 text-accent">
                <p><strong>Support:</strong> <a href="mailto:support@guardianwing.dev" className="text-highlight hover:underline">support@guardianwing.dev</a></p>
                <p><strong>Emergency Line:</strong> 1-800-555-0199</p>
                <p><strong>Headquarters:</strong> 123 Innovation Drive, Tech City, USA</p>
            </div>
        </Card>
        {/* Credits */}
        <Card title="Credits">
            <div className="space-y-2 text-accent">
                <p><strong>Lead Engineer:</strong> AI Workshop</p>
                <p><strong>UI/UX Design:</strong> Gemini & React Team</p>
                <p><strong>Powered By:</strong> React, Tailwind CSS, Recharts</p>
            </div>
        </Card>
      </div>

       {/* Legal Information */}
       <Card title="Legal">
        <div className="space-y-2 text-xs text-accent">
            <p>Terms of Use: All operations must comply with local and federal aviation regulations. Unauthorized use is strictly prohibited. GuardianWing is not liable for misuse of this platform.</p>
            <p>© 2024 GuardianWing Technologies. All Rights Reserved.</p>
        </div>
      </Card>
    </div>
  );
};

export default About;