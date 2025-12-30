


import React, { useState } from "react";

function Card({title, content}) {

    
    return(
       <div className='w-64 h-64 bg-red-500 rounded-3xl'>

            <div className='m-5 h-full flex flex-col gap-5'>
                <h1
                    className='text-xl font-semibold text-white'>{title}</h1>

                <p 
                    className='text-base text-white'>
                    {content}
                </p>
                
                <div className='flex flex-row- gap-4'>
                    <button>
                        <span class="material-symbols-outlined text-white">
                            edit
                        </span>
                    </button>

                    <button>
                        <span class="material-symbols-outlined text-white">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card