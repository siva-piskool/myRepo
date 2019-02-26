
import React, { Component } from "react";

import "../App.css";

class Data2 extends Component {
    constructor(props) {
        super(props);
        this.state = [

            {
                title: "What We Do",
                description: "",
                collapseTarget: "collapseTwo",
                collapseTargetId: "#collapseTwo",
                desc1: "We develop a passion for learning",
                desc2: "Helping each of our students fulfill the potential",
                desc3: "Providing students scrupulous academics",
                desc4: "We create light through knowledge, students will find the way",
                desc5: "Providing safe and educational environment",
                desc6: "We provide what students will like!",
                class2:"fa fa-chevron-right  pc-c1   ",
                class3:"pc-c3",

            },
            
        ]
    }
    render() {
        const items = this.state.map((data, index) => {
            return (
                <div >
                    <div id={data.heading}>
                        <h5 className="mb-0">
                            
                                    {data.title}
                               
                        </h5>
                    </div>
                 <div className=" pc-bg1">
                 <p className={`${data.class2}`}><span className={`${data.class3}`}>{data.desc1}</span></p><br/><p className={`${data.class2}`}><span className={`${data.class3}`}>{data.desc2}</span></p><br/><p className={`${data.class2}`}><span className={`${data.class3}`}>{data.desc3}</span></p><br/><p className={`${data.class2}`}><span className={`${data.class3}`}>{data.desc4}</span></p><br/><p className={`${data.class2}`}><span className={`${data.class3}`}>{data.desc5}</span></p><br/><p className={`${data.class2}`}><span className={`${data.class3}`}>{data.desc6}</span></p><br/>
                                   {data.description}
                        </div>
                    </div>
                
            );
        });
        return (<div>
            <div className="Data2">
                <div className="accordion" id="accordionExample">
                    {items}
                </div>
            </div>

        </div>);

    }
}

export default Data2;