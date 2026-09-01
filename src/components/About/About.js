
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import aboutImg from "../../assets/aboutimg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function About(){
    return(

        <div id="about" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className="md:h-80 w-[400px]" src={aboutImg} alt="about us banner"/>
                <ul>
                    <div className="flex gap-3 py-4">
                        <FontAwesomeIcon  icon={faArrowAltCircleRight} className="text-xl text-white-500 pt-5"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                            <p className="text-sm md:text-md leading-tight">I am a passionate frontend developer with experience in building responsive and user-friendly web applications.</p>
                        </span>
                   
                    </div>
                    <div className="flex gap-3 py-4">
                        <FontAwesomeIcon  icon={faArrowAltCircleRight} className="text-xl text-white-500 pt-5"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">ReactJS Developer</h1>
                            <p className="text-sm md:text-md leading-tight">I am a passionate frontend developer with experience in building responsive and user-friendly web applications.</p>
                        </span>
                   
                    </div>
                    <div className="flex gap-3 py-4">
                        <FontAwesomeIcon  icon={faArrowAltCircleRight} className="text-xl text-white-500 pt-5"/>
                        <span className="w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">UI Developer</h1>
                            <p className="text-sm md:text-md leading-tight">I am a passionate frontend developer with experience in building responsive and user-friendly web applications.</p>
                        </span>
                   
                    </div>
                </ul>
            </div>
            
            </div>

        </div>
    )
}

export default About;
