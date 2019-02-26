
import React, { Component } from "react";

import "../App.css";

class Data extends Component {
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
                class:"fa fa-chevron-right  pc-c3",
                class1:"pc-c1"

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
                    <div className=" pc-bg1">
                          <div> <p className={`${data.class}`}><span className={`${data.class1}`}>{data.des1}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des2}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des3}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des4}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des5}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des5}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des6}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des7}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des8}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des9}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des10}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des11}</span></p><br/><p className={`${data.class}`}><span className={`${data.class1}`}>{data.des14}</span></p></div>
                               
                                   {data.description}
                        </div>
                       
                    </div>
                
            );
        });
        return (<div>
            <div className="Data">
                <div className="accordion" id="accordionExample">
                    {items}
                </div>
            </div>

        </div>);

    }
}

export default Data;