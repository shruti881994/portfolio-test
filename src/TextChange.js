import { useState, useEffect } from "react";
const text = [ "Hi, I am Shruti", "I am a React Developer", "Welcome to my portfolio"];
function TextChange(){
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
            if (endvalue >= text[index].length)
                setIsForward(false);
            }
            if (endvalue <= 0){
                setIsForward(true);
               setIndex((prev) => (prev + 1) % text.length)
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
