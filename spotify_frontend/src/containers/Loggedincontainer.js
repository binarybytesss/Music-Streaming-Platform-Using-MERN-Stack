import { Icon } from "@iconify/react";
import spotify_logo from "../Assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/iconText";
import TextwithHover from "../components/shared/TextwithHover";
import { Howl, Howler } from "howler";
import { Children, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useContext } from "react";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../Modals/createPlaylistModal";
import AddToPlaylistModal from "../Modals/AddToPlaylistModal";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import UploadSong from "../Routes/Uploadsongs";

const Loggedincontainer = ({ children, curactivescreen }) => {
	const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
	const [addToPlaylistOpen, setAddToPlaylistOpen] = useState(false);
	const {
		currentSong,
		setCurrentSong,
		soundPlayed,
		setSoundPlayed,
		isPaused,
		setisPaused,
	} = useContext(songContext);
	console.log(currentSong);
	const firstUpdate = useRef(true);

	useLayoutEffect(() => {
		// following if statrment will prevent the useEffect from running on the first render
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		if (!currentSong) {
			return;
		}
		changeSong(currentSong.track);
	}, [currentSong && currentSong.track]);

	const addSongToPlaylist = async (playlistId) => {
		const songId = currentSong._id;
		const payload = { playlistId, songId };
		// console.log(payload);
        const response = await makeAuthenticatedPOSTRequest("/playlist/add/song", payload);
        if(response._id)
        {
            setCreatePlaylistModalOpen(false)
        }

	};

	const playSound = () => {
		if (!soundPlayed) {
			return;
		}
		soundPlayed.play();
	};
	const changeSong = (songSrc) => {
		if (soundPlayed) {
			soundPlayed.stop();
		}
		let sound = new Howl({
			src: [songSrc],
			html5: true,
		});
		setSoundPlayed(sound);
		sound.play();
		setisPaused(false);
	};

	const pauseSound = () => {
		soundPlayed.pause();
	};

	const togglePlayPause = () => {
		if (isPaused) {
			playSound();
			setisPaused(false);
		} else {
			pauseSound();
			setisPaused(true);
		}
	};
	return (
		<div className="h-full w-full bg-navbar-black">
			{createPlaylistModalOpen && (
				<CreatePlaylistModal
					className=""
					closeModal={() => {
						setCreatePlaylistModalOpen(false);
					}}
				/>
			)}
			{addToPlaylistOpen && (
				<AddToPlaylistModal
					closeModal={() => {
						setAddToPlaylistOpen(false);
					}}
                    addSongToPlaylist={addSongToPlaylist}
				/>
			)}

			<div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
				<div className="h-full w-1/5 bg-black justify-between">
					<div className="logodiv p-6 ">
						{/* this div for logo */}
						<img src={spotify_logo} alt="spotify_logo" width={150} />
					</div>

					<div>
						<div className="py-5 ">
							<IconText
								iconName={"material-symbols:home"}
								displayText={"Home"}
								active={curactivescreen === "home"}
								targetLink={"home"}
							/>
							<IconText
								iconName={"iconamoon:search-bold"}
								active={curactivescreen === "search"}
								displayText={"Search"}
								targetLink={"/search"}
							/>
							<IconText
								iconName={"icomoon-free:books"}
								active={curactivescreen === "library"}
								displayText={"Your Library"}
								targetLink={"/library"}
							/>
							<IconText
								iconName={"mdi:account-music"}
								active={curactivescreen === "myMusic"}
								displayText={"My Songs"}
								targetLink={"/myMusic"}
							/>
						</div>
						<div className="pt-5">
							<IconText
								iconName={"material-symbols:add-box"}
								displayText={"Create Playlist"}
								onClick={() => {
									setCreatePlaylistModalOpen(true);
								}}
							/>
							<IconText
								iconName={"fluent-emoji:heart-decoration"}
								displayText={"Liked Songs  "}
							/>
						</div>

						<div className="pt-10">
							<div className="pt-20 pl-5 text-gray-400 flex flex-row gap-3 text-xs">
								<h3
									className={`hover:text-white
                        cursor-pointer`}
								>
									Legal
								</h3>
								<h3
									className={`hover:text-white
                        cursor-pointer`}
								>
									Privacy Center
								</h3>
								<h3
									className={`hover:text-white
                        cursor-pointer`}
								>
									Privacy Policy
								</h3>
							</div>
							<div className="pt-4 pl-5 text-gray-400 flex flex-row gap-3 text-xs">
								<h3
									className={`hover:text-white
                        cursor-pointer`}
								>
									Cookies
								</h3>
								<h3
									className={`hover:text-white
                        cursor-pointer`}
								>
									About Ads
								</h3>
							</div>
							<div className="pt-4 pl-5 text-gray-400 flex flex-row gap-3 text-xs">
								<h3
									className={`hover:text-white
                        cursor-pointer`}
								>
									Cookies
								</h3>
							</div>
						</div>
					</div>

					<div className="pt-10 p-20 position relative right-20 top-15 ml-2 ">
						<div className="border-solid border-2 rounded-full w-21 pr-2  border-gray-00 flex flex-row gap-1 items-center justify-center  cursor-pointer  hover:border-white text-white">
							<Icon
								icon={"ci:globe"}
								className="text-gray-400 text-3xl pl-1 hover:text-white  "
							/>
							<h1 className="text-gray-400 font-semibold hover:text-white text-3sm pt-0    font-poppins">
								English
							</h1>
						</div>
					</div>

					{/*  This div for left panel */}
				</div>

				<div className="h-full bg-navbar-black w-4/5 overflow-auto">
					<div className="navbar bg-black w-full h-1/10 bg-opacity-90 flex flex-row gap-2 items-center justify-end">
						<div className="flex w-1/2 h-full">
							<div className="flex w-3/5 items-center justify-around">
								<TextwithHover displayText={"Premium"} />
								<TextwithHover displayText={"Support"} />
								<TextwithHover displayText={"Download"} />
								<div className="border h-1/2 border-white"></div>
							</div>
							<div className="flex w-2/5 items-center justify-around ">
								<TextwithHover displayText={"Upload Song"} targetLink={"/uploadsong"}/>
								<div className="w-12 h-12 text-xl text-white rounded-full  flex items-center justify-center font-semibold bg-purple-500">
									N
								</div>
							</div>
						</div>
					</div>
					<div className="content overflow-auto"></div>
					{/* Customise Content */}

					{children}

					{/* This div for right panel (main content) */}
				</div>
			</div>
			{currentSong && (
				<div className="w-full h-1/10 bg-navbar-black bg-opacity-20  flex">
					<div className="w-1/4 h-full flex">
						<img
							src={currentSong.thumbnail}
							alt="currentsong"
							className="h-20 w-20 p-2 rounded-md"
						></img>
						<div className="py-5 pl-2">
							<div className="text-white hover:underline">
								{currentSong.name}
							</div>
							<div className="text-gray-400 text-xs hover:underline">
								{currentSong.artist.firstName +
									" " +
									currentSong.artist.lastName}
							</div>
						</div>
					</div>
					<div className="w-2/4 h-full p-5 flex-col text-white items-center justify center">
						{/* Playback region audio timeline */}
						<div className="flex gap-8 items-center justify-center">
							<Icon
								icon="ph:shuffle"
								className="h-7 w-7 text-gray-500 hover: cursor-pointer hover:text-white"
							/>
							<Icon
								icon="carbon:skip-back-filled"
								className="text-gray-500 h-7 w-7 hover: cursor-pointer hover:text-white"
							/>
							<Icon
								icon={isPaused ? "carbon:play-filled" : "zondicons:pause-solid"}
								className="text-gray-500 h-10 w-10 hover: cursor-pointer hover:text-white"
								onClick={togglePlayPause}
							/>
							<Icon
								icon="teenyicons:next-solid"
								className="text-gray-500 h-7 w-7 hover: cursor-pointer hover:text-white"
							/>
							<Icon
								icon="tabler:repeat"
								className="text-gray-500 h-7 w-7 hover: cursor-pointer hover:text-white"
							/>
						</div>
						<div className="text-white text-center"></div>
					</div>
					<div className="w-1/4 flex p-7 pr-4 text-white justify-end gap-2">
						{/* sound options  */}
						<Icon
							icon="ic:round-playlist-add"
							className="h-9 w-9 text-gray-500 hover: cursor-pointer hover:text-white"
							onClick={() => {
								setAddToPlaylistOpen(true);
							}}
						/>
						<Icon
							icon="ph:heart"
							className="h-8 w-8 text-gray-500 hover: cursor-pointer hover:text-white"
							onClick={() => {
								setAddToPlaylistOpen(true);
							}}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
export default Loggedincontainer;
