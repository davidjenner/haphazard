import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

type Currency = 'USD' | 'GBP' | 'EUR';

const currencySymbols: Record<Currency, string> = {
  USD: '$',
  GBP: '£',
  EUR: '€'
};

const exchangeRates: Record<Currency, number> = {
  USD: 1,
  GBP: 0.79,
  EUR: 0.92
};

interface PricingPlan {
  title: string;
  basePrice: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingCardProps extends PricingPlan {
  currency: Currency;
  isAnnual: boolean;
}

function PricingCard({ title, basePrice, description, features, isPopular = false, currency, isAnnual }: PricingCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isProOrTeam = title === "Pro" || title === "Team";
  const price = Math.round(basePrice * exchangeRates[currency] * (isAnnual ? 8 : 1));
  const symbol = currencySymbols[currency];
  const yearlySavings = Math.round((basePrice * 12 - basePrice * 8) * exchangeRates[currency]);

  const handleWaitingListClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    if (window.convertkit && window.convertkit.showForm) {
      // @ts-ignore
      window.convertkit.showForm('5337b98c38');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative bg-white rounded-2xl shadow-xl p-8 ${
        isPopular ? 'border-2 border-[#FF1F8F]' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B] text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{symbol}{price}</span>
          <span className="text-gray-600">/{isAnnual ? 'year' : 'month'}</span>
          {isAnnual && (
            <div className="text-sm text-green-600 mt-1">
              Save {symbol}{yearlySavings} per year
            </div>
          )}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-6 w-6 text-[#FF1F8F] mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {isProOrTeam ? (
        <button
          onClick={handleWaitingListClick}
          className={`w-full px-4 py-2 rounded-full text-white ${
            isPopular
              ? 'bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B]'
              : 'bg-gray-800 hover:bg-gray-700'
          } transition-colors duration-200`}
        >
          Join Waiting List
        </button>
      ) : (
        <Link to="/sign-up" className="block w-full">
          <Button
            className={`w-full ${
              isPopular
                ? 'bg-gradient-to-r from-[#FF1F8F] to-[#FF6B6B] text-white'
                : ''
            }`}
            variant={isPopular ? 'default' : 'outline'}
          >
            Get Started
          </Button>
        </Link>
      )}
    </motion.div>
  );
}

export function PricingSection() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans: PricingPlan[] = [
    {
      title: "Basic",
      basePrice: 0,
      description: "Perfect for getting started",
      features: [
        "Basic task management",
        "Simple focus timer",
        "Limited AI assistance",
        "Community access"
      ]
    },
    {
      title: "Pro",
      basePrice: 19,
      description: "Best for personal use",
      features: [
        "Advanced task management",
        "Custom focus sessions",
        "Full AI assistance",
        "Priority support",
        "Unlimited storage"
      ],
      isPopular: true
    },
    {
      title: "Team",
      basePrice: 49,
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Admin dashboard",
        "API access",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600 mb-8">
          Choose the plan that works best for you
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            {(['USD', 'GBP', 'EUR'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  currency === curr
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                !isAnnual
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                isAnnual
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.title}
            {...plan}
            currency={currency}
            isAnnual={isAnnual}
          />
        ))}
      </div>
    </div>
  );
}