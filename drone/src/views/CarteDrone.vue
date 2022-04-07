<template>
    <ion-content>
        sfd
    <ion-footer class="footer">
        <!-- <footer class="footer"> -->
        <div class="footer__border footer__border--bord">
            <router-link to="documents.html">
                <img class="footer__icon" src="../icons/footer/icon_folder.svg" alt="image d'un dossier">
            </router-link>
        </div>
        <div class="footer__border footer__border--bord">
            <a href="map.html">
                <img class="footer__icon" src="../icons/footer/icon_map.svg" alt="image d'un carte">
            </a>
        </div>
        <div class="footer__border">
            <a href="meteo.html">
                <img class="footer__icon" src="../icons/footer/icon_weather.svg" alt="image d'un nuage">
            </a>
        </div>
    <!-- </footer> -->
    </ion-footer>
    </ion-content>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default ({
    name: 'CarteDrone',
})
</script>
