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
    title: "Languages & Frameworks",
    entries: [
      { name: "Typescript", rating: 5 },
      { name: "React", rating: 5 },
      { name: "Express", rating: 4 },
      { name: "Python / Pandas", rating: 4 },
      { name: "React Native", rating: 3 },
      { name: "Java / Scala", rating: 2 },
      { name: "C & C++", rating: 2 },
    ],
  },
  {
    title: "Architecture & Services",
    entries: [
      { name: "Relational Databases (Postgres)", rating: 4 },
      { name: "Stripe", rating: 4 },
      { name: "NoSQL databases", rating: 3 },
      { name: "Apache Airflow", rating: 3 },
      { name: "Google Cloud & AWS", rating: 3 },
      { name: "Docker / Kubernetes", rating: 2 },
      { name: "Redis", rating: 2 },
    ],
  },
  {
    title: "Non-Engineering Skills",
    entries: [
      { name: "UI Design", rating: 3 },
      { name: "Project Management", rating: 2 },
      { name: "A/B Experiment Design", rating: 2 },
      { name: "Copy Writing", rating: 2 },
      { name: "UX Research", rating: 2 },
    ],
  },
];

const EXPERIENCE = [
  {
    title: "Ambrook",
    link: "https://ambrook.com",
    metadata: ["Software Engineer", "August 2022 - December 2022"],
    tasks: [
      "Led the creation of a cross-platform business analytics dashboard",
      "Sourced data and created engaging visualizations for Ambrook Research, an editorial publication about the agriculture industry",
    ],
  },
  
  {
    title: "Loom",
    link: "https://loom.com",
    metadata: ["Senior Software Engineer", "September 2021 - June 2022"],
    tasks: [
      "Led feature development for a high-traffic Slack integration using queues and rate-limiting",
      "Collaborated with data analysts, UI designers, and product managers to drastically expand product presence for a chrome extension with >100,000 daily active users",
      "Conducted A/B experiments to test our assumptions on user behavior and make more informed product decisions",
    ],
  },
  
  {
    title: "Flatiron Health",
    link: "https://flatiron.com",
    metadata: ["Senior Software Engineer", "June 2019 - August 2021"],
    tasks: [
      "Drafted and built the infrastructure for a machine-learning-based product that predicts patient ER visits for oncology nurses",
      "Designed UI and wrote the code for a research project tracking dashboard that served as a communication platform between academic researchers and Flatiron clinical data analysts",
      "Maintained complex and ever-changing extract, transform & load (ETL) pipelines with Apache Airflow for quarterly delivery of abstracted cancer data",
    ],
  },

  {
    title: "Knewton",
    link: null,
    metadata: ["Software Engineer II", "November 2018 - March 2019"],
    tasks: [
      "Investigated slow queries to solve slowdowns on a Django-based Content Management System (CMS).",
      "Quickly picked up Python, Typescript, Phabricator, and CirclCI to work in a fast-paced continuous-delpoyment environment",
      "Expanded test coverage across the CMS, learning more specific technical details about pytest",
    ],
  },

  {
    title: "Kinvite",
    link: null,
    metadata: ["Co-Founder and CTO", "September 2016 - September 2018"],
    tasks: [
      "Acted as the sole engineer, designer, and product manager for a founding-stage events marketplace startup.",
      "Built the entire stack of web and mobile products from the ground-up using React, React-Native, Scala/Play, Postgresql, and Google Cloud.",
      "Hired and led Design, QA, and software freelancers to help contribute to the product",
      "Built a three-party payment processing system for tickets with Stripe Connect",
    ],
  },

  {
    title: "Citymaps",
    link: null,
    metadata: ["Software Engineer", "April 2015 - August 2016"],
    tasks: [
      "Used React and Node to bring the Citymaps Web product to market.",
      "Worked with graphics engineers to integrate a custom-made WebGL Map into a web application.",
      "Collaborated with designers to implement beautiful and performant components in a timely manner.",
    ],
  },

  {
    title: "Bloomberg LP",
    link: "https://bloomberglaw.com",
    metadata: ["Full-Stack Developer", "January 2011 - March 2015"],
    tasks: [
      "Coordinated work amongst a distributed team of engineers to quickly build a CMS for Bloomberg Law.",
      "Architected and built a comparing and diffing tool for clauses in legal transactional documents",
      "Replaced and maintained an HTML -> PDF & RTF transformer and renderer for Bloomberg's legal research application.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Wakebird",
    link: "https://wakebird.com",
    metadata: ["Co-Founder", "January 2019 - Present"],
    tasks: [
      "Led a two-person team to design, build, and sell a web application for organizing dragon boat racing teams",
      "Mentored a junior engineer on code review, sprint planning, node.js, and React",
      "Interviewed athletes and coaches to translate their feedback into meaningful feature design specs",
      "Demoed our product to athletes and coaches and solicited feedback to get to the bottom of customer needs",
      "Reviewed bookkeping ledger and tax remittance on a quarterly basis",
    ],
  },  
  {
    title: "EDDI: A Desalinator for Irrigation",
    link: "https://www.youtube.com/watch?v=A_Z0X6SA5Hk",
    metadata: ["Team Lead", "May 2015 - September 2016"],
    tasks: [
      "Led a six-person team on an ambitious year-long after-work project to build a smart desalinator for agricultural irrigation.",
      "Won Grand Prize ($100k) and attended marketing events with Samsung.",
      "Directed the design and construction of every component of an electrodialysis system, including circuit layouts for integrated sensor and control hardware, CAD drawings for fluid flow, and an onboard linux kernel serving sensor data in real time via a web application.",
    ],
  },
];

const EDUCATION = [
  {
    title: "Bloomberg FSD Training",
    link: null,
    metadata: [
      "Financial Software Developer Trainee",
      "August 2010 - December 2010",
    ],
    tasks: [
      "Learned C++, data structures, and algorithms during an intensive introductory course sponsored by Bloomberg.",
      "Led a team in a 3-day final project of refactoring and debugging a large Fortran codebase",
    ],
  },

  {
    title: "Case Western Reserve University",
    link: null,
    metadata: ["B.S. Mechanical Engineering", "Class of 2010"],
    tasks: [
      "Designed vital components of a water system for a community in the Dominican Republic through Engineers Without Borders.",
      "Co-led a team of student engineers to design and construct an irrigation project at a campus farm.",
      "Designed and Developed a website for an undergraduate animal ethics group.",
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
          createElement(
            "div",
            { class: `entry level-${skill.rating}` },
            skill.name
            // , [
            //   // createElement("div", { class: `rating level-${skill.rating}` }),
            //   createElement("div", { class: "name" }, skill.name),
            // ]
          )
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
