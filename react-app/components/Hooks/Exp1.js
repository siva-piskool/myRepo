import React, {useState} from 'react';
export default function Exp1(){
    const [name,setName]=useState("Mahi");
    function handleNameChange(e){
        setName(e.target.value);
    }
    return(<div>
        <section>
            <input value={name} onChange={handleNameChange} />
        </section>
    </div>)
}