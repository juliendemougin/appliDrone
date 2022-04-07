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

import AboPage from '../views/AboPage.vue';
import CarteDrone from '../views/CarteDrone.vue';
import ConditionPage from '../views/ConditionPage.vue';
import ContactPage from '../views/ContactPage.vue';
import LiensPage from '../views/LiensPage.vue';
import MeteoPage from '../views/MeteoPage.vue';
import PolitiquePage from '../views/PolitiquePage.vue';
import PreparationPage from '../views/PreparationPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cartedrone'
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
  },
  {
    path: '/cartedrone',
    name: 'CarteDrone',
    component: CarteDrone
  },
  {
    path: '/meteo',
    name: 'MeteoPage',
    component: MeteoPage
  },
  {
    path: '/abo',
    name: 'AboPage',
    component: AboPage
  },
  {
    path: '/condition',
    name: 'ConditionPage',
    component: ConditionPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/liens',
    name: 'LiensPage',
    component: LiensPage
  },
  {
    path: '/politique',
    name: 'PolitiquePage',
    component: PolitiquePage
  },
  {
    path: '/preapration',
    name: 'PreparationPage',
    component: PreparationPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
