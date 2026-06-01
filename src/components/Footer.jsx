export default function Footer() {
    return (
        <footer className='flex justify-center bg-red-900 text-white text-xs'>
            <span>&copy; {new Date().getFullYear()} Michael Wong</span>
        </footer>
    )
}