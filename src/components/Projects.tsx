'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'ZeroTrustOps - DevSecOps Pipeline',
    description: 'Legendary DevSecOps platform for Kubernetes — CI/CD pipelines, GitOps workflows, and runtime security with Falco & Kyverno. Built to enable secure, automated, and resilient cloud-native deployments.',
    technologies: ['Kubernetes', 'GitOps', 'Falco', 'Kyverno', 'CI/CD'],
    image: '/projects/zerotrustops.jpg',
    github: 'https://github.com/Debasish-87/ZeroTrustOps-Platform',
    live: 'https://zerotrustops-demo.com',
  },
  {
    title: 'ScareCrow',
    description: 'AI-powered Paddy Disease Detection system leveraging deep learning with CNN and Google Cloud Vision API, built using Flask for real-time prediction and recommendation.',
    technologies: ['Flask', 'CNN', 'Google Cloud', 'Python'],
    image: '/projects/scarecrow.jpg',
    github: 'https://github.com/Debasish-87/ScareCrow',
    live: 'https://scarecrow-ai-demo.com',
  },
  {
    title: 'PII Protection',
    description: 'Secure web system for detecting and encrypting Personally Identifiable Information (PII) using OCR and AES-256 encryption, built with Django.',
    technologies: ['Django', 'OCR', 'AES-256', 'Python'],
    image: '/projects/pii-protection.jpg',
    github: 'https://github.com/Debasish-87/pii-protection',
    live: 'https://pii-protection-demo.com',
  },
  {
    title: 'Big-Mart Sales Prediction',
    description: 'Forecasting Big-Mart sales using historical data and machine learning models with features such as product type, store location, and seasonal trends.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter Notebook'],
    image: '/projects/bigmart-sales.jpg',
    github: 'https://github.com/Debasish-87/Big-Mart-Sales-Prediction',
    live: 'https://bigmart-predictor-demo.com',
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Automated cloud infrastructure deployment using Terraform and AWS services, implementing security best practices and cost optimization.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    image: '/projects/cloud-infra.jpg',
    github: 'https://github.com/username/cloud-infra',
    live: 'https://cloud-infra-demo.com',
  },
  {
    title: 'Kubernetes Security Platform',
    description: 'Developed a security platform for Kubernetes clusters with runtime security monitoring and policy enforcement.',
    technologies: ['Kubernetes', 'Falco', 'OPA', 'Prometheus'],
    image: '/projects/k8s-security.jpg',
    github: 'https://github.com/username/k8s-security',
    live: 'https://k8s-security-demo.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my work in cloud infrastructure and security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <CodeBracketIcon className="h-16 w-16 text-white opacity-50" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <CodeBracketIcon className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 