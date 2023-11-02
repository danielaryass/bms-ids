'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';

export default function Home() {
  const [data, setData] = useState([]);
  const [dataWhistle, setDataWhistle] = useState([]);
  const [fullname, setFullname] = useState('');
  useEffect(() => {
    const fullname = localStorage.getItem('fullname');
    setFullname(fullname);
    clearTimeout();
  }, []);
  const handleGetDataUser = async (e) => {
    e.preventDefault();
    setDataWhistle();
    const response = await axios.get('/api/employeetoken');
    setData(response.data);
    console.log(response.data);
  };
  const handleGetDataWhistle = async (e) => {
    e.preventDefault();
    setData();
    const response = await axios.get('/api/whistle');
    setDataWhistle(response.data);
    console.log(response.data);
  };
  return (
    <main className='flex flex-col'>
      <div className='w-full max-h-28 bg-red-600 p-4'>
        <p className='text-md font-semibold text-white'>Welcome</p>
        <p className='text-xl font-semibold text-white'>{fullname}</p>
      </div>
      <div className='bg-slate-200 grid grid-cols-3 px-2 py-4 gap-4 w-full'>
        <Link href='employee' className='flex items-center flex-col'>
          <FaPeopleGroup className='text-4xl' />
          <span className='text-md font-semibold'>Karyawan</span>
        </Link>
        <Link href='employee' className='flex items-center flex-col'>
          <FaPeopleGroup className='text-4xl' />
          <span className='text-md font-semibold'>Karyawan</span>
        </Link>
        <Link href='employee' className='flex items-center flex-col'>
          <FaPeopleGroup className='text-4xl' />
          <span className='text-md font-semibold'>Karyawan</span>
        </Link>
        <Link href='employee' className='flex items-center flex-col'>
          <FaPeopleGroup className='text-4xl' />
          <span className='text-md font-semibold'>Karyawan</span>
        </Link>
        <Link href='employee' className='flex items-center flex-col'>
          <FaPeopleGroup className='text-4xl' />
          <span className='text-md font-semibold'>Karyawan</span>
        </Link>
      </div>
      {/* <div className='p-4 flex gap-4'>
        <button
          onClick={handleGetDataUser}
          className='bg-slate-400 text-white rounded-md px-4 py-2'
        >
          Get Data User
        </button>
        <button
          onClick={handleGetDataWhistle}
          className='bg-slate-400 text-white rounded-md px-4 py-2'
        >
          Get Data Whistle
        </button>
      </div>
      <div className='flex'>
        <ul className='grid grid-cols-3 gap-2'>
          {data?.data?.map((item) => (
            <div
              key={item.name}
              className='bg-blue-400 rounded-sm max-w-lg p-2 overflow-hidden'
            >
              <h3>Email:{item.name}</h3>
              <h3>Full Name: {item.full_name}</h3>
            </div>
          ))}
          {dataWhistle?.data?.map((item) => (
            <div
              key={item.name}
              className='bg-blue-400 rounded-sm max-w-lg p-2'
            >
              <h3>Name:{item.name}</h3>
            </div>
          ))}
        </ul>
      </div> */}
    </main>
  );
}
