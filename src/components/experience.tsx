export function Experience() {
  const experiences = [
    {
      title: "RSOC Student Technician",
      company: "UT Austin ISO",
      location: "Austin, TX",
      period: "Sept 2025 – Present",
      description: [
        "Conducted hands-on security training aligned with SOC workflows: reconnaissance, enumeration, and vulnerability validation in controlled labs",
        "Practiced web exploitation fundamentals including file inclusion and SQL injection; documented findings with clear logs and short reports",
        "Built repeatable methodology for evidence collection to support incident-response style writeups",
      ],
    },
    {
      title: "Student Technician",
      company: "UT Austin TRECS",
      location: "Austin, TX",
      period: "Aug 2024 – Sept 2024",
      description: [
        "Imaged, configured, and validated Windows and macOS machines for campus deployment across a wide hardware range",
        "Performed hardware swaps and configuration to meet deployment specs; verified stability through functional testing",
        "Tracked devices using internal tagging labels throughout staging and deployment",
      ],
    },
    {
      title: "IT Specialist",
      company: "Burton Companies",
      location: "McAllen, TX",
      period: "May 2023 – Aug 2023; May 2024 – Aug 2024",
      description: [
        "Built Python automation tools that scraped product data and generated standardized internal entries employees could reuse",
        "Automated retrieval of product SDS documents and reduced manual copy/paste by uploading and inserting results into the internal network workflow",
        "Improved data consistency by standardizing SKUs and scripting repetitive inventory-related tasks",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-6 transition-colors duration-700">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-medium mb-16 transition-colors duration-700">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 transition-colors duration-700">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-medium transition-colors duration-700">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-700">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap ml-4 transition-colors duration-700">
                  {exp.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
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