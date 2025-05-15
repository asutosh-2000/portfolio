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
  skills: 'Cloud DevOps, CI/CD, Kubernetes, IaC, Observability',
  link: 'https://www.credly.com/badges/1183d942-b7c9-4ac3-a2a6-ebd8ab34bf30/linked_in_profile',
  },
  {
  name: "Intel® Technical Pro AI in the Cloud (ADVANCED)",
  issuer: "Intel Corporation",
  date: '2024',
  credentialId: "LP-P0Y5X0",
  skills: "OpenVINO™, AVX-512, Federated Learning, Habana® Gaudi® on AWS, AI workload optimization",
  link: 'https://www.credly.com/badges/78295407-2448-4da3-89ae-50850b900e83/public_url',
  },
  {
  name: "LFS162: DevOps and Site Reliability Engineering",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LF60izqo93r7",
  skills: "SRE principles, IaC, CI/CD, Kubernetes, Observability",
  link: 'https://www.credly.com/badges/dce24958-299e-409f-a894-80cf5f6339e7/public_url',
  },
  {
  name: "LFS180: DevSecOps for Managers",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LF-ayfmdn7z5p",
  skills: "Security leadership, DevSecOps integration, policy enforcement",
  link: 'https://www.credly.com/badges/f80a2cf3-78e9-4fec-b517-19014143c714/public_url',
  },
  {
  name: "LFS169: GitOps",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LFS169",
  skills: "GitOps workflows, deployment automation, Kubernetes",
  link: 'https://www.credly.com/badges/1f6508ac-adda-4975-820f-5a2ebdefeedb/public_url',
  },
  {
  name: "LFS167: Jenkins",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LFS167",
  skills: "CI/CD pipelines, Jenkinsfile, pipeline as code",
  link: 'https://www.credly.com/badges/d7c9784c-eb39-46d6-a408-75f7f9b238a7/public_url',
  },
  {
  name: "LFS158: Kubernetes",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LFS158",
  skills: "Kubernetes fundamentals, deployment, services, volumes",
  link: 'https://www.credly.com/badges/704c6fa1-ccf0-4e9e-aeed-ae8d98719b57/public_url',
  },
  {
  name: "LFS183: Zero Trust",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LFS183",
  skills: "Zero Trust architecture, identity-aware security, policy enforcement",
  link: 'https://www.credly.com/badges/878285cf-512a-4342-8f50-792605acb1e8/public_url',
  },
  {
  name: "SKF100: OWASP® Top 10 Security Threats",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "SKF100",
  skills: "OWASP Top 10, web security threats, secure coding",
  link: 'https://www.credly.com/badges/1d697349-07b8-4ba8-af9a-94775b4cda26/public_url',
  },
  {
  name: "LFEL1007: Automating Supply Chain Security (SBOMs and Signatures)",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LF-krjexphp5m",
  skills: "Secure artifact signing, SBOMs, open source supply chain tools",
  link: 'https://www.credly.com/badges/c803aadd-16eb-46f9-9cf5-aeb155a5562d/public_url',
  },
  {
  name: "LFEL1006: Securing Projects with OpenSSF Scorecard",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LF-qnu8eyuvuw",
  skills: "OpenSSF Scorecard, CI/CD security automation, GitHub workflows",
  link: 'https://www.credly.com/badges/ac3e06f9-17a4-4e76-abc8-968712792290/public_url',
  },
  {
  name: "LFEL1005: Security Self-Assessments for Open Source Projects",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LF-gbf868egqw",
  skills: "RCSA, security reviews, OSS governance",
  link: 'https://www.credly.com/badges/5ce7fee3-34df-4335-a3ad-56f9b6e4656b/public_url',
  },
  {
  name: "LFD125: Security for Software Development Managers",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LF1zf2uhrdlp",
  skills: "Secure SDLC, incident response, cybersecurity leadership",
  link: 'https://www.credly.com/badges/dd94233b-9ac2-4f74-a7dd-d3c6ad0851e5/public_url',
  },
  {
  name: "LFEL1010: XSS Exploits and Defenses",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LF-c68ucbhqoo",
  skills: "XSS exploitation and mitigation, reflected/stored/DOM-based XSS",
  link: 'https://www.credly.com/badges/dffd034c-81a7-4a6b-a77f-19d222ef3dc0/public_url',
  },
  {
  name: "Cloud Security Engineer Learning Path",
  issuer: "Datadog",
  date: '2024',
  credentialIds: ["z8uc6bcy1a", "tehu9iosdy", "etecv9qagl", "anf0sm8vir"],
  skills: "Misconfiguration detection, container protection, monitoring, incident management",
  link: 'https://www.credly.com/badges/25e5d21b-86a3-4acc-a6f6-917d52156c37/public_url',
  },
  {
  name: "LFS147: AI/ML Toolkits with Kubeflow",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LFS147",
  skills: "MLOps, Kubeflow, scalable ML pipelines, model deployment",
  link: 'https://www.credly.com/badges/68526f29-706b-4bef-8882-c50893542066/public_url',
  },
  {
  name: "LFEL1014: Scaling Cloud Native Applications with KEDA",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LF-scbmrgndta",
  skills: "Event-driven scaling, KEDA, policy-based control (OPA, Kyverno), multi-cloud (GKE, EKS, AKS)",
  link: 'https://www.credly.com/badges/720f7eb6-2a27-4d5f-a28e-d2f319e5d4fb/public_url',
  },
  {
  name: "LFS157: Serverless on Kubernetes",
  issuer: "The Linux Foundation",
  date: '2024',
  credentialId: "LF-csg4qlar4t",
  skills: "OpenFaaS, serverless workloads, auto-scaling, secret/TLS management",
  link: 'https://www.credly.com/badges/2699ba09-082b-438e-8fb6-60a758490434/public_url',
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
