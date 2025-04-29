import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import HeroBG from '@/assets/HeroBG.png';
import Navbar from '@/components/layout/Navbar';
import eBook from '@/assets/image 1.png'

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative overflow-hidden min-h-[600px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${HeroBG})` }}
    >
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full ml-8 md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-6xl sora text-white mb-4">
              Land job interviews<br />
              <span className="text-4xl text-custom-blue md:text-5xl font-bold">10x </span>
              faster
            </h1>
            <p className="text-blue-100 mb-8 max-w-md">
              Custom-built resumes that match your goals, keywords, and recruiter expectations.
            </p>
            <Button className="bg-white text-custom-indigo hover:bg-custom-indigo hover:text-white rounded-full w-36 py-5 font-medium">
              Get Started <ArrowRight className='-ml-2' />
            </Button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-4 rotate-3 transform">
                <img 
                  src={eBook} 
                  alt="Interview Guide eBook" 
                  className="rounded w-64 h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                Download free E-book
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
