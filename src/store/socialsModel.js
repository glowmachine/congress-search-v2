import { action, thunk } from 'easy-peasy';
// import socialsJSON from '../data/legislators-social-media.json';

const socialsModel = {
    socialsData: [],
    isLoading: false,
    loadingError: null,
    setSocialsData: action((state, payload) => {
        state.socialsData = payload;
    }),
    setIsLoading: action((state, payload) => {
        state.isLoading = payload;
    }),
    setLoadingError: action((state, payload) => {
        state.loadingError = payload;
    }),
    fetchSocialsData: thunk(async (actions) => {
        actions.setIsLoading(true);
        actions.setLoadingError(null);
        try {
            const res = await fetch('https://unitedstates.github.io/congress-legislators/legislators-social-media.json');
            if (!res.ok) throw new Error(`ResponseCode: ${res.status}`);
            const json = await res.json();
            actions.setSocialsData(json);
            // actions.setSocialsData(socialsJSON);
        }
        catch (err) {
            actions.setLoadingError(err);
        }
        finally {
            actions.setIsLoading(false);
        }
    }),
}

export default socialsModel;