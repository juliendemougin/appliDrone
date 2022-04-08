<template>
    <ion-page>
        <ion-content>
            <main class="container">
        <form class="prepa">
            <select class="prepa__liste" name="" id="">
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
                <option value="Nuit">Nuit</option>
            </select>
            <select class="prepa__liste prepa__liste--var" name="" id="">
                <option value="mavick1">mavick1</option>
                <option value="mavick2">mavick2</option>
                <option value="mavick3">mavick3</option>
            </select>
            <div class="prepa__card">
                <p class="prepa__desc">Autorisation</p>
                <img class="prepa__img" src="src/icons/icon_add.svg" alt="">
            </div>
            <div class="prepa__card prepa__card--var">
                <p class="prepa__desc">Ajouter une autre autorisation</p>
            </div>
            <input class="input" type="text" placeholder="Nom de la mission">
            <label class="b-contain">
                <p class="prepa__text">Collecter les attestations des personnes se trouvant à l’intérieur de la zone 
                    (si besoin)</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Analyse de l'environnement</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Installation du périmètre de sécurité</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Vérification météo et sens du vent</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Vérification visuelle du drone (hélices, fixation, rotation moteur)</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Vérification météo et sens du vent</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Vérification visuelle du drone (hélices, fixation, rotation moteur)</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Paramétrage du FailSafe</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Vérification du niveau de chargement des batteries du drone</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Vérification du la compatibilité de la charge utile sélectionnée</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <h3 class="prepa__titre">Niveau S1</h3>
            <label class="b-contain">
                <p class="prepa__text">Analyser la demande du client</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Le client a-t-il autorité sur le site ?</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <label class="b-contain">
                <p class="prepa__text">Vérifier la zone de vol sur la carte OASI</p>
                <input type="checkbox">
                <div class="b-input"></div>
            </label>
            <div class="surbutton"><button class="sm_button" type="submit">Commencer le vol</button></div>
        </form>
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
