import * as React from 'react';
type CardProps={
    title:string,
    paragraph:string
}
const FunctionalComp:React.FC<CardProps>=({title,paragraph})=>{
    return(<div>
        <h1>{title}</h1>
        <p>{paragraph}</p>
    </div>)
}
export default FunctionalComp;