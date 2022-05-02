<template>
    <ion-page>
        <ion-content>
            <main class="container container--reset">
                <h1 class="reinit__title">Vous avez oublié votre mot de passe ?</h1>
                <h2 class="reinit__subtitle">Entrez votre adresse e-mail ci-dessous pour recevoir les instructions de réinitialisation du mot de passe</h2>
                <form @submit.prevent="sendEmail">
                    <div class="reinit">
                        <input class="input reinit__email" v-model="email" type="email" placeholder="Adresse e-mail" required>
                        <ion-input class="lg_button reinit__button" type="submit" value="Confirmer"></ion-input>
                    </div>
                </form>
            </main>
        </ion-content>
    </ion-page>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { IonPage, IonContent, IonInput, alertController } from "@ionic/vue";
import firebase from 'firebase/compat/app';
import axios from 'axios';

export default defineComponent({
    name: 'ResetPasswordPage',
    components: {
        IonPage,
        IonContent,
        IonInput
    },

    data() {
        return {
            email: '',
            user: '',
            error: null,
            emailSending: false
        }
    },

    methods: {
        handleAlert(message, isError) {
            alertController.create({
                header: isError ? "Message d'erreur" : "Notice",
                message: message,
                buttons: ["OK"]
            })
            .then((t) => t.present());
        },

        sendEmail() {
            var form = new FormData();
            form.append('email', this.email);
            console.log(form);
            axios.post('https://nervous-euclid.82-165-48-211.plesk.page/adresse/', form).then((response) => {
                if(response.data.length == 0) {
                    const message = "L'adresse email n'est pas valide";
                    this.handleAlert(message, true);
                } else {
                    const message = "Un email vous a été envoyé, vérifiez vos spams.";
                    this.handleAlert(message, false);
                }
            });
            this.error = null;
            this.emailSending = true;

            firebase
                .auth()
                .sendPasswordResetEmail(this.email)
                .then(() => {
                    this.emailSending = false;
                })
                .catch(error => {
                    this.emailSending = false;
                    this.error = error.message;
                })
        }
    }
})
</script>