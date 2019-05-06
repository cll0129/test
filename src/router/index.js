import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/views/index'
import transfer from '@/views/transfer'
import adddata from '@/views/Adddata'
import clipboard from '@/views/clipboard'

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer
    },
    {
      path: '/adddata',
      name: 'adddata',
      component: adddata
    },
    {
      path: '/clipboard',
      name: 'clipboard',
      component: clipboard
    }
  ]
})
