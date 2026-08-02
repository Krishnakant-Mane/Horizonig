import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeout = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false)
      }, 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  return (
    <div className='fixed top-8 left-0 right-0 z-[999] flex justify-center px-4 w-full'>
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className='bg-white rounded-full flex items-center shadow-md px-8 py-4 max-w-7xl'
      >
        {/* Logo */}
        <motion.div layout className='flex items-center shrink-0'>
          <img src="/HorizonLogo.png" alt="logo" className="h-10 object-contain" />
        </motion.div>

        {/* Links */}
        <AnimatePresence initial={false}>
          {!isScrolling && (
            <motion.div
              key="nav-links"
              layout
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className='overflow-hidden whitespace-nowrap flex justify-center pl-16 pr-16'
            >
              <ul className='flex items-center space-x-20 text-[#333] font-medium text-lg'>
                <li className="cursor-pointer hover:text-black transition-colors">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer hover:text-black transition-colors">
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Navbar