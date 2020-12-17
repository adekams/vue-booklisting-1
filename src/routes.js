import Vue from 'vue';

import VueRouter from 'vue-router';

import bookForm from '@/components/BookForm';

import bookList from '@/components/BookList';

Vue.use(VueRouter)

//route array
const routes = [
    {
        path:'/form', 
        name: 'form',
        component: bookForm,
    },

    {
        path:'/', 
        name: 'landingPage',
        component: bookList,
    },
]

// initialize a vue router
const router = new VueRouter ({
    routes,
    mode: 'history',
});

// export router
export default router