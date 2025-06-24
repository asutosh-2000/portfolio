'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'Cloud Database Engineer',
    company: 'Upwork',
    period: 'March 2024 – Present',
    location: 'Remote (Bhubaneswar, Odisha, India)',
    responsibilities: [
      'Designed and maintained cloud-native database infrastructure using AWS RDS, Aurora, and Azure SQL',
      'Automated provisioning and scaling of databases using Terraform and scripting',
      'Implemented monitoring, backup, and disaster recovery for production systems',
      'Performed tuning and health checks across SQL Server, PostgreSQL, and MongoDB instances',
        ],
  },
  {
    title: 'Database Engineer',
    company: 'Independent Project Contractor',
    period: 'Oct 2022 – Jan 2023',
    location: 'Bhubaneswar, Odisha, India',
    responsibilities: [
      'Built Terraform templates to spin up RDS/MySQL/Aurora clusters',
      'Created automated scripts for DB backups and log shipping',
      'Learned and implemented automated schema version control',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in cloud and DevOps engineering
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                  <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 