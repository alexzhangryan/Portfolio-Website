
type ProjectCardProps = {
        title: string;
        desc: string;
        img: string;
        index: number;
        skills1: string;
        skills2: string;
        skills3: string;
        link: string;
    };

export default function ProjectCard(props: ProjectCardProps){

    return(
        <a href={`${props.link}`} className="block">
            <div className="projectCard" style={{ animationDelay: `${props.index / 6}s`}}>
                <img className="h-50 rounded-l-4xl"src={`./src/assets/${props.img}`} loading="eager"></img>
                <div className="grid grid-rows-4 col-span-3 px-2">
                    <h1 className="text-[24px] font-bold">{props.title}</h1>
                    <p className="text-[16px] row-span-2">{props.desc}</p>
                    <ul className="flex items-center">
                        <li className="skillBubble">{props.skills1}</li>
                        <li className="skillBubble">{props.skills2}</li>
                        <li className="skillBubble">{props.skills3}</li>
                    </ul>
                </div>
            </div>
        </a>
    )
}