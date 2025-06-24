'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const certifications = [
  {
  name: 'AWS Database Migration Service (AWS DMS)',
  issuer: 'AWS',
  date: '2025',
  credentialId: 'LP-E1L39V',
  skills: 'Cloud DevOps, CI/CD, Kubernetes, IaC, Observability',
  link: 'https://drive.google.com/file/d/1yLJkPE0Fq47vk-KKnOVZ1c8vQMDZ3_yH/view',
  },
  {
  name: "Building with AWS Databases",
  issuer: "AWS",
  date: '2025',
  credentialId: "LP-P0Y5X0",
  skills: "OpenVINO™, AVX-512, Federated Learning, Habana® Gaudi® on AWS, AI workload optimization",
  link: 'https://drive.google.com/file/d/1yMTFw4NguTDMmmVlVoJv69GW79zhrqLR/view?pli=1',
  },
  {
  name: "Amazon Quantum Ledger Database (QLDB) Service",
  issuer: "AWS",
  date: '2025',
  credentialId: "LF60izqo93r7",
  skills: "SRE principles, IaC, CI/CD, Kubernetes, Observability",
  link: 'https://drive.google.com/file/d/1yQei5UAP-1Ybk6Eto3ePB035a7aOHi_Y/view',
  },
  {
  name: "Tata Group - GenAI Powered Data Analytics Job Simulation",
  issuer: "TATA SKill Builder",
  date: '2025',
  credentialId: "LF-ayfmdn7z5p",
  skills: "Security leadership, DevSecOps integration, policy enforcement",
  link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_JaL4DZGdK67FERvfm_1750228138021_completion_certificate.pdf',
  },
  {
  name: "Walmart USA - Advanced Software Engineering Job Simulation",
  issuer: "Walmart SKill Builder",
  date: '2025',
  credentialId: "LFS169",
  skills: "GitOps workflows, deployment automation, Kubernetes",
  link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_JaL4DZGdK67FERvfm_1750229307992_completion_certificate.pdf',
  },
  {
  name: "PyTorch and Deep Learning for Decision Makers ",
  issuer: "The Linux Foundation",
  date: '2025',
  credentialId: "LFS167",
  skills: "CI/CD pipelines, Jenkinsfile, pipeline as code",
  link: 'https://www.credly.com/badges/94774e39-be91-4dc0-96e4-e3676fa72a62/public_url ',
  },
 
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
