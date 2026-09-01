import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(){
    return(
        <div id="contact" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
            <div>
                <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
                <h3 className="text-sm md:text-2xl font-normal">Feel Free to reach out!</h3>
            </div>
            <ul className="text-sm md:text-xl">
                <li className="text-xl list-none"><FontAwesomeIcon  icon={faLinkedin} 
                className="text-xl text-white-500 pt-5"/>
                linkedin.com/shru
                </li>
                <li className="text-xl list-none"><FontAwesomeIcon  icon={faWhatsapp} 
                className="text-xl text-white-500 pt-5"/>
                +1234567890
                </li>
                <li className="text-xl list-none"><FontAwesomeIcon  icon={faFacebook} 
                className="text-xl text-white-500 pt-5"/>
                facebook.com/shru
                </li>
            </ul>
        </div>
    )
}
export default Footer;
