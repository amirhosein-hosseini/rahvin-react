import React from "react";
import "./Introduction.css";
import ProductItem from "../ProductItem/ProductItem";
import domain from "../../domain";
import {useParams} from "react-router-dom"
import { useEffect , useState} from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const Introductionc = () => {


    const params = useParams()


    const [blogs , setBlogs] = useState([])
    const url = decodeURIComponent(`${domain}/api/v1/categories/${params.slug}`)


    useEffect(()=>{
        axios.get(url)
        .then(function (response) {
            // handle success
            setBlogs(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    },[])


    const title = blogs.title;
    const items = blogs.items;
    const desc = blogs.description;
    const category = blogs.parent;


    let itemss = null;
    let categoryy = [];
    let route = null;

    items == undefined ? itemss = [] : itemss = items; 
    category == undefined ? categoryy = [] : categoryy = category;



    route = "/" + categoryy?.title + "/" + title 

    while (categoryy.parent != null){
        route = "/" + categoryy.parent.title + route;
        categoryy = categoryy.parent;
    }
    route = route.slice(1)




    return(
        <>
            <Helmet>
                <title>رهوین</title>
                <meta name="رهوین" content="رهوین"></meta>
            </Helmet>
            <div className="container">
                <div className="introduction-header">
                    {route === "undefined/undefined" ? <p></p> :  <p className="introduction-way">{route}</p>
                    }
                    <p className="introduction-desc">
                        {desc}
                    </p>
                    <p className="introduction-title">
                        {title}
                    </p>
                </div>
                <div className="introduction-wrapper">
                    {itemss?.map((item)=>(
                        <ProductItem title={item.title} desc={item.description} src={domain + item.cover_file} slug={item.slug} clas={item.class} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Introductionc;