import React from "react";
import avtarImg from "../../assets/aboutimg.jpg"
import TextChange from "../../TextChange";

function Home(){
    return(
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
            <div className="md:w-2/4 md:pt-10">
            <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
                <TextChange />
            </h1>
            <p className="text-sm md:text-2xl tracking-tight">Frontend Developer</p>
            <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
            hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                Contact Me
            </button>
            </div>
            <div className="w-2/5 flex w-100% justify-between items-start">
                <img src={avtarImg} className="w-[400px] h-auto" alt="home banner image" />
            </div>
        </div>
    )
}

export default Home;
