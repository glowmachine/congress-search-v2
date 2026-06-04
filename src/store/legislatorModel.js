import { action, thunk, computed } from "easy-peasy";
import legislatorsJSON from '../data/legislators-current.json';

const legislatorModel = {
    legislatorsData: [],
    isLoading: false,
    loadingError: null,
    setLegislatorsData: action((state, payload) => {
        state.legislatorsData = payload;
    }),
    setIsLoading: action((state, payload) => {
        state.isLoading = payload;
    }),
    setLoadingError: action((state, payload) => {
        state.loadingError = payload;
    }),
    fetchLegislatorsData: thunk(async (actions) => {
        actions.setIsLoading(true);
        actions.setLoadingError(null);
        try {
            // //will throw TypeError: Failed to fetch
            // const res = await fetch('https://unitedstates.github.io/congress-legislators/legislators-current.json');
            // //will throw ResponseCode: ###
            // if (!res.ok) throw new Error(`ResponseCode: ${res.status}`);
            // const json = await res.json();
            // actions.setLegislatorsData(json);
            await new Promise(resolve =>
                setTimeout(() => {
                    actions.setLegislatorsData(legislatorsJSON);
                    resolve();
                }, 1000)
            );
        }
        catch (err) {
            actions.setLoadingError(err);
        }
        finally {
            actions.setIsLoading(false);
        }
    }),
    enrichedLegislatorsData: computed(
        //select data from legislatorModel and socialsModel
        [
            state => state.legislatorsData,
            (state, storeState) => storeState.socials.socialsData,
        ],
        //transform data, args in above select order
        (legislators, socials) => {
            //lookup map
            const socialsMap = Object.fromEntries(
                socials.map(s => [s.id.bioguide, s])
            );
            return legislators.map(l => ({
                ...l,
                social: socialsMap[l.id.bioguide] ?? null,
            }));
        }
    ),
}

export default legislatorModel;