import Card from "./Card/Card";
import NavBar from "./NavBar";

export const Skills = () => {
    return(
        <>
            <div>
                <NavBar />
                <Card title = "Java" text = "Proficient in Java" src = "java.png"/>
                <Card title = "Python" text = "Proficient in Python" src = "python.png"/>
                <Card title = "TypeScript" text = "Proficient in TypeScript" src = "ts.png"/>
            </div>
        </>
    );
}

export default Skills;