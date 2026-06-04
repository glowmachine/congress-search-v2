import { useState } from 'react';
import { FaFilter } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6';
import states from '../data/states.json'
import ProfileLinks from './ProfileLinks';

const partyStyles = {
    Democrat: {
        hoverbg: 'hover:bg-blue-700',
        border: 'border-blue-700',
    },
    Republican: {
        hoverbg: 'hover:bg-red-700',
        border: 'border-red-700',
    },
    Independent: {
        hoverbg: 'hover:bg-zinc-400',
        border: 'border-zinc-400',
    },
}
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
    const currentTerm = member.terms.at(-1);
    const previousTerms = member.terms.slice(0, -1).reverse().map(term => ` '${term.start.slice(2, 4)}`);
    const mostRecentLeadership = member.leadership_roles?.at(-1) ?? null;
    const currentLeader = (mostRecentLeadership?.start && mostRecentLeadership?.end == null) ? mostRecentLeadership : null;

    return (
        <article className={`relative bg-black rounded border-3 border-b-10 p-1 ${partyStyles[currentTerm.party].border ?? 'border-black'} ${expanded ? 'row-span-2' : ''}`}>
            <div name='flagLayer' className='absolute z-0 inset-0 h-35'>
                <img src={`/flags/Flag_of_${states[currentTerm.state].name.replace(/ /g, '_')}.svg`} className='ml-auto h-full' />
            </div>
            <div name='flagOverlay' className='absolute z-10 inset-0 h-35 bg-linear-to-r from-black from-50% via-black/50 via-80% to-black to 90%'>
            </div>
            <div name='contentLayer' className='relative z-20 h-full flex flex-col'>
                <div name='cardTop' className='flex'>
                    <img
                        src={`https://unitedstates.github.io/images/congress/225x275/${member.id.bioguide}.jpg`}
                        alt={`Portrait of ${member.name.first} ${member.name.last}`}
                        className='border aspect-1/1 h-33 object-cover' loading='lazy' />
                    <div className='flex-1 flex flex-col justify-between px-1'>
                        <ul>
                            <li className='mb-1'>{member.name.first} {member.name.last}, {getAge(member.bio.birthday)}</li>
                            <li>{fullTitle[currentTerm.type]} ({partyAbbr[currentTerm.party]})</li>
                            <li>{states[currentTerm.state].name}</li>
                            <li>{currentTerm.district ? `District ${currentTerm.district}` : ''}</li>
                        </ul>
                        <button
                            className={`mb-1 self-end border rounded ${partyStyles[currentTerm.party].hoverbg ?? 'bg-black'} transition duration-300 px-1`}
                            onClick={() => setExpanded(prev => !prev)}>Expand</button>
                    </div>
                </div>
                <div name='cardBottom' className={`flex-1 mt-2 border-t-1 border-zinc-700 p-1 flex flex-col justify-between ${expanded ? 'block' : 'hidden'}`}>
                    <ul>
                        {currentLeader && <h2 className='italic'>Current Role: {currentLeader.title}</h2>}
                        <li>Current Term: {currentTerm.start.slice(0, 4)}-{currentTerm.end.slice(0, 4)}</li>
                    </ul>
                    <ProfileLinks member={member} />
                </div>
            </div>
        </article>
    )
}