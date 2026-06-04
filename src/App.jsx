import { useState, useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { MdLink, MdPhone, MdEmail } from 'react-icons/md'
import Header from './components/Header';
import Footer from './components/Footer';
import FilterPanel from './components/FilterPanel';
import MembersGrid from './components/MembersGrid';
import filterLegislators from './utils/filterLegislators';
import useFilters from './hooks/useFilters';

export default function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const filters = useFilters();
  const fetchLegislatorsData = useStoreActions(action => action.legislators.fetchLegislatorsData);
  const isLoading = useStoreState(state => state.legislators.isLoading);
  const loadingError = useStoreState(state => state.legislators.loadingError);
  const legislatorsData = useStoreState(state => state.legislators.legislatorsData);

  useEffect(() => {
    fetchLegislatorsData();
  }, []);

  return (
    <div className='h-screen flex flex-col'>
      <Header setIsFilterVisible={setIsFilterVisible} />
      <div className='bg-zinc-300 flex-1 flex flex-col sm:flex-row sm:overflow-hidden'>
        <FilterPanel isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} />
        {isLoading && <p className='text-4xl mx-1'>Loading...</p>}
        {loadingError && <p className='text-4xl mx-1'>{loadingError.message}</p>}
        {!isLoading && !loadingError &&
          <MembersGrid legislators={filterLegislators(legislatorsData, filters)} />
        }
      </div>

      <Footer />
    </div>
  )
}