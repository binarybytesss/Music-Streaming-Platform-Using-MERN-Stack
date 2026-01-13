import './output.css';  // including output.css file which have a lots of css properties which we can use  
import {    //This components from react-router-dom is use to create routs in App.js
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { useState } from 'react';
import LoginComponent from './Routes/Login';
import SignupComponent from './Routes/Signup';
import HomeComponent from './Routes/Home';
import LoggedinHomeComponent from './Routes/LoggedinHome';
import UploadSong from './Routes/Uploadsongs';
import MyMusic from './Routes/MyMusic';
import { useCookies } from 'react-cookie';
import songContext from './contexts/songContext';
import SearchPage from './Routes/SearchPage';
import Library from './Routes/Library';
import SinglePlaylistView from './Routes/SinglePlaylistView';


function App() {
const [currentSong,setCurrentSong]= useState(null);
const [soundPlayed, setSoundPlayed] = useState(null);
const [isPaused, setisPaused]= useState(true);
const [cookie, setCookie] = useCookies(["token"]);
console.log(cookie);



  return (
    // W-screen and h-screen set the width and height of the page as complete screen
    // This div is the parent div of all the routes means all routes are contain this div
    <div className ='w-screen h-screen font-poppins'>  

      <BrowserRouter>
      {/* Browser router is the wrapper in which we declare and define different routes of our app */}
      {
        // Checking whether token is exisit for user or not means in other words user signed in or not 
      cookie.token?(
      // <Routes>
        {/*  here we declare the different routes*/},
        {/*This are Logged in Routes  */},
        
          <songContext.Provider value={{currentSong , setCurrentSong, soundPlayed,setSoundPlayed,isPaused,setisPaused}}>
            <Routes>
          <Route path="/" element={<h2>Hello</h2>}/> {/* Here we declare starting route  */}
          <Route path="/home" element={< LoggedinHomeComponent />} />  {/* Home Route  */} 
          <Route path="/uploadSong" element={< UploadSong />} /> {/* UploadSong */}
          <Route path="/myMusic" element={<MyMusic />} /> {/* MYMusic component this contains all added musics by user */}
          <Route path="/search" element={<SearchPage />} /> {/* MYMusic component this contains all added musics by user */}
          <Route path="/library" element={<Library />} /> {/* MYMusic component this contains all added musics by user */}
          <Route path="/playlist/:playlistId" element={<SinglePlaylistView />} /> {/* MYMusic component this contains all added musics by user */}
          {/* Default Route */}
          <Route path='*' element={<Navigate to="/home"/>}/> {/*If user try to visit any other route instead of accesible routes while he/she is logged in then they will redirect to home page only*/}
          </Routes>
          </songContext.Provider>
          
     

      // </Routes>
      ):(
      <Routes>
        {/*  here we declare the different routes*/}
        {/* This are Logged out Routes */}
          
          {/* <Route path="/" element={<h2>Hello</h2>}/> Here we declare starting route  */}
          <Route path="/Login" element={< LoginComponent />} />  {/* Login Route  */} 
          <Route path="/Signup" element={< SignupComponent />} />  {/* Sign up Route  */} 
          <Route path="/Home" element={< HomeComponent />} />  {/* Home Route  */} 

          {/* Default Route */}
          <Route path='*' element={<Navigate to="/login"/>}/>
      </Routes>
      )
}
      </BrowserRouter>
      </div>
  );
}


// Style Components which can connect to the routes as elemnent 
// const HelloComponent = () =>
// {
//   return <div>This is Hello from HelloCom</div>;
// };

  


export default App;
