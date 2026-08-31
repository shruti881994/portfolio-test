import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faBootstrap,
  faJs,
  faFacebook,
  faAmazon,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
function Experience(){
    return(
       <div id="experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
        <div className="flex flex-wrap items-center justify-around">
            <div className="flex flex-wrap w-[50%] md:w-2/5 gap-8 md:p-12 py-10">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">
                <FontAwesomeIcon icon={faHtml5} className="text-white" />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">
                <FontAwesomeIcon icon={faCss3Alt} className="text-white" />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">
                <FontAwesomeIcon icon={faReact} className="text-white" />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">
                <FontAwesomeIcon icon={faBootstrap} className="text-white" />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">
                <FontAwesomeIcon icon={faJs} className="text-white" />
            </span>
            </div>
            <div className="flex flex-col w-[50%] md:w-2/5 gap-2">
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <FontAwesomeIcon icon={faFacebook} size={50} className="text-white text-4xl" />
                <span className="text-white">
                    <h2 className="leading-tight">Frontend Developer</h2>
                    <p className="text-sm leading-tight font-thin">Worked on various frontend projects using React and other technologies.</p>
                <ul className="text-sm p-2">
                    <li> work as Developer on various frontend projects.</li>
                    <li> collaborated with designers and backend developers to create seamless user experiences.</li>
                </ul>
                </span>
            </div>
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <FontAwesomeIcon icon={faGoogle} size={50} className="text-white text-4xl" />
                <span className="text-white">
                    <h2 className="leading-tight">Frontend Developer</h2>
                    <p className="text-sm leading-tight font-thin">Worked on various frontend projects using React and other technologies.</p>
                <ul className="text-sm p-2">
                    <li> work as Developer on various frontend projects.</li>
                    <li> collaborated with designers and backend developers to create seamless user experiences.</li>
                </ul>
                </span>
            </div>
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <FontAwesomeIcon icon={faAmazon} size={50} className="text-white text-4xl" />
                <span className="text-white">
                    <h2 className="leading-tight">Frontend Developer</h2>
                    <p className="text-sm leading-tight font-thin">Worked on various frontend projects using React and other technologies.</p>
                <ul className="text-sm p-2">
                    <li> work as Developer on various frontend projects.</li>
                    <li> collaborated with designers and backend developers to create seamless user experiences.</li>
                </ul>
                </span>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Experience;