import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DropDown.css";
import axios from "axios";
import domain from "../../domain";

const DropDown = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subnumber, setSubnumber] = useState(0);
  const [showSubCategories, setShowSubCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${domain}/api/v1/categories/menu`)
      .then(function (response) {
        setCategories(response.data.data);
        const data = response.data.data;
        const subcategory = data?.map((item) => item.childCategory || []);
        setSubCategories(subcategory);
        setShowSubCategories(subcategory[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const navigateToDynamicRoute = (slug) => {
    navigate(`/Category/${slug}`, { replace: true });
    window.location.reload();
  };

  return (
    <>
      <ul className="drop-down-topic-wrapper">
        {categories?.map((item, index) => (
          <li
            key={item.slug}
            className="drop-down-topic"
            onMouseEnter={() => {
              setSubnumber(index);
              setShowSubCategories(subCategories[index]);
            }}
            onClick={() => navigateToDynamicRoute(item.slug)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="dorp-down-items-wrapper">
        {showSubCategories?.map((item) => (
          <div key={item.id} className="drop-down-item">
            <p
              className="drop-down-item-title"
              onClick={() => navigateToDynamicRoute(item.slug)}
            >
              {item.title}
            </p>
            {item.childCategory?.map((itemy) => (
              <p
                key={itemy.id}
                className="drop-down-item-item"
                onClick={() => navigateToDynamicRoute(itemy.slug)}
              >
                {itemy.title}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DropDown;