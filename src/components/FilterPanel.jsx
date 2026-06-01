export default function FilterPanel({ isFilterVisible, setIsFilterVisible }) {
    return (
        <aside className={`sm:w-80 bg-zinc-100 text-zinc-500 sm:block overflow-y-auto ${isFilterVisible ? '' : 'hidden'}`}>
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
            <button className='sm:hidden w-full bg-zinc-200 active:bg-zinc-300 text-zinc-900' onClick={() => setIsFilterVisible(prev => !prev)}>▲</button>
        </aside>
    )
}