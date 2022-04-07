<template>
  <ion-app>
    <ion-header>
        <div id="nav" class="nav">
          <router-link id="closeBtn" to="#" class="nav__close"><img src="src/icons/icon_cross.svg" alt="icône fermer"></router-link>
          <ul class="nav__list">
              <li class="nav__item"><a class="nav__link" href="profil.html">Profil</a></li>
              <li class="nav__item"><a class="nav__link" href="documents.html">Documents</a></li>
              <li class="nav__item"><a class="nav__link" href="map.html">Carte</a></li>
              <li class="nav__item"><a class="nav__link" href="liens.html">Documentation</a></li>
              <li class="nav__item"><a class="nav__link" href="abo.html">S'abonner</a></li>
              <li class="nav__item"><a class="nav__link" href="#">Deconnexion</a></li>
              <li class="nav__item"><a class="nav__link" href="contact.html">Contact</a></li>
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