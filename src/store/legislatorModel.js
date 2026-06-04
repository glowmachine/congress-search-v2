import { action, thunk } from "easy-peasy";
import legislators from '../data/legislators-current.json';

const legislatorModel = {
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
            //     }, 1000)
            // );
        }
        catch (err) {
            actions.setLoadingError(err);
        }
        finally {
            actions.setIsLoading(false);
        }
    }),
}

export default legislatorModel;