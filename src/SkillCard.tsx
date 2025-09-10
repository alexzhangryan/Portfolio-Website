import { useEffect, useState } from "react";

type SkillCardProps = {
        title: string;
        percent: number;
        img: string;
    };

export default function SkillCard(props: SkillCardProps){

    const[displayPercent, setDisplayPercent] = useState(0);

    useEffect(() => {
        let startValue = 0;
        const interval = 1800;
        const stepTime = Math.floor(interval / props.percent);
        
        const counter = setInterval(() => {
            startValue++;
            setDisplayPercent(startValue);

            if(startValue >= props.percent){
                clearInterval(counter)
            }
        }, stepTime);

        return() => clearInterval(counter);
    }, [props.percent]);

    return(
        <div className="skillCard">
            <div className="flex justify-center items-center h-25 px-2 mt-3">
                <img className="h-15"src={`./src/assets/${props.img}`} loading="eager"></img>
                <h1 className="text-[36px] pl-5">{props.title}</h1>
            </div>
            <div className="flex flex-col">
                <p className="py-2 px-6 self-end">{displayPercent}%</p>
                 <div className="self-center bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-9/10">
                    <div style={{ width: `${props.percent}%` }}>
                        <div className="bg-accent h-2.5 rounded-full animate-fillUp"/>
                    </div>
                </div>
            </div>
        </div>
    )
}