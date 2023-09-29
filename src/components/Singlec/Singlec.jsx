import React from "react";
import axios from "axios";
import "./Singlec.css";
import ProductItem from "../ProductItem/ProductItem";
import { useEffect, useRef, useState } from "react";
import {Link , useNavigate, useParams} from "react-router-dom"
import domain from "../../domain";
import { Helmet } from "react-helmet";


const Singlec = () =>{

    const [mostView , setMostView] = useState([])
    const params = useParams()

    const navigate = useNavigate()



    useEffect(()=>{
        axios.get(`${domain}/api/v1/blogs/view-count`)
        .then(function (response) {
            // handle success
            setMostView(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])

    const navigateToDynamicRoute = (slug) => {
        navigate(`/Single/${slug}`, { replace: true });
        window.location.reload();
    };




    const [blog , setBlog] = useState([])
    const [rela , setRela] = useState([])
    const url = decodeURIComponent(`${domain}/api/v1/blogs/${params.slug}`)

    useEffect(()=>{
        axios.get(url)
        .then(function (response) {
            // handle success
            setBlog(response.data.data.blog)
            setRela(response.data.data.closeBlog)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])
    const banner =  blog.banner_file;
    const cover =  blog.cover_file;


    const title = blog.title;
    const desc = blog.description;
    const slug = blog.slug;
    const keyword = blog.keyword;
    const related = rela;
    const category = blog.categories
    console.log(blog.keyword)
    const body = blog.body;
    let bannery = null;
    let covery = null;
    banner == undefined ? bannery = "" : bannery = domain + banner;
    cover == undefined ? covery = "" : covery = domain + cover;

    let route = []


    category?.map((item) => {
        let categoryy = [];
        item == undefined ? categoryy = [] : categoryy = item
        let firstRoute = item.title + "/";
        while (item.parent != null){
            firstRoute = firstRoute + item.parent.title + "/";
            item = item.parent;
        }
        firstRoute = firstRoute.slice(0,-1)
        route.push(firstRoute);
    })

    console.log(route)




    return(
        <>
            <Helmet>
                <title>{slug}</title>
                <meta name={slug} content={keyword}></meta>
            </Helmet>
            <div className="container">
                <div className="single">
                    <div className="single-left">
                        <div className="single-right-title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="single-way">
                                {route === undefined ? <p></p> : route?.map((item) =>(<p>{item + "/" + title}</p>))}
                        </div>
                        <div className="single-right-one-image">
                            <img src={covery} alt="image" />
                        </div>
                        <div className="single-desc">
                            <p>
                                {desc}
                            </p>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: body }}></div>
                    </div>
                    <div className="single-right">
                        <div className="single-left-bar">
                            <div className="single-left-title">
                                <p>
                                    مطالب پربازدید
                                </p>
                            </div>
                            {mostView?.map((item)=>(
                                <div className="single-left-item">
                                        <p onClick={() => navigateToDynamicRoute(item.slug)}>
                                            {item.title}
                                        </p>
                                </div>
                            ))}
                        </div>
                        <div className="single-left-banner">
                            <img src={bannery} alt="image" />
                        </div>
                    </div>
                </div>
                <div className="single-related">
                    <div className="single-related-title">
                        <p>
                            مطالب مرتبط
                        </p>
                    </div>
                    <div className="single-related-wrapper">
                        {related?.map((item)=>(
                            <ProductItem title={item.title} desc={item.description} src={domain+item.cover_file} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singlec;