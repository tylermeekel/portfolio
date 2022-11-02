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
                        <li>email</li>
                        <li>facebook</li>
                        <li>instagram</li>
                        <li>github</li>
                    </ul>
                </div>
            }
        </ul>
    )
}