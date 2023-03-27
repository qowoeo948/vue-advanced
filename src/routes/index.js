import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

import createListView from "../views/CreateListView";
import bus from '../utils/bus'
import { store } from '../store/index'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", //url # hash값 제거
  routes: [
    {
      //path: url주소
      path: "/",
      //component: url 주소로 갔을 때 표시될 컴포넌트
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: NewsView, // mixin으로한거

      //이것들이 하이오더컴포넌트 (3개의 컴포넌트를 하위오더로 재사용)
      /* component: createListView('NewsView') */

      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        setTimeout(() => {
            store.dispatch("FETCH_LIST", to.name)
            .then((response) => {
              /* 각 view.vue 에서 mounted속성으로 처리한다 */
             /*  bus.$emit("end:spinner"); */
             
              next();
            })
            .catch((error) => {
              console.log(error);
            });
        }, 2000);
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      /* component: createListView('AskView') */

      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        setTimeout(() => {
            store.dispatch("FETCH_LIST", to.name)
            .then(() => {
              /* bus.$emit("end:spinner"); */
              next();
            })
            .catch((error) => {
              console.log(error);
            });
        }, 2000);
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      /* component: createListView('JobsView') */

      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        setTimeout(() => {
            store.dispatch("FETCH_LIST", to.name)
            .then(() => {
              /* bus.$emit("end:spinner"); */
              next();
            })
            .catch((error) => {
              console.log(error);
            });
        }, 2000);
      },
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
