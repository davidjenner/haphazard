import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#FF1F8F]" />
        ) : (
          <Plus className="w-5 h-5 text-[#FF1F8F]" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Who is making this?",
      answer: "Developing a productivity tool to help neurodiverse process information and organise their ideas. Created by an IT technician with a web design background who has ADHD."
    },
    {
      question: "How much will it cost?",
      answer: "We're still working on the pricing model. Stay tuned for updates!"
    },
    {
      question: "Does it do [really cool feature idea]?",
      answer: "We have many exciting features planned. Let us know your ideas!"
    },
    {
      question: "Will this work on my phone?",
      answer: "Yes, Haphazard AI will be accessible on any device with a browser."
    },
    {
      question: "What's next?",
      answer: "We're launching a limited alpha soon. Sign up to be the first to know!"
    },
    {
      question: "How can this platform help me?",
      answer: "Our platform provides personalized tools and strategies tailored to your specific needs, whether you're managing ADHD, autism, or dyslexia. From text conversion to time management, each tool is designed to support your unique way of thinking and working."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes, we take privacy seriously. All your data is encrypted and stored securely. We never share your personal information with third parties, and you have complete control over your data."
    },
    {
      question: "Can I use it on multiple devices?",
      answer: "Absolutely! Our platform is accessible on any device with a web browser, allowing you to stay organized and supported wherever you go."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}