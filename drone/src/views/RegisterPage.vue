<template>
    <main class="container">
        <form @submit.prevent="register">
            <div class="inscription">
                <input class="input" v-model="pseudo" type="text" placeholder="Pseudo *" size="20" required>
                <input class="input" v-model="prenom" type="text" placeholder="Prénom *" required>
                <input class="input" v-model="nom" type="text" placeholder="Nom *" required>
                <input class="input" v-model="email" type="email" placeholder="Adresse e-mail *" required>
                <input class="input" v-model="password" type="password" placeholder="Mot de passe *" required>
                <input class="input" v-model="validation" type="password" placeholder="Confirmation *">
                <div class="inscription__checkbox">
                    <label class="b-contain">
                        <span>J'accepte les <router-link class="inscription__link" to="conditions">conditions d'utilisation</router-link></span>
                        <input type="checkbox" required>
                        <div class="b-input"></div>
                    </label>
                </div>
                <input class="lg_button inscription__button" type="submit" value="S'inscrire">
            </div>
        </form>
    </main>
</template>

<script>
import firebase from 'firebase/compat/app';
import axios from 'axios';

export default {
    data() {
        return {
            pseudo: '',
            prenom: '',
            nom: '',
            email: '',
            errorMessage: '',
            token: '',
            errors: {}
        }
    },

    methods: {
        register () {
            const getId = async () => {
                const user = firebase.auth().currentUser;
                if(user) {
                    const token = await user.getIdToken(true);
                    console.log(`Token: ${token}`)
                    this.token = token;
                    return this.token;
                }
            }

            if(this.password != this.validation) {
                alert('Les mots de passe ne correspondent pas');
            } else {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    getId();
                    return user.user.updateProfile({
                        displayName: this.pseudo
                    })
                })
                .then(() => {
                    var form = new FormData();
                    form.append('pseudo', this.pseudo);
                    form.append('nom', this.nom);
                    form.append('prenom', this.prenom);
                    form.append('email', this.email);
                    form.append('fid', this.token);
                    axios.post('https://nervous-euclid.82-165-48-211.plesk.page/adduser', form);
                    this.$router.push('/login');
                    console.log(firebase.auth().currentUser.displayName);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                })
            }
        }
    }
}
</script>