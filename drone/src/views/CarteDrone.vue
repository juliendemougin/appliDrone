<template>
    <ion-page>
        <ion-content>
            <div id="map"></div>
        </ion-content>
        <ion-footer class="footer">
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
        </ion-footer>
        
    </ion-page>
</template>

<script>
  import Leaflet from 'leaflet';
  import { useRouter } from 'vue-router';
  import { defineComponent } from 'vue';
  import { IonPage, IonContent } from '@ionic/vue';

  export default defineComponent({
    name: 'CarteDrone',
    components: {
      IonPage,
      IonContent
    },
    setup() {
      return {
        router: useRouter()
      }
    },
    ngAfterViewInit() {

      this.map = new Leaflet.Map("map").setView([-25.429397, -49.271165], 10);
      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: 'Map Test'
          }).addTo(this.map);
          console.log('ettt',this.map);

    }
  });
</script>
