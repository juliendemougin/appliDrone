<template>
  <ion-page>
    <ion-content>
      <main class="container meteo">
        <input
          class="input"
          v-model="search"
          type="text"
          placeholder="Saisir une ville"
        />
        <label class="b-contain">
          <p class="prepa__text">Météo sur 7 jours</p>
          <input type="checkbox" />
          <div class="b-input"></div>
        </label>

        <div class="meteo__content" id="meteo">
          <h4 class="meteo__titre">{{ meteo.name }} , Aujourd'hui</h4>
          <div
            class="meteo__card carte"
            v-for="desc in meteo.weather"
            :key="desc.id"
          >
            <p class="carte__desc">Temps</p>
            <img
              class="carte__icon"
              :src="'http://openweathermap.org/img/w/' + desc.icon + '.png'"
              alt="Image du soleil"
            />
            <p class="carte__desc">
              {{ desc.description }}
            </p>
          </div>
          <div class="meteo__card carte">
            <p class="carte__desc">Température</p>
            <img
              class="carte__icon"
              src="../../src/icons/fluent_temperature-20-filled.svg"
              alt="Image du soleil"
            />
            <p class="carte__desc">{{ parseInt(meteo?.main?.temp) }}°C</p>
          </div>
          <div class="meteo__card carte">
            <p class="carte__desc">Vent</p>
            <img
              class="carte__icon"
              src="../../src/icons/bx_wind.svg"
              alt="Image du vent"
            />
            <p class="carte__desc">{{ parseInt(meteo?.wind?.speed) }} KM</p>
          </div>
          <div class="meteo__card carte">
            <p class="carte__desc">Pression atmosphérique</p>
            <img
              class="carte__icon"
              src="../../src/icons/wi_barometer.svg"
              alt="Image du soleil"
            />
            <p class="carte__desc">{{ meteo?.main?.pressure }} hpa</p>
          </div>
          <div class="meteo__card carte">
            <p class="carte__desc">Humidité</p>
            <img
              class="carte__icon"
              src="../../src/icons/akar-icons_water.svg"
              alt="Image du soleil"
            />
            <p class="carte__desc">{{ meteo?.main?.humidity }} %</p>
          </div>
          <div class="meteo__card carte">
            <p class="carte__desc">Lever du soleil</p>
            <div style="display: flex">
              <img src="../../src/icons/mi_sunrise.svg" alt="Image du soleil" />
              <p class="carte__desc carte__desc--var">
                {{ lever }}
              </p>
            </div>
            <p class="carte__desc carte__desc--var">Coucher du soleil</p>
            <div style="display: flex">
              <img src="../../src/icons/mi_sunset.svg" alt="Image du soleil" />
              <p class="carte__desc">{{ coucher }}</p>
            </div>
          </div>
        </div>

        <div class="meteo_content" id="meteo7">
          <h4 class="meteo__titre">Audincourt, 7 jours</h4>
          <div class="meteo__card7 carte7">
            <p class="carte7__desc">Aujourd'hui</p>
            <div v-for="weather in meteo?.weather" :key="weather.id">
              <img
                class="carte7__icon"
                :src="
                  'http://openweathermap.org/img/w/' + weather.icon + '.png'
                "
                alt="Image du soleil"
              />
            </div>
            <p class="carte7__desc">{{ parseInt(meteo?.main?.temp) }} °C</p>
            <p class="carte7__desc">
              {{ parseInt(meteo?.wind?.speed) }} km/h
            </p>
          </div>
          <div class="meteo__card7 carte7">
            <p class="carte7__desc">J + 1</p>
            <div v-for="weather in meteo7[8]?.weather" :key="weather.id">
              <img
                class="carte7__icon"
                :src="
                  'http://openweathermap.org/img/w/' + weather.icon + '.png'
                "
                alt="Image du soleil"
              />
            </div>
            <p class="carte7__desc">{{ parseInt(meteo7[8]?.main?.temp) }} °C</p>
            <p class="carte7__desc">
              {{ parseInt(meteo7[8]?.wind?.speed) }} km/h
            </p>
          </div>
          <div class="meteo__card7 carte7">
            <p class="carte7__desc">J + 2</p>
            <div v-for="weather in meteo7[16]?.weather" :key="weather.id">
              <img
                class="carte7__icon"
                :src="
                  'http://openweathermap.org/img/w/' + weather.icon + '.png'
                "
                alt="Image du soleil"
              />
            </div>
            <p class="carte7__desc">
              {{ parseInt(meteo7[16]?.main?.temp) }} °C
            </p>
            <p class="carte7__desc">
              {{ parseInt(meteo7[16]?.wind?.speed) }} km/h
            </p>
          </div>
          <div class="meteo__card7 carte7">
            <p class="carte7__desc">J + 3</p>
            <div v-for="weather in meteo7[24]?.weather" :key="weather.id">
              <img
                class="carte7__icon"
                :src="
                  'http://openweathermap.org/img/w/' + weather.icon + '.png'
                "
                alt="Image du soleil"
              />
            </div>
            <p class="carte7__desc">
              {{ parseInt(meteo7[24]?.main?.temp) }} °C
            </p>
            <p class="carte7__desc">
              {{ parseInt(meteo7[24]?.wind?.speed) }} km/h
            </p>
          </div>
          <div class="meteo__card7 carte7">
            <p class="carte7__desc">J + 4</p>
            <div v-for="weather in meteo7[32]?.weather" :key="weather.id">
              <img
                class="carte7__icon"
                :src="
                  'http://openweathermap.org/img/w/' + weather.icon + '.png'
                "
                alt="Image du soleil"
              />
            </div>
            <p class="carte7__desc">
              {{ parseInt(meteo7[32]?.main?.temp) }} °C
            </p>
            <p class="carte7__desc">
              {{ parseInt(meteo7[32]?.wind?.speed) }} km/h
            </p>
          </div>
          <div class="meteo__card7 carte7">
            <p class="carte7__desc">J + 5</p>
            <div v-for="weather in meteo7[39]?.weather" :key="weather.id">
              <img
                class="carte7__icon"
                :src="
                  'http://openweathermap.org/img/w/' + weather.icon + '.png'
                "
                alt="Image du soleil"
              />
            </div>
            <p class="carte7__desc">
              {{ parseInt(meteo7[39]?.main?.temp) }} °C
            </p>
            <p class="carte7__desc">
              {{ parseInt(meteo7[39]?.wind?.speed) }} km/h
            </p>
          </div>
        </div>
      </main>
    </ion-content>
    <ion-footer class="footer">
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
    </ion-footer>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import axios from "axios";

