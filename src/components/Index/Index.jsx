import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import Slideshow from "../Slider/Slider";
import {Link} from "react-router-dom"
import "./Index.css"
import DesktopHero from "../DesktopHero/DesktopHero";
import { useEffect, useState } from "react";
import axios from "axios";
import domain from "../../domain";
import searchbar from "../../images/searchbarimage.png";
import { Helmet } from "react-helmet";


const Index = () => {


    let podcastss = [];

    const [slider , setSliders] = useState([])
    const [podcasts , setPodcasts] = useState([])
    const [search , setSearch] = useState([])
    const [searchBar , setSearchBar] = useState("")

    useEffect(()=>{
        axios.get(`${domain}/api/v1/categories/favorite`)
        .then(function (response) {
            // handle success
            setSliders(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])
    useEffect(()=>{
        axios.get(`${domain}/api/v1/podcasts`)
        .then(function (response) {
            // handle success
            setPodcasts(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])


    podcasts == undefined ? podcastss = [] : podcastss = podcasts;


    const searchBarHandle = (e) => {
        const data = e.target.value;

        setSearchBar(data)
    }

    const searchHandle = () =>{
        axios.get(`${domain}/api/v1/global-search?keyword=${searchBar}`)
        .then(function (response) {
            // handle success
            setSearch(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    }
    const blogssearch = search.blogs;
    const podcastsearch = search.podcasts;



    return(
        <>
            <Helmet>
                <title>رهوین</title>
                <meta name="رهوین" content="رهوین"></meta>
            </Helmet>
            <div className="container" style={{marginBottom : "60px","direction" : "rtl" }}>
                <div className="hero-title">
                    <div className="hero-first-title">
                        <p>
                            رَهـ وین،  رسانه ای برای شهر و شهروند    
                        </p>
                    </div>
                    <div className="hero-second-title">
                        <p>
                            هر آنچه که برای زندگی بهتر در شهر قزوین به آن نیاز دارید    
                        </p>
                    </div>
                    <div className="hero-searchbar">
                        <input type="text" placeholder="دنبال کجا می گردید ؟" name="searchbar" id="searchbar" onChange={searchBarHandle}></input>
                        <img src={searchbar} alt="icon" onClick={searchHandle}/>
                    </div>
                </div>
                {blogssearch !== undefined ? 
                                <div className="home-slideshow-wrapper" style={{marginBottom : "60px","direction" : "rtl" }}>
                                    <div className="home-slideshow-topic">
                                        <p className="home-slideshow-title">
                                            بلاگ
                                        </p>
                                    </div>
                                    <Slideshow>
                                        {blogssearch?.map((item)=>(
                                            <ProductItem title={item.title} desc={item.description} src={domain+item.cover_file} slug={item.slug} clas={"App\\Models\\Blog"}/>
                                        ))}
                                    </Slideshow>
                                </div> : <div></div>
                }
                {podcastsearch !== undefined ? 
                                <div className="home-slideshow-wrapper" style={{marginBottom : "60px","direction" : "rtl" }}>
                                    <div className="home-slideshow-topic">
                                        <p className="home-slideshow-title">
                                            پادکست
                                        </p>
                                    </div>
                                    <Slideshow>
                                        {podcastsearch?.map((item)=>(
                                            <ProductItem title={item.title} desc={item.description} src={domain+item.cover_file} slug={item.slug} clas={"App\\Models\\Podcast"}/>
                                        ))}
                                    </Slideshow>
                                </div> : <div></div>
                }
                <DesktopHero />
                {slider?.map((item)=>(
                    <div className="home-slideshow-wrapper" style={{marginBottom : "60px","direction" : "rtl" }}>
                        <div className="home-slideshow-topic">
                            <p className="home-slideshow-title">
                                {item.title}
                            </p>
                            <Link to={`/Category/${item.slug}`} className="home-slideshow-link">مشاهده همه</Link>
                        </div>
                        <Slideshow>
                            {item.items?.map((itemy)=>(
                                <ProductItem title={itemy.title} desc={itemy.description} src={domain+itemy.cover_file} slug={itemy.slug} clas={itemy.class}/>
                            ))}
                        </Slideshow>
                    </div>
                ))}
                    <div className="home-slideshow-wrapper" style={{marginBottom : "60px","direction" : "rtl" }}>
                        <div className="home-slideshow-topic">
                            <p className="home-slideshow-title">
                                پادکست
                            </p>
                            <Link to={`/Podcast`} className="home-slideshow-link">مشاهده همه</Link>
                        </div>
                        <Slideshow>
                            {podcastss?.map((item) => (
                                <ProductItem title={item.title} desc={item.description} src={domain+item.cover_file} slug={item.slug} clas={item.class}/>
                            ))}
                        </Slideshow>
                    </div>
            </div>
        </>
    )
}

export default Index;