<template>
  <div>
    <div class="news">
      <pet-list :cats="cats" v-if="!isLoading"></pet-list>

      <div v-else>Loader</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import PetList from "@/components/PetList.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MySelect from "@/components/UI/MySelect.vue";
export default {
  components: {
    PetList,
    MyInput,
    MySelect,
  },

  methods: {
    ...mapMutations({
      setCats: "cat/setCats",
      setIsLoading: "cat/setIsLoading",
      setSearchTitle: "cat/setSearchTitle",
    }),
    ...mapActions({
      fetchCat: "cat/fetchCat",
    }),
  },
  computed: {
    ...mapState({
      cats: (state) => state.cat.cats,
      isLoading: (state) => state.cat.isLoading,
      searchTitle: (state) => state.cat.searchTitle,
    }),
    ...mapGetters({
      searchTitleInSelect: "cat/searchTitleInSelect",
    }),
  },
  watch: {},

  mounted() {
    this.fetchCat();
  },
};
</script>

<style>
.news {
  margin: 5% 0 0 0;
}
</style>
