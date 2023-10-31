'use client';
import { useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const response = await axios.post('/api/auth', data);
    console.log(response)
    router.push('/')
  };
  return (
    <section className='w-full flex justify-center items-center my-auto px-2'>
      <div className='bg-slate-700 py-8 px-4 rounded-lg flex flex-col'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-white'>
            PT Indonesia Defence Services
          </h2>
          <p className='text-white text-xl font-semibold pt-2'>
            Silahkan Login
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col pt-4'>
            <label htmlFor='username' className='text-white text-lg'>
              Username
            </label>
            <input
              type='text'
              name='username'
              id='username'
              className='bg-slate-600 px-4 py-2 rounded-lg'
              ref={usernameRef}
            />
          </div>
          <div className='flex flex-col pt-4'>
            <label htmlFor='password' className='text-white text-lg'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='bg-slate-600 px-4 py-2 rounded-lg'
              ref={passwordRef}
            />
          </div>
          <div className='flex justify-center pt-4'>
            <button className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold'>
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
