<template>
  <ion-page>
    <ion-content>
      <main class="container abo">
        <h2 class="abo__titre">Avantages</h2>
        <p class="abo__desc">
          Accédez à de
          <colc class="abo__desc abo__desc--color">
            nombreux filtres sur la carte </colc
          >pour étudier les zones de vol. <br /><br />
          <colc class="abo__desc abo__desc--color"
            >Stockez tous vos documents</colc
          >
          nécessaires aux vols avec la possibilité de les consulter hors-ligne.
          <br /><br />
          Être notifier sur l’entretien de vos drones et le
          <colc class="abo__desc abo__desc--color"
            >renouvellement de vos documents.</colc
          >
          <br /><br />
          <colc class="abo__desc abo__desc--color"
            >Préparez vos missions de vol</colc
          >
          à l’avance grâce aux checklist spécifiques à chaque scénario de vol.
          <br /><br />
          Générez un carnet après chaque mission pour garder un
          <colc class="abo__desc abo__desc--color">historique de vols.</colc>
          <br /><br />
          Consultez les
          <colc class="abo__desc abo__desc--color"
            >statistiques relatives à vos drones </colc
          >et leur temps de vol. <br /><br />
          Profitez d’une
          <colc class="abo__desc abo__desc--color">documentation complète</colc>
          sur le métier de télépilote.
        </p>
        <div class="abo__choix">
          <article class="abo__mois">
            <p class="abo__nbmois">1</p>
            Mois <br />
            15€/mois
          </article>
          <article class="abo__mois abo__mois--var">
            <p class="abo__nbmois">3</p>
            Mois <br />
            10€/mois
          </article>
          <article class="abo__mois">
            <p class="abo__nbmois">12</p>
            Mois <br />
            5€/mois
          </article>
        </div>
        <div class="surbutton">
          <button class="sm_button">S'abonner 3 mois</button>
        </div>

        <h2 class="abo__sstitre">Quand serai-je facturé ?</h2>
        <p class="abo__desc">
          Votre compte Google sera facturé à la fin de votre période d'éssai (le
          cas échéant) ou à la confirmation de votre abonnement.
        </p>
        <h2 class="abo__sstitre">
          Mon abonnement se renouvelle-t-il automatiquement ?
        </h2>
        <p class="abo__desc">
          Oui, vous pouvez le désactiver à tout moment d'un simple clic dans le
          Play Store
        </p>
      </main>
    </ion-content>
    <ion-footer class="footer">
      <!-- <footer class="footer"> -->
      <div class="footer__border footer__border--bord">
        <router-link to="/documents">
          <img
            class="footer__icon"
            src="../icons/footer/icon_folder.svg"
            alt="image d'un dossier"
          />
        </router-link>
      </div>
      <div class="footer__border footer__border--bord">
        <router-link to="/cartedrone">
          <img
            class="footer__icon"
            src="../icons/footer/icon_map.svg"
            alt="image d'un carte"
          />
        </router-link>
      </div>
      <div class="footer__border">
        <router-link to="/meteo">
          <img
            class="footer__icon"
            src="../icons/footer/icon_weather.svg"
            alt="image d'un nuage"
          />
        </router-link>
      </div>
      <!-- </footer> -->
    </ion-footer>
  </ion-page>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";

export default defineComponent({
  name: "AboPage",
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    return {
      router: useRouter(),
    };
  },
});
</script>
