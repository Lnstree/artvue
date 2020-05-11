import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import News from '@/components/pages/News'
import NewsList from '@/components/pages/NewsList'
import ProductList from '@/components/pages/ProductList'
import Product from '@/components/pages/Product'
import About  from '@/components/pages/About'
import Custom from '@/components/pages/Custom'
import Contact from '@/components/pages/Contact'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news/page/:index',
      name: 'NewsList',
      component: NewsList,
      props: true
    },
    {
      path: '/news/tag/:name/:index',
      name: 'NewsTag',
      component: NewsList,
      props: true
    },
    {
      path: '/news/:id',
      name: 'News',
      component: News,
      props: true
    },
    {
      path: '/product/page/:index',
      name: 'ProductList_ID',
      component: ProductList,
      props: true
    },
    {
      path: '/product/:name/page/:index',
      name: 'ProductList_Name',
      component: ProductList,
      props: true
    },
    {
      path: '/product/:name/content/:id',
      name: 'Product_Name',
      component: Product,
      props: true
    },
    {
      path: '/product/content/:id',
      name: 'Product_ID',
      component: Product,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/custom',
      name: 'Custom',
      component: Custom
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],

  linkActiveClass: "active",

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
