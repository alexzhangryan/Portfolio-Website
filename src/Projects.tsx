import Footer from "./Footer";
import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
    return(
        <>
            <div className="mb-30">
                <NavBar />
                <h1 className="title">My <span className="text-accent">Projects</span></h1>
                <ProjectCard title="Dijkstra Graph Web App" desc="An implementation of Dijkstra's Shortest Path algorithm using Java. Hosted on a web app written with JavaScript that interacts with the Java backend" img="dijkstra.png" index={0} skills1="Java" skills2="JavaScript" skills3="Web Servers" link="https://github.com/alexzhangryan/DijkstraGraph"/>
                <ProjectCard title="Riot API to MYSql Server Script" desc="Uses Python and SQLAlchemy to query the Riot Games API to collect match data from all players in challenger automatically. Records stats such as all champions, gold earned by each player, and objectives taken" img="sqlDatabase.png" index={1} skills1="Python" skills2="SQL" skills3="SQLAlchemy" link="https://github.com/alexzhangryan/RiotAPI-to-mySQL-Server"/>
                <ProjectCard title="Image Classifer With Pytorch" desc="A sample image classifer writen in Python using the Pytorch library. Trained on a dataset consisting of playing cards. Will be repurposed in future projects to keep the framework." img="imageClassifer.png" index={2} skills1="Python" skills2="Pytorch" skills3="Machine Learning" link="https://github.com/alexzhangryan/ImageClassifier"/>
                <ProjectCard title="This Website!" desc="A portfolio website for myself, Alex Ryan, written in TypeScript. Utilizes the React framework as well as TailwindCSS." img="website.png" index={3} skills1="TypeScript" skills2="React" skills3="TailwindCSS" link="https://github.com/alexzhangryan/Portfolio-Website-with-React"/>
            </div>
            <Footer isBottom={false}/>
        </>
    );
}

export default Projects;