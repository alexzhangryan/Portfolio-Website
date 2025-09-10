
import Footer from "./Footer";
import NavBar from "./NavBar";
import SkillCard from "./SkillCard";

export const Skills = () => {
    return(
        <>  
            <div>
                <NavBar />
                <h1 className="title">Skills</h1>
                <h1 className="text-[36px] font-mono text-center my-5">Languages</h1>
                <div className="flex justify-center">
                    <div className="flex flex-cols-auto flex-rows-auto w-1/2 justify-center gap-7 flex-wrap">
                        <SkillCard title="Java" percent={98} img="java.png"/>
                        <SkillCard title="Python" percent={94} img="python.png"/>
                        <SkillCard title="TypeScript" percent={92} img="ts.png"/>
                        <SkillCard title="JavaScript" percent={92} img="js.png"/>
                        <SkillCard title="MySQL" percent={87} img="mysql.png"/>
                    </div>
                </div>
                <h1 className="text-[36px] font-mono text-center mt-10 mb-5">Libraries and Frameworks</h1>
                <div className="flex justify-center">
                    <div className="flex flex-cols-auto flex-rows-auto w-1/2 justify-center gap-5 flex-wrap">
                        <SkillCard title="React" percent={97} img="react.png"/>
                        <SkillCard title="TailwindCSS" percent={96} img="tailwind.png"/>
                        <SkillCard title="Pandas" percent={90} img="pandas.png"/>
                        <SkillCard title="NumPy" percent={95} img="numpy.png"/>
                        <SkillCard title="Pytorch" percent={87} img="pytorch.png"/>
                        <SkillCard title="SQL Alchemy" percent={94} img="sqlalchemy.png"/>
                        <SkillCard title="MatPlotLib" percent={98} img="matplotlib.png"/>
                    </div>
                </div>
                <h1 className="text-[36px] font-mono text-center mt-10 mb-5">Other</h1>
                <div className="flex justify-center">
                    <div className="flex flex-cols-auto flex-rows-auto w-1/2 justify-center gap-5 flex-wrap">
                        <SkillCard title="Linux" percent={99} img="linux.png"/>
                        <SkillCard title="NodeJS" percent={94} img="nodejs.png"/>
                        <SkillCard title="Bash" percent={98} img="bash.png"/>
                        <SkillCard title="Excel" percent={98} img="excel.png"/>
                        <SkillCard title="Wordpress" percent={95} img="wordpress.png"/>
                        <SkillCard title="Adobe Suite" percent={98} img="adobe.png"/>
                        <SkillCard title="League" percent={90} img="emerald.png"/>
                    </div>
                </div>
                <div className="my-20"></div>
                <Footer isBottom={false}/>
            </div>
        </>
    );
}

export default Skills;