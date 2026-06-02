import { useState } from 'react'
import { useStoreState } from 'easy-peasy';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { MdLink, MdPhone, MdEmail } from 'react-icons/md'
import Header from './components/Header';
import Footer from './components/Footer';
import FilterPanel from './components/FilterPanel';
import MembersGrid from './components/MembersGrid';
import membersList from './data/legislators-current.json';

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const legislators = useStoreState(state => state.legislators);

  return (
    <div className='h-screen flex flex-col'>
      <Header setIsFilterVisible={setIsFilterVisible} />

      <div className='bg-pink-300 flex-1 flex flex-col sm:flex-row sm:overflow-hidden'>
        <FilterPanel isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} />
        <MembersGrid legislators={filterLegislators(legislators, filters)} />
      </div>

      <Footer />
    </div>
  )
}