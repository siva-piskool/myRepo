
import React, { Component } from "react";

import "../App.css";
import "./Home.css"

class ImgGallery extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                title: "Vision",
                description: "To be a model of excellence for solving complex educational problems.",
                collapseTarget: "collapseOne",
                collapseTargetId: "#collapseOne",
                image: "vision",
                cls: "vision",

            },
            {
                title: "Mission",
                description: "Our responsibility is to prepare every student for success in college, career, and their life.",
                collapseTarget: "collapseTwo",
                collapseTargetId: "#collapseTwo",
                image: "mission",
                cls: "mission",
            },
            {
                title: "Values",
                description: "We are dedicated to helping you achieve your goals by flexible programs.",
                collapseTarget: "collapseThree",
                collapseTargetId: "#collapseThree",
                image: "values",
                cls: "values",

            }
        ]
    }
    render() {
        const items = this.state.map((data, index) => {
            return (
                <div className={`col-sm-4 pc-vmv pc-${data.cls}`}>
                 <span>
                     <img src={require(`../images/i-${data.image}.png`)} alt="" width='110' height='110'/>
                 </span><br/>
                 <h4>{data.title}</h4>
                 <p>{data.description}</p>
                </div>
            );
        });
        return (
            <div class="row">
            {items}
            </div>
    );

    }
}

export default ImgGallery;