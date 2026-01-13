import { createContext } from "react";

const songContext = createContext({
    currentsong:null,
    setCurrentSong:(currentsong)=>{},
    soundPlayed:null,
    setSoundPlayed: ()=>{},
	isPaused:null,
    setisPaused: ()=>{},
});

export default songContext;