<template>
    <main class="container">
        <form @submit.prevent="register">
            <div class="inscription">
                <input class="input" v-model="pseudo" type="text" placeholder="Pseudo *" size="20">
                <input class="input" v-model="email" type="email" placeholder="Adresse e-mail *" required>
                <input class="input" v-model="password" type="password" placeholder="Mot de passe *" required>
                <input class="input" v-model="validation" type="password" placeholder="Confirmation *">
                <div class="inscription__checkbox">
                    <label class="b-contain">
                        <span>J'accepte les <router-link class="inscription__link" to="conditions">conditions d'utilisation</router-link></span>
                        <input type="checkbox">
                        <div class="b-input"></div>
                    </label>
                </div>
                <input class="lg_button inscription__button" type="submit" value="S'inscrire">
            </div>
        </form>
    </main>
</template>

<script lang="ts">
import firebase from 'firebase/compat/app';

export default {
    methods: {
        register () {
            if(this.password != this.validation) {
                alert('Les mots de passe ne correspondent pas');
            } else {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    return user.user.updateProfile({
                        displayName: this.pseudo
                    })
                })
                .then(() => {
                    this.$router.push('/login');
                    console.log(firebase.auth().currentUser.displayName);
                })
            }
        }
    }
}
</script>