import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Users, Clock, Shield } from 'lucide-react';

export function WaitingList() {
  useEffect(() => {
    // Load ConvertKit form script
    const script = document.createElement('script');
    script.src = "https://haphazard.kit.com/37689e09df/index.js";
    script.async = true;
    script.dataset.uid = "37689e09df";
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-indigo-200/30 blur-3xl -z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Future of
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B]">
                Neurodivergent Productivity
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be among the first to experience our revolutionary AI-powered tools designed specifically for neurodivergent minds.
              Early access members will help shape the future of productivity.
            </p>
          </motion.div>
        </div>

        {/* ConvertKit Form */}
        <div className="max-w-2xl mx-auto mb-20">
          <div data-uid="37689e09df"></div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">When will the platform launch?</h3>
              <p className="text-gray-600">We're targeting an alpha release in Q2 2024, with early access for waiting list members. The public launch will follow based on feedback and testing.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">How will I know when I can access the platform?</h3>
              <p className="text-gray-600">You'll receive regular updates about our progress and be the first to know when access becomes available. We'll send detailed instructions for getting started.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">Will there be a free trial?</h3>
              <p className="text-gray-600">Yes! All waiting list members will get an extended free trial period to fully explore the platform and provide feedback.</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B] rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-semibold">Early Access Benefits</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-[#FF1F8F]" />
                <span>Priority access to new features</span>
              </li>
              <li className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#FF1F8F]" />
                <span>Direct feedback channel to developers</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-[#FF1F8F]" />
                <span>Lifetime discount on premium features</span>
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-[#FF1F8F]" />
                <span>Exclusive beta testing opportunities</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-4">Launch Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B] flex items-center justify-center text-white text-sm">1</div>
                <div className="ml-3">
                  <p className="font-medium">Alpha Testing</p>
                  <p className="text-sm text-gray-600">Early access for first 100 users</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B] flex items-center justify-center text-white text-sm">2</div>
                <div className="ml-3">
                  <p className="font-medium">Beta Release</p>
                  <p className="text-sm text-gray-600">Extended testing with waiting list members</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B] flex items-center justify-center text-white text-sm">3</div>
                <div className="ml-3">
                  <p className="font-medium">Public Launch</p>
                  <p className="text-sm text-gray-600">Full release with all core features</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-4">What's Coming</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#FF1F8F] rounded-full mr-2"></div>
                <span>AI-powered task management</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#FF1F8F] rounded-full mr-2"></div>
                <span>Smart focus timer with breaks</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#FF1F8F] rounded-full mr-2"></div>
                <span>Visual organization tools</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#FF1F8F] rounded-full mr-2"></div>
                <span>Personalized learning paths</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#FF1F8F] rounded-full mr-2"></div>
                <span>Community support features</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}