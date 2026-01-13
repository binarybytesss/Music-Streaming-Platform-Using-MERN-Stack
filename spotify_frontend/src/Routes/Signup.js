// import { useState } from "react";
// import { Icon } from "@iconify/react";
// import TextInput from "../components/shared/TextInput";
// import PasswordInput from "../components/shared/Passwordinput";
// import { Link } from "react-router-dom";
// import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";


// const SignupComponent = () => {
// 	const [email, setEmail] = useState("");
// 	const [confirmEmail, setConfirmEmail] = useState("");
// 	const [userName, setuserName] = useState("");
// 	const [Password, setPassword] = useState("");
// 	const [FirstName, setFirstName] = useState("");
// 	const [LastName, setLastName] = useState("");

// 	const signUp = async () => {
// 		if (email !== confirmEmail) {
// 			alert("Email and confirm email fields must match. Please check again");
// 			return;
// 		}

// 		const data = { email, Password, userName, FirstName, LastName };
// 		console.log(data);
//         // const response = await makeUnauthenticatedPOSTRequest("/auth/register" , data);
//         // if(response && !response.err)
//         // {
//         //     console.log(response);
//         //     alert("Success");
      
//         // }
//         // else
//         // {
//         //     alert("Faliure");
//         // }
// 	};

// 	return (
// 		<div className="w-full h-full flex flex-col items-center">
// 			<div className="Logo p-5 border-b border-solid border-gray-600 w-full flex justify-center">
// 				<Icon icon="logos:spotify" width="190" />
// 			</div>
// 			<div className="inputRegion w-1/3 py-10 flex flex-col justify-center items-center">
// 				<div className="font-bold mb-4 text-2xl">
// 					Sign up for free to start listening
// 				</div>
// 				<TextInput
// 					label="Enter email address"
// 					placeholder="Enter email here"
// 					className="my-6"
// 					value={email}
// 					setValue={setEmail}
// 				/>
// 				<TextInput
// 					label="Confirm your email address"
// 					placeholder="Enter email again"
// 					className="mb-6"
// 					value={confirmEmail}
// 					setValue={setConfirmEmail}
// 				/>
// 				<PasswordInput
// 					label="Create Password"
// 					placeholder="Enter the password"
// 					value={Password}
// 					setValue={setPassword}
// 				/>
// 				<div className="w-full flex justify-between items-center space-x-8">
// 					<TextInput
// 						label="First Name"
// 						placeholder="Enter your First Name"
// 						className="my-6"
// 						value={FirstName}
// 						setValue={setFirstName}
// 					/>
// 					<TextInput
// 						label="Last Name"
// 						placeholder="Enter your Last Name"
// 						className="my-6"
// 						value={LastName}
// 						setValue={setLastName}
// 					/>
// 				</div>

// 				<TextInput
// 					label="What should we call you?"
// 					placeholder="Enter your profile name   "
// 					className="my-6"
// 					value={userName}
// 					setValue={setuserName}
// 				/>
// 				<div className="w-full flex items-center justify-start">
// 					<span className="font-semibold text-sm mb-2">
// 						What’s your date of birth?
// 					</span>
// 				</div>
// 				<div className="flex flex-row justify-start items-center gap-3">
// 					<div className="flex flex-col">
// 						<div>year</div>
// 						<input
// 							type="number"
// 							className="border border-solid border-black w-40 h-10 rounded px-4 py-7"
// 							placeholder="YYYY"
// 						/>
// 					</div>
// 					<div className="flex flex-col">
// 						<div for="month">Month</div>
// 						<select
// 							placeholder="Month"
// 							className="border border-solid border-black w-40 h-10 rounded px-4 py-7"
// 						>
// 							<option>January</option>
// 							<option value="Febuary">Febuary</option>
// 							<option value="March">March</option>
// 							<option value="April">April</option>
// 							<option value="May">May</option>
// 							<option value="June">June</option>
// 							<option value="July">July</option>
// 							<option value="August">August</option>
// 							<option value="September">September</option>
// 							<option value="Octomber">Octomber</option>
// 							<option value="November">November</option>
// 							<option value="December">December</option>
// 						</select>
// 					</div>
// 					<div className="flex flex-col">
// 						<div>Day</div>
// 						<input
// 							type="number"
// 							className="border border-solid border-black w-40 h-10 rounded px-4 py-7"
// 							placeholder="DD"
// 						/>
// 					</div>
// 				</div>

// 				<div className="flex flex-row gap-4 mt-8">
// 					<input className="w-7" type="checkbox" />
// 					<div>
// 						I would prefer not to receive marketing messages from Spotify
// 					</div>
// 				</div>
// 				<div className="flex flex-row gap-4 mt-8">
// 					<input className="w-10" type="checkbox" />
// 					<div>
// 						Share my registration data with Spotify’s content providers for
// 						marketing purposes.
// 					</div>
// 				</div>

