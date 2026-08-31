import ProjectCard from "./ProjectCard";

function Projects(){
    return(
        <div id="projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5">
            <ProjectCard title="Blogging App" mainContent="This is Blogging website created in Reactjs"/>
            <ProjectCard title="Education App" mainContent="This is Education website created in Reactjs"/>
            <ProjectCard title="Portfolio App" mainContent="This is Portfolio website created in Reactjs"/>
           
        </div>
        </div>
    )
}
export default Projects;