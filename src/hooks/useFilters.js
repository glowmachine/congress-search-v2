import { useStoreState, useStoreActions } from 'easy-peasy';

export default function useFilters() {
    const searchQuery = useStoreState((state) => state.filters.searchQuery);
    const memberFilter = useStoreState((state) => state.filters.memberFilter);
    const stateFilter = useStoreState((state) => state.filters.stateFilter);
    const districtFilter = useStoreState((state) => state.filters.districtFilter);
    const partyFilter = useStoreState((state) => state.filters.partyFilter);

    const setSearchQuery = useStoreActions((action) => action.filters.setSearchQuery);
    const setMemberFilter = useStoreActions((action) => action.filters.setMemberFilter);
    const setStateFilter = useStoreActions((action) => action.filters.setStateFilter);
    const setDistrictFilter = useStoreActions((action) => action.filters.setDistrictFilter);
    const setPartyFilter = useStoreActions((action) => action.filters.setPartyFilter);

    return {
        searchQuery,
        partyFilter,
        memberFilter,
        districtFilter,
        stateFilter,

        setSearchQuery,
        setMemberFilter,
        setStateFilter,
        setDistrictFilter,
        setPartyFilter,
    }
}