import React from "react";
import "./Podcastc.css";
import PodcastItem from "../PodcastItem/PodcastItem";
import { useEffect, useState } from "react";
import axios from "axios";
import domain from "../../domain";
import { Helmet } from "react-helmet";

const Podcastc = () =>{

    const [podcasts , setPodcasts] = useState([])

    useEffect(()=>{
        const controller = new AbortController();

        axios.get(`${domain}/api/v1/podcasts`, {
            signal: controller.signal
    })
        .then(function (response) {
            // handle success
            setPodcasts(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          return ()=>{
            controller.abort()
          }
    },[])



    return(
        <>
            <Helmet>
                <title>پادکست ها</title>
                <meta name="پادکست های رهوین" content="پادکست های رهوین"></meta>
            </Helmet>
            <div className="podcast-page">
                <div className="container">
                    <div className="podcast-title-wrapper">
                        <p className="podcast-title">
                            " رَهـ وین کست "
                        </p>
                    </div>
                    <p className="podcast-desc">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را                 
                    </p>
                    <p className="podcast-item-wrapper-title">
                        آخرین اپیزودها
                    </p>
                    <div className="podcast-items-wrapper">
                        {podcasts?.map((item)=>(
                            <PodcastItem src={domain+item.cover_file} title={item.title} desc={item.description} instagram={item.podcastLink.اینستاگرام} youtube={item.podcastLink.یوتیوب} castbox={item.podcastLink["کست باکس"]} aparat={item.podcastLink.آپارات} id={item.slug}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Podcastc;