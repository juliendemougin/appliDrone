<template>
    <main class="container">
        <form action="#">
            <div class="inscription">
                <input class="input" type="text" placeholder="Pseudo *" size="20" required>
                <input class="input" type="email" placeholder="Adresse e-mail *" required>
                <input class="input" type="text" placeholder="Prenom *" required>
                <input class="input" type="text" placeholder="Nom *" required>
                <input class="input" type="password" placeholder="Mot de passe *" required>
                <input class="input" type="password" placeholder="Confirmation *" required>
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