'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'DevSecOps Architect',
    company: 'Upwork',
    period: 'Oct 2023 – Present',
    location: 'Remote (Bhubaneswar, Odisha, India)',
    responsibilities: [
      'Architected and delivered comprehensive DevSecOps pipelines and security-focused cloud-native solutions across diverse client projects',
      'Designed and integrated secure CI/CD workflows with SAST, DAST, SCA, and container vulnerability scanning tools (Trivy, Gitleaks)',
      'Implemented GitOps deployments using ArgoCD and FluxCD with Kubernetes admission controls (Kyverno, OPA Gatekeeper)',
      'Automated policy enforcement, compliance-as-code, and security audits aligned with CIS Benchmarks and NIST standards',
      'Integrated SOAR workflows to automate incident response, threat detection, and cloud-native SIEM monitoring (ELK, EFK)',
    ],
  },
  {
    title: 'Cloud-Native Security Engineer',
    company: 'Upwork',
    period: 'Mar 2023 – Oct 2023',
    location: 'Remote (Bhubaneswar, Odisha, India)',
    responsibilities: [
      'Designed, secured, and optimized cloud-native environments with a focus on Zero Trust architecture and GitOps automation',
      'Deployed and hardened Kubernetes clusters with automated GitOps pipelines (ArgoCD, FluxCD) and real-time threat detection (Falco, Kyverno)',
      'Automated multi-cloud infrastructure provisioning and scaling using Terraform, Helm, and Docker across AWS and GCP',
      'Implemented centralized observability and logging using Prometheus, Grafana, Loki, and the EFK Stack',
      'Established Policy-as-Code frameworks and automated compliance validation in line with CIS Benchmarks',
    ],
  },
  {
    title: 'Cloud DevOps Engineer',
    company: 'Independent Project Contractor',
    period: 'Oct 2022 – Jan 2023',
    location: 'Bhubaneswar, Odisha, India',
    responsibilities: [
      'Developed and maintained CI/CD pipelines to streamline build, test, and deployment processes',
      'Automated infrastructure provisioning and configuration using Terraform and Infrastructure as Code best practices',
      'Managed cloud resources, optimized performance, and reduced costs across multiple environments',
      'Implemented robust security measures and ensured compliance with industry standards and regulatory requirements',
      'Collaborated closely with development teams to define deployment strategies and improve release management',
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