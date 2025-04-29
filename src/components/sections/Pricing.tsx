import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

interface PlanFeatureProps {
  text: string;
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ text }) => {
  return (
    <div className="flex items-start mb-3">
      <div className="flex-shrink-0 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center mt-0.5 mr-2">
        <Check className="h-3 w-3 text-white" />
      </div>
      <span className="text-sm dm-sans font-medium">{text}</span>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: number;
  period: string;
  features: string[];
  highlight?: boolean;
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  period, 
  features, 
  highlight = false,
  popular = false
}) => {
  return (
    <div className={`border-2 border-custom-blue rounded-3xl p-6 ${highlight ? 'bg-slate-200' : 'bg-white'} max-w-xs relative flex flex-col`}>
      {popular && (
        <div className="absolute top-6 right-4 text-xs font-medium text-custom-blue border border-custom-blue bg-blue-100 inline-block px-3 py-1 rounded-full">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-semibold dm-sans mb-6">{title}</h3>
      <div className="mb-7">
        <span className="text-5xl dm-sans font-bold">${price}</span>
        <span className="text-lg dm-sans font-bold">/{period}</span>
      </div><hr className='border-gray-200 border-1 mb-4' />
      <div className="mb-4 flex-grow">
        {features.map((feature, index) => (
          <PlanFeature key={index} text={feature} />
        ))}
      </div>
      <Button 
        className={`w-35 h-11 mt-6 dm-sans rounded-4xl ${
          highlight 
            ? 'bg-white text-interview-blue' 
            : 'bg-custom-blue text-white'
        }`}
      >
        Get Started <ArrowRight className='-ml-1' />
      </Button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const plans = [
    {
      title: "April Promo",
      price: 35,
      period: "week",
      features: [
        "Curated jobs from 1M+ listings, refreshed every 48 hours",
        "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
        "Need more? Add extra apps for just $1.5 each",
        "Your own dedicated application analyst",
        "Personalized with up to 10 filters & 5 job titles"
      ]
    },
    {
      title: "Starter",
      price: 50,
      period: "week",
      features: [
        "All the perks of the Promo Plan, plus:",
        "Resume review & story-focused feedback",
        "Dedicated search specialist",
        "Up to 50 job apps/week",
        "Extra apps at $1.5 each",
        "Analyst support within 6 hours (SLA/PST hours)"
      ],
      popular: true
    },
    {
      title: "Plus",
      price: 100,
      period: "week",
      features: [
        "Everything in Starter, with more muscle:",
        "Up to 75 apps/week",
        "Apply to 15 job titles",
        "Analyst + full application team on Pacific hours",
      ]
    }
  ];

  const advancedPlan = {
    title: "Advance",
    price: 150,
    period: "week",
    features: [
      "Everything in Plus",
      "Custom Resumes & Cover Letters",
      "20 fully customized applications/week",
      "Help with complex job searches",
      "Access to senior resume experts, Founder & Exec Coaches"
    ]
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl dm-sans font-semibold text-custom-blue mb-16 ml-50">
          Job Application Service Plans
        </h2>
        <div className="flex justify-center gap-16 mb-12">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
        
        <div className="bg-custom-blue text-white rounded-3xl p-6 max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold dm-sans mb-6">{advancedPlan.title}</h3>
            
            <div className="text-right">
              <span className="text-5xl dm-sans font-bold">${advancedPlan.price}</span>
              <span className="text-lg font-bold dm-sans opacity-80">/{advancedPlan.period}</span>
            </div>
          </div><hr className='border-gray-400 w-70 mb-4' />
          <div className="hidden md:block">
          {advancedPlan.features.map((feature, index) => (
            <div key={index} className="flex items-center mb-1 w-1/2">
            <div className="flex-shrink-0 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center mt-0.5 mr-2">
                <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm">{feature}</span>
            </div>
            ))}
          </div>
          <div className='flex justify-end -mt-16'>
          <Button
            className='w-35 h-11 mt-6 dm-sans rounded-4xl bg-white text-custom-blue'
          >
            Get Started <ArrowRight />
          </Button>
          </div>
        </div>
      </div>
      <hr className='mt-20 w-1/2 mx-auto border-1 border-gray-300 items-center' />
    </section>
  );
};

export default PricingSection;
