import { useState, useEffect } from "react";

function TextChange(){
    const text = [ "Hi, I am Shruti", "I am a React Developer", "Welcome to my portfolio" ];
    const [currenttext, setCurrenttext] = useState("");
    const [endvalue, setEndvalue] = useState(true);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setCurrenttext(text[index].substring(0,endvalue));
            if(isForward){
                setEndvalue((prev)=>prev+1)
            }
            else{
                setEndvalue((prev)=>prev-1)
            }
            if(endvalue > text[index].length+10){
                setIsForward(false);
            }
            if(endvalue < 2.1){
                setIsForward(true);
                setIndex((prev)=>prev&text.length)
            }
        }, 50);
        return ()=>clearInterval(intervalID)
    },[endvalue, isForward, index])
    return(
        <div className="transistion ease duration-300">
            {currenttext}
        </div>
    )
}
export default TextChange;
