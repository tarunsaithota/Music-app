import React, {useState} from 'react'
import AudioCard from './AudioCard'
import useTrendingSongs from '../hooks/useTrendingSongs'
import useRandomSongs from '../hooks/useRandomSongs';
import useTop50 from '../hooks/useTop50';
import { useDispatch } from 'react-redux';
import { fetchSearchSongs } from '../Utils/songsSlice';
import useRommanceHitsHindi2024 from '../hooks/useRommanceHitsHindi2024';
import useBOFTelugu from '../hooks/useBOFTelugu';
import useMSSHindi from '../hooks/useMSSHindi';
import useMSSTelugu from '../hooks/useMSSTelugu';
import useCFIHindi from '../hooks/useCFIHindi';
import useCFITelugu from '../hooks/useCFITelugu';
import useSPBHits from '../hooks/useSPBHits';
import useTFSongs from '../hooks/useTFSongs';

const VideoContainer = ({title, songsList}) => {
  useTrendingSongs();
  useRandomSongs();
  useTop50();
  useRommanceHitsHindi2024();
  useBOFTelugu();
  useMSSHindi();
  useMSSTelugu();
  useCFITelugu();
  useCFIHindi();
  useSPBHits();
  useTFSongs();

  const[playingIndex, setPlayingIndex] = useState(null);
  const dispatch = useDispatch();
  const handleClearResults = () => {
    dispatch(fetchSearchSongs());
  }
  const handlePlayButtonClick = (index) => {
    setPlayingIndex(playingIndex===index ? null : index);
  }
  return (
    <div className='p-4 m-1 md:m-8'>
      <div className='flex justify-between'>
        <h1 className='py-4 font-bold md:text-xl'>{title}</h1>
        {title === 'Search results' && <button className='py-4 font-bold text-sm cursor-pointer' onClick={handleClearResults}>Clear results 🗑️</button>}
      </div>
      <div className='flex overflow-x-scroll'>
      <div className='flex '>
        {songsList?.map((song, index)=><AudioCard key={song.id} poster={song.image[2].url} download={song?.downloadUrl[4]?.url} name={song.name.replace(/&quot;/g, '')} year={song.year} index={index} handlePlayButtonClick={handlePlayButtonClick} playingIndex={playingIndex}/>)}
      </div>
      </div>
    </div>
    
  )
}

export default VideoContainer;