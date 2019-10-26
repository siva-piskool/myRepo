import React from 'react';
import './About.css';
import{Row} from 'react-bootstrap';
import Part1 from './Part1';
import Part2 from './Part2';

export default function About(){
    return(<div className="container pc-bg1 pb-1">
        <h1>About</h1>
        <p className="pc-p1">Welcome to <span className="pc-c2">Pride International School</span>
            , Chirala. A unique school with an ideology to prepare our students
            to meet the demands of an increasingly technological world, indeed
            if it is to be effective at all, it must integrate technology into
            the CBSE academic curriculum. Our keen focus on our students,
            commitment to quality and dedication to continuous improvement
            empowers our students to handle whatever life may throw at them. Our
            greatest strength lies in our commitment to community. Crafting
            together of a shared <i className="pc-c6">vision</i> –
            <strong className="pc-c4">
              “To be a model of excellence for solving complex educational
              problems”
            </strong></p>
            <Row>
               <Part1/> 
               <Part2/>
            </Row>
    </div>)
}