<template>
  <ion-app>
    header
    <ion-router-outlet></ion-router-outlet>
    footer
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