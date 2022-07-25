import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SubHeader = (props) => {
    return (
        <h3 className="sub-header">{props.icon && <FontAwesomeIcon icon={props.icon} />} {props.text}</h3>
    );
}
export default SubHeader;