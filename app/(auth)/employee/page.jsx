'use client';
import { useState, useEffect, useRef } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Profile from '@/public/profile.jpg';
import { FaLeftLong, FaMagnifyingGlass } from 'react-icons/fa6';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page() {
  const { data, error } = useSWR('/api/employee', fetcher);
  const searchRef = useRef();
  
  const router = useRouter();
  const goBack = () => router.back();

  const [filteredData, setFilteredData] = useState(data?.data); // Initialize with the full data
  const [itemsToShow, setItemsToShow] = useState(20); // Jumlah item yang akan ditampilkan pertama kali
  const [showLoadMore, setShowLoadMore] = useState(false); // Menunjukkan apakah tombol "Load More" harus ditampilkan
  useEffect(() => {
    // Update filteredData when data changes
    setFilteredData(data?.data || []);
    if (data?.data.length > 20) {
      setShowLoadMore(true); // Tampilkan tombol "Load More" jika data lebih dari 20
    }
  }, [data]);


  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      const keyword = searchRef.current.value.trim();
      const filtered = data?.data.filter((item) => {
        return item.full_name.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredData(filtered); // Update filteredData with the filtered results
    }
  };
  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 20); // Tambahkan 5 item setiap kali tombol "Load More" diklik
    if (itemsToShow >= filteredData.length - 20) {
      setShowLoadMore(false); // Sembunyikan tombol "Load More" jika semua item telah ditampilkan
    }
  };
  return (
    <section className='pb-24'>
      <div className='px-2 py-4 bg-red-600 flex'>
        <FaLeftLong onClick={goBack} className='h-8 w-8 mr-2 cursor-pointer text-white' />
        <h1 className='text-2xl font-semibold text-white'>Daftar Karyawan</h1>
      </div>
      <div className='w-full p-4 relative overflow-hidden'>
        <input
          type='text'
          placeholder='Cari Karyawan'
          className='w-full bg-slate-300 p-2 border-2 rounded-lg pr-7'
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button
          className='absolute right-4 top-1/2 -translate-y-1/2 p-2'
          onClick={handleSearch}
        >
          <FaMagnifyingGlass className='text-xl' />
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        {filteredData?.slice(0, itemsToShow).map((item) => (
          <Link
            href={`/employee/detail/${item.name}`}
            className='flex h-20 w-full'
            key={item.name}
          >
            <div className='flex-shrink-0'>
              <Image
                className='h-20 w-20 rounded-full'
                src={Profile}
                alt='abcs'
                width={40}
                height={40}
              />
            </div>
            <div className='ml-3 flex justify-center flex-col border-b-2 w-3/4'>
              <p className='text-xl text-gray-700 line-clamp-1'>
                {item.full_name}
              </p>
              <p
                className='text-md text-gray-700'
                style={{ overflowWrap: 'break-word' }}
              >
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {showLoadMore && (
        <div className='flex justify-center'>
          <button
            className='bg-blue-500 text-white p-2 mt-4 rounded-md'
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
