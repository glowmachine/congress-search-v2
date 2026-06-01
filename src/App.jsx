import { useState } from 'react'
import { FaFilter, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { MdLink, MdPhone, MdEmail } from 'react-icons/md'
import FilterPanel from './components/FilterPanel';
import ProfileCard from './components/ProfileCard';

const card = 'bg-cyan-800 rounded border-b-10 p-1 flex flex-col gap-1';
const selected = 'row-span-2';

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <div className='h-screen flex flex-col'>
      <header className='bg-blue-900 text-white px-2 py-1 flex items-center justify-between'>
        <h1 className='text-2xl'>🇺🇸 US Congress Search</h1>
        <button
          className='border rounded sm:hidden p-1 ml-1'
          onClick={() => setIsFilterVisible(prev => !prev)}
        ><FaFilter />
        </button>
      </header>

      <div className='bg-pink-300 flex-1 flex flex-col sm:flex-row sm:overflow-hidden'>
        <FilterPanel isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} />


        <main className='text-zinc-100 w-full p-1 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-1 content-start overflow-y-auto'>

          <ProfileCard
            name='Jane Doe, 34'
            role='Representative'
            party='democrat'
            state='U.S. Virgin Islands'
            expanded={false} />
          <ProfileCard
            name='Jane Doe, 34'
            role='Representative'
            party='democrat'
            state='U.S. Virgin Islands'
            expanded={true} />
          <ProfileCard
            name='Jane Doe, 34'
            role='Representative'
            party='democrat'
            state='U.S. Virgin Islands'
            expanded={false} />
          <ProfileCard
            name='Jane Doe, 34'
            role='Representative'
            party='democrat'
            state='U.S. Virgin Islands'
            expanded={false} />
        </main>
      </div>
      <footer className='flex justify-center bg-red-900 text-white text-xs'>
        <span>&copy; {new Date().getFullYear()} Michael Wong</span>
      </footer>
    </div>
  )
}

export default App