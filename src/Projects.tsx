import Footer from "./Footer";
import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
    return(
        <>
            <meta name="author" content="Alex Ryan"/>
            <meta name="keywords" content="React, TypeScript, TailwindCSS, html" />
            <title>Alex Ryan Portfolio</title>
            <link rel="icon" type="image/x-icon" href="./src/assets/favicon.ico"></link>
            <div className="mb-30">
                <NavBar />
                <h1 className="text-[48px] font-bold font-mono text-center my-25">My <span className="text-accent">Projects</span></h1>
                <ProjectCard title="Dijkstra Graph Web App" desc="An implementation of Dijkstra's Shortest Path algorithm using Java. Hosted on a web app written with JavaScript that interacts with the Java backend" img="dijkstra.png" index={0} skills1="Java" skills2="JavaScript" skills3="Web Servers"/>
                <ProjectCard title="Riot API to MYSql Server Script" desc="Uses Python and SQLAlchemy to query the Riot Games API to collect match data from all players in challenger automatically. Records stats such as all champions, gold earned by each player, and objectives taken" img="sqlDatabase.png" index={1} skills1="Python" skills2="SQL" skills3="SQLAlchemy"/>
                <ProjectCard title="Dijkstra Graph Web App" desc="placeholder" img="dijkstra.png" index={2} skills1="Java" skills2="JavaScript" skills3="Web Servers"/>
                <ProjectCard title="Dijkstra Graph Web App" desc="placeholder" img="dijkstra.png" index={3} skills1="Java" skills2="JavaScript" skills3="Web Servers"/>
            </div>
            <Footer isBottom={false}/>
        </>
    );
}

export default Projects;