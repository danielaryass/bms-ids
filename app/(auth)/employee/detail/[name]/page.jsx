'use client';
import fetcher from '@/libs/fetcher';
import { FaLeftLong } from 'react-icons/fa6';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import Profile from '@/public/profile.jpg';
import Image from 'next/image';

export default function Page({ params }) {
  const { name } = params;
  const { data, error } = useSWR(`/api/employee/detail/${name}`, fetcher);
  const router = useRouter();
  const goBack = () => router.back();

  if (error) return <div>Error loading data</div>;
  if (!data) return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='lds-ring scale-125'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );

  const birthDate = new Date(data?.data.birth_date);
  const formattedDate = `${birthDate.getDate()}-${
    birthDate.getMonth() + 1
  }-${birthDate.getFullYear()}`;

  return (
    <div className='pb-20'>
      <div className='bg-red-600 py-4 px-4 flex text-white items-center'>
        <FaLeftLong onClick={goBack} className='h-8 w-8 mr-2 cursor-pointer' />
        <h2 className='text-xl text-white'>Detail Karyawan</h2>
      </div>
      <div className='w-full px-4 py-2'>
        <div className='w-full flex'>
          <Image
            className='h-24 w-24 rounded-full'
            src={Profile}
            alt='abcs'
            width={40}
            height={40}
            priority
          />
          <div className='flex flex-col ml-2 w-full justify-center'>
            <p>{data?.data.full_name}</p>
            <p>{data?.data.gender}</p>
            <p>{formattedDate}</p>
          </div>
        </div>
        <div className=''>
          <p className='text-md'>Email</p>
          <p
            className='border-b-2 border-black w-full'
            style={{ overflowWrap: 'break-word' }}
          >
            {data?.data.email}
          </p>
        </div>
      </div>
    </div>
  );
}
