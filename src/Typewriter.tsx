import {useState, useEffect} from 'react';

export default function Typewriter(){

    const [name, setName] = useState("Rtan");


    const updateName = () =>{
        setName("Ryan");
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            updateName();
        }, 3500);
        return () => clearTimeout(timer);
    }, [])

    return(
        <div className="flex justify-center mt-40 mb-25">
                <h1 className="name">Hello! I'm <span className="text-accent">Alex {name}</span></h1>
            </div>
    );
}