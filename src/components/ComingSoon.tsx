import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Volume2, BookOpen } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B] rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="ml-3 text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export function ComingSoon() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Routine Builder",
      description: "AI-powered daily schedule optimization that adapts to your energy levels and focus patterns."
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Connect with others, share experiences, and build a supportive network of neurodivergent individuals."
    },
    {
      icon: Volume2,
      title: "Focus Sounds",
      description: "Customizable background noise and music designed to enhance concentration and reduce distractions."
    },
    {
      icon: BookOpen,
      title: "Visual Learning Tools",
      description: "Interactive diagrams and mind maps that make complex information easier to understand and remember."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          index={index}
        />
      ))}
    </div>
  );
}