
import React, { useState } from "react";
import Star from './Star'


const Card = () => {

    
    
    
    return(
        <div className='h-auto w-fit flex bg-white border border-gray-300 rounded-3xl'>
            
            <div className='m-3 flex flex-col gap-3'>
                <div className=''>
                    <img src='../assets/featured-1.jpg' width='150'
                    className='border rounded-tl-3xl rounded-tr-3xl md:w-[350px]'></img>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-700 text-xs'>CRTS Apparel</h1>
                    <h1 className='font-semibold text-sm'>Basic Success Black</h1>
                </div>

                <div>
                    <div className='flex flex-row gap-1'>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>

                    <div>
                        <h1 className='text-[#093b3c] font-semibold text-sm'>550.00</h1>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card