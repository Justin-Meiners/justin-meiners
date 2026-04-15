export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Systems & Tools",
      skills: ["Linux", "Git", "CI/CD", "REST APIs", "Web Scraping", "Neo4j", "SQL", "Docker", "Splunk", "Bash Scripting"],
    },
    {
      title: "Security",
      skills: [
        "Reconnaissance",
        "Enumeration",
        "File Inclusion",
        "SQL Injection",
        "Logging & Reporting",
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen py-24 px-6 transition-colors duration-700">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-medium mb-16 transition-colors duration-700">About Me</h2>
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4 transition-colors duration-700">Education</h3>
          <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 transition-colors duration-700">
            <p className="font-medium transition-colors duration-700">The University of Texas at Austin</p>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-700">B.S. in Computer Science</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 transition-colors duration-700">
              Aug 2023 – May 2027 (expected)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-700">
              Relevant coursework: Operating Systems, Data Structures,
              Algorithms, Data Management, Software Engineering
            </p>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6 transition-colors duration-700">Skills</h3>
          <div className="grid gap-6">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 transition-colors duration-700">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full transition-colors duration-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4 transition-colors duration-700">Leadership</h3>
          <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 transition-colors duration-700">
            <p className="font-medium transition-colors duration-700">Web Development Officer</p>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-700">
              Hispanics Association of Computer Scientists (HACS)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 transition-colors duration-700">Aug 2023 – Present</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-700">
                • Maintain org web presence to highlight events and initiatives
              </li>
              <li className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-700">
                • Led a web development workshop during UT CS week to boost
                engagement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}