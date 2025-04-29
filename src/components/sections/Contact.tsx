
import React from 'react';
import { ArrowRight } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section>
      <div className="bg-custom-blue h-64 text-white rounded-2xl p-8 flex items-center justify-between max-w-5xl mx-auto mt-10">
        <div className="flex flex-col text-left">
            <span className="text-2xl dm-sans font-medium leading-tight">STILL HAVE</span>
            <span className="text-2xl dm-sans font-medium leading-tight">DOUBTS?</span>
        </div>
        <div className="text-center">
            <h2 className="text-6xl dm-sans tracking-tighter mr-8 font-semibold">Contact us</h2>
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mr-6">
            <ArrowRight className='text-custom-blue' size={36}/>
        </div>
        </div>
    </section>
  );
};

export default ContactSection;