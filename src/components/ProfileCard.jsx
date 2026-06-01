import { FaFilter, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { MdLink, MdPhone, MdEmail } from 'react-icons/md'

const accentColor = {
    democrat: 'border-blue-700',
    republican: 'border-red-700',
    independent: 'border-zinc-100',
};

const selected = true;

export default function ProfileCard({ name, role, state, party, expanded }) {
    return (
        <article className={`bg-cyan-800 rounded border-b-10 p-1 flex flex-col gap-1 ${accentColor[party] ?? 'border-black'} ${expanded ? 'row-span-2' : ''}`}>
            <div className='flex'>
                <img src='.png' alt='portrait of John Smith' className='bg-zinc-100 aspect-1/1 h-33 object-cover' />
                <div className='flex-1 flex flex-col px-1'>
                    <h1 className='mb-1'>{name}</h1>
                    <h2>{role}</h2>
                    <h2>{state}</h2>
                    <button className='mt-auto ml-auto border rounded hover:bg-cyan-500 hover:bg-cyan-500 px-1'>Expand</button>
                </div>
            </div>
            <div className={`flex-1 mt-1 border-t-1 border-cyan-500 flex flex-col justify-between ${expanded ? 'block' : 'hidden'}`}>
                <h2>District 9</h2>
                <h2>Current term: 1999-2066</h2>
                <div className='mt-auto ml-auto text-3xl sm:text-xl flex justify-end gap-2 border-t-1 border-l-1 p-1'>
                    <MdLink className='hover:text-cyan-500' />
                    <MdPhone className='hover:text-cyan-500' />
                    <MdEmail className='hover:text-cyan-500' />
                    <FaFacebook className='hover:text-cyan-500' />
                    <FaYoutube className='hover:text-cyan-500' />
                    <FaTwitter className='hover:text-cyan-500' />
                    <FaInstagram className='hover:text-cyan-500' />
                    <FaTiktok className='hover:text-cyan-500' />
                </div>
            </div>
        </article>
    )
}