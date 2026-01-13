
import { useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useEffect } from "react";



const AddToPlaylistModal =({closeModal,addSongToPlaylist}) =>{
    const [myPlaylist,setMyPlaylist] = useState([]);
    useEffect(()=>
    {
        const getData = async ()=>{
            const response = await makeAuthenticatedGETRequest("/playlist/get/me");
            setMyPlaylist(response.data);
        };
        getData();
    },[]);

    {
        return (
            <div className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center " onClick={closeModal}>
            <div className=" w-1/2 p-6 px-8 py-8 z-10 rounded-md bg-opacity-0 " style={{ backgroundColor: "#454545" }} onClick={(e)=>{
                e.stopPropagation();
            }}>
                <div className="text-5xl py-5 font-semibold"><span className="text-7xl">#</span>Select Playlist</div>
                <div className="space-y-3 flex-col justify-center items-center">
                  {myPlaylist.map((item)=>{
                    return <PlaylsitListComponent info={item} addSongToPlaylist={addSongToPlaylist}/>;
                  })}
                </div>
            </div>
        </div>

        );
    };
};

const PlaylsitListComponent =({info,addSongToPlaylist}) =>{
    return <div className=" bg-navbar-black flex space-x-3 hover:bg-gray-400 hover:bg-opacity-40 cursor-pointer" onClick={()=>{
        addSongToPlaylist(info._id)}}>
        <div>
            <img src={info.thumbnail} className="h-20 w-20 p-1 rounded-md"/>
        </div>
        <div className="text-white font-semibold pt-3">
            {info.name}
        </div>
    </div>
};


export default AddToPlaylistModal;