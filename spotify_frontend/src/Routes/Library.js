import { useEffect, useState } from "react";
import Loggedincontainer from "../containers/Loggedincontainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { Navigate, useNavigate } from "react-router-dom";




const Library= () =>
{
    const [myPlaylist , setMyPlaylist] = useState([])
    useEffect(()=>
    {
        const getData = async ()=>{
            const response = await makeAuthenticatedGETRequest("/playlist/get/me");
            setMyPlaylist(response.data);
        };
        getData();
    },[]);



    return (
        <Loggedincontainer curactivescreen={"library"}>
            <div className="text-white text-2xl p-10 font-semibold">My PlayList</div>
            <div className="p-4 grid gap-4 grid-cols-5">
                {/* <Card title={"Title of Playlist"} description="" imgUrl={"https://www.jozigist.co.za/wp-content/uploads/2021/02/spotify.jpg"}/> */}
                {
                    myPlaylist.map(item=>{
                        return <Card key={JSON.stringify(item)} title={item.name} description="" imgUrl={item.thumbnail} playlistId={item._id}/>
                    })
                }
                
            </div>
        </Loggedincontainer>
    );
}
const Card = ({ title, description, imgUrl,playlistId }) => {
    const navigate = useNavigate();
	return (
		<div className="bg-black w-full opacity-70  h-80 p-4 rounded-lg cursor-pointer" onClick={() => {navigate("/playlist/"+playlistId)}}>
			<div>
				<img className="rounded-md" src={imgUrl} alt="lable" />
			</div>
			<div className="position relative top-6">
				<div className="text-white">{title}</div>
				<div className="text-gray-500 text-xs">{description}</div>
			</div>
		</div>
	);
};

export default Library;