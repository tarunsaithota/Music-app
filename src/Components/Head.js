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
    <div className="grid grid-flow-col p-2 md:pt-3 justify-between bg-black text-white">
      <div className="flex col-span-2 md:col-span-1">
        <img className="hidden md:inline-block h-5 md:h-7 text-white cursor-pointer" onClick={handleToggleMenu}
          src="https://i.pinimg.com/736x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg"
          alt="menu"
        />
        <img className="h-7 md:h-10 -my-1" 
          src="https://i.pinimg.com/736x/82/1c/c8/821cc87da06e215b4509ccf4f9063ec4.jpg"
          alt="logo"
        />
      </div>
      
      {userDetails && <><div className="col-span-6 md:col-span-10 px-10">
        <input className="w-1/2 border border-gray-700 md:p-1 pl-2 md:pl-4 rounded-l-full text-black " type='text' placeholder="Search" ref={inputRef}/>
        <button className="border border-gray-700 md:p-1 px-2 md:px-3 bg-gray-800 rounded-r-full w-10 md:w-12" onClick={handleSearch}>🔍</button>
      </div>
      <div className="col-span-4 md:col-span-1 flex">
        <img className="h-6 md:h-10" src='https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg' alt='user_icon'/>
        <button className="hidden md:inline-block" onClick={handleSignOut}>Logout</button>
      </div></>}
    </div>
    </>
  );
};

export default Head;
