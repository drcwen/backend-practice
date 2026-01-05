
import React, { useState } from "react";
import { FaFacebookF, FaInstagram  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Cards from './Cards'


const Apparel = () => {

    
    
    
    return(

        <div className='w-full h-screen flex flex-col'>
            
            <div className='w-full h-auto flex bg-[#093b3c] items-center justify-center'>
                
                {/*Social Call*/}
                <div className='m-2 flex flex-row gap-5'>

                    {/*Socials*/}
                    <ul className='flex gap-2'>
                        {/*Facebook*/}
                        <li className='flex flex-row'>
                            <button>
                                <FaFacebookF className='text-white'/>
                            </button>
                        </li>

                        {/*Facebook*/}
                        <li className='flex flex-row'>
                            <button>
                                <FaInstagram className='text-white'/>
                            </button>
                        </li>

                        {/*X*/}
                        <li className='flex flex-row'>
                            <button>
                                <BsTwitterX className='text-white'/>
                            </button>
                        </li>
                    </ul>

                    <h1 className='text-white text-sm'>CREATIVE RESOLUTION TO SUCCESS</h1>
                </div>
            </div>

            {/*Navigation*/}
            <div className='w-full h-auto bg-white shadow-xl'>
                
                <div className='m-4 flex justify-between items-center'>

                    {/*Menu*/}
                    <div className='flex'>
                        <button className='text-gray-600'>
                            <span class="material-icons">
                            menu
                            </span>
                        </button>
                    </div>
                    {/*Logo*/}
                    <div className='flex'>
                        <img src='../assets/crts-logo-1.png' width='100'></img>
                    </div>

                    {/*User*/}
                    <div className='flex'>

                        <ul className='flex items-center justify-center gap-5'>
                            <li className='text-[#6c757d]'>
                                <span class="material-icons">
                                person
                                </span>
                            </li>

                            <li className='text-[#6c757d]'>
                                <span class="material-icons">
                                shopping_cart
                                </span>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

            {/*Banner*/}
            {/* Mobile: show only on screens smaller than sm */}
<div className="h-auto w-auto sm:hidden">
  <img
    src="../assets/featured-2.jpg"
    className="w-full h-auto object-cover"
    alt="Featured Mobile"
  />
</div>

{/* Tablet / Small Desktop: show on sm+ screens */}
<div className="hidden sm:block lg:hidden">
  <img
    src="../assets/featured-3.jpg"
    className="w-full h-auto object-cover"
    alt="Featured Tablet"
  />
</div>

{/* Large Desktop: show on lg+ screens */}
<div className="hidden lg:block xl:hidden">
  <img
    src="../assets/featured-4.jpg"
    className="w-full h-auto object-cover"
    alt="Featured Desktop"
  />
</div>

<div className="hidden xl:block">
  <img
    src="../assets/featured-5.jpg"
    className="w-full h-auto object-cover"
    alt="Featured Desktop"
  />
</div>




            {/*Products*/}
            <div className='w-full h-auto'>
                <div className='m-5 flex flex-col items-center justify-center gap-5'>
                    
                    <h1 className='text-2xl'>ALL PRODUCTS</h1>

                    <div className='h-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center'>
                        
                        <Cards itemName="Secret" price="1,000.00" image="../assets/featured-1.jpg"/>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apparel