// 				<div className=" w-full flex items-center justify-center my-8">
// 					<button className="bg-spotify-green py-4 px-10  font-semibold rounded-full "onClick={(e) => {
// 						e.preventDefault();
// 						signUp(); 
// 					}}>
// 						Sign Up
// 					</button>
// 				</div>
// 				<div className="border border-solid border-gray-500 w-full"></div>
// 				<div className="font-bold my-6 text-lg">Already have an account?</div>
// 				<div
// 					className="border border-solid border-gray-600 py-4 w-full flex justify-center rounded-full text-gray-600 font-bold"
					
// 				>
// 					<Link to="/Login">LOG IN INSTEAD</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default SignupComponent;


import {useState} from "react";
import {useCookies} from "react-cookie";
import {Icon} from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/Passwordinput";
import {Link, useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers";

const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const signUp = async () => {
        if (email !== confirmEmail) {
            alert(
                "Email and confirm email fields must match. Please check again"
            );
            return;
        }
        const data = {email, password, username, firstName, lastName};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/register",
            data
        );
        if (response && !response.err) {
			// now we fetch the token of our newly signed in user and store it in cokiee
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
			// Expire of cokiee is the date upto which this cokiee is valide or remain in local storage after expire date this will automatically deleted for our case we set this cokiee valide from 30 days of signed in 
            setCookie("token", token, {path: "/", expires: date});
            alert("Success");
			// console.log(response); This is use to check the API working by reading the reponse
            navigate("/home");
        } else {
            alert("Failure");
			
        }
    };

    return (
		
					<div className="w-full h-full flex flex-col items-center">
						<div className="Logo p-5 border-b border-solid border-gray-600 w-full flex justify-center">
							<Icon icon="logos:spotify" width="190" />
						</div>
						<div className="inputRegion w-1/3 py-10 flex flex-col justify-center items-center">
							<div className="font-bold mb-4 text-2xl">
								Sign up for free to start listening
							</div>
							<TextInput
								label="Enter email address"
								placeholder="Enter email here"
								className="my-6"
								value={email}
								setValue={setEmail}
							/>
							<TextInput
								label="Confirm your email address"
								placeholder="Enter email again"
								className="mb-6"
								value={confirmEmail}
								setValue={setConfirmEmail}
							/>
							<PasswordInput
								label="Create Password"
								placeholder="Enter the password"
								value={password}
								setValue={setPassword}
							/>
							<div className="w-full flex justify-between items-center space-x-8">
								<TextInput
									label="First Name"
									placeholder="Enter your First Name"
									className="my-6"
									value={firstName}
									setValue={setFirstName}
								/>
								<TextInput
									label="Last Name"
									placeholder="Enter your Last Name"
									className="my-6"
									value={lastName}
									setValue={setLastName}
								/>
							</div>
			
							<TextInput
								label="What should we call you?"
								placeholder="Enter your profile name   "
								className="my-6"
								value={username}
								setValue={setUsername}
							/>
							<div className="w-full flex items-center justify-start">
								<span className="font-semibold text-sm mb-2">
									What’s your date of birth?
								</span>
							</div>
							<div className="flex flex-row justify-start items-center gap-3">
								<div className="flex flex-col">
									<div>year</div>
									<input
										type="number"
										className="border border-solid border-black w-40 h-10 rounded px-4 py-7"
										placeholder="YYYY"
									/>
								</div>
								<div className="flex flex-col">
									<div for="month">Month</div>
									<select
										placeholder="Month"
										className="border border-solid border-black w-40 h-14 rounded px-4 py-1"
									>
										<option value="Select Month">Select Month</option>
										<option value="January">January</option>
										<option value="Febuary">Febuary</option>
										<option value="March">March</option>
										<option value="April">April</option>
										<option value="May">May</option>
										<option value="June">June</option>
										<option value="July">July</option>
										<option value="August">August</option>
										<option value="September">September</option>
										<option value="Octomber">Octomber</option>
										<option value="November">November</option>
										<option value="December">December</option>
									</select>
								</div>
								<div className="flex flex-col">
									<div>Day</div>
									<input
										type="number"
										className="border border-solid border-black w-40 h-10 rounded px-4 py-7"
										placeholder="DD"
									/>
								</div>
							</div>
			
							<div className="flex flex-row gap-4 mt-8">
								<input className="w-7" type="checkbox" />
								<div>
									I would prefer not to receive marketing messages from Spotify
								</div>
							</div>
							<div className="flex flex-row gap-4 mt-8">
								<input className="w-10" type="checkbox" />
								<div>
									Share my registration data with Spotify’s content providers for
									marketing purposes.
								</div>
							</div>
			
							<div className=" w-full flex items-center justify-center my-8">
								<button className="bg-spotify-green py-4 px-10  font-semibold rounded-full "onClick={(e) => {
									e.preventDefault();
									signUp(); 
								}}>
									Sign Up
								</button>
							</div>
							<div className="border border-solid border-gray-500 w-full"></div>
							<div className="font-bold my-6 text-lg">Already have an account?</div>
							<div
								className="border border-solid border-gray-600 py-4 w-full flex justify-center rounded-full text-gray-600 font-bold"
								
							>
								<Link to="/Login">LOG IN INSTEAD</Link>
							</div>
						</div>
					</div>
				);
			};
export default SignupComponent;