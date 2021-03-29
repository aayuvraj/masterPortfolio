/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aayush's Portfolio",
  description:
    "A passionate individual who always thrive to work on end to end products that creates impact in the community and always hungry to learn new tech.",
  og: {
    title: "Aayush Shah Portfolio",
    type: "website",
    url: "http://aayushshah.com/",
  },
};

//Home Page
const greeting = {
  title: "Aayush Shah",
  logo_name: "Aayush Shah",
  nickname: "geeky_cipher",
  subTitle:
    "A passionate individual who always thrive to work on end to end products that creates impact in the community and always hungry to learn new tech.",
  resumeLink:
    "https://drive.google.com/file/d/1RiDdDwWKoRr03dpsFslSx1nEMoauBvLD/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/aayuvraj",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aayush-shah-601029130/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:aayushhemal98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and Data Science projects",
        "⚡ Developing end to end data driven solutions based on client's needs",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Developing mobile applications using Android Studio, Java",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud and making an elastic application",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "School of Engineering and Applied Science, Ahmedabad University",
      subtitle: "B.Tech. in Information and Communication Technology",
      logo_path: "au_logo.jpg",
      alt_name: "SEAS AU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN, AI, DV etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and Cloud Computing",
        //"⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://ahduni.edu.in/",
    },
    {
      title: "Arizona State University",
      subtitle: "MS in Computer Science",
      logo_path: "download.png",
      alt_name: "ASU",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I am currently studying CLoud Computing, Mobile Comouting and Distributed Database Systems",
        "⚡ In the future semesters I intend to study Fundamental of Statistical Learning, Data Mining and Software Validaton and Testing courses",
        //"⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.asu.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
   {
    title: "Data Visualization with Python",
    subtitle: "- IBM",
    logo_path: "ibm.png",
    alt_name: "IBM",
    color_code: "#8C151599",
   },
   {
    title: "Python Programming : A Concise Introduction",
    subtitle: "- Wesleyan University",
    logo_path: "wesleyan.jpg",
    alt_name: "Wesleyan University",
    color_code: "#00000099",
   },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "I have worked with an evolving startup as Data Science Intern and with a tele-communication company as Big Data and Advanced Analytics Intern. My recent experience as Graduate Statistics Tutor at Arizona State University where I help students in their research and dissertation projects in data analysis using different software tools like R, Python, SPSS etc. I am currently inclined towards working with companies in the development of cloud infrastructure and software development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Graduate Statistics Tutor",
          company: "Arizona State University",
          company_url: "https://tutoring.asu.edu/student-services/graduate",
          logo_path: "download.png",
          duration: "January 2021 - PRESENT",
          location: "Tempe, Arizona",
          description:
            "Hired in the Graduate Academic Support Department, undertaking tasks of teaching students topics of statistical inference. Guided students through the data analysis process using Python, Excel, R Studio, SPSS to aid them in their assignments and research projects.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "Meditab Software, Inc",
          company_url: "https://www.meditab.com/",
          logo_path: "meditab.jpg",
          duration: "Dec 2019 - Mar 2020",
          location: "Ahmedabad, Gujarat",
          description:
            "Developed an end to end solution of providing Battery Health Monitoring system for a robot car used in the US healthcare system using data driven approaches to alert the user of the pharmacy when the battery of the robot needs to be recharged.Developed a Dashboard of Accuracy Monitoring Tool by collaborating with the Software team using Angular and D3JS.Contributed 1K+ lines of code to an established codebase via Git",
          color: "#ee3c26",
        },
        {
          title: "Big Data and Advanced Analytics Intern",
          company: "Vodafone Idea Limited",
          company_url:
            "https://www.vodafoneidea.com/",
          logo_path: "Vi.jpg",
          duration: "May 2019 - Jul 2019",
          location: "Mumbai, Maharashtra",
          description:
            "Built a churn prediction model,also applied data analytics and visualization techniques to analyze the data. Predicted the number of customers who will not churn to the offer provided to them by the campaign team. Prepared a Proof of concept for object detection model using YOLOv3, Fast R-CNN and Faster R-CNN for their IOT based products which were in development phase.",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create an elastic object classification service and deploy it on Cloud Infrastruture using AWS, I am currently learning Google Compute Engine.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo.png",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "1260 E University Dr, APT 4013 Tempe Arizona 85281",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/1260+E+University+Dr,+Tempe,+AZ+85281/@33.4225344,-111.9202503,17z/data=!3m1!4b1!4m5!3m4!1s0x872b08e4e45000ad:0xa287a193d6cb2d08!8m2!3d33.4225344!4d-111.9180616",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 602-451-(9401)",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
