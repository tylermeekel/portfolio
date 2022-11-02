import React from "react";

export default function Sidebar(){

    //State
    const [showProjects, setShowProjects] = React.useState(false)
    const [showContact, setShowContact] = React.useState(false)


    //Functions
    function toggleProjects(){
        setShowProjects(v => !v)
    }

    function toggleContact(){
        setShowContact(v => !v)
    }
    

    //JSX
    return (
        <ul className="navigation slide-in-bottom-slower">
            <li onClick={toggleProjects} className="projects-clicker">projects</li>
            {showProjects &&
                <div className="projects">
                    <ul>
                        <li><a 
                            href="https://lustrous-donut-afea66.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                static travel blog (scrimba project)
                        </a></li>
                        <li><a 
                            href="https://clinquant-salmiakki-523644.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                reproducable password generator
                        </a></li>
                    </ul>
                </div>
            }
            <li className="projects-clicker" onClick={toggleContact}>contact + social media</li>
            {showContact &&
                <div>
                    <ul>
                        <li><a href="mailto:ty.meekel@gmail.com?body=Hello%20Tyler%2C">email</a></li>
                        <li><a href="https://www.instagram.com/tylermeekel">instagram</a></li>
                        <li><a href="https://github.com/tylermeekel">github</a></li>
                    </ul>
                </div>
            }
        </ul>
    )
}