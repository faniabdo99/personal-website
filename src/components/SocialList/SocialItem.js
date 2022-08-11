import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialItem = (props) => {
    return (
        <li>
            <a className={props.colorClass} href={props.url} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={props.iconClass} />
            </a>
        </li>
    );
}
export default SocialItem;