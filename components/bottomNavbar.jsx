'use client';
import Link from 'next/link';
import {
  FaBell,
  FaCamera,
  FaCircleUser,
  FaHouseChimney,
  FaPerson,
} from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
const BottomNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className='fixed bottom-0 left-0 right-0 px-2 w-full bg-slate-200 z-10'>
      <ul className='flex justify-around gap-2'>
        <Link href='/dashboard' className='w-1/5 py-4'>
          <li
            className={`flex justify-center items-center flex-col gap-1 ${
              pathname == '/dashboard'
                ? 'text-black scale-110'
                : 'text-slate-400'
            }`}
          >
            <FaHouseChimney className='text-2xl' />
            <p className='text-md font-semibold'>Home</p>
          </li>
        </Link>
        <Link href='/ess' className='w-1/5 py-4'>
          <li
            className={`flex justify-center items-center flex-col gap-1 ${
              pathname == '/ess' ? 'text-black scale-110' : 'text-slate-400'
            }`}
          >
            <FaPerson className='text-2xl' />
            <p className='text-md font-semibold'>ESS</p>
          </li>
        </Link>
        <Link href='/camera' className='w-1/5 py-4'>
          <li
            className={`flex justify-center items-center flex-col gap-1 ${
              pathname == '/camera' ? 'text-black scale-110' : 'text-slate-400'
            }`}
          >
            <FaCamera className='text-2xl' />
            <p className='text-md font-semibold'>Camera</p>
          </li>
        </Link>
        <Link href='/notification' className='w-1/5 py-4'>
          <li
            className={`flex justify-center items-center flex-col gap-1 ${
              pathname == '/notification'
                ? 'text-black scale-110'
                : 'text-slate-400'
            }`}
          >
            <FaBell className='text-2xl' />
            <p className='text-md font-semibold'>Notif</p>
          </li>
        </Link>
        <Link href='/profile' className='w-1/5 py-4'>
          <li
            className={`flex justify-center items-center flex-col gap-1 ${
              pathname == '/profile' ? 'text-black scale-110' : 'text-slate-400'
            }`}
          >
            <FaCircleUser className='text-2xl' />
            <p className='text-md font-semibold'>Profile</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
