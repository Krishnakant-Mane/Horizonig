import React, { useEffect, useRef } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { animate, useInView } from 'framer-motion';
import { ShieldCheck, Users, ScrollText, Zap, FileText, Sparkles, Clock, HeartHandshake, ArrowUpRight } from 'lucide-react';
const Counter = ({ from = 0, to, duration = 2, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(decimals) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, decimals, suffix]);

  return <span ref={ref}>{from.toFixed(decimals) + suffix}</span>;
};

const servicesData = [
  {
    title: "Marine Insurance",
    image: "https://res.cloudinary.com/dxlysvpud/image/upload/v1785657532/HorizonDock_w2pht0.jpg",
    description: "Ensures your cargo and vessel are protected against losses during sea voyages or port-related operations."
  },
  {
    title: "Fire Insurance",
    image: "https://res.cloudinary.com/dxlysvpud/image/upload/v1785657530/HorizonFirefighter_gdot1a.jpg",
    description: "Covers losses from fire, lightning, or explosions keeping your property and business secure from major risks."
  },
  {
    title: "Liability Insurance",
    image: "https://res.cloudinary.com/dxlysvpud/image/upload/v1785657530/HorizonLiabilityInsurance_kuhx1o.jpg",
    description: "Provides protection against third-party injuries, property damage, or legal expenses from business."
  },
  {
    title: "MTO Insurance",
    image: "https://res.cloudinary.com/dxlysvpud/image/upload/v1785657530/HorizonDock2_flguvo.jpg",
    description: "Safeguards your goods across sea, air, road, and rail with comprehensive multimodal transport coverage."
  },
  {
    title: "Motor Insurance",
    image: "https://res.cloudinary.com/dxlysvpud/image/upload/v1785657530/HorizonCar_flawqe.jpg",
    description: "Protects your vehicle from damage, theft, and third-party liabilities ensuring peace of mind on every drive."
  },
  {
    title: "Health Insurance",
    image: "https://res.cloudinary.com/dxlysvpud/image/upload/v1785657532/HorizonHealthInsr_sgzf1e.png",
    description: "Health Insurance plans cover hospitalization, treatments, and emergencies, offering financial protection and peace of mind."
  }
];


