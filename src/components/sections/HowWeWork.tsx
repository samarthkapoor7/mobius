import React from 'react';

interface WorkStepProps {
  number: number;
  title: string;
}

const WorkStep: React.FC<WorkStepProps> = ({ number, title }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full border-1 border-custom-indigo flex items-center justify-center mb-4">
        <span className="text-black text-4xl dm-sans font-medium">{number}</span>
      </div>
      <hr className="border-custom-blue w-40 border-1 mb-3" />
      <h3 className="text-custom-blue sora mb-2" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Submit Intake Form",
    },
    {
      number: 2,
      title: "We do the search and <br /> curation for list of jobs",
    },
    {
      number: 3,
      title: "You approve, we do the <br /> tedious part (applying)",
    },
    {
      number: 4,
      title: "You get the interviews",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl ml-30 dm-sans font-medium text-custom-blue mb-16">
          How we work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <WorkStep 
              key={step.number}
              number={step.number}
              title={step.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;