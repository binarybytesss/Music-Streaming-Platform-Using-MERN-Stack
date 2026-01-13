import { useState } from "react";
import Loggedincontainer from "../containers/Loggedincontainer";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useEffect } from "react";
import SingleSongCard from "../components/shared/SingleSongCard";

const SearchPage = () => {
	const [isInputFocused, setIsInputFocused] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [songdata, setSongData] = useState([]);

	const searchSong = async () => {
		// This function call search api
		const response = await makeAuthenticatedGETRequest(
			"/song/get/songname/" + searchText
		);
		setSongData(response.data);
	};

	return (
		<Loggedincontainer curactivescreen={"search"}>
			<div className="p-6">
				<div className="w-full ">
					<div
						className={`w-1/3 p-3 text-sm rounded-full flex space-x-3 items-center ${
							isInputFocused ? "border border-white" : ""
						}`}
						style={{ backgroundColor: "#2a2a2a" }}
					>
						<div className="text-white text-xl">
							<Icon icon="ri:search-line" color="white" />
						</div>
						<input
							type="text"
							placeholder="What do you want to listen to?"
							className="w-full text-md focus:outline-none text-white"
							style={{ backgroundColor: "#2a2a2a" }}
							onFocus={() => {
								setIsInputFocused(true);
							}}
							onBlur={() => {
								setIsInputFocused(false);
							}}
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									searchSong();
								}
							}}
						></input>
					</div>
				</div>
			</div>
			<div>
				{songdata.length > 0 ? (
					<div className="p-6">
						<div className="text-white font-semibold text-xl p-2">
							Search result for key "<b>{searchText}</b>" are :{" "}
						</div>
						<div className="flex flex-col gap-y-3 overflow-auto">
							{songdata.map((item) => {
								return <SingleSongCard info={item} playSound={() => {}} />;
							})}
						</div>
					</div>
				) : (
					<div className="flex-col items-center justify-center p-20 mt-44">
						<div className="text-white text-xl font-semibold text-center">
							No results found for "<b>{searchText}</b>"
						</div>
						<div className="text-white text-center">
							Please make sure your words are spelled correctly, or use fewer or
							different keywords.
						</div>
					</div>
				)}
			</div>
		</Loggedincontainer>
	);
};
export default SearchPage;
