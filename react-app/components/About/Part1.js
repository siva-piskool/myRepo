import React,{useState,useEffect} from 'react';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './About'
export default function Part1(){
    const[facilities,setFacility]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/facilities')
        .then((response)=>response.json())
        .then((res)=>{
            setFacility(res)
        })
    })
    return(<div className="col-md-6">
      <h3 className="pc-c6"> Facilities</h3>
{facilities.map(data=>(
    <p>
    <FontAwesomeIcon icon={faAngleRight} className={data.title1} />
            <span className={data.title2}>{data.text} </span>
    </p>
))}
        
    </div>)
}