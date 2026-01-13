
import { Link } from "react-router-dom";
const TextwithHover = ({displayText, active,targetLink}) => {
	return (
		<Link to ={targetLink} className="block">
		<div className="flex items-center justify-start cursor-pointer ">
			<div
				className={`${
					active ? "text-white" : "text-gray-400"
				} font-semibold text-lg hover:text-white `}
			>
				{displayText}
			</div>
		</div>
		</Link>
	);
};

export default TextwithHover;
