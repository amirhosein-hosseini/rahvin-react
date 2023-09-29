import "./Header.css"
import {Link, useLocation} from "react-router-dom"
import NavigationItem from "./NavigationItem/NavigationItem";
import React ,{ useRef, useState } from "react";
import DropDown from "../DropDown/DropDown";
import MobileDropDown from "../MobileDropDown/MobileDropDown";
import littlelogo from "../../images/little-logo.png";
import logo from "../../images/logo.png";

const Header = () => {

    const location = useLocation();

    var [navShow , setNavshow] = useState(false);
    const [mobileNavShow , setMobileNavShow] = useState("mobiledropclose");
    const dropdownshow = useRef();



    const NavigationItems = [
        {href: "/" , text: "خانه"}
        ,
        {text: "معرفی"}
        ,
        {href: "/Podcast" , text: "پادکست"}
        ,
        {href: "/About" , text: "درباره ما"}
        ,
        {href: "/Contact" , text: "ارتباط باما"}
    ]
    const NavShow = () => {
        setNavshow(!navShow)
        document.body.style = "visibility:visable;height:100vh;width:100vw;overflow:hidden";
    }
    const NavClose = () => {
        setNavshow(!navShow)
        document.body.style = "visibility:visable;height:initial;width:100%;overflow-x:hidden";
    }

    const IntroductionNavshow = () => {
        document.getElementById("dropdownshow").style = "transform: scale(1);"
    }
    const IntroductionNavdelete = () => {
        document.getElementById("dropdownshow").style = "transform: scale(0);" 
    }
    const mobileNavShowHandler = () => {
        mobileNavShow === "mobiledropclose" ? setMobileNavShow("mobiledropshow") : setMobileNavShow("mobiledropclose");
    }

    return(
            <>
                <div className="nav">
                    <div className="container">
                        <div className="nav-wrapper">
                            <nav>
                                <div className="container">
                                    <div className="nav-icon-wrapper">
                                        <div className="nav-icon" onClick={() => NavShow()}>                       
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor"   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="3" y1="12" x2="21" y2="12" />
                                                <line x1="3" y1="6" x2="21" y2="6" />
                                                <line x1="3" y1="18" x2="21" y2="18" />
                                            </svg>
                                        </div>
                                        <div className="logo-two">
                                            <Link to="/">
                                                <img src={littlelogo} alt="logo"></img>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${navShow ? "active" : ""} nav-bgoverlay`} onClick={() => NavClose()}></div>
                                <ul className={`${navShow ? "show" : ""} nav-list`}>
                                    <div className="nav-close" onClick={() => NavClose()} key={"close"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <div className="nav-list-wrapper" key={"list"}>
                                        {NavigationItems?.map((item)=>(
                                            item.text !== "معرفی" ? 
                                            <div className="nav-item-wrapper">
                                                <NavigationItem cls={location.pathname === item.href ? 'active' : ''} text={item.text} oncli={() => NavClose()}><Link to={item.href} className="nav-link" >{item.text}</Link></NavigationItem>
                                            </div> : 
                                            <div className="nav-item-wrapper" onMouseEnter={() => IntroductionNavshow()} onMouseLeave={() => IntroductionNavdelete()}>
                                                <div onClick={mobileNavShowHandler}>
                                                    <NavigationItem text={item.text}>{item.text}</NavigationItem>
                                                </div>
                                                <MobileDropDown mobiledropclass={mobileNavShow}/>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="logo" key={"logo"}>
                                        <Link to="/">
                                            <img src={logo} alt="logo"></img>
                                        </Link>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="headerdropdown" ref={dropdownshow} id="dropdownshow">
                    <div className="dropdown">
                        <div className="container">
                            <div className="dropdown-wrapper" onMouseEnter={() => IntroductionNavshow()} onMouseLeave={() => IntroductionNavdelete()}>
                                <DropDown/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Header;