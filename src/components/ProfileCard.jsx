import { useState } from 'react';
import { FaFilter, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaWikipediaW } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { MdLink, MdPhone, MdEmail } from 'react-icons/md'
import { states, territories, dc } from '../utils/stateUtils'

const accentColor = {
    Democrat: 'border-blue-700',
    Republican: 'border-red-700',
    Independent: 'border-zinc-100',
};
const partyAbbr = {
    Democrat: 'D',
    Republican: 'R',
    Independent: 'I',
}
const fullTitle = {
    sen: 'Senator',
    rep: 'Representative'
}

function getAge(bDayString) {
    const today = new Date();
    const birthday = new Date(bDayString);
    const age = today.getFullYear() - birthday.getFullYear();

    const birthdayThisYear = new Date(
        today.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
    );
    return today >= birthdayThisYear ? age : age - 1;
}

export default function ProfileCard({ member }) {
    const [expanded, setExpanded] = useState(false);
    const current = member.terms.at(-1);

    return (
        <article className={`bg-cyan-800 rounded border-b-10 p-1 flex flex-col gap-1 ${accentColor[current.party] ?? 'border-black'} ${expanded ? 'row-span-2' : ''}`}>
            <div className='flex'>
                <img src='.png' alt={`portrait of ${member.name.first} ${member.name.last}`} className='bg-zinc-100 aspect-1/1 h-33 object-cover' />
                <div className='flex-1 flex flex-col px-1'>
                    <h1 className='mb-1'>{member.name.first} {member.name.last}, {getAge(member.bio.birthday)}</h1>
                    <h2>{fullTitle[current.type]} ({partyAbbr[current.party]})</h2>
                    <h2>{{ ...states, ...territories, ...dc }[current.state].name}</h2>
                    <button
                        className='mt-auto ml-auto border rounded hover:bg-cyan-500 hover:bg-cyan-500 px-1'
                        onClick={() => setExpanded(prev => !prev)}>Expand</button>
                </div>
            </div>
            <div className={`flex-1 mt-1 border-t-1 border-cyan-500 flex flex-col justify-between ${expanded ? 'block' : 'hidden'}`}>
                <h2>{current.district ? `District ${current.district}` : ''}</h2>
                <h2>Current term: {current.start.slice(0, 4)}-{current.end.slice(0, 4)}</h2>
                <div className='mt-auto ml-auto text-3xl sm:text-xl flex justify-end gap-2 border-t-1 border-l-1 p-1'>
                    <a href={current.url} target='_blank' rel='noopener noreferrer'>
                        <MdLink className='hover:text-cyan-500' /></a>
                    <a href={`tel:+1-${current.phone}`}>
                        <MdPhone className='hover:text-cyan-500' /></a>
                    <a href={current.contact_form} target='_blank' rel='noopener noreferrer'>
                        <MdEmail className={`hover:text-cyan-500 ${!current.contact_form ? 'text-red-500' : ''}`} />
                    </a>
                </div>
            </div>
        </article >
    )
}