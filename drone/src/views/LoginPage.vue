<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-item>
                <ion-input name="username" type="text" placeholder="adresse email" @ionChange="handleChange" />
            </ion-item>
            <ion-item>
                <ion-input name="password" type="password" placeholder="mot de passe" @ionChange="handleChange" />
            </ion-item>
            <ion-button @click="doLogin">Se connecter</ion-button>
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
import useFirebaseAuth from "../hooks/firebase-auth";
import { defineComponent, ref } from "vue";
import {
  IonContent,
  IonPage,
  alertController,
  IonInput,
  IonButton,
  IonItem,
} from "@ionic/vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonItem,
  },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    const credentials = ref<{ [key: string]: string }>({
      username: "",
      password: "",
    });
    const handleChange = (e: CustomEvent) => {
      console.log(e);
      const name: string = (e?.target as any)?.name;
      credentials.value[name as string] = e.detail.value;
    };
    /**
     *
     */
    const handleAlert = (message: string, isError = false) => {
      alertController
        .create({
          header: isError ? "Error Message" : "Notice",
          message: message,
          buttons: ["OK"],
        })
        .then((t) => t.present());
    };
    /**
     *
     *
     */
    const doLogin = async () => {
      try {
        const { username, password } = credentials.value;
        await state.login(username, password);
        router.push({path : "/home", replace: true });
      } catch (error) {
        console.log(error);
        // handleAlert(error.message, true);
      }
    };
    return {
      ...state,
      credentials,
      doLogin,
      handleChange,
    };
  },
});
</script>