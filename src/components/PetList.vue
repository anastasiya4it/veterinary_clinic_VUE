<template>
  <div class="inline">
    <my-checkbox type="checkbox" name="BreedFeatures" value="Bike" />
    <label for="BreedFeatures">Breed features</label>
  </div>
  <my-input></my-input>
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
import MyCheckbox from "./UI/MyCheckbox.vue";
import MyInput from "./UI/MyInput.vue";
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
    MyCheckbox,
    MyInput,
  },
};
</script>
<style scoped>
.inline {
  display: flex;
  justify-content: center;
  align-items: center;
}
label {
  margin: 0 0 0 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4rem;
}
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
