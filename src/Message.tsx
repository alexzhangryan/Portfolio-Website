import { NavLink } from "react-router-dom";
import Typewriter from "./Typewriter";
import Footer from "./Footer";

const Message = () => {
    return(
        <>  
            <Typewriter />
            <p className="text-center w-1/2 m-auto">Currently a student at The Univeristy of Wisconsin - Madison pursuing majors in Computer Science and Economics with a Mathematical Emphasis. I have experience in languages such as Python, Java, TypeScript, and SQL as well as libraries such as React, Pytorch, and SQLAlchemy.</p>
            <div className="grid grid-cols-4 gap-4 justify-center my-5 w-75 mx-auto">
                <a href="https://github.com/alexzhangryan"><img className = "linkImage" src="./src/assets/github.png"></img></a>
                <a href="https://www.linkedin.com/in/alex-ryan-807b22293/"><img className = "linkImage" src="./src/assets/linkedin.png"></img></a>
                <a href="mailto:alexzhangryan@gmail.com"><img className = "linkImage" src="./src/assets/gmail.jpg"></img></a>
                <a href="https://leetcode.com/u/genjigod/"><img className = "linkImage" src="./src/assets/leetcode.png"></img></a>
            </div>
            <div className="flex justify-center mt-20">
                <NavLink to="/projects" className="justify-center p-4 rounded-full bg-accent text-background hover:scale-110 transition-all duration-300">Check Out My Work!</NavLink>
            </div> 
            <div className="flex flex-cols-2 max-w-7xl mx-auto mt-25 mb-25">
                <div className="flex mx-5 flex-col">
                    <h1 className="text-left text-[48px] font-bold my-5">My <span className="text-accent">Journey</span></h1>
                    <p>I'm currently a junior at The University of Wisconsin - Madison with an expected graduation date of 2027. During my studies I've taken an interest to AI/ML and have been working on my own project such as building a neural network from scratch or working with Pytorch to create image classifiers. <br /><br />
                    Outside of class, I am a member of the UW Taekwondo club, where I was treasurer last year. During my time as treasurer I also got the opprotunity to participate in the National Collegiate Taekwondo Championship in Berkeley. I also enjoy playing games with friends, kpop, and fashion. <br /><br />
                    I'm also very interested in computer hardware and have an extensive collection of custom keyboards. From 2021-2022 I worked at Artesian Builds, a boutique PC integrator, where I was able to explore my love for computers and also build my web development skills. Around the same time I became obsessed with building my own custom keyboards where I patiently modified each individual switch to then solder them to a pcb.<br /><br />
                    I love working with large data-sets and trying to find optimal solutions to complex problems. Whether its coding or keyboards, I also love focusing on the details to make sure I have a perfect end product. 
                    </p>
                </div>
                <div className="mx-15 flex items-center pt-15">
                    <img className="border-4 border-accent rounded-lg hidden lg:block"src="./src/assets/selfie4.jpg" loading="eager"></img>
                </div>
            </div>
            <Footer isBottom={false}/>
        </>
    );
};

export default Message;