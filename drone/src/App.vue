<template>
  <ion-app>
    <ion-header>
        <div id="nav" class="nav">
          <router-link id="closeBtn" to="#" class="nav__close"><img src="./icons/icon_cross.svg" alt="icône fermer"></router-link>
          <ul class="nav__list">
              <li class="nav__item">
                <router-link class="nav__link" to="/profil">Profil</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/documents">Documents</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/map">Carte</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/liens">Documentation</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/abo">S'abonner</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="#">Deconnexion</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/contact">Contact</router-link>
              </li>
          </ul>
        </div>
  
        <router-link to="#" id="openBtn">
        <div>
          <span class="nav__icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        </router-link>
    </ion-header>
    <ion-router-outlet></ion-router-outlet>
    <component :is="'script'" :src="'../assets/js/menu.js'"></component>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  }
});
</script>