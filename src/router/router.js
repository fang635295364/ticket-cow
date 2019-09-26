import Vue from 'vue'
import Router from 'vue-router'

const idx = () => import("../views/index.vue")
const home = () => import("../views/home/home.vue")
const list = () => import("../views/list/list.vue")
const found = () => import("../views/found/found.vue")
const message = () => import("../views/message/message.vue")
const mine = () => import("../views/mine/mine.vue")
const details = () => import("../views/details/details.vue")

const service = () => import("../views/home/components/home-service.vue")

const youhui = () => import("../views/mine/youhui.vue")
const lipinka = () => import("../views/mine/lipinka.vue")
const dingdan = () => import("../views/mine/dingdan.vue")
const geren = () => import("../views/mine/geren.vue")

const piaoniu = () => import("../views/message/xiaoxi/piaoniu.vue")
const xitong = () => import("../views/message/xiaoxi/xitong.vue")
const hudong = () => import("../views/message/xiaoxi/hudong.vue")
const kefu = () => import("../views/message/xiaoxi/kefu.vue")

import mintUi from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import "../../node_modules/mint-ui/lib/style.min.css"
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);


Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/idx", component: idx },
    {
      path: "/home",
      component: home,
      meta: { navShow: true, cname: '一级页面' },
      children: [
        {
          path: 'service',
          component: service,
          meta: { navShow: false, cname: '二级页面' }
        }

      ]
    },
    { 
      path: "/list", 
      component: list ,
      meta: { navShow: true, cname: '一级页面' },
    },
    { 
      path: "/found", 
      component: found,
      meta: { navShow: true, cname: '一级页面' },
     },
    { 
      path: "/message", 
      component: message ,
      meta: { navShow: true, cname: '一级页面' },
    },
    { 
      path: "/mine", 
      component: mine ,
      meta: { navShow: true, cname: '一级页面' },
    },
    {
       path: "/details", 
       component: details ,
       meta: { navShow: true, cname: '一级页面' },
      },
    { 
      path: "/youhui",
       component: youhui 
      },
    { 
      path: "/lipinka",
       component: lipinka 
      },
    { 
      path: "/dingdan", 
      component: dingdan 
    },
    { 
      path: "/geren", 
      component: geren 
    },
    { path: "/piaoniu", component: piaoniu },
    { path: "/xitong", component: xitong },
    { path: "/hudong", component: hudong },
    { path: "/kefu", component: kefu }

  ]
})
