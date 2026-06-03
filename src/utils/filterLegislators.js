export default function filterLegislators(legislators, filters) {
    return legislators
        .filter(member => {
            const currentTerm = member.terms.at(-1);

            const stateMatch = (filters.stateFilter === 'ALL') ||
                currentTerm.state === (filters.stateFilter);
            const districtMatch = (filters.districtFilter === 'ALL') ||
                currentTerm.district === (Number(filters.districtFilter)) ||
                //api: sole reps are district 0)
                currentTerm.district === (0);
            const partyMatch = filters.partyFilter[currentTerm.party];
            const memberMatch = filters.memberFilter[currentTerm.type];
            const searchMatch =
                `${member.name.first.toLowerCase()}
                ${member.name.last.toLowerCase()}
                ${member.name.full_name?.toLowerCase()}
                ${member.name.middle?.toLowerCase()}
                ${member.name.suffix?.toLowerCase()}
                ${member.name.nickname?.toLowerCase()}`
                    .includes(filters.searchQuery.toLowerCase());

            return (stateMatch &&
                districtMatch &&
                partyMatch &&
                memberMatch &&
                searchMatch);
        });
}