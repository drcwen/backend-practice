

import React, { useState } from "react";

const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage('');
        setError('');

        try{
            
            if(password === confirmPassword) {

                const res = await fetch('http://localhost:4000/user/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ firstName, lastName, username, email, password })
                })

                const data = await res.json();

                if(res.ok) {
                    setMessage('Sign up successful');

                    setFirstName('');
                    setLastName('');
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');

                } else {
                    setError(data.error || 'Error');
                }
            }


        } catch(err) {
            setError("Server error");
            console.log(err)
        }
    }
    
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center bg-[url('https://t3.ftcdn.net/jpg/03/22/30/46/360_F_322304683_7ysRarFkmy2osfPKTOYQv7qTPofKelfb.jpg')] bg-cover bg-center"> 
            <div className='flex flex-col border border-gray-600 rounded-lg justify-center items-center bg-white'>
                
                <h1 className='mt-7 text-xl font-bold text-gray-900'>Sign Up to NoteFlow</h1>
                <div className='w-full h-px bg-gray-500 mt-6 mb-3'></div>

                {error && <p className="text-red-500 mb-4">{error}</p>}
                {message && <p className="text-green-500 mb-4">{message}</p>}
                
                <form 
                    className='m-5 flex flex-col justify-center items-center'
                    onSubmit={handleSubmit}
                    >

                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-4'>

                            <input 
                                className='border-2 border-gray-600 rounded-lg px-2 py-2 w-48'
                                placeholder="First Name"
                                type='text'
                                onChange={(e)=> setFirstName(e.target.value)}
                                value={firstName}/>

                            <input 
                                className='border-2 border-gray-600 rounded-lg px-2 py-2'
                                placeholder="Last Name"
                                type='text'
                                onChange={(e)=> setLastName(e.target.value)}
                                value={lastName}/>
                        </div>

                        <input 
                                className='border-2 border-gray-600 rounded-lg px-2 py-2 mt-4'
                                placeholder="Username"
                                type='text'
                                onChange={(e)=> setUsername(e.target.value)}
                                value={username}/>

                        <input 
                                className='border-2 border-gray-600 rounded-lg px-2 py-2 mt-4'
                                placeholder="Email"
                                type='text'
                                onChange={(e)=> setEmail(e.target.value)}
                                value={email}/>

                        <input 
                                className='border-2 border-gray-600 rounded-lg px-2 py-2 mt-4'
                                placeholder="Password"
                                type='password'
                                onChange={(e)=> setPassword(e.target.value)}
                                value={password}/>

                        <input 
                                className='border-2 border-gray-600 rounded-lg px-2 py-2 mt-4'
                                placeholder="Confirm Password"
                                type='password'
                                onChange={(e)=> setConfirmPassword(e.target.value)}
                                value={confirmPassword}/>
                    </div>

                    <button
                        className='border border-gray-600 rounded-lg mt-5 px-4 py-2 bg-blue-900 text-white'>Sign up</button>
                        

                </form>
            </div>
        </div>
    )
}

export default SignUp