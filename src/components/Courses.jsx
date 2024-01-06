import React from 'react'




const Portfolio = () => {
// Can add a code to each part of the array to go to onclick
  

  return (
    <div name='courses' className='w-full text-white bg-gradient-to-b from-black to-gray-800 sm:h-fit md:h-screen'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pb-16 mx-auto'>
            <div>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Courses</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid gap-4 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
            
                <div className='flex flex-col justify-center items-center rounded-lg shadow-md shadow-gray-600 text-white'>
                <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=GoSSXM9nCascpqwk&amp;list=PLzYnTffbg7Lu7qOkyTun7npIUV5bGHloq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='text-white'allowfullscreen>Mathematics Playlist</iframe>
                </div>
                Mathematics Playlist
                </div>
                
                <div className='flex flex-col justify-center items-center rounded-lg shadow-md shadow-gray-600 text-white'>
                <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=4R9yEFX1Wy-6WZyS&amp;list=PLzYnTffbg7LtuzOY9UwKFTxYbyVsIkJY6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                Naming Reactions
                </div>

                <div className='flex flex-col justify-center items-center rounded-lg shadow-md shadow-gray-600 text-white'>
                <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=qo1wPFa2J7Bpg08U&amp;list=PLzYnTffbg7LuABRSJokyrmCQHj6st-E93" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                Solid state
                </div>

                <div className='flex flex-col justify-center items-center rounded-lg shadow-md shadow-gray-600 text-white'>
                <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=Fq4WUKRk10shMG3I&amp;list=PLzYnTffbg7LtfuvmlEYEISxTLP7mmnUbi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                Acid, Base and Salt
                </div>

                <div className='flex flex-col justify-center items-center rounded-lg shadow-md shadow-gray-600 text-white'>
                <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=5z-hrZkuSMBcOCeS&amp;list=PLzYnTffbg7LtlTXjTZ2KJzHWj2dRSARue" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                Linear equation
                </div>

                <div className='flex flex-col justify-center items-center rounded-lg shadow-md shadow-gray-600 text-white'>
                <div>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=GoSSXM9nCascpqwk&amp;list=PLzYnTffbg7Lu7qOkyTun7npIUV5bGHloq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='text-white'allowfullscreen>Mathematics Playlist</iframe>
                </div>
                Mathematics Playlist
                </div>
                
        
            </div>
        </div>
    </div>
  )
}

export default Portfolio