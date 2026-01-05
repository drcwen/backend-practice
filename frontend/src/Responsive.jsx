
import React, { useState } from "react";

const Responsive = () => {

    
    
    
    return(
        <div className='w-full h-screen flex flex-col'>
            
            {/*Navigation*/}
            <div className='w-full h-auto bg-[#061E29]'>
                <div className='m-5 flex justify-between items-center'>
                    
                    <div className='flex md:hidden'>
                        <button>
                            <span class="material-symbols-outlined text-white">
                            menu
                            </span>
                        </button>
                    </div>

                    <div className='flex md:hidden'>
                        <h1 className='text-white font-bold'>Notes</h1>
                    </div>

                    <div className='md:flex hidden'>
                        <span class="material-symbols-outlined text-white">
                        diamond
                        </span>
                    </div>

                    <div className='md:flex hidden'>
                        <ul className='text-white flex flex-row gap-20'>
                            <li className='cursor-pointer hover:text-blue-100 hover:underline'>Home</li>
                            <li className='cursor-pointer hover:text-blue-100 hover:underline'>Notes</li>
                            <li className='cursor-pointer hover:text-blue-100 hover:underline'>Others</li>
                        </ul>
                    </div>

                    <div className='flex'>
                        <button>
                            <img src='https://pbs.twimg.com/media/EZ5PhSTUYAcClek.jpg'
                            className='w-7 h-7 rounded-full object-cover border '></img>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Responsive