<template>
  <div class="app" id="top">
    <div class="body">
      <!-- <div v-if="statusResponse == 200"> -->
      <navigation-bar></navigation-bar>
      <router-view> </router-view>
      <!-- </div> -->
      <!-- <div v-else>
      <login></login>
    </div> -->
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import { mapState, mapMutations, mapActions } from "vuex";
// import Login from "@/pages/Login.vue";

export default {
  components: {
    NavigationBar,
    // Login,
  },
  computed: {
    ...mapState({
      statusResponse: (state) => state.cat.statusResponse,
    }),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background: none; */
}

.app {
  padding: 10px;
  font-family: "Montserrat";
  font-style: normal;

  /* height: 100%; */
  background: radial-gradient(
    97.71% 308.81% at 1.56% 3.33%,
    #ffa857 0%,
    #ffd600 100%
  );
}
.body {
  max-width: 1400px;
  /* height: 1080px; */
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 1336px) {
  .app {
    padding: 20px;
    max-width: 1200px;
  }
}
</style>
