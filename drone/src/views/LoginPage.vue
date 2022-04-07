<template>
    <html>
    <body>
        <main class="container">
            <form action="#">
                <div class="connexion">
                    <div class="connexion__mail mail">
                        <input class="input input--email" type="text" placeholder="adresse e-mail" required>
                    </div>
                    <div class="connexion__password password">
                        <input class="input input--password" type="password" placeholder="mot de passe" required>
                    </div>
                    <div class="connexion__oubli__container">
                        <a class="connexion__oubli" href="#">Mot de passe oublié ?</a>
                    </div>
                    <div class="connexion__checkbox">
                        <label class="b-contain">
                            <span>Rester connecté</span>
                            <input type="checkbox">
                            <div class="b-input"></div>
                        </label>
                    </div>
                    <input class="lg_button connexion__button" type="submit" value="Se connecter">
                    <div class="connexion__ou__container">
                        <p class="connexion__ou">OU</p>
                        <span class="connexion__right-line"></span>
                    </div>
                    <div class="connexion__sso">
                        <a class="connexion__sso__google" href="#"><img src="../icons/icon_google.svg" alt="icône google"></a>
                        <a class="connexion__sso__facebook" href="#"><img src="../icons/icon_facebook.svg" alt="icône facebook"></a>
                    </div>
                </div>
            </form>
        </main>
    </body>
    </html>
</template>
