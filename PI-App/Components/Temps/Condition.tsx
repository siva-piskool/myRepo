import * as React from "react";

const Condition: React.FC = () => {
    const [texts, setText] = React.useState([
        { txt: "Heading" },
        { txt: "paragraph" },
        { txt: "text" }
    ]);
    return (
        <div>
            {texts.map((msg, index) => {
                    return (
                        <React.Fragment>
                            {(index%2 === 0) ? (<h1>{msg.txt}</h1>) : null}
                            {(index%2== 1) ? (<p>{msg.txt}</p>) : null}
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
};

export default Condition;
