import { useContext } from "react";
import { url } from "../../utils/CloudinaryService";
import songContext from "../../contexts/songContext";

const SingleSongCard =({info,playSound})=>
{
    const {currentsong,setCurrentSong} = useContext(songContext);
    return (
        
    <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-md" onClick={()=>{setCurrentSong(info)}}>
        <div className="w-16 h-16 bg-center" style={{ backgroundImage: `url("${info.thumbnail}")`,backgroundSize:'4rem'}}></div>
        <div className="flex  w-full">
            
        <div className="px-3 flex justify-center flex-col pl-4 w-5/6">
            <div className="font-semibold text-white hover:underline cursor-pointer">{info.name}</div>
            <div className="text-xs text-gray-400 hover:underline cursor-pointer">{info.artist.firstName + " " + info.artist.lastName}</div>
        </div>
        <div className="w-1/6 flex items-center justify-center text-gray-400">
            <div className="text-white items-center">3:44</div>
        </div>

    </div>
    </div>
    );
};

export default SingleSongCard;