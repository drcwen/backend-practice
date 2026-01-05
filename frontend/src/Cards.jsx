
import React, { useState } from "react";
import Star from './Star'


const Cards = ({itemName, price, image}) => {

    
    
    
    return(
        <div className='h-auto grid items-center justify-center'>
            <div className='h-auto w-auto border rounded-3xl'>
                <div className='m-3 grid gap-3'>
                    {/*Image*/}
                    <div className=''>
                        <img src={image}
                            width='250'
                            className='border rounded-tl-3xl rounded-tr-3xl'/>
                    </div>
                    {/*Details*/}
                    <div className='grid gap-1'>
                        <h1 className='text-xs'>CRTS Apparel</h1>
                        <h1 className='text-sm font-semibold'>{itemName}</h1>
                        <div className='flex flex-row'>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                        </div>
                        
                        <div className='flex justify-between items-center'>
                            <h1 className='text-sm font-semibold text-[#093b3c]'>{price}</h1>
                            <button className='mr-2'>
                                <span class="material-icons text-xl text-[#093b3c]">
                                shopping_cart
                                </span>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards