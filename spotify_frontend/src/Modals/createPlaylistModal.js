import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const CreatePlaylistModal = ({closeModal}) => {
    const [playlistName , setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    // console.log(playlistName);
    // console.log(playlistThumbnail);

    const createPlaylist = async () =>{
       const response = await makeAuthenticatedPOSTRequest("/playlist/create",{name:playlistName,thumbnail:playlistThumbnail,songs:[]});
    //    console.log(response);
    if(response._id)
    {
        closeModal();
    }
        

    };




    return (
    <div className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center " onClick={closeModal}>
        <div className=" w-1/2 p-6 px-8 py-8 z-10 rounded-md bg-opacity-0 " style={{ backgroundColor: "#454545" }} onClick={(e)=>{
            e.stopPropagation();
        }}>
            <div className="text-5xl py-5 font-semibold"><span className="text-7xl">#</span>Create Playlist</div>
            <div className="space-y-3 flex-col justify-center items-center">
                <TextInput 
                label={"Name of Playlist"}
                labelClassName={"text-white"}
                placeholder={"Enter Playlist Name"}
                value={playlistName}
                setValue={setPlaylistName}/>

                <TextInput
                label={"Thumbnail"}
                labelClassName={"text-white"}
                placeholder={"Thumbnail Image Link"}
                value={playlistThumbnail}
                setValue={setPlaylistThumbnail}/>
                <div className="bg-white relative left-56 top-2 w-1/3 rounded-md flex text-center justify-center p-4 font-semibold hover:bg-spotify-green hover: cursor-pointer" onClick={createPlaylist}> Create</div>
            </div>
        </div>
    </div>
    );

    }



export default CreatePlaylistModal;