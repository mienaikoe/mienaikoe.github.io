String.prototype.titlecase = function () {
  capwords = [];
  var words = this.split("_");
  for (var idx in words) {
    var word = words[idx];
    capwords.push(word.charAt(0).toUpperCase() + word.substr(1, word.length));
  }
  return capwords.join(" ");
};
Number.prototype.times = function (fxn) {
  for (var i = 0; i < this; i++) {
    fxn();
  }
};

const SKILLS = [
  {
    title: "Languages",
    entries: [
      { name: "JavaScript", rating: 5 },
      { name: "Python", rating: 3 },
      { name: "Java/Scala", rating: 2 },
      { name: "Ruby", rating: 2 },
      { name: "C/C++", rating: 2 },
    ],
  },
  {
    title: "Architecture",
    entries: [
      { name: "Relational Databases", rating: 4 },
      { name: "ETL Pipelines", rating: 3 },
      { name: "Google Cloud / AWS", rating: 3 },
      { name: "Redis & RabbitMQ", rating: 2 },
      { name: "Docker/Kubernetes", rating: 2 },
    ],
  },
  {
    title: "Non-Engineering Skills",
    entries: [
      { name: "UI/UX Design", rating: 3 },
      { name: "Project Management", rating: 2 },
      { name: "A/B Experiment Design", rating: 2 },
      { name: "Copy Writing", rating: 2 },
    ],
  },
];

const EXPERIENCE = [
  {
    title: "Loom, Inc.",
    link: "https://loom.com",
    metadata: ["Senior Software Engineer", "September 2021 - June 2022"],
    tasks: [
      "Led feature development for a high-traffic Slack integration using queues and rate-limiting",
      "Collaborated with data analysts, UI designers, and product managers to drastically expand product presence for a chrome extension with >100,000 daily active users",
      "Conducted A/B experiments to test our assumptions on user behavior and make more informed product decisions",
    ],
  },

  {
    title: "Wakebird",
    link: "https://wakebird.com",
    metadata: ["Co-Founder", "January 2019 - Present"],
    tasks: [
      "Led a two-person team to design, build, and sell a web application for organizing dragon boat racing teams",
      "Mentored a junior engineer on code review, sprint planning, node.js, and React",
      "Synthesized interviews with athletes and coaches into meaningful feature design specs",
      "Taught athletes and coaches how to use Wakebird, and solicited feedback to get to the bottom of customer needs",
      "Reviewed bookkeping ledger and tax remittance on a quarterly basis",
    ],
  },

  {
    title: "Flatiron Health",
    link: "https://flatiron.com",
    metadata: ["Senior Software Engineer", "June 2019 - August 2021"],
    tasks: [
      "Drafted and built the infrastructure for a machine-learning-based product that predicts patient ER visits for oncology nurses",
      "Refactored and maintained complex Extract, Transform & Load (ETL) pipelines with Apache Airflow for quarterly delivery of abstracted cancer data",
      "Designed UI and wrote the code for a research project tracking dashboard that served as a communication platform between academic researchers and Flatiron clinical data analysts",
    ],
  },

  {
    title: "Knewton",
    link: null,
    metadata: ["Software Engineer II", "November 2018 - March 2019"],
    tasks: [
      "Investigated slow queries to solve slowdowns on a Django-based Content Management System (CMS).",
      "Quickly picked up Python, Typescript, and Phabricator concepts",
      "Expanded test coverage across the CMS, learning more specific technical details about pytest",
    ],
  },

  {
    title: "Kinvite",
    link: null,
    metadata: ["Co-Founder and CTO", "September 2016 - September 2018"],
    tasks: [
      "Built the entire stack of Web, Mobile, Backend, and Infrastructure from the ground-up using React, React-Native, Scala/Play, Postgresql, and Google Cloud.",
      "Hired and led Design, QA, and software freelancers to help contribute to the product",
      "Built a three-party payment processing system for tickets with Stripe Connect",
    ],
  },

  {
    title: "EDDI: A Desalinator for Irrigation",
    link: "https://www.youtube.com/watch?v=A_Z0X6SA5Hk",
    metadata: ["General Lead", "May 2015 - September 2017"],
    tasks: [
      "Led a six-person team on an ambitious year-long side project to build a smart desalinator for irrigation",
      "Designed and built the circuit layouts for all sensor and control hardware.",
      "Designed a fluid routing and valve system for an electrodialysis system to achieve precise water salinity",
      "Won Grand Prize ($100k) and attended marketing events with Samsung.",
    ],
  },

  {
    title: "Citymaps",
    link: null,
    metadata: ["Software Engineer", "April 2015 - August 2016"],
    tasks: [
      "Used React and Node to bring the Citymaps Web product to market.",
      "Worked with a graphics developers to integrate a custom-made WebGL Map into a web application.",
      "Collaborated with designers to implement beautiful, performant components in a timely manner.",
    ],
  },

  {
    title: "Bloomberg LP",
    link: "https://bloomberglaw.com",
    metadata: ["Full-Stack Developer", "January 2011 - March 2015"],
    tasks: [
      "Coordinated work amongst a distributed team of engineers to quickly build a CMS for Bloomberg Law dashboards.",
      "Built and maintained a comparing and diffing tool for clauses in legal transactional documents",
      "Replaced and maintained an HTML -> PDF & RTF transformer and renderer for Bloomberg's legal research application.",
    ],
  },

  {
    title: "Goodrich Corporation",
    link: null,
    metadata: ["Materials Engineering Intern", "2008 - 2009"],
    tasks: [
      "Developed a concept for testing the electrical properties of a carbon-composite aircraft brake.",
      "Used an Atomic Force Microscope to gather data on the microstructure of carbon materials.",
    ],
  },
];

