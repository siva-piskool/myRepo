
import React, { Component } from "react";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                title: "News & Updates",
                description: "nothing",
                collapseTarget: "collapseOne",
                collapseTargetId: "#collapseOne",
                des1: "School Inauguration on 1",
                des2: "st",
                des3: "June, 2017 at 4.44PM",
                des4: "Pride International School, looking your participation with your kids in school inauguration celebrations, all are welcome.",
                des5: "Guest of Honors",
                des6: "Sri Amanchi Krishna Mohan",
                des7: "Dr. Yandamoori Veerendranath",
                des8: "Famous Telugu Novelist, Personality Development Trainer",
                des9: "Dr. K. Prem Kajal",
                des10: "Deputy Superintendent of Police (DSP), Chirala",
                des11: " District Educational Officer (DEO), Prakasam District",

            },
            {
                title: "Student & Parent talk",
                description: "Will update this column shortly...",
                collapseTarget: "collapseTwo",
                collapseTargetId: "#collapseTwo",

            },
            {
                title: "Events",
                description: "All events will update on 1st June, 2017 before academic year starts",
                collapseTarget: "collapseThree",
                collapseTargetId: "#collapseThree",

            }
        ]
    }
    render() {
        const items = this.state.map((data, index) => {
            return (
                <div className="card pc-panel-heading ">
                    <div className="card-header" id={data.heading}>
                        <h5 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse"
                                data-target={data.collapseTargetId} aria-expanded="true"
                                aria-controls={data.collapseTarget}>
                                <h4>
                                    {data.title}
                                </h4>
                            </button>
                        </h5>
                    </div>

                    <div id={data.collapseTarget} className="collapse" aria-labelledby={data.heading}
                        data-parent="#accordionExample">
                        <div className="card-body ">
                            <h1>{data.des1}<sup>{data.des2}</sup>{data.des3}</h1><br /><h2>{data.des4}</h2><br /><h1>{data.des5}</h1><br /><h2><b>{data.des6}</b><br /><b>{data.des7}</b><br />{data.des8}<br /><b>{data.des9}</b><br />{data.des10}<br /><br />{data.des11}</h2>
                            {data.description}
                        </div>
                    </div>
                </div >
            );
        });
        return (<div>
            <div className="App">
                <div className="accordion" id="accordionExample">
                    {items}
                </div>
            </div>

        </div >);

    }
}

export default App;