import React, {useState} from 'react';
export default function Exp1(){
    const [name,setName]=useState("Mahi");
    const [surname,setsurName]= useState('Prince');
    function handleNameChange(e){
        setName(e.target.value);
    }
    function handlesurNameChange(e){
        setsurName(e.target.value);
    }
    return(<div>
        <section>
            <label>Name:</label>
            <input value={name} onChange={handleNameChange} />
        </section>
        <section>
            <label>SurName:</label>
            <input value={surname} onChange={handlesurNameChange} />
        </section>
    </div>)
}