import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import ResetPasswordPage from '../views/ResetPasswordPage.vue';
import StatsPage from '../views/StatsPage.vue';
import DocumentsPage from '../views/DocumentsPage.vue';

import ProfilPage from '../views/profil/ProfilPage.vue';
import ModifProfilPage from '../views/profil/ModifProfilPage.vue';
import ModifPasswordPage from '../views/profil/ModifPasswordPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/reset',
    name: 'ResetPassword',
    component: ResetPasswordPage
  },
  {
    path: '/profil',
    name: 'Profil',
    component: ProfilPage
  },
  {
    path: '/modif-profil',
    name: 'ModifProfil',
    component: ModifProfilPage
  },
  {
    path: '/modif-password',
    name: 'ModifPassword',
    component: ModifPasswordPage
  },
  {
    path: '/stats',
    name: 'Stats',
    component: StatsPage
  },
  {
    path: '/documents',
    name: 'Documents',
    component: DocumentsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
