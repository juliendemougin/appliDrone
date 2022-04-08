<template>
    <ion-page>
        <ion-content>
            <main class="container meteo">
        <input class="input" type="text" placeholder="Saisir une ville">
        <!-- <img src="src/icons/fe_search.svg" alt="" style="height: 24px; width: 24px;"> -->
        <label class="b-contain">
            <p class="prepa__text">Météo sur 7 jours</p>
            <input type="checkbox">
            <div class="b-input"></div>
        </label>
        <h4 class="meteo__titre">Audincourt, Aujourd'hui</h4>
        
        <div class="meteo__content">
            <div class="meteo__card carte">
                <p class="carte__desc">Temps</p>
                <img class="carte__icon" src="src/icons/gg_sun.svg" alt="Image du soleil">
                <p class="carte__desc">Ensoileilé</p>
            </div>
            <div class="meteo__card carte">
                <p class="carte__desc">Température</p>
                <img class="carte__icon" src="src/icons/fluent_temperature-20-filled.svg" alt="Image du soleil">
                <p class="carte__desc">15°C</p>
            </div>
            <div class="meteo__card carte">
                <p class="carte__desc">Vent</p>
                <img class="carte__icon" src="src/icons/bx_wind.svg" alt="Image du soleil">
                <p class="carte__desc">7,6KM</p>
            </div>
            <div class="meteo__card carte">
                <p class="carte__desc">Pression atmosphérique</p>
                <img class="carte__icon" src="src/icons/wi_barometer.svg" alt="Image du soleil">
                <p class="carte__desc">1250hpa</p>
            </div>
            <div class="meteo__card carte">
                <p class="carte__desc">Humidité</p>
                <img class="carte__icon" src="src/icons/akar-icons_water.svg" alt="Image du soleil">
                <p class="carte__desc">48%</p>
            </div>
            <div class="meteo__card carte">
                <p class="carte__desc">Lever du soleil</p>
                <div style="display: flex;">
                    <img  src="src/icons/mi_sunrise.svg" alt="Image du soleil">
                    <p class="carte__desc carte__desc--var">5H37</p>
                </div>
                <p class="carte__desc  carte__desc--var">Coucher du soleil</p>
                <div style="display: flex;">
                    <img  src="src/icons/mi_sunset.svg" alt="Image du soleil">
                    <p class="carte__desc">17H50</p>
                </div>
            </div>
        </div>
    
    </main>
    <main class="container meteo" hidden>
        <input class="input" type="text" placeholder="Saisir une ville">
        <!-- <img src="src/icons/fe_search.svg" alt="" style="height: 24px; width: 24px;"> -->
        <label class="b-contain">
            <p class="prepa__text">Météo sur 7 jours</p>
            <input type="checkbox">
            <div class="b-input"></div>
        </label>
        <h4 class="meteo__titre">Audincourt, 7 jours</h4>
        <div class="meteo__card7 carte7">
            <p class="carte7__desc">Mardi</p>
            <img class="carte7__icon" src="src/icons/gg_sun.svg" alt="Image du soleil">
            <p class="carte7__desc">15 °C</p>
            <p class="carte7__desc">11 km/h</p>
        </div>
        <div class="meteo__card7 carte7">
            <p class="carte7__desc">Mercredi</p>
            <img class="carte7__icon" src="src/icons/gg_sun.svg" alt="Image du soleil">
            <p class="carte7__desc">15 °C</p>
            <p class="carte7__desc">11 km/h</p>
        </div>
        <div class="meteo__card7 carte7">
            <p class="carte7__desc">Jeudi</p>
            <img class="carte7__icon" src="src/icons/gg_sun.svg" alt="Image du soleil">
            <p class="carte7__desc">15 °C</p>
            <p class="carte7__desc">11 km/h</p>
        </div>
        <div class="meteo__card7 carte7">
            <p class="carte7__desc">Vendredi</p>
            <img class="carte7__icon" src="src/icons/gg_sun.svg" alt="Image du soleil">
            <p class="carte7__desc">15 °C</p>
            <p class="carte7__desc">11 km/h</p>
        </div>
        <div class="meteo__card7 carte7">
            <p class="carte7__desc">Samedi</p>
            <img class="carte7__icon" src="src/icons/gg_sun.svg" alt="Image du soleil">
            <p class="carte7__desc">15 °C</p>
            <p class="carte7__desc">11 km/h</p>
        </div>
        <div class="meteo__card7 carte7">
            <p class="carte7__desc">Dimanche</p>
            <img class="carte7__icon" src="src/icons/gg_sun.svg" alt="Image du soleil">
            <p class="carte7__desc">15 °C</p>
            <p class="carte7__desc">11 km/h</p>
        </div>
        <div class="meteo__card7 carte7">
            <p class="carte7__desc">Lundi</p>
            <img class="carte7__icon" src="src/icons/gg_sun.svg" alt="Image du soleil">
            <p class="carte7__desc">15 °C</p>
            <p class="carte7__desc">11 km/h</p>
        </div>
        
    </main>
        </ion-content>
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
    </ion-page>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

  import { useRouter } from 'vue-router';
  import { defineComponent } from 'vue';
  import { IonPage, IonContent } from '@ionic/vue';

  export default defineComponent({
    name: 'MeteoPage',
    components: {
      IonPage,
      IonContent
    },
    setup() {
      return {
        router: useRouter()
      }
    }
  });
</script>
