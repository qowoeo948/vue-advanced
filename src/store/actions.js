import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from '../api/index'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            //(Backend에서 가져온) actions에서 state로 바로 넘길수 없다
            // actions -> mutations -> state 순으로 가야함
            // state.news = response.data;

            //위에 문제 해결 (mutations로 넘김)
            context.commit('SET_NEWS', response.data);
            return response;
          })
          .catch(error => {
            console.log(error);
          })
    },
    FETCH_ASK(context) {
        fetchAskList()
        .then(response => {
            context.commit('SET_ASK', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    //이렇게 쓸수도있대
    FETCH_JOBS({ commit }) { 
        fetchJobsList()
        .then(({ data }) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
        console.log(error);
        })
      } ,
    FETCH_USER(context, userName) {
        fetchUserInfo(userName)
        .then(response => {
            context.commit('SET_USER', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM(context, item) {
        fetchItemInfo(item)
        .then(response => {
            context.commit('SET_ITEM', response.data);
        })
        .catch(error => {
            console.log(error);
        }) 
    }
}