const EDUCATION = [
  {
    title: "Bloomberg Financial Software Training",
    link: null,
    metadata: ["FSD Trainee", "August 2010 - December 2010"],
    tasks: [
      "Learned C++, data structures, and algorithms during an intensive introductory course sponsored by Bloomberg.",
      "Led a team in a 3-day test of refactoring and debugging a Fortran project",
    ],
  },

  {
    title: "Case Western Reserve University",
    link: null,
    metadata: ["B.S. Mechanical Engineering", "Class of 2010"],
    tasks: [
      "Designed vital components of a water system for a community in The Dominican Republic through Engineers Without Borders.",
      "Co-led a team of student engineers to build an irrigation project at a campus farm.",
      "Designed and Developed a website for an Animal Ethics group on campus.",
    ],
  },
];

const createElement = (tagName, attributes, innerText, children) => {
  const element = document.createElement(tagName);

  if (attributes) {
    for (const attributeName in attributes) {
      if (!attributes.hasOwnProperty(attributeName)) {
        continue;
      }
      element.setAttribute(attributeName, attributes[attributeName]);
    }
  }

  if (innerText) {
    element.innerText = innerText;
  }

  if (children) {
    children.forEach((child) => {
      element.appendChild(child);
    });
  }

  return element;
};

function initSkills(container) {
  for (const i in SKILLS) {
    const skillSet = SKILLS[i];

    const columnDiv = createElement("div", { class: "skill-set" }, null, [
      createElement("h3", null, skillSet.title),
      createElement(
        "div",
        { class: "entries" },
        null,
        skillSet.entries.map((skill) =>
          createElement("div", { class: "entry" }, null, [
            createElement("div", { class: `rating level-${skill.rating}` }),
            createElement("div", { class: "name" }, skill.name),
          ])
        )
      ),
    ]);

    container.appendChild(columnDiv);
  }
}

function initProjects(container, projects) {
  projects.forEach((project) => {
    const titleDiv = project.link
      ? createElement("a", { href: project.link }, null, [
          createElement("h3", null, project.title),
        ])
      : createElement("h3", null, project.title);

    const projectDiv = createElement("div", { class: "project" }, null, [
      createElement("div", { class: "header" }, null, [
        titleDiv,
        createElement(
          "div",
          { class: "metadata" },
          null,
          project.metadata.map((metadatum) =>
            createElement("div", null, metadatum)
          )
        ),
      ]),
      createElement(
        "div",
        { class: "tasks" },
        null,
        project.tasks.map((task) => createElement("p", { class: "task" }, task))
      ),
    ]);

    container.appendChild(projectDiv);
  });
}
