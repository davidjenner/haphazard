import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Clock,
  Layout,
  BookOpen,
  Palette,
  Bot,
  Newspaper,
  Calendar,
  Star,
  Users,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { FAQ } from '../components/FAQ';
import { ComingSoon } from '../components/ComingSoon';
import { Button } from '../components/ui/button';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PricingSection } from '../components/PricingSection';

function FeatureSection({ title, description, icon: Icon, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="p-3 bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B] rounded-full mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({ name, role, company, image, quote }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">
            {role} at {company}
          </p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </motion.div>
  );
}

export function HomePage() {
  const features = [
    {
      title: "Focus & Time Management",
      description: "AI-powered Time Boxing, Smart Todo Lists, Visual Kanban Boards, Focus Timer with Breaks",
      icon: Clock,
    },
    {
      title: "Reading & Writing Support",
      description: "Text to ADHD-friendly Format, OpenDyslexic Font Support, Text-to-Speech Integration, AI Mind Mapping",
      icon: BookOpen,
    },
    {
      title: "Personalized Experience",
      description: "Condition-specific Settings, Customizable Interface, Adaptive Learning System, Progress Tracking",
      icon: Palette,
    },
    {
      title: "AI Assistance",
      description: "Task Breakdown Suggestions, Study Buddy AI, Writing Assistant, Focus Recommendations",
      icon: Bot,
    },
    {
      title: "Curated Content",
      description: "Personalized News Feed, Trusted Resource Library, Community Success Stories, Expert Articles",
      icon: Newspaper,
    },
    {
      title: "Life Management",
      description: "Smart Budget Calculator, Routine Planner, Habit Tracker, Goal Setting Tools",
      icon: Calendar,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
      quote: "This platform has transformed how I manage my ADHD at work. The AI assistance is like having a personal productivity coach."
    },
    {
      name: "Michael Chen",
      role: "Student",
      company: "Stanford University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
      quote: "The reading tools have made a huge difference in my studies. As someone with dyslexia, I can finally keep up with my coursework."
    },
    {
      name: "Emma Davis",
      role: "Creative Director",
      company: "Design Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
      quote: "The visual organization tools are perfect for my autistic brain. Everything is exactly where I need it to be."
    }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100 via-purple-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIyOSwgMjMxLCAyMzUsIDAuNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-indigo-200/30 blur-3xl"></div>
          </div>
          <div className="text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Productivity Tools for<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B]">
                  Neurodivergent Minds
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                AI-powered tools designed for individuals with ADHD, Dyslexia, and Autism.
                Make organization, reading, and writing more accessible.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/sign-up">
                  <Button size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/waiting-list">
                  <Button variant="outline" size="lg">
                    Join Waiting List
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureSection
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <div id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">
            Real stories from real users
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Coming Soon</h2>
        <ComingSoon />
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}