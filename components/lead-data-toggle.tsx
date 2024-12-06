"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconBolt } from "@tabler/icons-react";

const b2bEnrichments = [
  "LinkedIn Profile URL",
  "Company Name",
  "Company Domain",
  "Job Title",
  "Department",
  "Seniority Level",
  "Company Industry",
  "Company Size",
  "Company Revenue",
  "Existing Customers",
  "Company Headquarters Location",
  "Role Type",
  "Professional Bio",
  "Person Skill Set",
  "Work Email Address",
  "Phone Number Validation",
  "Social Media Profiles",
  "Work History",
  "Education Background",
  "Certifications",
  "Company LinkedIn Profile",
  "Company Growth Metrics",
  "Technology Stack Used by the Company",
  "Geolocation of Contact",
  "Recent News About the Contact's Company",
  "Company Founding Year",
  "Company Decision Makers",
  "Competitors",
  "Company Subsidiaries or Parent Organization",
  "Lead Score",
  "Lead Value",
  "Budget",
  "Timeline",
  "Challenges or Pain Points",
  "Desired Features/Services",
  "Purchase Intent",
  "Preferred Communication Channel",
  "Decision-Making Process",
  "Competitor Mentions",
  "Growth or Expansion Plans",
  "Reviews",
  "Emotional Sentiment",
  "And more...",
];

const b2cEnrichments = [
  "Mobile Phone Number",
  "Instagram",
  "Twitter (X)",
  "LinkedIn Profile",
  "Work Experience",
  "Gender",
  "Age Range",
  "Geographic Location",
  "Neighborhood Information",
  "Current Weather",
  "Email Verification",
  "Browsing Interests",
  "Lead Score",
  "Lead Value",
  "Budget Prediction",
  "Purchase Intent",
  "Behavioral Patterns",
  "Engagement History",
  "Session Duration",
  "Preferred Content Types",
  "Frequently Viewed Pages",
  "Device Type",
  "Time Spent on Website",
  "Content Engagement Rate",
  "Feedback Sentiment",
  "Proximity to Nearby Locations or Events",
  "Budget",
  "Timeline Preferences",
  "Current Challenges",
  "Intent Strength",
  "Emotional Sentiment",
  "Demographics",
  "Family or Personal Context",
  "Purchase History or Brand Loyalty",
  "And more..."
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
            B2C Insights
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
            {isB2B ? "Premium B2B Lead Data" : "Proprietary B2C Insights"}
          </h2>
          <p className="text-neutral-400 text-center text-xl mb-16">
            Real-time consumer behavior and intent data so you can close
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIndex * 0.1 }}
                className="flex flex-col gap-4"
              >
                {(isB2B ? b2bEnrichments : b2cEnrichments)
                  .slice(colIndex * 13, (colIndex + 1) * 13)
                  .map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (colIndex * 13 + index) * 0.02 }}
                      className="flex items-start gap-3 group"
                    >
                      <span className="text-neutral-500 group-hover:text-cyan-500 transition-colors min-w-[1.5rem]">
                        {colIndex * 13 + index + 1}.
                      </span>
                      <span className="text-neutral-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};