import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index'

export default {
    //promise
    /* FETCH_NEWS(context) {
        return fetchNewsList()
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
    }, */

    //async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    //promise
  /*   FETCH_ASK(context) {
        return fetchAskList()
        .then(response => {
            context.commit('SET_ASK', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, */

    //async
    async FETCH_ASK(context) {
        const response = await fetchAskList();
        context.commit('SET_ASK', response.data);
        return response;
    },

    //promise
    //이렇게 쓸수도있대
    /* FETCH_JOBS({ commit }) { 
        return fetchJobsList()
        .then(({ data }) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
        console.log(error);
        })
      } , */

      //async
    async FETCH_JOBS(context) {
        const response = await fetchJobsList();
        context.commit('SET_JOBS', response.data);
        return response;
    },

    FETCH_USER(context, userName) {
        return fetchUserInfo(userName)
        .then(response => {
            context.commit('SET_USER', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM(context, item) {
        return fetchItemInfo(item)
        .then(response => {
            context.commit('SET_ITEM', response.data);
        })
        .catch(error => {
            console.log(error);
        }) 
    },

    //promise
    /* FETCH_LIST(context, pageName) {
        return fetchList(pageName)
        .then(response => {
            context.commit('SET_LIST', response.data);
            return response;
        })
        .catch(error => {
            console.log(error);
        }) 
    } */

    //async
    async FETCH_LIST(context, pageName) {
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response;
    }
}