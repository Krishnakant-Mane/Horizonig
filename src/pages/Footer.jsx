import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-[#2a3342] text-white py-12 md:py-20 overflow-hidden font-sans">
      
      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[12rem] md:text-[20rem] lg:text-[25rem] font-extrabold text-white/[0.03] whitespace-nowrap pointer-events-none select-none tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Horizon
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-6 md:gap-12 lg:gap-8">
        
        {/* Left Column - Branding */}
        <div className="col-span-2 md:col-span-12 lg:col-span-5 flex flex-col space-y-5 lg:pr-10">
          <div className="bg-white p-2 rounded w-fit inline-block">
            <img src="/HorizonLogo.png" alt="Horizon Logo" className="h-9 md:h-12 object-contain" />
          </div>
          <p className="text-gray-300 text-[14px] leading-relaxed font-sans max-w-md">
            Protection engineered around your world. Horizon General Insurance provides health, motor, marine, fire, liability and cargo coverage for people and enterprises who refuse to compromise.
          </p>
        </div>
        
        {/* Company Links */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 lg:col-start-7">
          <h4 className="text-[#c49a6c] text-[12px] md:text-[13px] font-bold tracking-widest uppercase mb-4 md:mb-6">Company</h4>
          <ul className="space-y-3 md:space-y-4 text-gray-300 text-[14px]">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          </ul>
        </div>
        
        {/* Solutions Links */}
        <div className="col-span-1 md:col-span-4 lg:col-span-2">
          <h4 className="text-[#c49a6c] text-[12px] md:text-[13px] font-bold tracking-widest uppercase mb-4 md:mb-6">Solutions</h4>
          <ul className="space-y-3 md:space-y-4 text-gray-300 text-[14px]">
            <li><a href="#" className="hover:text-white transition-colors">Marine Insurance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Fire Insurance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Liability Insurance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MTO Insurance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Motor Insurance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Health Insurance</a></li>
          </ul>
        </div>
        
        {/* Contact Links */}
        <div className="col-span-2 md:col-span-5 lg:col-span-2">
          <h4 className="text-[#c49a6c] text-[12px] md:text-[13px] font-bold tracking-widest uppercase mb-4 md:mb-6">Contact</h4>
          <ul className="space-y-3 md:space-y-4 text-gray-300 text-[14px]">
            <li><a href="mailto:hello@horizon.co" className="hover:text-white transition-colors">hello@horizon.co</a></li>
            <li><a href="tel:+916526XXXXXX" className="hover:text-white transition-colors">+91 6526XXXXXX</a></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer