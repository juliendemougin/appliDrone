<template>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Connexion</title>
        <link rel="stylesheet" href="../../assets/css/style.min.css">
    </head>
    <body>
        <header>
            <div id="nav" class="nav">
                <a id="closeBtn" href="#" class="nav__close"><img src="../icons/icon_cross.svg" alt="icône fermer"></a>
                <ul class="nav__list">
                    <li class="nav__item"><a class="nav__link" href="profil.html">Profil</a></li>
                    <li class="nav__item"><a class="nav__link" href="documents.html">Documents</a></li>
                    <li class="nav__item"><a class="nav__link" href="map.html">Carte</a></li>
                    <li class="nav__item"><a class="nav__link" href="liens.html">Documentation</a></li>
                    <li class="nav__item"><a class="nav__link" href="abo.html">S'abonner</a></li>
                    <li class="nav__item"><a class="nav__link" href="#">Deconnexion</a></li>
                    <li class="nav__item"><a class="nav__link" href="contact.html">Contact</a></li>
                </ul>
            </div>

            <router-link to="#" id="openBtn">
                <div>
                    <span class="nav__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
            </router-link>
        </header>
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
