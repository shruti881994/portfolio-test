import { useState } from "react";

function Navbar(){
    const [menu, setOpenMenu] = useState(false);
    const [showmenu, setShowMenu] = useState(true);
    return(
        <>
        <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
            <span className="text-xl font-bold tracking-wide">Portfolio</span>
                <ul className={`${menu ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 
                md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
                    <a href="#about" className="text-white no-underline">
                    <li className="list-none text-md transisstion-all duration-300 p-1 md:p-0">
                        About
                    </li>
                    </a>
                    <a href="#experience" className="text-white no-underline">
                    <li className="list-none text-md transisstion-all duration-300 p-1 md:p-0">Experience</li>
                    </a>
                    <a href="#projects" className="text-white no-underline">
                    <li className="list-none text-md transisstion-all duration-300 p-1 md:p-0">Projects</li>
                    </a>
                    <a href="#contact" className="text-white no-underline">
                    <li className="list-none text-md transisstion-all duration-300 p-1 md:p-0">Contact</li>
                    </a>
                </ul>
                {
                    showmenu ? <span onClick={() => {setOpenMenu(!menu); setShowMenu(!showmenu);}} className="md:hidden absolute right-10 top-6 transition-all duration-300">Menu</span> : 
                    <span onClick={() => {setOpenMenu(!menu); setShowMenu(!showmenu);}} className="md:hidden absolute right-10 top-6 transition-all duration-300">Close menu</span>
                }
           

        </nav>
        </>
    )
}

export default Navbar;