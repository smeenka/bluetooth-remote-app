import logger from './service/logger'
import HomePage from './pages/home.vue' 
import AboutPage from './pages/about.vue'
import FormPage from './pages/form.vue'
import DynamicRoutePage from './pages/dynamic-route.vue'
import NotFoundPage from './pages/not-found.vue'

import PanelLeftPage from './pages/panel-left.vue'
import PanelRightPage from './pages/panel-right.vue'

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  }
];
