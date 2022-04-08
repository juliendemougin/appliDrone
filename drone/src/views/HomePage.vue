<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title style="color: black">DRONE</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- <LeHeader></LeHeader> -->
      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>
          Start with Ionic
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p>
        <ion-button @click="doLogout">Se déconnecter</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import useFirebaseAuth from "../hooks/firebase-auth";
// import LeHeader from '../components/LeHeader.vue';

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    // LeHeader
  },

  setup() {
    const { logout } = useFirebaseAuth();
    const router = useRouter();
    const doLogout = () => {
      router.replace({ path: "/login" });
    };

    return {
      doLogout,
    };
  },
});
</script>

<style >
</style>
