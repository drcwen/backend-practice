
import React, { useState } from "react";

const Login = () => {

    return(
        <div className="w-full h-screen flex flex-row bg-[url('https://t3.ftcdn.net/jpg/03/22/30/46/360_F_322304683_7ysRarFkmy2osfPKTOYQv7qTPofKelfb.jpg')] bg-cover bg-center">
            
            <div className="h-screen w-1/2 flex flex-col justify-center items-center text-center">
                <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png' width='60' className='mb-3'></img>
                <h1 className='text-5xl text-white font-bold mb-5'>NoteFlow</h1>
                <h1 className='text-xl text-white'>The ultimate note app for your notes!</h1>
            </div>

            <div className="h-screen w-1/2 bg-white rounded-3xl flex flex-col justify-center items-center text-gray-900">
                
                <h1 className='text-3xl font-bold m-1'>LOGIN</h1>

                <h1 className='text-xl '>Login your account</h1>

                <form className='m-5 flex flex-col justify-center items-center'>
                    <div className='flex flex-row gap-4 justify-center items-center'>
                        <span className="material-symbols-outlined text-gray-600">person</span>
                        <input className='border-2 rounded-lg border-gray-600 px-2 py-1 w-64' type='text'/>
                    </div>
                    
                    <div className='flex flex-row gap-4 justify-center items-center mt-5'>
                        <span class="material-symbols-outlined text-gray-600">
                            lock
                        </span>
                        <input className='border-2 rounded-lg border-gray-600 px-2 py-1 w-64' type='password'/>
                    </div>

                    <button className='font-medium border border-gray-600 rounded-lg px-5 py-1 mt-5'>Login</button>
                </form>

                <div className='flex flex-row gap-1'>
                    <h1>No account yet?</h1>
                    <a href='' className='hover:underline decoration-1'>Sign up here.</a>
                </div>
                
            </div>
        </div>  

    )
}

export default Login