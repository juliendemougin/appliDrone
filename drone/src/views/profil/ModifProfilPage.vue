<template>
    <main class="container">
        <form action="#">
            <div>
                <input class="input" type="text" value="AirRaccoon" required>
                <input class="input" type="email" value="contact.jdemougin@gmail.com" required>
                <input class="input" type="text" value="Julien" required>
                <input class="input" type="text" value="Demougin" required>
                <input class="input" type="text" placeholder="Numéro de téléphone">
            </div>

            <div class="password__container">
                <form action="modif_profil.html">
                    <input class="sm_button password__button" type="submit" value="Changer de mot de passe">
                </form>
            </div>
            
            <div class="modif__container">
                <input class="sm_button" type="submit" value="Modifier">
            </div>
        </form>
    </main>
</template>