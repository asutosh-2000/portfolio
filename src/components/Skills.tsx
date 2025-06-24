'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  ShieldCheckIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const skills = [
  {
    category: 'Cloud Platforms',
    description: 'Expertise in major cloud providers',
    icon: ServerIcon,
    items: [
      { name: 'AWS RDS / Aurora / DynamoDB', level: 90 },
      { name: 'Azure SQL / Cosmos DB', level: 85 },
      { name: 'Google Cloud SQL / Firestore', level: 80 },
      { name: 'PostgreSQL / MySQL / MS SQL Server', level: 90 },
      { name: 'MongoDB / Redis / NoSQL', level: 85 },
    ],
  },
  {
    category: 'Infrastructure & Automation',
    description: 'Infrastructure & Automation',
    icon: CommandLineIcon,
    items: [
      { name: 'Terraform, CloudFormation', level: 90 },
      { name: 'Bash, Python (Scripting)', level: 85 },
      { name: 'CI/CD for DB deployments', level: 90 },
    ],
  },
  {
    category: 'Security',
    description: 'Security implementation and compliance',
    icon: ShieldCheckIcon,
    items: [
      { name: 'IAM, KMS Encryption', level: 90 },
      { name: 'Database Auditing & Logging', level: 85 },
      { name: 'Compliance: CIS, NIST, GDPR', level: 90 },
    ],
  },
  {
    category: 'Programming',
    description: 'Languages and frameworks',
    icon: CodeBracketIcon,
    items: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'PHP', level: 90 },
      { name: 'java', level: 85 },
      { name: 'HCL', level: 80 },
    ],
  },
  {
    category: 'Monitoring',
    description: 'Observability and performance tracking',
    icon: CommandLineIcon,
    items: [
      { name: 'Query Tuning / Indexing', level: 80 },
      { name: 'Backup, Restore, DR Planning', level: 85 },
      { name: 'Replication & High Availability', level: 75 },
      { name: 'Monitoring with CloudWatch, Prometheus', level: 85 },
    ],
  },
  {
    category: 'Testing',
    description: 'Quality assurance and testing',
    icon: WrenchScrewdriverIcon,
    items: [
      { name: 'Database Testing', level: 80 },
      { name: 'Security Testing', level: 85 },
      { name: 'Performance Testing', level: 75 },
      { name: 'Tools & Frameworks', level: 80 },
      { name: 'Backup & Recovery Testing', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive set of skills in cloud, DevOps, and security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {skill.description}
                </p>
                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-2 rounded-full"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 