export function Projects() {
  const projects = [
    {
      title: "GreenSight: Pollution Tracking Web App",
      technologies: "TypeScript/React, Python, REST APIs, web scraping",
      period: "Fall 2025",
      description: [
        "Built a web app to track pollution metrics across multiple cities by ingesting third-party API data and scraped sources",
        "Implemented frontend pages in React and wired routing to display city dashboards populated with collected data",
        "Developed backend endpoints and data pipelines to normalize inputs, persist results, and serve aggregated pollution views to the UI",
      ],
    },
    {
      title: "Pintos OS Implementation",
      technologies: "C, x86 assembly, OS concepts",
      period: "Fall 2025",
      description: [
        "Implemented core OS components including threading, scheduling, synchronization primitives, virtual memory, and file systems in C and x86 assembly",
        "Debugged and tested functionality using provided test suites and custom cases to ensure correctness and robustness of the OS implementation",
        "Gained hands-on experience in a collaborative environment, using Git for version control and coordinating with teammates to integrate different OS modules into a cohesive system",
      ]
    },
    {
      title: "Networked Memory for AI Agents",
      technologies: "Python, Neo4j, web scraping, REST APIs",
      period: "Sept 2024 – Dec 2024",
      description: [
        "Built a shared memory module backed by Neo4j to persist and query structured context across multiple AI agents",
        "Added heuristics to store only high-signal conversations and enriched nodes/edges using external APIs and scraped metadata",
      ],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6 transition-colors duration-700">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-medium mb-16 transition-colors duration-700">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-700">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-medium transition-colors duration-700">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap ml-4 transition-colors duration-700">
                  {project.period}
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-700">{project.technologies}</p>
              <ul className="space-y-2">
                {project.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}