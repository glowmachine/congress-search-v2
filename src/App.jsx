import { useState } from 'react'
import { FaFilter, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { MdLink, MdPhone, MdEmail } from 'react-icons/md'

const card = 'bg-cyan-800 rounded border-b-10 p-1 flex flex-col gap-1';
const selected = 'row-span-2';

function App() {
  return (
    <div className='h-screen flex flex-col'>
      <header className='bg-blue-900 text-white px-2 py-1 flex items-center justify-between'>
        <h1 className='text-2xl'>🇺🇸 US Congress Search</h1>
        <button className='border rounded sm:hidden p-1 ml-1'><FaFilter /></button>
      </header>

      <div className='bg-pink-300 flex-1 flex flex-col sm:flex-row sm:overflow-hidden'>
        <aside className='sm:w-80 bg-zinc-100 text-zinc-500 sm:block overflow-y-auto'>
          <form className='grid sm:grid-cols-1 grid-cols-2 items-start gap-1 p-1' action={e => e.preventDefault()}>
            <label htmlFor='query' className='hidden'>Search</label>
            <input className='sm:col-span-1 col-span-2 border px-1'
              id='query'
              type='text'
              placeholder='Search...' />
            <fieldset className='col-1 flex flex-col gap-1'>
              <legend>Member</legend>
              <label className='bg-zinc-200 flex items-center gap-2'>
                <input type='checkbox' name='party' value='senator' />
                Senator
              </label>
              <label className='bg-zinc-200 flex items-center gap-2'>
                <input type='checkbox' name='party' value='Representative' />
                Representative
              </label>
              <label className='col-2 sm:col-1'>
                <p>State/Territory</p>
                <select name='state' className='border w-full'>
                  <option value=""></option>
                  <option value="al">Maine</option>
                  <option value="ak">Northern Mariana Islands</option>
                  <option value="az">District of Columbia</option>
                  <option value="vi">U.S. Virgin Islands</option>
                </select>
              </label>
              <label className='col-2 sm:col-1'>
                <p>District</p>
                <select name='district' className='border w-full'>
                  <option value=""></option>
                  <option value="1">1st District</option>
                  <option value="2">2nd District</option>
                  <option value="3">3rd District</option>
                </select>
              </label>
            </fieldset>
            <div className='h-full sm:col-1 col-2 flex flex-col gap-3 justify-between'>
              <fieldset className='flex flex-col gap-1'>
                <legend>Party</legend>
                <label className='bg-zinc-200 flex items-center gap-2'>
                  <input type='checkbox' name='party' value='democrat' />
                  Democrat
                </label>
                <label className='bg-zinc-200 flex items-center gap-2'>
                  <input type='checkbox' name='party' value='republican' />
                  Republican
                </label>
                <label className='bg-zinc-200 flex items-center gap-2'>
                  <input type='checkbox' name='party' value='independent' />
                  Independent
                </label>
              </fieldset>
              <button type='reset' className='w-full bg-zinc-900 active:bg-zinc-700 text-zinc-100 rounded p-1'>Reset</button>
            </div>
          </form>
          <button className='sm:hidden w-full bg-zinc-200 active:bg-zinc-300 text-zinc-900'>▲</button>
        </aside>



        <main className='text-zinc-100 w-full p-1 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-1 content-start overflow-y-auto'>

          <article className={`${card} border-blue-700`}>
            <div className='flex'>
              <img src='.png' alt='portrait of John Smith' className='bg-zinc-100 aspect-1/1 h-33 object-cover' />
              <div className='flex-1 flex flex-col px-1'>
                <h1 className='mb-1'>John Smith, 67</h1>
                <h2>Senator</h2>
                <h2>California</h2>
                <button className='mt-auto ml-auto border rounded hover:bg-cyan-500 hover:bg-cyan-500 px-1'>Expand</button>
              </div>
            </div>
          </article>

          <article className={`${card} border-red-700`}>
            <div className='flex'>
              <img src='.png' alt='portrait of Jane Doe' className='bg-zinc-100 aspect-1/1 h-33 object-cover' />
              <div className='flex-1 flex flex-col px-1'>
                <h1>Jane Doe, 34</h1>
                <h2>Representative</h2>
                <h2>U.S. Virgin Islands</h2>
                <button className='mt-auto border rounded ml-auto hover:bg-cyan-500 px-1'>Expand</button>
              </div>
            </div>
          </article>
          <article className={`${card} border-white-700`}>
            <div className='flex'>
              <img src='.png' alt='portrait of Joe Bloggs' className='bg-zinc-100 aspect-1/1 h-33 object-cover' />
              <div className='flex-1 flex flex-col px-1'>
                <h1>Joe Bloggs, 72</h1>
                <h2>Representative</h2>
                <h2>Guam</h2>
                <button className='mt-auto border rounded ml-auto hover:bg-cyan-500 px-1'>Expand</button>
              </div>
            </div>
          </article>
          <article className={`${card} border-red-700 ${selected}`}>
            <div className='flex'>
              <img src='.png' alt='portrait of Anna Bell' className='bg-zinc-100 aspect-1/1 h-33 object-cover' />
              <div className='flex-1 flex flex-col px-1'>
                <h1>Anna Bell, 101</h1>
                <h2>Representative</h2>
                <h2>Vermont</h2>
                <button className='mt-auto border rounded ml-auto hover:bg-cyan-500 px-1'>Collapse</button>
              </div>
            </div>
            <div className='flex-1 mt-1 border-t-1 border-cyan-500 flex flex-col justify-between'>
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
          <article className={`${card} border-blue-700`}>
            <div className='flex'>
              <img src='.png' alt='portrait of John Smith' className='bg-zinc-100 aspect-1/1 h-33 object-cover' />
              <div className='flex-1 flex flex-col px-1'>
                <h1>John Smith, 67</h1>
                <h2>Senator</h2>
                <h2>California</h2>
                <button className='mt-auto border rounded ml-auto hover:bg-cyan-500 px-1'>Expand</button>
              </div>
            </div>
          </article>
          <article className={`${card} border-red-700`}>
            <div className='flex'>
              <img src='.png' alt='portrait of Jane Doe' className='bg-zinc-100 aspect-1/1 h-33 object-cover' />
              <div className='flex-1 flex flex-col px-1'>
                <h1>Jane Doe, 34</h1>
                <h2>Representative</h2>
                <h2>U.S. Virgin Islands</h2>
                <button className='mt-auto border rounded ml-auto hover:bg-cyan-500 px-1'>Expand</button>
              </div>
            </div>
          </article>
          <article className={`${card} border-red-700`}>
            <div className='flex'>
              <img src='.png' alt='portrait of Joe Bloggs' className='bg-zinc-100 aspect-1/1 h-33 object-cover' />
              <div className='flex-1 flex flex-col px-1'>
                <h1>Joe Bloggs, 72</h1>
                <h2>Representative</h2>
                <h2>Guam</h2>
                <button className='mt-auto border rounded ml-auto hover:bg-cyan-500 px-1'>Expand</button>
              </div>
            </div>
          </article>
        </main>
      </div>
      <footer className='flex justify-center bg-red-900 text-white text-xs'>
        <span>&copy; {new Date().getFullYear()} Michael Wong</span>
      </footer>
    </div>
  )
}

export default App