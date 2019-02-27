import React, { Component } from 'react';
import Facilities from './Facilities';
import Data2 from './Data2';
import './About.css';

class About extends Component {
  render() {
    return (<div>
      <div className="container len pc-bg1">
        <h1 className='pc-c1'>About</h1>
        <p className="pc-p1">Welcome to <span className="pc-c2">Pride International School</span>, Chirala.  A unique school with an ideology to prepare our students to meet the demands of an increasingly technological world, indeed if it is to be effective at all, it must integrate technology into the CBSE academic curriculum. Our keen focus on our students, commitment to quality and dedication to continuous improvement empowers our students to handle whatever life may throw at them. Our greatest strength lies in our commitment to community. Crafting together of a shared <i className="pc-c6">vision</i> – <strong className="pc-c4">“To be a model of excellence for solving complex educational problems”</strong></p>
        <div className="row">
          <div className='col-sm-6'>
            <h4>Facilities</h4>
            <Facilities />
          </div >
          <div className="col-sm-6">
            <h4>What We Do</h4>
            <Data2 />
          </div>
          <hr />
        </div>
      </div>
      </div>
    );
  }

}

export default About;
