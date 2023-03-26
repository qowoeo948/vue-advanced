import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', //url # hash값 제거
    routes: [
        {
            //path: url주소
            path: '/',
            //component: url 주소로 갔을 때 표시될 컴포넌트
            redirect: '/news',
        },
        {
            path: '/news',
            component: NewsView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/jobs',
            component: JobsView,
        }
    ]
});

