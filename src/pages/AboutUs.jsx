import React, { useEffect, useRef } from 'react'
import { ArrowRight, Target, Eye, Gem, Scale, Handshake, Flag, Settings } from 'lucide-react'
import { animate, useInView } from 'framer-motion'

const Counter = ({ from = 0, to, duration = 2, suffix = "", decimals = 0, useComma = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            let formatted = value.toFixed(decimals);
            if (useComma && to >= 1000) {
              formatted = Number(formatted).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
            }
            ref.current.textContent = formatted + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, decimals, suffix, useComma]);

  return <span ref={ref}>{from.toFixed(decimals) + suffix}</span>;
};

const coreValues = [
  {
    title: 'Integrity',
    icon: <Scale size={20} strokeWidth={1.5} />,
    description: 'We operate with honesty and transparency in every policy and promise.'
  },
  {
    title: 'Trust',
    icon: <Handshake size={20} strokeWidth={1.5} />,
    description: 'We build lifelong relationships based on reliability and care.'
  },
  {
    title: 'Commitment',
    icon: <Flag size={20} strokeWidth={1.5} />,
    description: 'We go the extra mile to ensure every client feels supported and secure.'
  },
  {
    title: 'Excellence',
    icon: <Settings size={20} strokeWidth={1.5} />,
    description: 'We continuously improve to offer the best insurance experience possible.'
  }
];

const principles = [
  {
    title: 'Mission',
    icon: <Target size={20} strokeWidth={2} />,
    description: 'To protect the people, assets and ambitions that make modern life possible with honesty, speed and craft.'
  },
  {
    title: 'Vision',
    icon: <Eye size={20} strokeWidth={2} />,
    description: 'A world where insurance is no longer feared or misunderstood, but trusted as the quiet infrastructure of progress.'
  },
  {
    title: 'Core Values',
    icon: <Gem size={20} strokeWidth={2} />,
    description: 'Clarity over jargon. Judgment over policy. Human care over automation. Long-term over quarterly.'
  }
];

