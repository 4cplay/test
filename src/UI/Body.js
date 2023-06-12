import {Fragment, useEffect, useRef, useState} from "react";
import HotTag from "../components/HotTag";
import Tag from "../components/Tag";
import Card from "./Card";
import TagDash from "./TagDash";
import React from "react";
const Body = () =>{
    const [show,setShow] = useState(true);
    const [uuid,setUUID] = useState();
    const [link,setLink] = useState();
    const [dataList, setDataList] = useState([]);
    // const [dataList, setDataList] = useState([{uuid:12,name:"Oracle",date:"2023/06/23",skill:"java c++"}]);
    const tagRef = useRef();
    useEffect(()=>{
    fetchData();
    },[]);

    const fetchData = async () =>{
        // const response = await fetch("http://192.168.0.203:8080/");
        // const response = await fetch("http://18.144.65.203:8080/");
        const response = await fetch("localhost:8080/");
   
        const data = await response.json();
        console.log(data[0])
        setDataList(data);
    };
    const tagClickHandler = (link,uuid) =>{
        setUUID(uuid);
        setLink(link)
        document.getElementById("controlDiv").style. visibility ="hidden";
        document.getElementById("p").style.display ="block";
        // setTimeout(() => {
        //     document.getElementById("controlDiv").style.visibility = "visible";
        //     document.getElementById("p").style.display ="none";
        //   }, 4000);
       
    }
    const backToMenu = () =>{
        document.getElementById("controlDiv").style.visibility = "visible";
        document.getElementById("p").style.display ="none";
    }

    return(
        <Fragment>
        <div id="controlDiv">
            {/*<button onClick={fetchData}></button>*/}
        {/* <HotTag /> */}

            {dataList.length === 0 ? (
                <p>Loading...</p>
            ) : (
                dataList.map((item) => (
                    <Tag
                        key={item.uuid}
                        name={item.name}
                        uuid={item.uuid}
                        description={item.description}
                        link={item.link}
                        date={item.date}
                        skill={item.skill}
                        click={()=>tagClickHandler(item.link,item.uuid)}
                    />
                ))
            )}


        </div>
        <div id="p" style={{
            display:"none",
            position:"fixed",
            top:"0",
            left:"0",
            height:"100%",
            width:"100%",
            // border:"2px solid red",
            background:"rgb(40, 41, 44)",
            zIndex:"7",
        }}>
            <TagDash back={backToMenu} link={link} uuid={uuid} />
        </div>
        
        </Fragment>
    )
}
export default Body;