import React from "react";
import iconEllipsis from '../../images/icon-ellipsis.svg';
import './Item.css';

const Item = (props: { tab : string; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; hours: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; prevLog: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>{
    return(
        <div className={"trackerItem "+props.title}>
            <div className="trackerInfo">
                <div className="header">
                    <span className="title">{props.title}</span>
                    <img src={iconEllipsis} alt="settings"/>
                </div>
                <div className="body">
                    <span className="hours">{props.hours}hrs</span>
                    <span className="prevLog">{props.tab} - {props.prevLog}hrs</span>
                </div>
            </div>
        </div>
    )
}

export default Item;