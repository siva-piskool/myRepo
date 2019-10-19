import * as React from 'react';
const Card:React.FC=()=>{
    return(<div className="container pc-bg1">
        <div className="card-deck">
        <div className="pc-vmv pc-vision">
        <div className="mb-2">
        <img src={require('../../../../images/i-vision.png')} alt=""/>
        </div>
        <h4 className="card-title">Vision</h4>
        <p className="card-body">To be a model of excellence for solving complex educational problems.</p>
    </div>
    <div className="pc-vmv pc-mission">
        <div className="mb-2">
        <img src={require('../../../../images/i-mission.png')} alt=""/>
        </div>
        <h4 className="card-title">Mission</h4>
        <p className="card-body">Our responsibility is to prepare every student for success in college, career, and their life.</p>
    </div>
    <div className="pc-vmv pc-values">
        <div className="mb-2">
        <img src={require('../../../../images/i-values.png')} alt=""/>
        </div>
        <h4 className="card-title">Values</h4>
        <p className="card-body">We are dedicated to helping you achieve your goals by flexible programs.</p>
    </div>
    </div>
    <hr />
    <div className="well text-center card">
    <div className="card-body">Preparing students for successful future!</div>
    </div>
    <hr />
    <br />
    </div>)
}
export default Card;