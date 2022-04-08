<template>
    <ion-page>
        <ion-content>
            <main class="container container--profil">
                <div class="upper-buttons">
                    <router-link to="/stats">
                        <input class="sm_button sm_button--profil-tab" type="submit" value="Statistiques">
                    </router-link>
                    <router-link to="/preparation">
                        <input class="sm_button sm_button--profil-tab" type="submit" value="Preparer un vol">
                    </router-link>
                </div>
                <article class="drones">
                    <h2 class="drones__title">Drones</h2>
                    <div class="drones__container drone">
                        <button class="drone__item">
                            Mavic 3
                            <div class="drone__img">
                                <img class="drone__item__img" src="../../icons/icon_trashcan.svg" alt="icône poubelle">
                                <img class="drone__item__img" src="../../icons/icon_edit.svg" alt="icône d'édition">
                            </div>
                        </button>
                        <a href="#" class="drones__ajout">
                            <img class="drones__ajout__img" src="../../icons/icon_add.svg" alt="icône ajout">
                        </a>
                    </div>
                </article>

                <article class="documents">
                    <h2 class="documents__title">Documents obligatoires</h2>
                    <div class="documents__container">
                        <button class="document__item">
                            Déclaration d'activité
                            <img class="drone__item__img" src="../../icons/icon_external_link.svg" alt="icône lien externe">
                        </button>
                        <button class="document__item">
                            CERFA
                            <img class="drone__item__img" src="../../icons/icon_external_link.svg" alt="icône lien externe">
                        </button>
                        <button class="document__item">
                            Certification pratique
                            <img class="drone__item__img" src="../../icons/icon_add2.svg" alt="icône lien externe">
                        </button>
                        <button class="document__item">
                            Certification théorique
                            <img class="drone__item__img" src="../../icons/icon_add2.svg" alt="icône lien externe">
                        </button>
                        <button class="document__item">
                            Contrat d'assurance
                            <img class="drone__item__img" src="../../icons/icon_add2.svg" alt="icône lien externe">
                        </button>
                        <button class="document__item">
                            Extrait d'enregistrement
                            <img class="drone__item__img" src="../../icons/icon_add2.svg" alt="icône lien externe">
                        </button>
                        <button class="document__item">
                            MANEX
                            <img class="drone__item__img" src="../../icons/icon_add2.svg" alt="icône lien externe">
                        </button>
                    </div>
                </article>

                <div class="profil__button__container">
                    <form action="modif_profil.html">
                        <input class="sm_button profil__button sm_button--profil-tab" type="submit" value="Modifier le profil">
                    </form>
                </div>
                <div class="hidden-footer"></div>
            </main>
        </ion-content>
    </ion-page>
</template>

<script>
  import { useRouter } from 'vue-router';
  import { defineComponent } from 'vue';
  import { IonPage, IonContent } from '@ionic/vue';

  export default defineComponent({
    name: 'ProfilPage',
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