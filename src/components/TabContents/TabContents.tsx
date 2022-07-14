import React, { useEffect, useState} from "react";
import Item from "../Item/Item"

import './TabContent.css';

const TabContent = (props: { tab: string | undefined; className:string  | undefined;})=>{
    const [data, setData] = useState<any[]>([]);
    const getData = ()=> {
        
        console.log("From getData");
        fetch('https://wookie.codesubmit.io/time-tracking',{
            headers : {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    }).then(function(res){
        console.log("From Fetch class");
        return res.json();
    }).then(function(myJson){
        setData(myJson);
    })
    };

    useEffect(() => {
        getData();
    }, [])
    return(
        <div id={props.tab} className="tabContent">
            {data.map((item, index)=>{
                if(props.tab === 'daily'){
                    return <Item tab="Yesterday" title={item.title} hours={item.timeframes.daily.current} prevLog={item.timeframes.daily.previous}/>
                }else if(props.tab === 'weekly'){
                    return <Item tab="Last Week" title={item.title} hours={item.timeframes.weekly.current} prevLog={item.timeframes.weekly.previous}/>
                }else if(props.tab === 'monthly'){
                    return <Item tab="Last Month" title={item.title} hours={item.timeframes.monthly.current} prevLog={item.timeframes.monthly.previous}/>
                }
                return <h1>{item.tilte}</h1>
            })}
            
        </div>
    );

}

export default TabContent;