<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-item>
                <ion-input name="username" type="mail" placeholder="adresse email" @ionChange="handleChange" />
            </ion-item>
            <ion-item>
                <ion-input name="password" type="password" placeholder="mot de passe" @ionChange="handleChange" />
            </ion-item>
            <ion-button @click="doLogin">Se connecter</ion-button>
            <ion-item>
              <ion-img @click="socialGoogleLogin" src="../icons/icon_google.svg"></ion-img>
            </ion-item>
            <!-- <ion-item>
              <ion-img @click="socialFacebookLogin" src="../icons/icon_facebook.svg"></ion-img>
            </ion-item> -->
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
import firebase from 'firebase/compat/app';
import useFirebaseAuth from "../hooks/firebase-auth";
import { defineComponent, ref } from "vue";
import { IonContent, IonPage, IonInput, IonButton, IonItem, IonImg } from "@ionic/vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonItem,
    IonImg
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
   
    const doLogin = async () => {
      try {
        const { username, password } = credentials.value;
        await state.login(username, password);
        await state.authCheck();
        router.push({path : "/home", replace: true });
      } catch (error: any) {
        console.log(error);
        // handleAlert(error.message, true);
      }
    };

    const socialGoogleLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        state.authCheck();
        router.push('/home');
      }).catch((err) => {
        alert(err.message)
      });
    };

    // Nécessite l'enregistrement de l'application sur Microsoft Identity Platform

    // const socialFacebookLogin = () => {
    //   const provider = new firebase.auth.FacebookAuthProvider();
    //   firebase.auth().signInWithPopup(provider).then((result) => {
    //     state.authCheck();
    //     router.push('/home');
    //   }).catch((err) => {
    //     alert(err.message)
    //   })
    // }

    return {
      ...state,
      credentials,
      doLogin,
      handleChange,
      socialGoogleLogin,
      // socialFacebookLogin
    };
  },
});
</script>
