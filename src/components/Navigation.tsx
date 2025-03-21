import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionPosition = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home', onClick: () => scrollToSection('hero') },
    { id: 'features', label: 'Features', onClick: () => scrollToSection('features') },
    { id: 'pricing', label: 'Pricing', onClick: () => scrollToSection('pricing') },
    { id: 'testimonials', label: 'About', onClick: () => scrollToSection('testimonials') }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 flex justify-center px-4 py-4"
    >
      <div
        className={`max-w-4xl w-full rounded-full backdrop-blur-md ${
          isScrolled ? 'bg-white/70' : 'bg-white/60'
        } shadow-lg transition-all duration-300`}
      >
        <div className="px-6 py-2">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2">
              <img 
                src="https://raw.githubusercontent.com/davidjenner/Haphard-Landing/main/haphazard-logo-icon.png"
                alt="Haphazard Logo"
                className="w-8 h-8"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B] bg-clip-text text-transparent">
                Haphazard
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="flex items-center bg-gray-100/30 rounded-full p-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={link.onClick}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      location.pathname === `/#${link.id}`
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Link to="/sign-in">
                <Button variant="ghost" className="rounded-full">Sign In</Button>
              </Link>
              <Link to="/sign-up">
                <Button className="rounded-full bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B]">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-2"
              >
                <div className="py-2 space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => {
                        link.onClick();
                        setIsOpen(false);
                      }}
                      className={`block w-full px-4 py-2 rounded-full text-sm ${
                        location.pathname === `/#${link.id}`
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="pt-2 space-y-1">
                    <Link
                      to="/sign-in"
                      className="block px-4 py-2 rounded-full text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/sign-up"
                      className="block px-4 py-2 rounded-full text-sm text-white bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B]"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}