<template>
    <main class="container">
        <form @submit.prevent="register">
            <div class="inscription">
                <input class="input" type="text" placeholder="Pseudo *" size="20">
                <input class="input" v-model="email" type="email" placeholder="Adresse e-mail *" required>
                <input class="input" type="text" placeholder="Prenom *">
                <input class="input" type="text" placeholder="Nom *">
                <input class="input"  v-model="password" type="password" placeholder="Mot de passe *" required>
                <input class="input" type="password" placeholder="Confirmation *">
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

<script>
import firebase from 'firebase/compat/app';

export default {
    methods: {
        register () {
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
                this.$router.push('/login');
            })
            .catch(error => {
                alert(error.message);
            });
        }
    }
}
</script>