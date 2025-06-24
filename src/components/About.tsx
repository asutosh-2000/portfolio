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
            I’m a dedicated Cloud Database Engineer with 3+ years of experience in designing, managing, and optimizing cloud-native database solutions across AWS, Azure, and GCP. My focus lies in building secure, scalable, and high-performance database architectures that support business-critical applications.
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
                src="\images\asutosh_pofile_pic.jpg"
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
            Cloud-native database provisioning (RDS, Cloud SQL, Cosmos DB, DynamoDB)
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Infrastructure as Code for database deployment
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Backup, restore, replication, and disaster recovery strategies
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Query optimization, indexing, and schema design
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Implementing data security, compliance, and encryption-at-rest/in-transit
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Infrastructure as Code for database deployment
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 