import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { fetchSearchSongs } from "../Utils/songsSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { signOut } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import Banner from "./Banner";
import LOGO from "../Utils/logo_img.png";

const Head = () => {
  const [isBannerClosed, setIsBannerClosed] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetails = useSelector((store)=> store.user);
    const handleSignOut = (e) => {
      e.preventDefault();
      signOut(auth).then(() => {}).catch((error) => {
        navigate('/errorPage')
      });
    };
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          navigate('/browse');
        } else {
          dispatch(removeUser());
          navigate('/');
        }
      });
    }, []);
    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }
    const inputRef = useRef(null);
    const handleSearch = async() => {
      const result = await fetch('https://saavn.dev/api/search/songs?query='+inputRef.current.value);
      const data = await result.json();
      console.log(data.data.results);
      dispatch(fetchSearchSongs(data.data.results));
    }
  return (
    <>
    {!isBannerClosed && <Banner setIsBannerClosed={setIsBannerClosed}/>}
    <div className="grid grid-flow-col p-3 md:p-2 md:pt-3 justify-between bg-black text-white">
      <div className="flex col-span-2 md:col-span-2 pl-2 md:pl-4">
        <img className="hidden md:h-7 text-white cursor-pointer" onClick={handleToggleMenu}
          src={LOGO}
          alt="menu"
        />
        <img className="h-7 md:h-10 md:-my-1" 
          src={LOGO}
          alt="logo"
        />
      </div>
      
      {userDetails && <><div className="col-span-4 px-10">
        <input className="w-1/2 border border-gray-700 md:p-1 pl-2 md:pl-4 rounded-l-full text-black " type='text' placeholder="Search" ref={inputRef}/>
        <button className="border border-gray-700 md:p-1 px-2 md:px-3 bg-gray-800 rounded-r-full w-10 md:w-12" onClick={handleSearch}>🔍</button>
      </div>
      <div className="col-span-4 md:col-span-1 flex">
        <img className="h-6 md:h-10 pt-1  rounded-full" src='https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg' alt='user_icon'/>
        <button className="" onClick={handleSignOut}>{userDetails?.email ? 'Logout' : 'Login'}</button>
      </div></>}
    </div>
    </>
  );
};

export default Head;
