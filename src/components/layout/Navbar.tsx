import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from 'lucide-react';
import Logo from '@/assets/logo.png';

const Navbar: React.FC = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Plans", path: "/plans" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "More", path: "/more" }
  ];

  return (
    <nav className="w-full py-4 px-4 md:px-10 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="MobiusEngine Logo" className="ml-4 h-8 w-auto" />
      </div>
      
      <div className="flex space-x-20">
        {navItems.map((item) => (
          <Link 
            key={item.name}
            to={item.path}
            className="text-white dm-sans text-md hover:text-blue-200 transition-colors"
          >
            {item.name}
            {item.name === "More" && <ChevronDown className='text-xs ml-1 inline-block' />}
          </Link>
        ))}
      </div>
      
      <Button className="bg-white rounded-3xl w-30 mr-12 text-custom-indigo shadow-2xl hover:bg-custom-indigo hover:text-white transition-colors">
        Get Started
      </Button>
    </nav>
  );
};

export default Navbar;