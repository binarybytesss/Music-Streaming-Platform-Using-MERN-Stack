import { useState } from 'react';
import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/Passwordinput';
import { Link, useNavigate } from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers';
import { useCookies } from 'react-cookie';

const LoginComponent =() =>
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[cookies, setCookies]=useCookies(["token"]);
    const navigate = useNavigate();
    const login = async () => {
        
        const data = {email, password};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/login",
            data
        );
        if (response && !response.err) {
			// now we fetch the token of our newly signed in user and store it in cokiee
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
			// Expire of cokiee is the date upto which this cokiee is valide or remain in local storage after expire date this will automatically deleted for our case we set this cokiee valide from 30 days of signed in 
            setCookies("token", token, {path: "/", expires: date});
            alert("Success");
			// console.log(response); This is use to check the API working by reading the reponse
            navigate("/home");
        } else {
            alert("Failure");
			
        }
    };
    return <div className='w-full h-full flex flex-col items-center'>
     <div className='Logo p-5 border-b border-solid border-gray-600 w-full flex justify-center'>
    <Icon icon="logos:spotify" width="190" /> 
    </div>
    <div className='inputRegion w-1/3 py-10 flex flex-col justify-center items-center'>
        <div className='font-bold mb-4'>To continue, Log in to Spotify</div>
        <TextInput label="Email address or username" placeholder="Email address or username" value={email} setValue={setEmail}  className="my-6"/>
        <PasswordInput label="Password" placeholder="Password" value={password} setValue={setPassword} />
        <div className=' w-full flex items-center justify-end my-8' >        
            <button className='bg-spotify-green py-4 px-10  font-semibold rounded-full' onClick={(e)=>{
                e.preventDefault();
                login(); 
            }}>LOG IN</button>
          
            </div>
            <div className='border border-solid border-gray-500 w-full'>
                
                </div>
                <div className='font-bold my-6 text-lg'>Don't have an account?</div>
                <div className='border border-solid border-gray-600 py-4 w-full flex justify-center rounded-full text-gray-600 font-bold'>
                    <Link to="/Signup">  
                    {/* The Link is act as the anchore tag but it is more efficient than 'a' tag since it donot refresh all the component on the page but instead of that it only refresh the uncommon components between two different pages  */}
                    SIGN UP FOR SPOTIFY
                    </Link>
                </div>

    </div>
    </div>

    
};

export default LoginComponent; 