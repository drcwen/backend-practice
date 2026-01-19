
import React, { useState } from "react";
import { FaFacebookF, FaInstagram  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Cards from './Cards'


const Apparel = () => {

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
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
                
                <div className='m-6 flex justify-between items-center'>

                    {/*Menu*/}
                    <div className='md:hidden'>
                        <button className='text-gray-600'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span class="material-icons">
                            menu
                            </span>
                        </button>
                    </div>
                    {/*Logo Mobile*/}
                    <div className='md:hidden '>
                        <img src='../assets/crts-logo-1.png' width='100'></img>
                    </div>

                    {/*Logo PC*/}
                    <div className='hidden md:flex'>
                        <img src='../assets/crts-logo-1.png' width='100'></img>
                    </div>

                    {/*Menu PC */}
                    <div className='hidden md:flex'>
                        <ul className='flex gap-10'>
                            <li className='cursor-pointer hover:text-red-600 transition-colors duration-700'>
                                <h1 className='text-lg'>Home</h1>
                            </li>

                            <li className='cursor-pointer hover:text-red-600 transition-colors duration-700'>
                                <h1 className='text-lg'>Products</h1>
                            </li>

                            <li className='cursor-pointer hover:text-red-600 transition-colors duration-700'>
                                <h1 className='text-lg'>Contact</h1>
                            </li>
                        </ul>
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

                    <div className={`absolute top-32 left-0 w-screen bg-white ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
                        <div className='m-6 mt-10 mb-10'>
                            <ul className='flex flex-col gap-9 justify-center items-center'>
                                <li className='text-xl cursor-pointer'>
                                    <a className=''>Home</a>
                                </li>

                                <li className='text-xl'>
                                    <a className=''>Products</a>
                                </li>

                                <li className='text-xl'>
                                    <a className=''>Contact</a>
                                </li>

                                <li className='text-xl'>
                                    <a className=''>Newsletter</a>
                                </li>
                            </ul>
                        </div>
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
                    
                    <div className='relative bottom-40 left-5 font-semibold text-white text-shadow-lg text-4xl'>
                        <h1 className='text-shadow-lg'>Spark Your Brain Tee</h1>
                        <h1 className='text-xl text-shadow-lg/30'>Now available</h1>
                    </div>
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
                        <Cards itemName="Secret" price="1,000.00" image="../assets/featured-1.jpg"/>
                        <Cards itemName="Secret" price="1,000.00" image="../assets/featured-1.jpg"/>
                        <Cards itemName="Secret" price="1,000.00" image="../assets/featured-1.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apparel