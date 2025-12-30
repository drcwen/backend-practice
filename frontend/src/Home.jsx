

import React, { useState } from "react";

const Home = () => {

    
    return(
        <div className='w-full h-screen flex flex-row'>
            
            {/* Sidebar */}
            <div className="h-screen w-auto bg-[url('https://t3.ftcdn.net/jpg/03/22/30/46/360_F_322304683_7ysRarFkmy2osfPKTOYQv7qTPofKelfb.jpg')] bg-cover bg-center rounded-tr-3xl rounded-br-3xl ">
                
                {/* Sidebar Contents */}
                <div className='m-10 flex flex-col gap-5'>
                    <h1 className='text-white font-bold text-3xl'>NoteFlow</h1>

                    {/*Account*/}
                    <div className='flex flex-row items-center gap-3'>
                        <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzae43SashCS2C5nN3x0UikbCZbRRmP73bg&s' 
                        className='w-10 h-10 rounded-full object-cover'></img>
                        <h1 className='text-white font-bold'>Queen Yasmin</h1>

                        <a className='cursor-pointer flex'>
                            <span class="material-symbols-outlined text-white">
                                logout
                            </span>
                        </a>
                    </div>

                    {/*Divider*/}
                    <div className='w-full h-px bg-white'></div>

                    {/*Directories*/}
                    <div className='w-auto h-auto flex flex-col gap-1'>

                        {/*Home*/}
                        <div className='flex flex-col'>
                            <a className='cursor-pointer text-white font-semibold text-xl rounded-lg hover:bg-red-100 py-3 px-2 hover:text-blue-600'>Home</a>
                        </div>

                        
                        
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Home