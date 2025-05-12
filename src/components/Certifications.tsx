'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const certifications = [
  {
    name: 'Intel® Technical Pro Cloud DevOps (ADVANCED)',
    issuer: 'Intel.com',
    date: '2024',
    credentialId: 'LP-E1L39V',
    link: 'https://learning.intel.com/certificate/LP-E1L39V',
  },
  {
    name: 'IBM Ecosystem Cloud-Native Developer (Intermediate)',
    issuer: 'IBM.com',
    date: '2024',
    credentialId: 'IBM-J2M4K6',
    // link: 'https://training.ibm.com/certificate/IBM-J2M4K6',
  },
  {
    name: 'AWS Certified Solutions Architect (Preparing)',
    issuer: 'Amazon Web Services',
    date: 'Preparing',
    credentialId: 'AWS-L123H45',
  },

  // {
  //   name: 'Google Cloud Professional Cloud Architect',
  //   issuer: 'Google Cloud',
  //   date: '2023',
  //   credentialId: 'GCP-123456',
  // },
  // {
  //   name: 'Certified Kubernetes Administrator (CKA)',
  //   issuer: 'Cloud Native Computing Foundation',
  //   date: '2023',
  //   credentialId: 'CKA-123456',
  // },
  // {
  //   name: 'Terraform Associate',
  //   issuer: 'HashiCorp',
  //   date: '2023',
  //   credentialId: 'TF-123456',
  // },
  // {
  //   name: 'Certified Information Systems Security Professional (CISSP)',
  //   issuer: 'ISC²',
  //   date: '2023',
  //   credentialId: 'CISSP-123456',
  // },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications demonstrating expertise in cloud and security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                  <AcademicCapIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Issued: {cert.date}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Credential ID: {cert.credentialId}
                  </p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      View Certificate
                      <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
