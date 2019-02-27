
import React, { Component } from "react";

import "../App.css";

class Data2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Facilities: [
                {
                    text: "We develop a passion for learning",
                },
                {

                    text: "Helping each of our students fulfill the potential",
                },
                {

                    text: "Providing students scrupulous academics",
                },
                {

                    text: "We create light through knowledge, students will find the way",
                },
                {

                    text: "Providing safe and educational environment",
                },
                {

                    text: "Dedicated Art and Music rooms",
                },
                {

                    text: " We provide what students will like!",
                },
            ],

        }
    }
    render() {
        const items = this.state.Facilities.map((data, index) => {
            return (<div>
                <p className="fa fa-chevron-right  pc-c3 " >
                    <span className="pc-c1">{data.text}</span>
                </p>
            </div>
            );
        });
        return (<div>
            {items}
        </div>);
    }
}

export default Data2;