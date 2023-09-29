import React from "react";
import "./HomeHeroItem.css";
import Button from "../Button/Button";
import {Link} from "react-router-dom"

const HomeHeroItem = ({title , desc , slug , date , src , clas , category}) => {
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



    return(
        <>
                <div className="home-carousel-item">
                    <div className="carousel-item-image">
                        <img src={src} alt="image" />
                    </div>
                    <div className="carousel-item-desc">
                        <div className="carousel-item-desc-title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="carousel-item-desc-desc">
                            <p>
                                {desc}
                            </p>
                        </div>
                        <div className="carousel-item-desc-footer">
                            <div className="carousel-item-desc-footer-way">
                                {route?.map((item) =>(
                                    <p>
                                        {item}
                                    </p>
                                ))}

                                <p>
                                    {date}
                                </p>
                            </div>
                            <div className="carousel-item-desc-footer-button">
                                {clas == "App\\Models\\Blog" ? 
                                <Link to={`/Single/${slug}`}>
                                    <Button>
                                        مطالعه کامل
                                    </Button>
                                </Link> : 
                                <Link to={`/Podcast/#${slug}`}>
                                    <Button>مطالعه کامل  </Button>
                                </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default HomeHeroItem;