import { useState, useEffect, useRef } from "react";

const CoverLetter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault(); // Prevent page jump
        setIsOpen(true); // Open popup
    };

    const handleClose = () => {
        setIsOpen(false); // Close popup
    };

    const handleOutsideClick = (e) => {
        // Close the popup if the click happens outside the popup
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    const handleClickResume = (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        window.open("https://gopalaswamy.me/#/resume", "_blank"); // Open in a new window/tab
    };

    useEffect(() => {
        if (isOpen) {
            // Add event listener to detect click outside the popup
            document.addEventListener("click", handleOutsideClick);
        } else {
            document.removeEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isOpen]);
    return (
        <div>
            <a href="#" onClick={handleClick} style={{ ...popupStyles.coverLetterTitle, marginRight: '20px' }}>
                Cover Letter
            </a>

            <a href="#" onClick={handleClickResume} style={popupStyles.coverLetterTitle}>
                Resume 
            </a>


            {isOpen && (
                <div style={popupStyles.overlay}>
                    <div style={popupStyles.popup}>
                        <h2>My Cover Letter</h2>
                        <div style={popupStyles.textBlock}>
                            <p>
                                Im Gopala Swamy Mushini, a passionate Software Engineer having an experience of 5.9 years in creating applications that are scalable and robust.

                            </p>
                            <p> </p>
                            <p>
                                In my career so far, I have worked as a Java developer with a product-based company Pennant Technologies that concentrates on building products for the FinTech domain. I have also contributed in some critical developments like migrating the monolithic EOD loan processing system to microservices, optimizing the entire banking operations, building a bulk receipt upload mechanism, and developing other several modules like NPA management, TDS processes, and Consumer Durable Loans.

                            </p>
                            <p> </p>
                            <p>
                                In view of gaining wider exposure to modern technologies, I moved to Rocket Software. Here, I have used Java, Spring Boot, Apache Kafka, React, Node.js, PostgreSQL, MongoDB, and Redis and AWS EC2, S3, Lambda, EKS, Docker, and Kubernetes extensively. Some of my key contributions include building an Automated Billing System, which reduced errors by 95%, developing a cloud-native API integration platform for e-commerce channels like Shopify, and implementing secure token-based flows for JWT.

                            </p>
                            <p>
                                I have always kept a strong focus throughout my career towards building systems that are distributed, easing the management of highly scalable systems, improving system performance, and solving real-world complex problems through technology. And most importantly I love to build products that help improve the lives of individuals while continuously learning and developing my technical skills

                            </p>
                            <p>
                                I am super excited about the opportunity to be a part of your company,
                                where I can bring my energy, enthusiasm, and strong problem-solving attitude
                                to contribute to your innovation journey.
                            </p>

                            <p>
                                If you would like to know more about my work, you can check out my portfolio at&nbsp;
                                <a href="http://gopalaswamy.me/" target="_blank" rel="noopener noreferrer">gopalaswamy.me</a>.
                                I have even developed a personal bot there that can answer any recruiter queries
                                related to my experience, skills, salary, notice period, and more!
                            </p>

                            <p>Email: <a href="mailto:swamymushini@gmail.com">swamymushini@gmail.com</a></p>
                            <p>LinkedIn: <a href="https://www.linkedin.com/in/gopal-swamy-sde3/" target="_blank" rel="noopener noreferrer">linkedin.com/in/gopal-swamy-sde3/</a></p>
                            <p>Phone: 9553307417</p>
                            <p>Resume: <a href="http://gopalaswamy.me/#/resume" target="_blank" rel="noopener noreferrer">gopalaswamy.me/#/resume</a></p>
                        </div>
                        <button onClick={handleClose} style={popupStyles.closeButton}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const popupStyles = {
    overlay: {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000,
    },
    popup: {
        background: 'rgba(0, 0, 0, 0.8)', padding: '30px', borderRadius: '10px',
        width: '80%', maxHeight: '80vh',
        fontSize: '1.3rem',
        lineHeight: '1.6',
    },
    textBlock: {
        marginTop: '20px',
        overflow: 'auto', // Makes sure content within the text block is scrollable if needed
        maxHeight: '70vh', // Limits the height of the text block to prevent overflowing
    },
    pStyle: {
        marginBottom: '20px', // Adds space between paragraphs
        textIndent: '30px',   // Adds indentation at the start of each paragraph
    },
    closeButton: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    coverLetterTitle: {
        fontSize: "1.3rem",
        fontWeight: "normal",
        textDecoration: "underline",
        color: "#ffff", // Link-like blue color
        cursor: "pointer",
        marginBottom: "20px"
    }
};

export default CoverLetter;
