<template>
  <div class="navigation">
    <div class="navigation-bar">
      <figure>
        <img src="@/images/logo.svg" alt="Happy Pet" width="108" height="100" />
        <figcaption>Happy Pet</figcaption>
      </figure>
      <router-link to="/home">Home</router-link>
      <router-link to="/cat">More about cats</router-link>
      <router-link to="/dog">More about dogs</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: { MyButton },
  computed: {},
};
</script>
<style scoped>
figure {
  display: flex;
  align-items: center;
}
img {
  margin-right: 15px;
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.72); */
}
figcaption {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
}
.navigation {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background-color: #ffa857;
  height: 150px; */
  /* display: none; */
  /* display: block;
  height: 50px;
  width: 100%; */
}
/* .bacground {
  background-color: #ffa857;
  height: 50px;
} */
.navigation-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 400;
  /* font-size: 15px;
  line-height: 18px; */
}
a {
  color: #000;
  text-decoration-line: none;
}

a:hover,
a:active {
  font-weight: 600;
  border-block-end: 2px solid #000000;
}
</style>
