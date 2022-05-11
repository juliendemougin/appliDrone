<template>
    <ion-page>
        <ion-content>
            <form @submit.prevent="modifDrone" v-for="d in drone" :key="d.id">
                <input type="text" v-model="d.MODELE_DRONE" required>
                <input type="text" v-model="d.POIDS_DRONE" required>
                <input type="text" v-model="d.FABRIQUANT_DRONE" required>
                <input type="text" v-model="d.NUMERO_SERIE_DRONE" required>
                <input type="text" v-model="d.UAS" required>
                <input type="text" v-if="this.poids >= 800" v-model="d.SIGNALEMENT_ELEC">
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
                <input @click="closeModal" class="lg_button drone__button" type="submit" value="Modifier">
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
    name: 'ModifDrone',
    components: { IonPage, IonContent },
    
    props: {
        id: Number
    },
    
    data() {
        return {
            drone: [],
            modele: '',
            poids: '',
            fabricant: '',
            nds: '',
            uas: '',
            uid: '',
            checked: [],
        }
    },

    created() {
        console.log(this.id);
        axios.get('https://nervous-euclid.82-165-48-211.plesk.page/drone/' + this.id).then((response) => {
            this.drone = response.data;
            console.log(this.drone);
        });
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

        modifDrone: function() {
            var form = new FormData();
            form.append('modele', this.modele);
            form.append('poids', this.poids);
            form.append('fabricant', this.fabricant);
            form.append('nds', this.nds);
            form.append('uas', this.uas);
            form.append('elec', this.elec);
            form.append('id', this.id);
            axios.post('https://nervous-euclid.82-165-48-211.plesk.page/modif_drone', form);
            this.$router.push('/profil');
        }
    }
})
</script>