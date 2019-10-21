import React, {useState,useEffect} from 'react';
export default function Exp1(){
    const [name,setName]=useState("Mahi");
    const [surname,setsurName]= useState('Prince');
    useEffect(()=>{
        document.title= name + " "+surname;
    })
    const [width, setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const handleResize =()=>setWidth(window.innerWidth);
        window.addEventListener("resize",handleResize);
        return()=>{}

        }
    )
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
        <section>
            <label>width:</label>
           <p>{width}</p>
        </section>
    </div>)
}