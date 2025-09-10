import Footer from "./Footer";
import NavBar from "./NavBar";

export const Experience = () => {
    return(
        <>  
            <div>
                <NavBar />
                <h1 className="title">Work <span className="text-accent">Experience</span></h1>
                <div className="flex flex-col w-2/3 mx-auto my-10">
                <div className="workTitle">
                    <h1 className="font-bold">Artesian Builds</h1>
                    <h1 className="text-right">Web Developer, Production Assistant, Build Technician</h1>
                </div>
                    <p className="italic">May 2021 - June 2022</p>
                    <ul>
                        <li>
                            <div className="flex animate-fadeInRight opacity-0" style={{ animationDelay: "0s"}}>
                                <p className="mr-5 text-[24px]">&#62;</p>
                                <p className="text-[24px]">A PC building company with a livestream on Twitch.tv for commissions made by popular streamers.</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex animate-fadeInRight opacity-0" style={{ animationDelay: "1s"}}>
                                <p className="mr-5 text-[24px]">&#62;</p>
                                <p className="text-[24px]">Worked on the back-end production of and appeared on livestreams and video shoots as an assistant computer technician.</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex animate-fadeInRight opacity-0" style={{ animationDelay: "2s"}}>
                                <p className="mr-5 text-[24px]">&#62;</p>
                                <p className="text-[24px]">Assisted in restructuring our website via wordpress and other web development tools. </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex animate-fadeInRight opacity-0" style={{ animationDelay: "3s"}}>
                                <p className="mr-5 text-[24px]">&#62;</p> 
                                <p className="text-[24px]">Assisted in managing our new division for custom keyboards where I processed orders, communicated with customers, and built their orders by hand.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col w-2/3 mx-auto">
                <div className="workTitle">
                    <h1 className="font-bold">UW Taekwondo Club</h1>
                    <h1 className="text-right">Treasurer</h1>
                </div>
                    <p className="italic">June 2024 - May 2025</p>
                    <ul>
                        <li>
                            <div className="flex animate-fadeInRight opacity-0" style={{ animationDelay: "4s"}}>
                                <p className="mr-5 text-[24px]">&#62;</p>
                                <p className="text-[24px]">Managed yearly budgets of the UW Taekwondo Club</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex animate-fadeInRight opacity-0" style={{ animationDelay: "5s"}}>
                                <p className="mr-5 text-[24px]">&#62;</p>
                                <p className="text-[24px]">Worked directly with the university's sports club funding program to purchase gear, compensate coaches, and pay for tournaments.</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex animate-fadeInRight opacity-0" style={{ animationDelay: "6s"}}>
                                <p className="mr-5 text-[24px]">&#62;</p>
                                <p className="text-[24px]">Fascilitated the club's travel to California for 2024 Nationals</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <Footer isBottom={true}/>
            </div>
        </>
    );
}

export default Experience;