export default defineComponent({
  name: "MeteoPage",
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    return {
      router: useRouter(),
    };
  },
  data() {
    return {
      meteo: [],
      meteo7: [],
      ville: "london",
      lever: null,
      coucher: null,
      search: "",
    };
  },
  created() {
    axios({
      method: "get",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.ville +
        "&lang=fr&units=metric&APPID=51723a66f447c26c94106d08cad0f0fa",
    })
      .then(
        function (response) {
          this.meteo = response.data;
          console.log("meteo", this.meteo);
          // Convertion de l'heure Unix en heure normal :
          // Lever du soleil
          let unix_lever = this.meteo?.sys?.sunrise;
          var date_lever = new Date(unix_lever * 1000);
          var hours = date_lever.getHours();
          var minutes = "0" + date_lever.getMinutes();
          var seconds = "0" + date_lever.getSeconds();
          this.lever =
            hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
          console.log('lever du soleil', this.lever);

          // Lever du soleil
          let unix_coucher = this.meteo?.sys?.sunset;
          var date_coucher = new Date(unix_coucher * 1000);
          var hour = date_coucher.getHours();
          var minute = "0" + date_coucher.getMinutes();
          var second = "0" + date_coucher.getSeconds();
          this.coucher =
            hour + ":" + minute.substr(-2) + ":" + second.substr(-2);
          console.log('coucher du soleil', this.coucher);

          axios({
            method: "get",
            url:
              "https://api.openweathermap.org/data/2.5/forecast?q=" +
              this.ville +
              "&lang=fr&units=metric&APPID=c00e800a22afc219d0f675d36a0b9329",
          }).then(
            function (response) {
              this.meteo7 = response.data.list;
              console.log("meteo7", this.meteo7);
            }.bind(this)
          );
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
});
</script>
