import algoliasearch from "algoliasearch";

const client = algoliasearch(
    process.env.NUXT_ENV_ALGOLIA_APP_ID,
    process.env.NUXT_ENV_ALGOLIA_API_KEY
);

export const state = () => ({
    results: [],
    meta: {},
    loading: false,
});

export const mutations = {
    SET_SEARCH_RESULT(state, payload) {
        const { hits, ...meta } = payload;

        // state.results.push(...hits)
        state.results = hits;
        state.meta = meta;
    },
    SET_LOADING(state, payload) {
        state.loading = payload;
    },
};

export const actions = {
    doSearch({ commit }, payload) {
        /*
        payload = { index: '', query: '' }
    */
        let index = client.initIndex(payload.index);

        commit("SET_LOADING", true);

        if (!payload.query) {
            commit("SET_SEARCH_RESULT", []);
            return;
        }

        index
            .search(payload.query, { hitsPerPage: 5000 })
            .then((searchResult) => {
                commit("SET_SEARCH_RESULT", searchResult);
                commit("SET_LOADING", false);
            })
            .catch((e) => {
                // commit("alert/ERROR_ALERT", JSON.stringify(e))
                console.log(JSON.stringify(e));
            });
    },
};
