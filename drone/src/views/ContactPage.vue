<template>
    <ion-page>
        <ion-content>
          <main class="container contact">
            <h3 class="contact__titre">Contactez-nous</h3>
            <form class="contact__form">
                <input class="input" type="text" placeholder="Votre nom"><br>
                <input class="input" type="email" placeholder="Votre adresse e-mail"><br>
                <input class="input input--area" type="textarea" placeholder="Votre message"><br>
                <button class="lg_button lg_button--var" type="submit">ENVOYER</button><br>
            </form>
            <p class="contact__desc">Voir nos <router-link to="/condition">conditions d'utilisation</router-link></p>
            <p class="contact__desc contact__desc--var">Voir notre <router-link to="/politique">politique de confidentialité</router-link></p>
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
    name: 'ContactPage',
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
