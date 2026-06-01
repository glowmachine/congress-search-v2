import React from 'react'
import ProfileCard from './ProfileCard';

export default function MembersGrid({ membersList }) {
    return (
        <main className='text-zinc-100 w-full p-1 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-1 content-start overflow-y-auto'>
            {membersList.map(member => (
                <ProfileCard
                    key={member.id.bioguide}
                    member={member}
                    name={member.name.official_full}
                    birthday={member.bio.birthday}
                    role={member.terms.at(-1).type}
                    party={member.terms.at(-1).party}
                    state={member.terms.at(-1).state}
                />
            ))}
        </main>
    )
}