<template>
  <ion-app>
    <ion-header>
        <div id="nav" class="nav">
          <router-link to="#" id="closeBtn" class="nav__close"><img src="./icons/icon_cross.svg" alt="icône fermer"></router-link>
          <ul class="nav__list">
              <li class="nav__item">
                <router-link class="nav__link" to="/profil" onclick="closeNav();">Profil</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/documents" onclick="closeNav();">Documents</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/cartedrone" onclick="closeNav();">Carte</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/liens" onclick="closeNav();">Documentation</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/abo" onclick="closeNav();">S'abonner</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="#" onclick="closeNav();" @click="doLogout">Deconnexion</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/contact" onclick="closeNav();">Contact</router-link>
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
import { useRouter } from "vue-router";
import useFirebaseAuth from "./hooks/firebase-auth";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },

  setup() {
    const router = useRouter();
    const { logout } = useFirebaseAuth();

    const doLogout = async () => {
      await logout();
      router.options.scrollBehavior;
      router.replace({ path: '/login', replace: true });
    };

    return {
      doLogout
    };
  },
});
</script>