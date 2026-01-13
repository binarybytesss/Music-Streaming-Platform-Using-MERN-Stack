import { Icon } from "@iconify/react";
import spotify_logo from "../Assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/iconText";
import TextwithHover from "../components/shared/TextwithHover";

const focusCardsData = [
	{
		title:"PeaceFul Piano",
		description:"Relax and Indulge with beautiful piano pieces..",
		imgUrl:"https://i.scdn.co/image/ab67706c0000da84fe30d5bd34b9afe46310980a"
	},
	{
		title:"Deep Focus",
		description:"Keep calm and focus with ambient and post-rock..",
		imgUrl:"https://i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519"
	},
	{
		title:"Instrumental Study",
		description:"Relax and Indulge with beautiful piano pieces..",
		imgUrl:"https://i.scdn.co/image/ab67706c0000da84fe30d5bd34b9afe46310980a"
	},
	{
		title:"Focus Flow",
		description:"Uptempo instrumental hip hop beats...",
		imgUrl:"https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc"
	},
	{
		title:"Beats to think to",
		description:"Focus with deep techno and tech house...",
		imgUrl:"https://i.scdn.co/image/ab67706f0000000296e08a91ef3c7a6e7bfaa9a6"
	},
	
];
const SpotifyCardsData = [
	{
		title:"I-Pop Superhits",
		description:"Biggest hits from you favourite pop stars..",
		imgUrl:"https://i.scdn.co/image/ab67706f00000002f0a85dcf859fd79c74a19598"
	},
	{
		title:"Hindi God Songs",
		description:"By Arvind Yadav",
		imgUrl:"https://mosaic.scdn.co/300/ab67616d00001e0263521cf4f0ca24a244f26e8bab67616d00001e02661c92c38ad5f9fb636b9ae6ab67616d00001e02b5db9fac30bd158408f1b477ab67616d00001e02bae98cffc2b6cd8d7439ee4a"
	},
	{
		title:"Gym Workout Hindi Songs",
		description:"By Kunal",
		imgUrl:"https://mosaic.scdn.co/640/ab67616d00001e020f8e26a782d388ea3e417d54ab67616d00001e02441b53722d32e65078a35a14ab67616d00001e02b2abfd2439b6c23c3664df87ab67616d00001e02fd2df008046f04c32d9c0c2e"
	},
	{
		title:"Trending Now Punjabi",
		description:"All that's viral, stream now!",
		imgUrl:"https://i.scdn.co/image/ab67706f000000027b25f1e458adf25c7c456d93"
	},
	{
		title:"Old is Gold Remix ",
		description:"The best collection of old hindi remix songs..",
		imgUrl:"https://i.scdn.co/image/ab67706c0000da84b596b226f8edb10d9e89bca0"
	},
	
];
const SoundIndiaCardsData = [
	{
		title:"The Sound Of Kolkata",
		description:"The Songs that define,unite and distinguish Kolkata IN..",
		imgUrl:"https://i.scdn.co/image/ab67706c0000da84ca51e0b1b2526295415ea0f7"
	},
	{
		title:"The Sound of Bengaluru",
		description:"The Songs that define,unite and distinguish Bengaluru",
		imgUrl:"https://i.scdn.co/image/ab67706c0000da84d8f01d1da427744c3c74172d"
	},
	{
		title:"The Sound of Delhi",
		description:"The songs that define,unite and distinguish Delhi",
		imgUrl:"https://i.scdn.co/image/ab67706c0000da84fdad3548d41af616a7e8d64c"
	},
	{
		title:"The Sound Of Chennai",
		description:"The songs that define,unite and distinguish Chennai",
		imgUrl:"https://i.scdn.co/image/ab67706c0000da84735ff3d91fd7bcc7e854364d"
	},
	{
		title:"The Sound of Mumbai",
		description:"The songs that define,unite and distinguish Mumbai",
		imgUrl:"https://i.scdn.co/image/ab67706c0000da8436ea3a15c04a4b0821958ceb"
	},
	
];

const HomeComponent = () => {
	return (
		<div className="h-full w-full flex ">
			<div className="h-full w-1/5 bg-black justify-between" >
				<div className="logodiv p-5 ">
					{/* this div for logo */}
					<img src={spotify_logo} alt="spotify_logo" width={150} />
				</div>
              
				<div>
					<div className="py-5">
						<IconText
							iconName={"material-symbols:home"}
							displayText={"Home"}
							active
						/>
						<IconText
							iconName={"iconamoon:search-bold"}
							displayText={"Search"}
						/>
						<IconText
							iconName={"icomoon-free:books"}
							displayText={"Your Library"}
						/>
					</div>
					<div className="pt-5">
						<IconText
							iconName={"material-symbols:add-box"}
							displayText={"Create Playlist"}
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
                
                


<div className="pt-10 p-20 position relative right-20 top-20 ml-2 ">
                <div className="border-solid border-2 rounded-full w-21 pr-2  border-gray-00 flex flex-row gap-1 items-center justify-center  cursor-pointer  hover:border-white text-white">
                    <Icon icon={"ci:globe"} className="text-gray-400 text-3xl pl-1 hover:text-white  "/>
                    <h1 className="text-gray-400 font-semibold hover:text-white text-3sm pt-0    font-poppins">English</h1>
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
                    <TextwithHover displayText={"Sign up"} />
                    <div className="bg-white h-2/3 rounded-full px-8 flex items-center justify-center font-semibold ">
                        Log in

                    </div>
                    </div>
                    </div>
                </div>
                <div className="content"></div>
				<PlaylistView titleText="Focus" cardData={focusCardsData}/>
				<PlaylistView titleText="Spotify-PlayList" cardData={SpotifyCardsData}/>
				<PlaylistView titleText="Sound Of India" cardData={SoundIndiaCardsData}/>
				{/* This div for right panel (main content) */}
			</div>
		</div>
	);
};

const PlaylistView = ({titleText,cardData}) => {
	return (<div className="text-white p-8">
		<div className="text-white font-semibold text-2xl">
			{titleText}
		</div>
		
		<div className="w-full position relative top-6 flex justify-between gap-4">
			{
				cardData.map((item)=>
				{
					return (
						<Card
						title={item.title}
						description={item.description}
						imgUrl={item.imgUrl}
						/>
					)
				})
			}
			{/* <Card 
			title="PeaceFul Piano"
			description="Relax and Indulge with beautiful piano 
			pieces.. "
			imgUrl="https://i.scdn.co/image/ab67706c0000da84fe30d5bd34b9afe46310980a"
			/>
			<Card 
			title="Deep Focus"
			description="Keep calm and focus with ambient and post-rock.."
			imgUrl="https://i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519"
			/>
			<Card 
			title="Instrumental Study"
			description="Focus with soft study music in the background..."
			imgUrl="https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c"
			/>
			<Card 
			title="Focus Flow"
			description="Uptempo instrumental hip hop beats..."
			imgUrl="https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc"
			/>
			<Card 
			title="Beats to think to"
			description="Focus with deep techno and tech house..."
			imgUrl="https://i.scdn.co/image/ab67706f0000000296e08a91ef3c7a6e7bfaa9a6"
			/> */}
		</div>
	</div>
	);
};

const Card = ({title,description,imgUrl}) => {
	return (
		<div className="bg-black w-1/5 opacity-70  h-80 p-4 rounded-lg" >
			<div >
				<img className="rounded-md" src={imgUrl}alt="lable"/>
			</div>
			<div className="position relative top-6">
			<div className="text-white">{title}</div>
			<div className="text-gray-500 text-xs">{description}</div>
			</div>

		</div>
	)
}
export default HomeComponent;
