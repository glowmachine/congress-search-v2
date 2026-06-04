import { MdLink, MdPhone, MdEmail } from 'react-icons/md'

const missing = 'text-red-500';

export default function ProfileLinks({ member }) {
    const currentTerm = member.terms.at(-1);

    return (
        <div className='mt-auto ml-auto text-3xl sm:text-xl flex flex-wrap justify-end gap-2 border-t-1 border-l-1 p-1'>
            <a href={currentTerm.url} target='_blank' rel='noopener noreferrer'>
                <MdLink className='hover:text-cyan-500' /></a>
            <a href={`tel:+1-${currentTerm.phone}`}>
                <MdPhone className='hover:text-cyan-500' /></a>
            <a href={currentTerm.contact_form} target='_blank' rel='noopener noreferrer'>
                <MdEmail className={`hover:text-cyan-500 ${!currentTerm.contact_form ? 'text-red-500' : ''}`} /></a>
        </div>
    )
}
