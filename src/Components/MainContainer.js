import React from 'react'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const trendingSongs = useSelector((store) => store.songs?.trendingSongs);
    const randomSongs = useSelector((store) => store.songs?.randomSongs);
    const top50 = useSelector((store) => store.songs?.top50);
    const sideBarOpen = useSelector((store)=>store.app.isMenuOpen);
    const SPBHits = useSelector((store) => store.songs.SPBHits);
    const TFSongs = useSelector((store) => store.songs.TFSongs);
    const CFIHindi = useSelector((store) => store.songs.CFIHindi);
    const CFITelugu = useSelector((store) => store.songs.CFITelugu);
    const MSSHindi = useSelector((store) => store.songs.MSSHindi);
    const MSSTelugu = useSelector((store) => store.songs.MSSTelugu);
    const BOFTelugu = useSelector((store) => store.songs.BOFTelugu);
    const rommanceHitsHindi2024 = useSelector((store) => store.songs.rommanceHitsHindi2024);
    const searchedSongs = useSelector((store) => store.songs.searchedSongs);
    

  return (
    <div className={!sideBarOpen ? 'w-96 md:w-10/12' : 'w-full'}>
        {searchedSongs && <VideoContainer title={'Search results'} songsList={searchedSongs}/>}
        <VideoContainer title={'Trending Now'} songsList={trendingSongs} />
        <VideoContainer title={'Top 20 - Telugu'} songsList={top50} />
        <VideoContainer title={'Rommance Hits - Hindi (2024)'} songsList={rommanceHitsHindi2024} />
        <VideoContainer title={'Random Picks'} songsList={randomSongs} />
        <VideoContainer title={'Cheer For India - Hindi'} songsList={CFIHindi} />
        <VideoContainer title={'SPB - CHitra Hits'} songsList={SPBHits} />
        <VideoContainer title={'Cheer For India - Telugu'} songsList={CFITelugu} />
        <VideoContainer title={'Telufu Folk Songs'} songsList={TFSongs} />
        <VideoContainer title={'Most Searched Hindi Songs'} songsList={MSSHindi} />
        <VideoContainer title={'Most Searched Telugu Songs'} songsList={MSSTelugu} />
        <VideoContainer title={'Best Of Dance Telugu '} songsList={BOFTelugu} />
    </div>
  )
}

export default MainContainer