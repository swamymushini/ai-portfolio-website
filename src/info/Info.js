import self from "../img/self.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = true;

export const info = {
    firstName: "Gopala",
    lastName: "Swamy Mushini",
    initials: "GS",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🤖',
            text: 'Fueled by tech'
        },
        {
            emoji: '☎',
            text: '+91 955 330 7417'
        },
        {
            emoji: "💼",
            text: "Software Engineer 3 at Rocket Software"
        },
        {
            emoji: "📧",
            text: "swamymushini@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/swamymushini?tab=repositories",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/gopal-swamy-sde3/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Gopala Swamy Mushini. I'm a Software Engineer 3 at Rocket Software. I'm passionate about full-stack development and constantly improving my skills. I believe in creating efficient and user-friendly software solutions.",
        "skills": {
            "Programming Languages": [
                { "label": "Java", "rating": "4" },
                { "label": "Python", "rating": "3" },
                { "label": "JavaScript", "rating": "3" }
            ],
            "Frameworks & Libraries": [
                { "label": "Spring Boot", "rating": "4" },
                { "label": "ReactJS", "rating": "3" },
                { "label": "NodeJS", "rating": "3" },
                { "label": "Apache Kafka", "rating": "4" },
                { "label": "LangChain", "rating": "3" }
            ],
            "Database": [
                { "label": "PostgreSQL", "rating": "4" },
                { "label": "MySQL", "rating": "3" },
                { "label": "MongoDB", "rating": "4" },
                { "label": "OracleDB", "rating": "3" },
                { "label": "Redis", "rating": "3" }
            ],
            "Cloud": [
                { "label": "AWS (EC2, S3, Lambda, EKS, SQS, SNS, CloudWatch)", "rating": "4" }
            ],
            "Others": [
                { "label": "Git", "rating": "4" },
                { "label": "JIRA", "rating": "4" },
                { "label": "Postman", "rating": "4" },
                { "label": "Kubernetes", "rating": "3" },
                { "label": "Docker", "rating": "4" },
                { "label": "LLM (Mistral, CodeLlama)", "rating": "3" },
                { "label": "Ollama", "rating": "3" },
                { "label": "REST APIs", "rating": "4" },
                { "label": "DSA", "rating": "4" },
                { "label": "Microservices Architecture", "rating": "4" },
                { "label": "Distributed Systems", "rating": "4" }
            ]
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [
        
    ],
    experience: [
        {
            company: "Rocket Software",
            location: "Pune, India",
            position: "Senior Software Engineer",
            duration: "Feb 2022 - Present",
            responsibilities: [
                "Built a cloud-native API Integration Platform for e-commerce channels like Shopify, enabling seamless order processing and real-time inventory updates.",
                "Developed an Automated Billing System that reduced manual errors by 95% and increased billing process efficiency by 80%.",
                "Designed and implemented secure authentication mechanisms using JWT tokens and integrated Okta SSO flows using OIDC for seamless cross-platform login.",
                "Worked on building AI-driven solutions using LangChain and LLMs (Mistral, CodeLlama) to enhance document querying capabilities in the product.",
                "Containerized applications using Docker and deployed on AWS EKS clusters with monitoring through AWS CloudWatch."
            ],
            technologies: [
                "Java", "Spring Boot", "Apache Kafka", "AWS (EC2, S3, Lambda, EKS, SQS, SNS, CloudWatch)", 
                "ReactJS", "NodeJS", "MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes", "JWT", "Okta", "LangChain", "LLMs"
            ]
        },
        {
            company: "Pennant Technologies",
            location: "Vizag, India",
            position: "Software Engineer",
            duration: "Jun 2019 - Feb 2022",
            responsibilities: [
                "Migrated a monolithic EOD loan processing system into a distributed microservices-based architecture, improving system scalability and fault tolerance.",
                "Optimized EOD processes like EMI settlement, loan schedule updates, and penalty imposition by introducing parallel processing and server clustering using Apache Kafka.",
                "Built and delivered modules like Bulk Receipt Upload, NPA Management, TDS Processes, and Consumer Durable Loans from scratch.",
                "Worked closely with business stakeholders to gather requirements and deliver critical fintech modules within aggressive timelines."
            ],
            technologies: [
                "Java", "Spring Boot", "Apache Kafka", "Microservices Architecture", "PostgreSQL", "OracleDB"
            ]
        }
    ]
    ,
    projects: [
        {
            title: "Receipt Upload Functionality",
            description: [
                "Built functionality to upload and generate up to 10,000 payment receipts instantly",
                "Simplified process for bulk handling",
                "Implemented multi-threading, boosting creation speed by 65%",
                "Scaled capacity to handle 20,000 receipts"
            ],
            technologies: ["Java", "Multi-threading"]
        },
        {
            title: "Billing Service",
            description: [
                "Implemented an automated Billing System replacing manual work",
                "Saved time and reduced billing errors by 95%",
                "Empowered customers with real-time billing usage and cost insights",
                "Increased customer satisfaction with billing process by 80%"
            ],
            technologies: ["Spring Boot", "ReactJS", "RESTful APIs"]
        },
        {
            title: "Ecommerce Integration",
            description: [
                "Engineered a cloud-native API platform connecting SaaS product to Shopify",
                "Automated order processing and fulfillment for seamless customer experience",
                "Developed adaptable connectors for easy platform expansion",
                "Enabled provisioning with other e-commerce platforms"
            ],
            technologies: ["Cloud-native", "API", "Shopify"]
        },
        {
            title: "AI-driven Document Query System",
            description: [
                "Built an AI agent-based system to interpret user queries and generate MongoDB aggregation queries automatically",
                "Used LangChain framework to chain LLM agents for query extraction, query generation, and summarization tasks",
                "Integrated open-source LLMs like Mistral and CodeLlama to enable natural language understanding and structured data output",
            ],
            technologies: ["LangChain", "LLMs", "Mistral", "CodeLlama", "MongoDB", "Spring Boot", "NodeJS"]
        },        
        {
            title: "Authentication Service",
            description: [
                "Developed robust login and authentication flow",
                "Implemented JWT token generation for user logins",
                "Utilized JWT token for inter-service communication",
                "Implemented Okta sign-in flow with Single Sign-On (SSO) using OIDC"
            ],
            technologies: ["JWT", "Okta", "OIDC", "SSO"]
        },
        {
            title: "EOD Service Enhancement",
            description: [
                "Enhanced EOD process in fintech product",
                "Facilitated EMI settlements, loan schedule updates, and late payment handling",
                "Optimized system to run on multiple servers, improving performance by 45%",
                "Leveraged Apache Kafka for inter-server communication",
                "Reduced downtime of loan management system"
            ],
            technologies: ["Java", "Spring", "Apache Kafka", "Microservices"]
        }
    ],
    coverLetter :`Im Gopala Swamy Mushini, a passionate Software Engineer having an experience of 5.9 years in creating applications that are scalable and robust.

In my career so far, I have worked as a Java developer with a product-based company Pennant Technologies that concentrates on building products for the FinTech domain. I have also contributed in some critical developments like migrating the monolithic EOD loan processing system to microservices, optimizing the entire banking operations, building a bulk receipt upload mechanism, and developing other several modules like NPA management, TDS processes, and Consumer Durable Loans.

In view of gaining wider exposure to modern technologies, I moved to Rocket Software. Here, I have used Java, Spring Boot, Apache Kafka, React, Node.js, PostgreSQL, MongoDB, and Redis and AWS EC2, S3, Lambda, EKS, Docker, and Kubernetes extensively. Some of my key contributions include building an Automated Billing System, which reduced errors by 95%, developing a cloud-native API integration platform for e-commerce channels like Shopify, and implementing secure token-based flows for JWT.


I am super excited about the opportunity to be a part of your company, where I can bring my energy, enthusiasm, and strong problem-solving attitude to contribute to your innovation journey.

If you would like to know more about my work, you can check out my portfolio at [gopalaswamy.me](http://gopalaswamy.me/). I have even developed a personal bot there that can answer any recruiter queries related to my experience, skills, salary, notice period, and more!
Email : [swamymushini@gmail.com](mailto:swamymushini@gmail.com)
Linkedin: https://www.linkedin.com/in/gopal-swamy-sde3/
Phone : 9553307417
<p>
Resume : [gopalaswamy.me/#/resume](http://gopalaswamy.me/#/resume)
</p>
`
};