import { useParams } from "react-router-dom";
import Loggedincontainer from "../containers/Loggedincontainer";
import { useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useState } from "react";
import SingleSongCard from "../components/shared/SingleSongCard";

const SinglePlaylistView = () => {
	const [playlistDetails, setPlaylistDetails] = useState({});
	const { playlistId } = useParams();

	useEffect(() => {
		const getdata = async () => {
			const response = await makeAuthenticatedGETRequest(
				"/playlist/get/playlist/" + playlistId
			);
			console.log(response);
            setPlaylistDetails(response);
		};
		getdata();
	}, []);

	return (
		<Loggedincontainer curactivescreen={"library"}>
			{playlistDetails._id && (
				<div>
					<div className="text-white font-semibold text-3xl p-4">
						PlayList Name:
					</div>
					<div className="p-6">
						<div className="flex flex-col gap-y-3 overflow-auto">
							{playlistDetails.song.map((item) => {
								return <SingleSongCard info={item} playSound={() => {}} />;
							})}
						</div>
					</div>
				</div>
			)}
		</Loggedincontainer>
	);
};

export default SinglePlaylistView;
