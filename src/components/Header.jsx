import { FaFilter } from "react-icons/fa"

export default function Header({ setIsFilterVisible }) {
    return (
        <header className='bg-blue-900 text-white px-2 py-1 flex items-center justify-between'>
            <h1 className='text-2xl'>🇺🇸 US Congress Search</h1>
            <button
                className='border rounded sm:hidden p-1 ml-1'
                onClick={() => setIsFilterVisible(prev => !prev)}
            ><FaFilter />
            </button>
        </header>
    )
}
