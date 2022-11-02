import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function App(){

    //State
    const [showSide, setShowSide] = React.useState(false)


    //Functions
    function toggleSidebar(){
        setShowSide(prevState => !prevState)
    }


    //JSX
    return (
        <div className="appContainer">
            <div className="mainContainer">
                <Header/>
                <Body toggle_sidebar={toggleSidebar}/>
                <Footer/>
            </div>
            {showSide &&
            <div className="sidebarContainer slide-in-bottom" >
                <Sidebar />
            </div>
            }
        </div>
    )
}