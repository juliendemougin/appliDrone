<template>
    <ion-page>
        <ion-content>
            <form @submit.prevent="addDrone">
                <input type="text" v-model="modele" placeholder="Modèle *" required>
                <input type="text" v-model="poids" placeholder="Poids (en g) *" required>
                <input type="text" v-model="fabricant" placeholder="Fabricant *" required>
                <input type="text" v-model="nds" placeholder="Numéro de série *" required>
                <input type="text" v-model="uas" placeholder="UAS *" required>
                <input type="text" v-if="this.poids >= 800" v-model="elec" placeholder="Signalement électronique">
                <div class="drone__checkbox">
                    <label class="b-contain">
                        <span>Amateur</span>
                        <input v-model="checked" type="checkbox">
                        <div class="b-input"></div>
                    </label>
                    <label class="b-contain">
                        <span>Série</span>
                        <input v-model="checked" type="checkbox">
                        <div class="b-input"></div>
                    </label>
                </div>
                <input @click="closeModal" class="lg_button drone__button" type="submit" value="Ajouter">
            </form>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { modalController, IonPage, IonContent, alertController } from '@ionic/vue';
import firebase from 'firebase/compat/app';
import axios from 'axios';

export default defineComponent({
    name: 'ModalDrone',
    components: { IonPage, IonContent },

    data() {
        return {
            id: '',
            modele: '',
            poids: '',
            fabricant: '',
            nds: '',
            uas: '',
            elec: '',
            uid: '',
            checked: []
        }
    },

    created() {
        axios.get('https://nervous-euclid.82-165-48-211.plesk.page/userByUid/' + this.uid).then((response) => {
                console.log(response.data);
                this.id = response.data;
        })
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

        closeModal: function() {
            modalController.dismiss();
        },

        addDrone: function() {
            const getId = () => {
                const user = firebase.auth().currentUser;
                if(user) {
                    const uid = user.uid;
                    console.log(`UID: ${uid}`)
                    this.uid = uid;
                    return this.uid;
                }
            }

            if(this.checked.length < 1) {
                this.handleAlert("Veuillez cocher la nature de votre drone", true)
            } else if(this.checked.length > 1) {
                this.handleAlert("Veuillez cocher qu'une seule case")
            }

            getId();
            var form = new FormData();
            form.append('id', this.id[0].ID_USER);
            form.append('modele', this.modele);
            form.append('poids', this.poids);
            form.append('fabricant', this.fabricant);
            form.append('nds', this.nds);
            form.append('uas', this.uas);
            form.append('elec', this.elec);
            axios.post('https://nervous-euclid.82-165-48-211.plesk.page/add_drone', form);
            this.$router.push('/profil');
        }
    }
})
</script>