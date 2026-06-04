import { action } from 'easy-peasy';

const filterModel = {
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
}

export default filterModel;