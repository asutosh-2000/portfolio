'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const expertise = [
  {
    name: 'Cloud Architecture',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-blue-400 to-blue-500',
  },
  {
    name: 'DevOps Automation',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-blue-400 to-blue-500',
  },
  {
    name: 'Security Implementation',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-blue-400 to-blue-500',
  },
  {
    name: 'Infrastructure as Code',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-blue-400 to-blue-500',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A results-driven Cloud DevSecOps Engineer with expertise in designing secure, scalable, and automated cloud infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center shadow-xl">
              <img
                src="/images/Debasish.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Cloud DevSecOps Engineer with 3+ years of experience architecting secure, scalable, and automated infrastructure across AWS, Azure, and GCP. My core strengths include automating deployment pipelines, embedding security best practices, and optimizing cloud resources for performance, scalability, and cost efficiency.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            With deep expertise in Infrastructure as Code (IaC), containerization, and continuous integration/continuous deployment (CI/CD), I design solutions that empower organizations to deliver faster, safer, and more reliable software. I am passionate about building resilient, cloud-native systems that align with industry standards and compliance frameworks such as CIS Benchmarks and NIST.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Driven by a security-first mindset, I thrive at the intersection of development, operations, and security — transforming cloud infrastructure into robust platforms that support innovation and business agility. I am committed to continuous learning, staying ahead of emerging trends, and helping teams deliver secure, high-quality solutions at scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 