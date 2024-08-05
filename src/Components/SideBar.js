import React from 'react'

const SideBar = () => {
  return (
    <div className='hidden md:inline-block w-2/12 shadow-lg'>
        <h1 className='font-bold py-8 text-center'>BROWSE</h1>
        <ul className='text-center'>
            <li className='py-2 shadow-lg'>New Releases</li>
            <li className='py-2 shadow-lg'>Top Charts</li>
            <li className='py-2 shadow-lg'>Top Playlists</li>
            <li className='py-2 shadow-lg'>Podcasts</li>
            <li className='py-2 shadow-lg'>Top Artists</li>
            <li className='py-2 shadow-lg'>Radio</li>
        </ul>
    </div>
  )
}

export default SideBar;