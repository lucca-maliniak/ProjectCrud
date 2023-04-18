import './nav.css'
import './nav'
import React from "react";

export default props =>
    <React.Fragment>
        <a href={`/${props.href}`}>
            <i className={`fa fa-${props.icon}`}></i> {props.page}
        </a>
    </React.Fragment>