const AboutUs = () => {
  return (
    <div className='w-full h-full'>
      <div id='1' className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white rounded-b-[2.5rem]" style={{ backgroundImage: "url('https://res.cloudinary.com/dxlysvpud/image/upload/v1785659373/HorizonBanner2_usspwr.png')", fontFamily: "'Manrope', sans-serif" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 rounded-b-[2.5rem]"></div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-16">
          <h1 className="text-2xl md:text-6x font-bold lg:text-3xl leading-tight tracking-wide mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Protecting Lives.<br />Empowering Businesses.
          </h1>
          <p className="max-w-4xl text-sm md:text-[15px] lg:text-[16px] text-gray-200 mb-10 leading-relaxed px-4 font-light">
            We are a trusted insurance solutions provider, offering protection for businesses, individuals, and<br className="hidden md:block" /> assets with transparent policies and expert guidance.
          </p>

          {/* Button */}
          <button className="flex items-center space-x-2 bg-white text-[#2a3342] px-7 py-3 rounded-full hover:bg-gray-100 transition duration-300 font-medium text-[15px]">
            <span>Explore Insurance Solutions</span>
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div id='2' className='w-full max-w-7xl mx-auto px-4 py-24 bg-white'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>

          {/* Left Column */}
          <div className='w-full lg:w-[45%]'>
            <h4 className='text-[#c49a6c] font-bold text-sm tracking-widest uppercase mb-4'>
              Our Story
            </h4>
            <h2 className='text-4xl lg:text-[2.75rem] font-bold text-black leading-tight mb-6' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              A quieter kind of insurance<br />company.
            </h2>
            <div className='text-gray-600 text-[15.5px] leading-relaxed font-sans space-y-6'>
              <p>
                Horizon began in 1984 with a single office and a founding conviction: that insurance should feel less like a contract and more like a promise. We chose to grow slowly, taking only clients we could serve exceptionally.
              </p>
              <p>
                Today we underwrite across sixty markets — from private health cover for families to hull and cargo policies for global fleets. What remains constant is the way we work: clearly, personally, without shortcuts.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className='w-full lg:w-[55%] relative h-[400px] lg:h-[450px] shadow-sm '>
            <img
              src="https://res.cloudinary.com/dxlysvpud/image/upload/v1785659338/HorizonOffice_uwmvmo.jpg"
              alt="Horizon Office"
              className="absolute w-full h-full object-cover z-10"
            />
          </div>

          {/* single gradient: image → dark (numbers) → solid white (labels), no hard edges */}
          <div
            className="absolute w-100 lg:w-180 z-50 top-450 lg:top-300 lg:left-175 flex flex-col justify-end border border-white/30"
            style={{
              backdropFilter: 'blur(10px)',
            }}

          >
            <div className="flex w-full pb-4">
              {[
                { to: 1984, suffix: '', useComma: false, label: 'Founded' },
                { to: 1200, suffix: '', useComma: true, label: 'Employees' },
                { to: 60, suffix: '+', useComma: false, label: 'Markets' }
              ].map((stat, idx) => (
                <div key={idx} className="flex-1 text-center">
                  <span
                    className="text-4xl text-white font-sans"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
                  >
                    <Counter from={0} to={stat.to} suffix={stat.suffix} useComma={stat.useComma} />
                  </span>
                </div>
              ))}
            </div>
            <div className="flex w-full pb-3">
              {[
                { label: 'Founded' },
                { label: 'Employees' },
                { label: 'Markets' }
              ].map((stat, idx) => (
                <div key={idx} className="flex-1 text-center font-sans">
                  <span className="text-[14px] text-black font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div id='3' className='w-full max-w-[80rem] mx-auto px-4 py-24 bg-white'>
        <div className="text-center mb-16">
          <h4 className="text-[#c49a6c] font-bold text-[13px] tracking-widest uppercase mb-4 font-sans">
            MISSION
          </h4>
          <h2 className="text-4xl lg:text-[2.75rem] font-bold text-black leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            The principles<br />behind every policy.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-2">
          {principles.map((principle, idx) => (
            <div key={idx} className="flex-1 relative flex flex-col items-center text-center pt-16 pb-10 px-8 bg-white border border-gray-100 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div className="absolute top-8 left-8 w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-gray-800 bg-white">
                {principle.icon}
              </div>
              <h3 className="text-[1.35rem] font-bold text-black mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {principle.title}
              </h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed font-sans max-w-[280px]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div id='4' className='relative h-screen w-full py-10 lg:py-24 bg-cover bg-center flex flex-col items-center justify-center' style={{ backgroundImage: "url('https://res.cloudinary.com/dxlysvpud/image/upload/v1785659342/HorizonDockyard_kuuo6s.png')" }}>
        {/* Very light overlay just to ensure text pops */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className='relative z-10 w-full max-w-7xl mx-auto lg:px-4'>
          {/* Header */}
          <div className="text-center mt-40 lg:mt-0 mb-5 lg:mb-16">
            <h4 className='text-[#c49a6c] font-bold text-sm tracking-widest uppercase mb-4'>
              OUR CORE VALUES
            </h4>
            <h2 className='text-4xl lg:text-[3.25rem] font-bold leading-tight text-white drop-shadow-md' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              What We Stand On
            </h2>
          </div>

          {/* Layout - Flex 2x2 for cards on the right */}
          <div className="flex w-full">
            <div className="hidden lg:block lg:w-[45%]"></div>

            <div className="w-full lg:w-[55%] flex flex-wrap justify-between gap-y-3 lg:gap-y-3 mt-4 lg:mt-0">
              {coreValues.map((value, idx) => (
                <div key={idx} className="w-[calc(50%-6px)] lg:w-70 flex flex-col p-4 sm:p-5 lg:p-8 rounded-2xl lg:rounded-[2rem] bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl">
                  <div className="h-9 w-9 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl border border-white/20 bg-white/10 flex items-center justify-center text-white mb-3 lg:mb-2">
                    {value.icon}
                  </div>
                  <h3 className="text-base sm:text-xl lg:text-2xl font-medium text-white mb-2 lg:mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {value.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] lg:text-[14.5px] text-gray-300 leading-snug lg:leading-relaxed font-sans">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id='5' className='w-full max-w-6xl mx-auto px-4 py-28 bg-white flex flex-col items-center text-center'>
        <h2 className='text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-black mb-6 leading-tight' style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Your Trusted Partner in<br className="hidden md:block" />Protection.
        </h2>
        <p className='text-[15.5px] text-[#4a5568] leading-relaxed font-sans max-w-[65rem] mb-12 px-4 md:px-8'>
          Whether it's your health, home, business, or vehicle, Horizon Insurance is committed to protecting what you value most. Our goal is to make insurance simple, accessible, and stress-free so you can focus on living confidently. With Horizon Insurance, you don't just get a policy; you gain a lifelong partner dedicated to your safety and peace of mind.
        </p>
        <button className='flex items-center space-x-2 border border-[#2a3342] text-[#2a3342] px-6 py-3 hover:bg-[#2a3342] hover:text-white transition duration-300 font-medium text-[15px]'>
          <span>Talk to our Advisor</span>
          <ArrowRight size={18} strokeWidth={1.5} />
        </button>
      </div>
    </div>

  )
}

export default AboutUs