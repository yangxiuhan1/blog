import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import test from '@/views/test.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: 'test',
        name: 'test',
        component: test
    }]
})