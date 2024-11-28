"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconBolt } from "@tabler/icons-react";

// Define the data types
const b2bData = [
  { category: "Company", title: "Revenue & Growth Metrics" },
  { category: "Technology", title: "Tech Stack & Tools Used" },
  { category: "Decision Makers", title: "Key Contact Information" },
  { category: "Intent", title: "Purchase Timeline & Budget" },
  { category: "Market", title: "Industry & Company Size" },
  { category: "Engagement", title: "Website Activity & Interest" },
  { category: "History", title: "Past Purchases & Interactions" },
  { category: "Competition", title: "Vendor Relationships" },
  { category: "Needs", title: "Pain Points & Challenges" }
];

const b2cData = [
  { category: "Demographics", title: "Age, Income & Location" },
  { category: "Behavior", title: "Purchase History & Patterns" },
  { category: "Intent", title: "Current Shopping Interest" },
  { category: "Digital", title: "Device & Browser Data" },
  { category: "Engagement", title: "Website Activity Score" },
  { category: "Preferences", title: "Product & Brand Affinity" },
  { category: "Social", title: "Social Media Presence" },
  { category: "Financial", title: "Credit Score Range" },
  { category: "Lifestyle", title: "Interests & Activities" }
];

export const LeadDataToggle = () => {
  const [isB2B, setIsB2B] = useState(true);

  return (
    <div className="w-full py-20">
      {/* Header with icon */}
      <div className="flex justify-center mb-4">
        <div className="h-12 w-12 bg-charcoal rounded-lg flex items-center justify-center">
          <IconBolt className="h-6 w-6 text-cyan-500" />
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-12">
        <div className="bg-neutral-900/50 p-1 rounded-lg inline-flex">
          <button
            onClick={() => setIsB2B(true)}
            className={`px-6 py-2 rounded-md transition-all ${
              isB2B 
                ? 'bg-neutral-800 text-white' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            B2B Data
          </button>
          <button
            onClick={() => setIsB2B(false)}
            className={`px-6 py-2 rounded-md transition-all ${
              !isB2B 
                ? 'bg-neutral-800 text-white' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            B2C Data
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          key={isB2B ? "b2b" : "b2c"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {isB2B ? "Premium B2B Lead Data" : "Premium B2C Insights"}
          </h2>
          <p className="text-neutral-400 text-center text-xl mb-16">
            {isB2B 
              ? "Comprehensive data points for maximum conversion potential"
              : "Real-time consumer behavior and intent data for higher conversion rates"
            }
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(isB2B ? b2bData : b2cData).map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={item.title}
                className="bg-charcoal p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all"
              >
                <p className="text-sm text-neutral-500 mb-2">{item.category}</p>
                <p className="text-white text-lg">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
