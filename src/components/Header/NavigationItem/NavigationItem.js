import React from "react";
const NavigationItem = ({text , children , oncli = null ,onmousee = null ,onmousel = null, cls}) => {
    console.log(cls)
    return(
            <li key={text} className={cls === undefined ? "nav-link" : `nav-link ${cls}`} onClick={oncli} onMouseEnter={onmousee} onMouseLeave={onmousel}>
                {children}
            </li>
    )
}

export default NavigationItem;