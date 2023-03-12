<template>
  <div class="allcats">
    <!-- <div>{{ AllListCat }}</div> -->
    <!-- <div>{{ completeListURLImages }}</div> -->
    <pet-list :cats="cats" :images="urlImages" v-if="!isLoading"></pet-list>
    <div v-else>Loader</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import PetList from "@/components/PetList.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {
    PetList,
    MyButton,
  },
  methods: {
    ...mapMutations({
      setCats: "cat/setCats",
      setIsLoading: "cat/setIsLoading",
      setIdPetImages: "cat/setIdPetImages",
      setUrlImages: "cat/setUrlImages",
      setOneIdImage: "cat/setOneIdImage",
    }),
    ...mapActions({
      fetchCat: "cat/fetchCat",
      fetchCatImages: "cat/fetchCatImages",
    }),
  },
  computed: {
    ...mapState({
      cats: (state) => state.cat.cats,
      isLoading: (state) => state.cat.isLoading,
      idPetImages: (state) => state.cat.idPetImages,
      urlImages: (state) => state.cat.urlImages,
      oneIdImage: (state) => state.cat.oneIdImage,
    }),
    ...mapGetters({
      completeListIdImages: "cat/completeListIdImages",
    }),
  },
  mounted() {
    this.fetchCat();

    this.setUrlImages([]);
    this.idPetImages.map((item) => {
      if (item) {
        this.setOneIdImage(item);
        this.fetchCatImages();
      }
    });
  },
};
</script>

<style>
.allcats {
  margin: 5% 0 0 0;
}
</style>
