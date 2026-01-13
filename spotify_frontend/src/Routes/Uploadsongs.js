import { Icon } from "@iconify/react";
import spotify_logo from "../Assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/iconText";
import TextwithHover from "../components/shared/TextwithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { Navigate, useNavigate } from "react-router-dom";
import Loggedincontainer from "../containers/Loggedincontainer";

const UploadSong = () => {
	// UseStates to save the data of new song
	const [name, setName] = useState("");
	const [thumbnail, setThumbnail] = useState("");
	const [playlistUrl, setPlaylistUrl] = useState("");
	const [uploadedSongFileName, setUploadedSongFileName] = useState();
	const navigate = useNavigate();
	// verification cloudinary service script which is in index.html is Active/Not
	// console.log(window);
	// console.log(window.cloudinary)

	const SubmitSong = async ()=>
	{
		// console.log(name);
		// console.log(thumbnail);
		// console.log(playlistUrl);
		const data = {name,thumbnail,track :playlistUrl};
		const response = await makeAuthenticatedPOSTRequest("/song/create",data);
		if(response.err)
		{
			alert("Could not create song");
			return;
		}
		alert("Success");
		navigate("/home");

	}



	return (
		// <div className="h-full w-full flex ">
		// 	<div className="h-full w-1/5 bg-black justify-between">
		// 		<div className="logodiv p-5 ">
		// 			{/* this div for logo */}
		// 			<img src={spotify_logo} alt="spotify_logo" width={150} />
		// 		</div>

		// 		<div>
		// 			<div className="py-5">
		// 				<IconText
		// 					iconName={"material-symbols:home"}
		// 					displayText={"Home"}
		// 					active
		// 				/>
		// 				<IconText
		// 					iconName={"iconamoon:search-bold"}
		// 					displayText={"Search"}
		// 				/>
		// 				<IconText
		// 					iconName={"icomoon-free:books"}
		// 					displayText={"Your Library"}
		// 				/>
		// 				<IconText
		// 					iconName={"mdi:account-music"}
		// 					displayText={"My Songs"}
		// 				/>
		// 			</div>
		// 			<div className="pt-5">
		// 				<IconText
		// 					iconName={"material-symbols:add-box"}
		// 					displayText={"Create Playlist"}
		// 				/>
		// 				<IconText
		// 					iconName={"fluent-emoji:heart-decoration"}
		// 					displayText={"Liked Songs  "}
		// 				/>
		// 			</div>

		// 			<div className="pt-10">
		// 				<div className="pt-20 pl-5 text-gray-400 flex flex-row gap-3 text-xs">
		// 					<h3
		// 						className={`hover:text-white
        //                 cursor-pointer`}
		// 					>
		// 						Legal
		// 					</h3>
		// 					<h3
		// 						className={`hover:text-white
        //                 cursor-pointer`}
		// 					>
		// 						Privacy Center
		// 					</h3>
		// 					<h3
		// 						className={`hover:text-white
        //                 cursor-pointer`}
		// 					>
		// 						Privacy Policy
		// 					</h3>
		// 				</div>
		// 				<div className="pt-4 pl-5 text-gray-400 flex flex-row gap-3 text-xs">
		// 					<h3
		// 						className={`hover:text-white
        //                 cursor-pointer`}
		// 					>
		// 						Cookies
		// 					</h3>
		// 					<h3
		// 						className={`hover:text-white
        //                 cursor-pointer`}
		// 					>
		// 						About Ads
		// 					</h3>
		// 				</div>
		// 				<div className="pt-4 pl-5 text-gray-400 flex flex-row gap-3 text-xs">
		// 					<h3
		// 						className={`hover:text-white
        //                 cursor-pointer`}
		// 					>
		// 						Cookies
		// 					</h3>
		// 				</div>
		// 			</div>
		// 		</div>

		// 		<div className="pt-10 p-20 position relative right-20 top-20 ml-2 ">
		// 			<div className="border-solid border-2 rounded-full w-21 pr-2  border-gray-00 flex flex-row gap-1 items-center justify-center  cursor-pointer  hover:border-white text-white">
		// 				<Icon
		// 					icon={"ci:globe"}
		// 					className="text-gray-400 text-3xl pl-1 hover:text-white  "
		// 				/>
		// 				<h1 className="text-gray-400 font-semibold hover:text-white text-3sm pt-0    font-poppins">
		// 					English
		// 				</h1>
		// 			</div>
		// 		</div>

		// 		{/*  This div for left panel */}
		// 	</div>

		// 	<div className="h-full bg-navbar-black w-4/5 overflow-auto">
		// 		<div className="navbar bg-black w-full h-1/10 bg-opacity-90 flex flex-row gap-2 items-center justify-end">
		// 			<div className="flex w-1/2 h-full">
		// 				<div className="flex w-3/5 items-center justify-around">
		// 					<TextwithHover displayText={"Premium"} />
		// 					<TextwithHover displayText={"Support"} />
		// 					<TextwithHover displayText={"Download"} />
		// 					<div className="border h-1/2 border-white"></div>
		// 				</div>
		// 				<div className="flex w-2/5 items-center justify-around ">
		// 					<TextwithHover displayText={"Sign up"} />
		// 					<div className="w-12 h-12 text-xl text-white rounded-full  flex items-center justify-center font-semibold bg-purple-500">
		// 						N
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		<Loggedincontainer>
				<div className="content p-8 pt-0 overflow-auto">
					<div className="text-2xl font-semibold text-white mt-8  ">
						Upload Your Music
					</div>
					<h2 className=" text-lg text-white mb-8">
						Fill following Details of Your Song:
					</h2>
					<div className=" w-full flex space-x-2">
						<div className="w-1/3">
							<TextInput
								label={<div className="text-white" >Song Name</div>}
								className=" text-black"
								placeholder={"Song Name"}
								value={name}
								setValue={setName}
							/>
						</div>
						<div className="w-1/3">
							<TextInput
								label={<div className="text-white" >Song Thumbnail</div>}
								className=" text-black"
								placeholder={"Thumbnail"}
								value={thumbnail}
								setValue={setThumbnail}
							/>
						</div>
					</div>
					{/* following div display which song user uploaded */}
					<div> 
						{uploadedSongFileName ? (
							
							<div className="bg-spotify-green font-semibold rounded-full p-1 mt-1 w-1/3">
								{uploadedSongFileName.substring(0, 35)}...
							</div>
							
						) : (
							<CloudinaryUpload
								setUrl={setPlaylistUrl}
								setName={setUploadedSongFileName}
							/>
						)}
						</div>
						<div className="bg-white text-black w-1/6 mt-3 rounded-md text-center p-1 font-semibold hover:bg-spotify-green cursor-pointer" onClick={SubmitSong}>
							Upload Song
						    </div>
							</div>
							</Loggedincontainer>

						);
};
						export default UploadSong;


 


						


