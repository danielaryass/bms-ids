import Link from 'next/link';
const Navbar = () => {
  return (
    <header className='flex px-8 justify-between items-center py-4 '>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>BMS IDS</h1>
      </Link>
      <nav className=''>
        <ul>
          <li>
            <Link
              href=''
              className='text-xl font-semibold bg-red-600 px-4 py-2 text-white rounded-lg'
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;