import { useState, useEffect } from 'react';
import states from '../data/states.json'
import membersList from '../data/legislators-current.json';

export default function FilterPanel({ isFilterVisible, setIsFilterVisible }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [memberFilter, setMemberFilter] = useState({ sen: true, rep: true });
    const [stateFilter, setStateFilter] = useState('ALL');
    const [districtFilter, setDistrictFilter] = useState('ALL');
    const [partyFilter, setPartyFilter] = useState({ Democrat: true, Republican: true, Independent: true });

    const resetFilters = () => {
        setSearchQuery('');
        setMemberFilter({ sen: true, rep: true });
        setStateFilter('ALL');
        setDistrictFilter('ALL');
        setPartyFilter({ Democrat: true, Republican: true, Independent: true });
    }
    const ordinal = (num) => {
        switch (String(num)) {
            case '1': return '1st';
            case '2': return '2nd';
            case '3': return '3rd';
            default: return num + 'th';
        }
    }

    useEffect(() => {
    }, [searchQuery, memberFilter, stateFilter, districtFilter, partyFilter]);

    return (
        <aside className={`sm:w-80 bg-zinc-100 text-zinc-500 sm:block overflow-y-auto ${isFilterVisible ? '' : 'hidden'}`}>
            <form className='grid sm:grid-cols-1 grid-cols-2 items-start gap-1 p-1' onSubmit={e => e.preventDefault()}>
                <label htmlFor='query' className='hidden'>Search</label>
                <input className='sm:col-span-1 col-span-2 border px-1'
                    id='query' type='text' placeholder='Search...' autocomplete='off'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <fieldset className='col-1 flex flex-col gap-1'>
                    <legend>Member</legend>
                    <label className='bg-zinc-200 flex items-center gap-2'>
                        <input type='checkbox' name='party' value='senator'
                            checked={memberFilter.sen}
                            onChange={e => setMemberFilter(prev => ({ ...prev, sen: !prev.sen }))}
                        />
                        Senator
                    </label>
                    <label className='bg-zinc-200 flex items-center gap-2'>
                        <input type='checkbox' name='party' value='Representative'
                            checked={memberFilter.rep}
                            onChange={e => setMemberFilter(prev => ({ ...prev, rep: !prev.rep }))}
                        />
                        Representative
                    </label>
                    <label className='col-2 sm:col-1'>
                        <p>State</p>
                        <select name='state' className='border w-full'
                            value={stateFilter.state}
                            onChange={e => setStateFilter(e.target.value)}
                        >
                            <hr />
                            <optgroup>
                                <option value='ALL'>All</option>
                            </optgroup>
                            <optgroup label="States">
                                {Object.entries(states).filter(([, region]) => region.type === 'state').map(([abbr, state]) => (
                                    <option key={abbr} value={abbr}>{state.name}</option>
                                ))}
                            </optgroup>
                            <optgroup label='Territories'>
                                {Object.entries(states).filter(([, region]) => region.type === 'territory').map(([abbr, territory]) => (
                                    <option key={abbr} value={abbr}>{territory.name}</option>
                                ))}
                            </optgroup>
                            <optgroup label='D.C.'>
                                {Object.entries(states).filter(([, region]) => region.type === 'district').map(([abbr, dc]) => (
                                    <option key={abbr} value={abbr}>{dc.name}</option>
                                ))}
                            </optgroup>
                        </select>
                    </label>
                    <label className='col-2 sm:col-1'>
                        <p>District</p>
                        <select name='district' className='border w-full disabled:border-zinc-300 disabled:text-zinc-300'
                            value={districtFilter}
                            onChange={e => setDistrictFilter(e.target.value)}
                            disabled={stateFilter === 'ALL' || !states[stateFilter]?.reps}
                        >
                            <option value='ALL'>All</option>
                            {Array.from({ length: Number(states[stateFilter]?.reps) }, (_, i) => (
                                <option value={i + 1} key={i + 1}>{ordinal(i + 1)} District</option>
                            ))}
                        </select>
                    </label>
                </fieldset>
                <div className='h-full sm:col-1 col-2 flex flex-col gap-3 justify-between'>
                    <fieldset className='flex flex-col gap-1'>
                        <legend>Party</legend>
                        <label className='bg-zinc-200 flex items-center gap-2'>
                            <input type='checkbox' name='party'
                                checked={partyFilter.Democrat}
                                onChange={e => setPartyFilter(prev => ({ ...prev, Democrat: !prev.Democrat }))}
                            />
                            Democrat
                        </label>
                        <label className='bg-zinc-200 flex items-center gap-2'>
                            <input type='checkbox' name='party'
                                checked={partyFilter.Republican}
                                onChange={e => setPartyFilter(prev => ({ ...prev, Republican: !prev.Republican }))}
                            />
                            Republican
                        </label>
                        <label className='bg-zinc-200 flex items-center gap-2'>
                            <input type='checkbox' name='party'
                                checked={partyFilter.Independent}
                                onChange={e => setPartyFilter(prev => ({ ...prev, Independent: !prev.Independent }))}
                            />
                            Independent
                        </label>
                    </fieldset>
                    <button type='reset' className='w-full bg-zinc-900 active:bg-zinc-700 text-zinc-100 rounded p-1'
                        onClick={resetFilters}>
                        Reset</button>
                </div>
            </form>
            <button className='sm:hidden w-full bg-zinc-200 active:bg-zinc-300 text-zinc-900' onClick={() => setIsFilterVisible(prev => !prev)}>▲</button>
        </aside >
    )
}