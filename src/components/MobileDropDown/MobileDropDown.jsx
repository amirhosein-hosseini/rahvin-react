import React from "react";
import { useEffect, useRef, useState } from "react";
import "./MobileDropDown.css";
import axios from "axios";
import { Link } from "react-router-dom";
import domain from "../../domain";
import arrowdown from "../../images/arrowdown.png";

const MobileDropDown = ({ mobiledropclass }) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const reference = useRef(null);

  useEffect(() => {
    axios
      .get(`${domain}/api/v1/categories/menu`)
      .then(function (response) {
        setCategories(response.data.data);
        const data = response.data.data;
        const subcategory = data?.map((item) => item.childCategory || []);
        setSubCategories(subcategory);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  const navigateToDynamicRoute = (slug) => {
    window.location.href = `/Category/${slug}`;
  };

  return (
    <div className={mobiledropclass}>
      <ul>
        {categories?.map((item) =>
          item.childCategory ? (
            <li key={item.slug}>
              <p
                className="mobile-drop-down-title"
                onClick={() => toggleCategory(item)}
              >
                {item.title}
                <img src={arrowdown} alt="icon"></img>
              </p>
              {activeCategory === item && (
                <div className="drop-down-item" id={item.slug}>
                  {item.childCategory?.map((itemy) =>
                    itemy.childCategory ? (
                      <div key={itemy.id}>
                        <p className="drop-down-item-title">{itemy.title}</p>
                        {itemy.childCategory?.map((itemyy) => (
                          <p
                            key={itemyy.id}
                            className="drop-down-item-item"
                            onClick={() => navigateToDynamicRoute(itemyy.slug)}
                          >
                            {itemyy.title}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p
                        key={itemy.id}
                        className="drop-down-item-title"
                        onClick={() => navigateToDynamicRoute(itemy.slug)}
                      >
                        {itemy.title}
                      </p>
                    )
                  )}
                </div>
              )}
            </li>
          ) : (
            <li key={item.id}>
              <Link to={`/Category/${item.slug}`}>{item.title}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MobileDropDown;