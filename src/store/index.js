import { createStore, action } from 'easy-peasy'
import legislators from '../data/legislators-current.json';

export default createStore({
    legislators,

    searchQuery: '',
    setSearchQuery: action((state, payload) => {
        state.searchQuery = payload;
    }),
    memberFilter: { sen: true, rep: true },
    setMemberFilter: action((state, payload) => {
        state.memberFilter = payload;
    }),
    stateFilter: 'ALL',
    setStateFilter: action((state, payload) => {
        state.stateFilter = payload;
    }),
    districtFilter: 'ALL',
    setDistrictFilter: action((state, payload) => {
        state.districtFilter = payload;
    }),
    partyFilter: { Democrat: true, Republican: true, Independent: true },
    setPartyFilter: action((state, payload) => {
        state.partyFilter = payload;
    }),
})