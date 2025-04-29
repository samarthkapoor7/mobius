
import React from 'react';
import { Play, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface VideoTestimonialProps {
  name: string;
  title: string;
  interviewCount: number;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ name, title, interviewCount }) => {
  return (
    <div className="w-[280px] h-[320px] rounded-3xl overflow-hidden border-2 border-custom-blue flex flex-col bg-white shadow-sm">
      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-t-3xl rounded-b-none">
        <button
          className="flex items-center justify-center w-10 h-10 bg-custom-blue rounded-full"
          aria-label="Play testimonial video"
        >
          <Play className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="bg-custom-blue text-white p-4 rounded-b-3xl flex flex-col justify-between">
        <p className="text-sm dm-sans mb-4">
          <span className="font-light">{name}</span> is a <span className="font-medium">{title}</span> who got over <span className="font-bold">{interviewCount} job interviews</span> and an offer she accepted
        </p>
        <div className="flex justify-end">
          <div className="relative flex items-center justify-center w-8 h-8">
            <span className="absolute w-8 h-8 bg-white rounded-full opacity-100"></span>
            <ArrowUpRight className="w-4 h-4 text-custom-blue z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-64 h-58 p-6 rounded-3xl border border-custom-indigo">
      <div className="text-interview-blue mb-8">
        {icon}
      </div>
      <h3 className="text-md sora font-semibold text-custom-indigo mb-4">{title}</h3>
      <p className="text-custom-indigo dm-sans text-sm  tracking-tighter font-extralight">{description}</p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Holly",
      title: "senior executive",
      interviewCount: 10
    },
    {
      name: "Holly",
      title: "senior executive",
      interviewCount: 10
    },
    {
      name: "Holly",
      title: "senior executive",
      interviewCount: 10
    }
  ];

  const features = [
    {
      icon: <img src='src/assets/handshake.png' className="w-11 h-10"></img>,
      title: "Tried, Tested, Trusted",
      description: "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back."
    },
    {
      icon: <img src='src/assets/user.png' className="w-9 h-10"></img>,
      title: "Real People, Real Help",
      description: "A hands-on team that actually cares — guiding you through every twist in your career path."
    },
    {
      icon: <img src='src/assets/star.png' className="w-10 h-10"></img>,
      title: "Beat the Line",
      description: "We search, shortlist, and apply for you, so your name shows up first — every single day."
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-medium text-custom-blue mb-18 ml-50">What our clients have to say</h2>
      <div className="flex justify-center gap-12 mb-12 justify-items-center">
          {testimonials.map((testimonial, index) => (
            <VideoTestimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="flex justify-center items-center mb-34">
          <Button variant="outline" className="font-medium text-custom-blue mr-8 rounded-full border-custom-blue hover:bg-custom-indigo hover:text-white w-60 h-10">
            More customer testimonials
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button className="bg-custom-blue rounded-full text-white w-36">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="max-w-6xl bg-custom-slate rounded-3xl mx-auto p-8">
          <h2 className="text-3xl font-medium text-custom-indigo mb-8">Why Choose Us?</h2>
          <div className="flex justify-center gap-24">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;