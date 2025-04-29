import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';


const ResumeCoachingSection: React.FC = () => {
  const resumeServices = [
    {
      title: "Resume Rebuild",
      price: 1000,
      description: "Crafted for senior to VP-level professionals ready for their next big step.",
      features: [
        "3× 30-min coaching ",
        "Focused on storytelling, not just formatting",
        "Analyst + full application team on Pacific hours",
        "Tailored to your target industry, company, or role",
        "Direct work with our co-founder (ex-Google, JP Morgan)",
        "Executive coaching from UC Berkeley alum with 10+ yrs experience",
        "Resume Rebuild portfolio available upon request",
      ]
    },
    {
      title: "Interview Prep",
      price: 500,
      description: "Two sessions to sharpen your story, confidence, and clarity — fast.",
      features: [
        "2× 45-min live coaching with our co-founder",
        "Real-time, practical feedback",
        "Build clarity, empathy & executive presence",
        "For senior and leadership roles — technical & non-technical",
      ]
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl dm-sans font-semibold text-custom-blue ml-50">
          Resume Building & Coachings
        </h2>
        <p className="ml-50 dm-sans text-custom-blue mb-10 max-w-2xl mx-auto">
        Let's talk about where you're headed — and how your resume can get you there. <span className='font-bold text-custom-blue'> <br/> Schedule a call to get started.</span>
        </p>
        <div className="flex justify-center gap-8 mt-20">
        {resumeServices.map((service, index) => (
          <div key={index} className="border-2 border-custom-blue rounded-3xl p-6 bg-white w-90 relative flex flex-col">
            <h3 className="text-2xl font-semibold dm-sans">{service.title}</h3><p className="text-custom-blue dm-sans text-xs mb-4">{service.description}</p>
            <div className="mb-7 mt-4">
              <span className="text-5xl font-bold dm-sans text-interview-blue">${service.price}</span>
              <span className="text-xl font-bold ml-1 dm-sans text-custom-blue">one-time</span>
            </div>
            <hr className='border-gray-300 mb-6 mt-2' />
            
            <div className="mb-4 flex-grow">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start mb-3">
                  <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mt-0.5 mr-2">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm dm-sans font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <Button 
            className="w-35 h-11 mt-6 dm-sans bg-custom-blue text-white rounded-4xl">
             Get Started <ArrowRight className='-ml-1' />
            </Button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ResumeCoachingSection;
