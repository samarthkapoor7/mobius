import React from 'react';
import AboutBG from '@/assets/AboutBG.png'

interface TeamMemberProps {
  description: string;
  imageUrl: string;
  linkedInUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ description, imageUrl, linkedInUrl }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-6 mt-12 mb-12">
      <div className="relative">
        <img 
          src={imageUrl}  
          className="w-54 h-54 rounded-full object-cover"
        />
        <a 
          href={linkedInUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-1 right-1 bg-white/15 backdrop-blur-md border-1 text-white shadow-lg w-14 h-14 rounded-full flex items-center justify-center dm-sans font-bold text-3xl"
        >
          in
        </a>
      </div>
      <div className='text-left max-w-sm ml-10'>
        <p className="text-blue-100 text-sm dm-sans" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  const teamMembers = [
    {
      description: "<strong>Ashwin</strong> is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University. <br/> <br/> Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
      imageUrl: "src/assets/1.png",
      linkedInUrl: "https://linkedin.com"
    },
    {
      description: "<strong>Nicole</strong> is an Executive coach at Mobius specializing in resume builds and career advisory. <br/> <br/> With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
      imageUrl: "src/assets/2.png",
      linkedInUrl: "https://linkedin.com"
    }
  ];

  return (
    <section className="py-16 bg-cover bg-center"
    style={{ backgroundImage: `url(${AboutBG})`}}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white mb-10 ml-50">
          About Us
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              description={member.description}
              imageUrl={member.imageUrl}
              linkedInUrl={member.linkedInUrl}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <p className= "text-white mb-4">Learn more about our Board of Advisors​ ↗</p>
          <a href="#" className="text-white hover:text-blue-300">Follow us on our Linkedin page ↗</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;