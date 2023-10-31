'use client';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [dataWhistle, setDataWhistle] = useState([]);

  const handleGetDataUser = async (e) => {
    e.preventDefault();
    setDataWhistle();
    const response = await axios.get('/api/employee');
    setData(response.data);
  };
  const handleGetDataWhistle = async (e) => {
    e.preventDefault();
    setData();
    const response = await axios.get('/api/whistle');
    setDataWhistle(response.data);
  }
  return (
    <main className='min-h-screen flex flex-col'>
      <div className='p-4 flex gap-4'>
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
              className='bg-blue-400 rounded-sm max-w-lg p-2'
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
      </div>
    </main>
  );
}
