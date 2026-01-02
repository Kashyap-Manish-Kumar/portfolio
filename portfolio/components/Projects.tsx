import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "CI/CD Pipeline with GitHub Actions",
    description:
      "Automated build, test, and deployment pipeline using GitHub Actions and Docker.",
    icons: ["@icons/github.svg", "@icons/docker.svg", "@icons/bash.svg"],
    github: "https://github.com/yourusername/github-actions-cicd",
  },
  {
    name: "Kubernetes Cluster Setup",
    description:
      "Production-ready Kubernetes cluster with RBAC, Ingress, and monitoring stack.",
    icons: [
      "@icons/kubernetes.svg",
      "@icons/prometheus.svg",
      "@icons/grafana.svg",
    ],
    github: "https://github.com/yourusername/k8s-cluster-setup",
  },
  {
    name: "Terraform AWS Infrastructure",
    description:
      "Infrastructure as Code provisioning VPC, EC2, and RDS on AWS.",
    icons: ["@icons/terraform.svg", "@icons/aws.svg", "@icons/linux.svg"],
    github: "https://github.com/yourusername/aws-terraform-infra",
  },
  {
    name: "Azure DevOps Pipeline",
    description:
      "Multi-stage pipeline deploying applications to Azure Kubernetes Service (AKS).",
    icons: ["@icons/azure.svg", "@icons/kubernetes.svg", "@icons/bash.svg"],
    github: "https://github.com/yourusername/azure-devops-pipeline",
  },
  {
    name: "Monitoring Stack",
    description:
      "Observability with Prometheus metrics and Grafana dashboards for Kubernetes workloads.",
    icons: ["@icons/prometheus.svg", "@icons/grafana.svg", "@icons/docker.svg"],
    github: "https://github.com/yourusername/k8s-monitoring-stack",
  },
  {
    name: "Containerized Microservices",
    description:
      "Microservices containerized with Docker and deployed via Kubernetes manifests.",
    icons: ["@icons/docker.svg", "@icons/kubernetes.svg", "@icons/github.svg"],
    github: "https://github.com/yourusername/docker-microservices",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w-7xl pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 mx-4 sm:mx-6 md:mx-8 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          PROJECTS.
        </h2>
        <hr className="w-full border-color border-2" />

        {/* Responsive grid: 1 col on small, 2 cols on large */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group project-card-shadow border-color border-3 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col justify-between"
            >
              {/* Project Info */}
              <div>
                <h3 className="tagline-font font-semibold text-xl sm:text-2xl mb-2 sm:mb-3">
                  {project.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  <span className="font-bold underline">OVERVIEW:</span>{" "}
                  {project.description}
                </p>

                {/* Icons row */}
                <h3 className="font-bold mb-2 sm:mb-3 underline text-sm sm:text-base">
                  TOOLS:{" "}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.icons.map((icon, i) => (
                    <Image
                      key={i}
                      src={icon.replace("@icons", "/icons")}
                      alt="tech icon"
                      width={40}
                      height={40}
                      className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                    />
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-6 inline-flex group-hover:text-(--alter-color) dark:group-hover:text-white group-hover:bg-gray-700 transition-all duration-300 items-center justify-center gap-2 px-3 sm:px-4 py-2 border-2 rounded-md text-sm sm:text-md font-semibold"
              >
                <span>View on GitHub</span>
                <FaGithub size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
