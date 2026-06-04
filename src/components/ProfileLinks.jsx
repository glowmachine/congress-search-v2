import { MdLink, MdPhone, MdEmail } from 'react-icons/md'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaWikipediaW } from 'react-icons/fa'

const enabled = 'hover:text-zinc-400';
const disabled = 'disabled disabled:hover: text-zinc-700';

export default function ProfileLinks({ member }) {
    const currentTerm = member.terms.at(-1);
    const email = currentTerm.contact_form
        ?? null;
    const wikipedia = member.id?.wikipedia
        ? `https://en.wikipedia.org/wiki/${member.id.wikipedia}`
        : null;
    const facebook = member.social?.facebook
        ? `https://www.facebook.com/${member.social.facebook}`
        : null;
    const instagram = member.social?.instagram
        ? `https://www.instagram.com/${member.social.instagram}`
        : null;
    const twitter = member.social?.twitter
        ? `https://www.twitter.com/${member.social.twitter}`
        : null;
    let youtube = null;
    if (member.social?.youtube) youtube = `https://youtube.com/user/${member.social.youtube}`;
    else if (member.social?.youtube_id) youtube = `https://youtube.com/channel/${member.social.youtube_id}`;

    return (
        <div className='self-end text-3xl sm:text-xl flex flex-wrap gap-2 border-t-1 border-l-1 p-1'>
            <a href={currentTerm.url} target='_blank' rel='noopener noreferrer'>
                <MdLink className={enabled} /></a>
            <a href={`tel:+1-${currentTerm.phone}`}>
                <MdPhone className={enabled} /></a>
            <a href={email} target='_blank' rel='noopener noreferrer' className={`${email ? enabled : disabled}`}>
                <MdEmail /></a>
            <a href={wikipedia} target='_blank' rel='noopener noreferrer' className={`${wikipedia ? enabled : disabled}`}>
                <FaWikipediaW /></a>
            <a href={facebook} target='_blank' rel='noopener noreferrer' className={`${facebook ? enabled : disabled}`}>
                <FaFacebook /></a>
            <a href={instagram} target='_blank' rel='noopener noreferrer' className={`${instagram ? enabled : disabled}`} >
                <FaInstagram /></a>
            <a href={twitter} target='_blank' rel='noopener noreferrer' className={`${twitter ? enabled : disabled}`}>
                <FaTwitter /></a>
            <a href={youtube} target='_blank' rel='noopener noreferrer' className={`${youtube ? enabled : disabled}`}>
                <FaYoutube /></a>
        </div>
    )
}