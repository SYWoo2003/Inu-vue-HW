import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {  Mainpage, Introduction, Member, Achievement, Project } from './pages';


Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언

const routes = [
  {
    path: '/',
    component: Mainpage
 },
 {
    path: '/introduction',
    component: Introduction
 },

 {
  path: '/member',
  component: Member
},
{
  path: '/achievement',
  component: Achievement
},
{
  path: '/project',
  component: Project
}

];

// router 객체생성
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router // router 추가
}).$mount('#app')




