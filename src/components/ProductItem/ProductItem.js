import React from "react";
import "./ProductItem.css";
import Button from "../Button/Button";
import {Link} from "react-router-dom"


const ProductItem = ({title , desc , src , slug , clas}) => {
    return(
        <div className="product-item">
            <div className="product-item-image">
                <img src={src} alt="image" />
            </div>
            <div className="product-topic">
                <p>
                    {title}
                </p>
            </div>
            <div className="product-desc">
                <p>
                    {desc}
                </p>
            </div>
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
    )
}

export default ProductItem;