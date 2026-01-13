import { Icon } from "@iconify/react";
import spotify_logo from "../Assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/iconText";
import TextwithHover from "../components/shared/TextwithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { Navigate, useNavigate } from "react-router-dom";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useEffect } from "react";
import {Howl, Howler} from 'howler';
import Loggedincontainer from "../containers/Loggedincontainer";




const MyMusic = () =>
{
		const [songdata,setSongData] = useState([]);
			useEffect(()=>
	{
		const getData = async()=>
		{
		const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
		console.log(response.data); 
		setSongData(response.data);
		}
		getData();

	}, []);

	return (
	<Loggedincontainer curactivescreen={"myMusic"}>
		<div className="p-6">
					<div className="text-white font-semibold text-xl p-2">My Songs</div>
					<div className="flex flex-col gap-y-3 overflow-auto">
						{songdata.map((item)=>
						{
							return <SingleSongCard info={item} playSound={()=>{}}/>
						})}
					</div>
				</div>

	</Loggedincontainer>
	)
}


export default MyMusic;
