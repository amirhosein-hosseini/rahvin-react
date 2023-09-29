import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom"
import instagram from "../../images/instagram1.png";
import telegram from "../../images/telegram1.png";
import linkedin from "../../images/linkedin1.png";
import youtube from "../../images/youtube1.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-social">
                        <p className="footer-social-title">
                            رَهـ وین در شبکه های اجتماعی 
                        </p>
                        <div className="footer-social-items">
                            <div className="footer-social-item">
                                <Link href="#">
                                    <img src={instagram} alt="instagram"></img>
                                </Link>
                            </div>
                            <div className="footer-social-item">
                                <Link href="#">
                                    <img src={telegram} alt="telegram"></img>
                                </Link>
                            </div>
                            <div className="footer-social-item">
                                <Link href="#">
                                    <img src={linkedin} alt="linkedin"></img>
                                </Link>
                            </div>
                            <div className="footer-social-item">
                                <Link href="#">
                                    <img src={youtube} alt="youtube"></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <p className="footer-links-title">
                            لینک های مفید   
                        </p>
                        <div className="footer-links-items">
                            <Link to="/About" className="footer-links-item">
                                درباره ما   
                            </Link>
                            <Link to="/Contact" className="footer-links-item">
                                تماس با ما                            
                            </Link>
                            <Link to="#" className="footer-links-item">
                                آخرین مطالب                            
                            </Link>
                        </div>
                    </div>
                    <div className="footer-about">
                        <p className="footer-about-title">
                            درباره رَهـ وین  
                        </p>
                        <p className="footer-about-desc">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;