export default {
    SET_NEWS(state, resData) {
        state.news = resData;
    },
    SET_ASK(state, resData) {
        state.ask = resData;
    },
    SET_JOBS(state, resData) {
        state.jobs = resData;
    },
    SET_USER(state, resData) {
        state.user = resData;
    }
}