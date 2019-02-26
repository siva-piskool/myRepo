
import React, { Component } from "react";

import "../App.css";

class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                title: "Facilities",
                description: "",
                collapseTarget: "collapseOne",
                collapseTargetId: "#collapseOne",
                des1: "Smart classrooms",
                des2: "Well-equipped Science laboratories with dedicated work stations",
                des3: "Computer suites",
                des4: "Excellent libraries",
                des5: "State-of-the-art Auditorium",
                des6: "Dedicated Art and Music rooms",
                des7: "Language rooms",
                des8: "Sports fields – Basketball Court, Cricket Field, etc.,",
                des9: "Independent Indoor Game Rooms",
                des10: "Well-maintained swimming pool with national trainers",
                des11: "Well-maintained horse riding tacks with jockey trainers",
                des12:"Well-maintained swimming pool with national trainers",
                des13:"Well-maintained horse riding tacks with jockey trainers",
                des14:"Well-equipped infirmary",
                class:"fa fa-chevron-right  pc-c3 ",
                class1:"pc-c1"

            },
            {
                title: "What We Do",
                description: "",
                collapseTarget: "collapseTwo",
                collapseTargetId: "#collapseTwo",
                des1: "We develop a passion for learning",
                des2: "Helping each of our students fulfill the potential",
                des3: "Providing students scrupulous academics",
                des4: "We create light through knowledge, students will find the way",
                des5: "Providing safe and educational environment",
                des6: "We provide what students will like!",
                class:"fa fa-chevron-right  pc-c1   ",
                class1:"pc-c3",

            },
            
            
        ]
    }
    render() {
        const items = this.state.map((data, index) => {
            return (
                <div className="dummy">
                    <div className="" id={data.heading}>
                        <h5 className="mb-0">
                        {data.title}
                    </h5>
                    </div>
                    <div className=" pc-bg1 col-sm-6">
                        <p className={`${data.class}`}>
                        <span className={`${data.class1}`}>
                        {data.des1} {data.des2}
                        </span> <br/>
                        <span className={`${data.class1}`}>
                         {data.des2}
                        </span>
                        </p><br/>
                        
                        
                        </div>
                       
                    </div>
                
            );
        });
        return (<div>
            <div className="Data">
                
                    {items}
                
            </div>

        </div>);

    }
}

export default Practice;