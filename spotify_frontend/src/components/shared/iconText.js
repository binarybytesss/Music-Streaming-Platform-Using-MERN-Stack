import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const IconText = ({ iconName, displayText, active ,targetLink,onClick}) => {
	return (
		<Link to ={targetLink} className="block">
		<div className="flex items-center justify-start cursor-pointer"
		onClick = {onClick}>
		
			<div className="px-5 py-3">
				<Icon
					icon={iconName}
					className={`${
						active ? "text-white" : "text-gray-400"
					}  hover:text-white text-2xl`}
					/>
			</div>
			<div
				className={`${
					active ? "text-white" : "text-gray-400"
				} font-semibold text-sm hover:text-white`}
				>
				{displayText}
			</div>
			
		</div>
	    </Link>
	);
};

export default IconText;
