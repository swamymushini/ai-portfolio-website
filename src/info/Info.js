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
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Gopala Swamy Mushini. I'm a Software Engineer 3 at Rocket Software. I'm passionate about full-stack development and constantly improving my skills. I believe in creating efficient and user-friendly software solutions.",
    skills: {
        "Programming Languages": [
            { "label": "Java", "rating": "4" },
            { "label": "Python", "rating": "4" },
            { "label": "JavaScript", "rating": "4" }
        ],
        "Frameworks & Libraries": [
            { "label": "Spring Boot", "rating": "4" },
            { "label": "ReactJS", "rating": "4" },
            { "label": "NodeJS", "rating": "4" },
            { "label": "Kafka", "rating": "4" }
        ],
        "Database": [
            { "label": "PostgreSQL", "rating": "4" },
            { "label": "MySQL", "rating": "4" },
            { "label": "MongoDB", "rating": "4" }
        ],
        "Cloud": [
            { "label": "AWS", "rating": "4" }
        ],
        "Others": [
            { "label": "Git", "rating": "4" },
            { "label": "JIRA", "rating": "4" },
            { "label": "Kubernetes", "rating": "4" },
            { "label": "Postman", "rating": "4" },
            { "label": "Jenkins", "rating": "4" },
            { "label": "Docker", "rating": "4" },
            { "label": "DSA", "rating": "4" }
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
                "Implemented an automated Billing System that replaced manual work, saving time and reducing billing errors by 95%.",
                "Empowered customers with real-time billing usage and cost insights, leading to an 80% increase in customer satisfaction with the billing process.",
                "Developed a robust login and authentication flow for the application, where user logins with a username and password generate a JWT token.",
                "Implemented Okta sign-in flow with Single Sign-On (SSO) by leveraging OIDC, simplifying user management and providing a seamless login experience across multiple services."
            ],
            technologies: ["Java", "Spring Boot", "ReactJS", "Okta", "JWT", "RESTful APIs"]
        },
        {
            company: "Pennant Technologies",
            location: "Vizag, India",
            position: "Software Engineer",
            duration: "Jun 2019 - Feb 2022",
            responsibilities: [
                "Enhanced the EOD process in a fintech product, facilitating the settlement of EMIs, updating loan schedules, sending late payment emails, and adding penalties.",
                "Optimized the system to run on multiple servers, significantly improving performance by 45%, and leveraging Apache Kafka for inter-server communication.",
                "This resulted in a notable reduction in the downtime of the loan management system, ensuring smoother end-of-day operations."
            ],
            technologies: ["Java", "Spring", "Apache Kafka", "Microservices"]
        }
    ],
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
    ]
};