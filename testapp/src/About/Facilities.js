
import React, { Component } from "react";

import "../App.css";

class Facilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Facilities: [
                {
                    title: "Facilities",
                    text: "Smart classrooms",
                },
                {
                    title: "",
                    text: "Well-equipped Science laboratories with dedicated work stations",
                },
                {
                    title: "",
                    text: "Computer suites",
                },
                {
                    title: "",
                    text: "Excellent libraries",
                },
                {
                    title: "",
                    text: "State-of-the-art Auditorium",
                },
                {
                    title: "",
                    text: "Dedicated Art and Music rooms",
                },
                {
                    title: "",
                    text: "Language rooms",
                },
                {
                    title: "",
                    text: "Sports fields – Basketball Court, Cricket Field, etc.,",
                },
                {
                    title: "",
                    text: "Independent Indoor Game Rooms",
                },
                {
                    title: "",
                    text: "Well-maintained swimming pool with national trainers",
                },
                {
                    title: "",
                    text: "Well-maintained horse riding tacks with jockey trainers",
                },
                {
                    title: "",
                    text: "Well-equipped infirmary",
                },


            ],

        }




    }
    render() {
        const items = this.state.Facilities.map((data, index) => {
            return (<div>
                
                <p className="fa fa-chevron-right  pc-c1 " >
                    <span className="pc-c3">{data.text}</span>
                </p>
            </div>


            );
        });
        return (<div>


            {items}

        </div>);

    }
}

export default Facilities;