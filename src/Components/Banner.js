import React from 'react'

const Banner = ({setIsBannerClosed}) => {
    const handleClose = () =>{
        setIsBannerClosed(prevState => !prevState );
    }
  return (
    <div className='text-xs md:text-sm p-3 bg-blue-950 text-white flex justify-between'>
        <p>This application is currently under development and is in its beta version. Thank you for your patience and understanding.</p>
        <button onClick={handleClose}>❌</button>

    </div>
  )
}

export default Banner