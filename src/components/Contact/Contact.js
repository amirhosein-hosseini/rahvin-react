import React from "react";
import "./Contactc.css";
import Button from "../Button/Button";
import { useState } from "react";
import axios from "axios";
import domain from "../../domain";
import instagram from "../../images/instagram1.png";
import telegram from "../../images/telegram1.png";
import linkedin from "../../images/linkedin1.png";
import youtube from "../../images/youtube1.png";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { Helmet } from "react-helmet";


const Contactc = () =>{


    const [data , setData] = useState({
        name: "", // Use different state properties for each input field
        email: "",
        topic: "",
        company: "",
        description: "",
    })

    const handlechnage = (e) => {
        const value = e.target.value;

        setData({
            ...data,
            [e.target.name]:value
        })
    }
    console.log(data)

    const handleSendContact = ()=>{
        let ourUserData = {
            name : data.name,
            email : data.email,
            subject : data.topic,
            company_name : data.company,
            message : data.description
        }

        axios.post(`${domain}/api/v1/contact-us`, ourUserData).then((response) => {
            console.log(response.data);
            toast.success(response.data.message)
            setData({
                name: "", // Clear each field by setting its respective state property to an empty string
                email: "",
                topic: "",
                company: "",
                description: "",
              });
        })
          .catch(function (error) {
            console.log(error?.response?.data?.message);
            toast.error(error?.response?.data?.message)
          });
        ;
    }


    return(
        <>
            <Helmet>
                <title>تماس باما</title>
                <meta name="تماس باما رهوین" content="تماس با ما رهوین"></meta>
            </Helmet>
            <div className="contact-page">
                <div className="container">
                    <div className="contact-page-titles">
                        <p className="contact-page-first-title">
                            خوشحال میشیم نظراتتون رو بشنویم
                        </p>
                        <p className="contact-page-second-title">
                            با ما در ارتباط باشید
                        </p>
                    </div>
                    <div className="contact-page-wrapper">
                        <form>
                            <div className="form-group">
                                <div className="form-group-two">
                                    <input type="text" name="name" id="name" placeholder="نام" onChange={handlechnage} value={data.name}></input>
                                    <input type="email" name="email" id="email" placeholder="پست الکترونیکی" onChange={handlechnage} value={data.email}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group-two">
                                    <input type="text" name="topic" id="topic" placeholder="موضوع" onChange={handlechnage} value={data.topic}></input>
                                    <input type="text" name="company" id="organization" placeholder="سازمان ( غیر ضروری )" onChange={handlechnage} value={data.company}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="متن پیام" name="description" id="description" onChange={handlechnage} value={data.description}></textarea>
                            </div>
                            <div className="submit">
                                <div className="submit-button">
                                    <Button handleclick={handleSendContact}>ارسال</Button>
                                </div>
                                <div className="submit-social">
                                    <div className="submit-social-items">
                                        <div className="submit-social-item">
                                            <img src={instagram} alt="instagram"></img>
                                        </div>
                                        <div className="submit-social-item">
                                            <img src={linkedin} alt="linkedin"></img>
                                        </div>
                                        <div className="submit-social-item">
                                            <img src={telegram} alt="telegram"></img>
                                        </div>
                                        <div className="submit-social-item">
                                            <img src={youtube} alt="youtube"></img>
                                        </div>
                                    </div>
                                    <div className="submit-or">
                                        <p>
                                            یا
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactc;