import { useStoreState, useStoreActions } from 'easy-peasy';

export default function useFilters() {
    const searchQuery = useStoreState((state) => state.searchQuery);
    const memberFilter = useStoreState((state) => state.memberFilter);
    const stateFilter = useStoreState((state) => state.stateFilter);
    const districtFilter = useStoreState((state) => state.districtFilter);
    const partyFilter = useStoreState((state) => state.partyFilter);

    const setSearchQuery = useStoreActions((action) => action.setSearchQuery);
    const setMemberFilter = useStoreActions((action) => action.setMemberFilter);
    const setStateFilter = useStoreActions((action) => action.setStateFilter);
    const setDistrictFilter = useStoreActions((action) => action.setDistrictFilter);
    const setPartyFilter = useStoreActions((action) => action.setPartyFilter);

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