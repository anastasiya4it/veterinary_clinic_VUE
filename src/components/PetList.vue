<template>
  <div class="pets" v-if="cats.length > 0">
    <!-- <h2>{{ getTitle }}</h2> -->

    <pet-item v-for="cat in cats" :cat="cat" :key="cat.id" :images="images" />
    <!-- <div>{{ cats }}</div> -->
  </div>
  <div class="else" v-else>
    <h3>Nothing found</h3>
  </div>
</template>

<script>
import PetItem from "@/components/PetItem.vue";
import MyButton from "./UI/MyButton.vue";
export default {
  props: {
    cats: {
      type: Array,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  components: {
    PetItem,
    MyButton,
  },
};
</script>
<style scoped>
h2 {
  margin: 0 0 20px 20px;
}
.pets {
  display: block;
  list-style-type: decimal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.else {
  display: block;
  text-align: center;
}
</style>