const Home = () => {
  return (
    <>

      <div className='w-full h-full'>


        <div id='1' className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white rounded-b-4xl" style={{ backgroundImage: "url('https://res.cloudinary.com/dxlysvpud/image/upload/v1785652595/HorizonHomePage_avcrvh.png')", fontFamily: "'Manrope', sans-serif" }}>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 rounded-b-4xl"></div>

          {/* Main Hero Content */}
          <div className=" z-10 flex flex-col items-center text-center px-4 mt-50">
            <h1 className="text-2xl md:text-6x font-bold lg:text-3xl leading-tight tracking-wide mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Protecting Lives.<br />Empowering Businesses.
            </h1>
            <p className="max-w-4xl text-sm md:text-base lg:text-lg text-gray-200 mb-10 leading-relaxed px-4 font-light">
              At Horizon General Insurance, Let Horizon secure your maritime ventures with unmatched<br className="hidden md:block" /> professionalism, clarity, and care. Instead of At Horizon General Insurance, we protect what matters<br className="hidden md:block" /> most your health, assets, and peace of mind.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="flex items-center space-x-2 border border-white text-white px-7 py-3 rounded-full hover:bg-white/10 transition duration-300 font-medium text-sm lg:text-base">
                <span>Get a Quote</span>
                <ArrowOutwardIcon fontSize="small" className="border border-white rounded-full p-[2px]" />
              </button>
              <button className="flex items-center space-x-2 bg-white text-black px-7 py-3 rounded-full hover:bg-gray-200 transition duration-300 font-medium text-sm lg:text-base">
                <span>Explore Services</span>
                <ArrowForwardIcon fontSize="small" />
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="relative z-10 mt-auto mb-12 w-full max-w-4xl px-4">
            <div className="bg-black/1 backdrop-blur-md py-4 px-3 md:px-12 flex flex-wrap justify-between items-center text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/10">
              <div className="flex flex-col items-center w-1/2 md:w-auto mb-4 md:mb-0 font-sans">
                <span className="text-3xl md:text-[2.5rem]"><Counter to={30} suffix="+" /></span>
                <span className="text-xs md:text-sm text-gray-300 mt-2 font-medium tracking-wide">Years of Expertise</span>
              </div>

              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

              <div className="flex flex-col items-center w-1/2 md:w-auto mb-4 md:mb-0">
                <span className="text-3xl md:text-[2.5rem]"><Counter to={150} suffix="k+" /></span>
                <span className="text-xs md:text-sm text-gray-300 mt-2 font-medium tracking-wide">Happy Clients</span>
              </div>

              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

              <div className="flex flex-col items-center w-1/2 md:w-auto">
                <span className="text-3xl md:text-[2.5rem]"><Counter to={12} suffix="k+" /></span>
                <span className="text-xs md:text-sm text-gray-300 mt-2 font-medium tracking-wide">Policies Assisted</span>
              </div>

              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

              <div className="flex flex-col items-center w-1/2 md:w-auto">
                <span className="text-3xl md:text-[2.5rem]"><Counter to={4.9} decimals={1} suffix="/5" /></span>
                <span className="text-xs md:text-sm text-gray-300 mt-2 font-medium tracking-wide">Market Rating</span>
              </div>

              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

              <div className="flex flex-col items-center w-1/2 md:w-auto mx-auto md:mx-0 mt-4 md:mt-0">
                <span className="text-3xl md:text-[2.5rem] "><Counter to={98} suffix="%" /></span>
                <span className="text-xs md:text-sm text-gray-300 mt-2 font-medium tracking-wide">Claims Assisted</span>
              </div>
            </div>
          </div>
        </div>

        <div id='2' className='w-full max-w-7xl mx-auto px-4 py-24 text-gray-800 bg-white'>
          
          {/* Top Section */}
          <div className='flex flex-col lg:flex-row justify-between items-start mb-24 space-y-8 lg:space-y-0 lg:space-x-16'>
            {/* Left Col */}
            <div className='w-full lg:w-[45%]'>
              <h4 className='text-[#c49a6c] font-bold text-sm tracking-widest uppercase mb-4'>About Horizon</h4>
              <h2 className='text-4xl lg:text-4xl font-bold text-[#2a3342] leading-tight' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Built on Trust. Driven by<br />Protection.
              </h2>
            </div>
            {/* Right Col */}
            <div className='w-full lg:w-[55%] text-gray-600 space-y-6 leading-relaxed font-sans'>
              <p>
                At Horizon Insurance , we believe that true protection goes beyond policies it's about trust, care, and commitment. With years of experience in the insurance industry, we provide reliable coverage solutions that secure your future and safeguard your assets.
              </p>
              <p>
                With a team of experienced professionals and a customer-first approach, we make insurance simple, clear, and accessible. Whether you're safeguarding your health, your assets, or your future, Horizon General Insurance is your dependable partner always committed to standing by your side when it matters the most.
              </p>
            </div>
          </div>

          {/* Bottom Section - Features */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x lg:divide-gray-100'>
            
            {/* Feature 1 */}
            <div className='flex flex-col items-center text-center px-4 lg:px-10 '>
              <div className='mb-5 text-gray-800'>
                <ShieldCheck sx={{ fontSize: 44, color: '#1a1a1a', stroke: '#1a1a1a', strokeWidth: 10 }} />
              </div>
              <h3 className='text-xl font-medium text-black mb-3 font-sans'>Trusted Expertise</h3>
              <p className='text-[15px] text-gray-500 leading-relaxed font-medium font-sans'>
                Four decades of underwriting rigor across every major risk class.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='flex flex-col items-center text-center px-4 lg:px-10'>
              <div className='mb-5 text-gray-800'>
                <Users sx={{ fontSize: 44, color: '#1a1a1a', stroke: '#1a1a1a', strokeWidth: 10 }} />
              </div>
              <h3 className='text-xl font-medium text-black mb-3 font-sans'>Customer First</h3>
              <p className='text-[15px] text-gray-500 leading-relaxed font-medium font-sans'>
                Every policy is co-designed with the person or team it protects.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='flex flex-col items-center text-center px-4 lg:px-10'>
              <div className='mb-5 text-gray-800'>
                <ScrollText sx={{ fontSize: 44, color: '#1a1a1a', stroke: '#1a1a1a', strokeWidth: 10 }} />
              </div>
              <h3 className='text-xl font-medium text-black mb-3 font-sans'>Transparent Policies</h3>
              <p className='text-[15px] text-gray-500 leading-relaxed font-medium font-sans'>
                No fine print traps. Clear language, clear terms, clear pricing.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='flex flex-col items-center text-center px-4 lg:px-10'>
              <div className='mb-5 text-gray-800'>
                <Zap sx={{ fontSize: 44, color: '#1a1a1a', stroke: '#1a1a1a', strokeWidth: 10 }} />
              </div>
              <h3 className='text-xl font-medium text-black mb-3 font-sans'>Fast Claims Support</h3>
              <p className='text-[15px] text-gray-500 leading-relaxed font-medium font-sans'>
                Median settlement in under 24 hours through dedicated concierge.
              </p>
            </div>

          </div>

        </div>

        <div id='3' className='w-full max-w-7xl mx-auto px-4 py-24 text-gray-800 bg-white'>
          
          {/* Header Section */}
          <div className='flex flex-col items-center text-center mb-16'>
            <h4 className='text-[#c49a6c] font-bold text-sm tracking-widest uppercase mb-4'>Our Services</h4>
            <h2 className='text-4xl lg:text-5xl font-bold text-[#2a3342] leading-tight mb-6' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Insurance Solutions,<br />Tailored for You.
            </h2>
            <p className='text-gray-600 max-w-4xl text-[15px] md:text-base leading-relaxed font-sans'>
              Discover a wide range of reliable and affordable insurance plans designed to protect your health, vehicle, property, and business. At Horizon General Insurance, we're committed to securing your future with integrity and care.
            </p>
          </div>

          {/* Services Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service, index) => (
              <div key={index} className='flex flex-col bg-white border border-gray-200 rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                {/* Image */}
                <div className='w-full h-56 md:h-64 overflow-hidden'>
                  <img src={service.image} alt={service.title} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
                </div>
                {/* Content */}
                <div className='p-8 text-center flex-1 flex flex-col justify-center'>
                  <h3 className='text-2xl font-medium text-black mb-3' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className='text-[14px] text-gray-500 leading-relaxed font-sans font-medium'>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div id='4' className='w-full max-w-7xl mx-auto px-4 py-24 text-gray-800 bg-white'>
          
          {/* Header Section */}
          <div className='flex flex-col items-center text-center mb-16'>
            <h4 className='text-[#c49a6c] font-bold text-sm tracking-widest uppercase mb-4'>Why Choose Horizon</h4>
            <h2 className='text-4xl lg:text-[2.75rem] font-bold text-[#2a3342] leading-tight' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              The details other<br />insurers overlook.
            </h2>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            
            {/* Card 1 */}
            <div className='flex flex-col items-center text-center px-6 py-12 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300'>
              <div className='mb-6 text-[#2a3342]'>
                <ScrollText size={42} strokeWidth={1.2} />
              </div>
              <h3 className='text-[1.35rem] font-medium text-black mb-4' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Transparent Policies
              </h3>
              <p className='text-[15px] text-gray-500 leading-relaxed font-sans font-medium px-2'>
                Plain-language contracts. No hidden fees, no adversarial clauses.
              </p>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col items-center text-center px-6 py-12 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300'>
              <div className='mb-6 text-[#2a3342]'>
                <Sparkles size={42} strokeWidth={1.2} />
              </div>
              <h3 className='text-[1.35rem] font-medium text-black mb-4' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Expert Guidance
              </h3>
              <p className='text-[15px] text-gray-500 leading-relaxed font-sans font-medium px-2'>
                Senior advisors matched to your risk profile from day one.
              </p>
            </div>

            {/* Card 3 */}
            <div className='flex flex-col items-center text-center px-6 py-12 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300'>
              <div className='mb-6 text-[#2a3342]'>
                <Clock size={42} strokeWidth={1.2} />
              </div>
              <h3 className='text-[1.35rem] font-medium text-black mb-4' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                24/7 Assistance
              </h3>
              <p className='text-[15px] text-gray-500 leading-relaxed font-sans font-medium px-2'>
                Around-the-clock claims and support wherever you are in the world.
              </p>
            </div>

            {/* Card 4 */}
            <div className='flex flex-col items-center text-center px-6 py-12 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300'>
              <div className='mb-6 text-[#2a3342]'>
                <HeartHandshake size={42} strokeWidth={1.2} />
              </div>
              <h3 className='text-[1.35rem] font-medium text-black mb-4' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Trusted Partnerships
              </h3>
              <p className='text-[15px] text-gray-500 leading-relaxed font-sans font-medium px-2'>
                Underwritten with A+ carriers and reinsured with global leaders.
              </p>
            </div>

          </div>
        </div>

        <div id='5' className='w-full max-w-5xl mx-auto px-4 py-24 text-gray-800 bg-white'>
          <div className='flex flex-col items-center text-center'>
            
            {/* Subtitle */}
            <h4 className='text-[#c49a6c] font-bold text-sm tracking-widest uppercase mb-4'>
              Our Commitment
            </h4>
            
            {/* Title */}
            <h2 className='text-4xl lg:text-[3rem] font-bold text-black leading-tight mb-6' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              We don't sell policies.<br />We keep promises.
            </h2>
            
            {/* Description */}
            <p className='text-gray-500 text-[15.5px] leading-relaxed font-sans mb-10'>
              At Horizon Insurance, we're not just an insurer we're your protection partner. Every policy we craft reflects our dedication to<br className="hidden md:block" /> care, trust, and long-term commitment. When life throws the unexpected, Horizon stands beside you — securing your present<br className="hidden md:block" /> and safeguarding your future.
            </p>
            
            {/* Button */}
            <button className='group flex items-center space-x-2 border border-gray-400 text-[#2a3342] px-8 py-3 rounded-full hover:border-gray-800 transition duration-300 font-medium text-[15px]'>
              <span>Start your coverage</span>
              <div className='border border-gray-400 rounded-full p-[3px] group-hover:border-gray-800 transition duration-300'>
                <ArrowUpRight size={14} strokeWidth={2} />
              </div>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home