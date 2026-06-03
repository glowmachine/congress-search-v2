import { createStore, action, thunk } from 'easy-peasy'
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

    legislatorsAPI: [],
    isLoading: false,
    loadingError: null,
    setLegislatorsAPI: action((state, payload) => {
        state.legislatorsAPI = payload;
    }),
    setIsLoading: action((state, payload) => {
        state.isLoading = payload;
    }),
    setLoadingError: action((state, payload) => {
        state.loadingError = payload;
    }),
    fetchLegislatorsAPI: thunk(async (actions) => {
        actions.setIsLoading(true);
        actions.setLoadingError(null);
        try {
            //will throw TypeError: Failed to fetch
            const res = await fetch('https://unitedstates.github.io/congress-legislators/legislators-current.json');
            //will throw ResponseCode: ###
            if (!res.ok) throw new Error(`ResponseCode: ${res.status}`);
            const json = await res.json();
            actions.setLegislatorsAPI(json);
            // await new Promise(resolve =>
            //     setTimeout(() => {
            //         actions.setLegislatorsAPI(legislators);
            //         resolve();
            //     }, 3000)
            // );
        }
        catch (err) {
            actions.setLoadingError(err);
        }
        finally {
            actions.setIsLoading(false);
        }
    }),
})