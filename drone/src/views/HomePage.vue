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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
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

<style >
</style>
