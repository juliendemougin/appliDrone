<template>
    <ion-content>
        sfd
    <ion-footer class="footer">
        <!-- <footer class="footer"> -->
        <div class="footer__border footer__border--bord">
            <router-link to="/documents">
                <img class="footer__icon" src="../icons/footer/icon_folder.svg" alt="image d'un dossier">
            </router-link>
        </div>
        <div class="footer__border footer__border--bord">
            <router-link to="/cartedrone">
                <img class="footer__icon" src="../icons/footer/icon_map.svg" alt="image d'un carte">
            </router-link>
        </div>
        <div class="footer__border">
            <router-link to="/meteo">
                <img class="footer__icon" src="../icons/footer/icon_weather.svg" alt="image d'un nuage">
            </router-link>
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
