<template>
    <ion-page>
        <ion-content>
            Preparation vol
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
    name: 'PreparationPage',
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
