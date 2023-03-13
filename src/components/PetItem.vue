<template>
  <div class="cart">
    <header>
      <h2>
        {{ cat.name }}
      </h2>
      <h3 v-if="cat.alt_names">Alternative breed name {{ cat.alt_names }}</h3>
    </header>
    <div class="pet">
      <figure>
        <img
          :src="[preparedCatImage]"
          :key="preparedCatImage"
          :alt="[preparedCatImage]"
          width="400"
        />
      </figure>
      <!-- <div>{{ preparedCatImage }}</div> -->

      <div class="text">
        <parameters-with-poits :cat="cat" />
      </div>
      <div class="text">
        <div class="inline">
          <h3>Lifespan</h3>
          <p>{{ cat.life_span }} years</p>
        </div>
        <div class="inline">
          <h3>Weight</h3>
          <p>
            {{ cat.weight.imperial }} pounds<br />{{ cat.weight.metric }}
            kilogram
          </p>
        </div>
        <h3 v-if="breedFeatures">Breed features</h3>
        <p>{{ breedFeatures }}</p>
        <h3>Temperament</h3>

        <p>{{ cat.temperament }}</p>

        <h3>Description breed</h3>
        <p>
          {{ cat.description }}
        </p>
      </div>
    </div>
    <footer>
      <a v-if="[cat.wikipedia_url]" :href="[cat.wikipedia_url]" target="_blank">
        <img
          src="@/images/wikipedia.svg"
          alt="Wikipedia"
          height="40"
          width="40"
        />
      </a>
      <a v-if="[cat.cfa_url]" :href="[cat.cfa_url]" target="_blank">
        <img
          src="@/images/CFA.png"
          alt="The Cat Fanciers’ Association, Inc."
          height="40"
          width="40"
        />
      </a>
    </footer>
  </div>
</template>

<script>
import ParametersWithPoits from "@/components/ParametersWithPoits.vue";
export default {
  props: {
    cat: {
      type: Object,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  components: {
    ParametersWithPoits,
  },
  computed: {
    arrayedTemperamentList() {
      return this.cat.temperament.split(",");
    },
    preparedCatImage() {
      let trueUrl;
      this.images.map((item) => {
        if (item.idUrl == this.cat.reference_image_id) trueUrl = item.url;
        else {
          null;
        }
      });
      return trueUrl;
    },
    breedFeatures() {
      let paramObject = [
        { name: "indoor", text: "Indoor cat" },
        { name: "lap", text: "Lap cat" },
        { name: "experimental", text: "Experimental" },
        { name: "hairless", text: "Hairless" },
        { name: "natural", text: "Natural" },
        { name: "rare", text: "Rare" },
        { name: "rex", text: "Rex" },
        { name: "suppressed_tail", text: "Short tail" },
        { name: "short_legs", text: "Short legs" },
        { name: "hypoallergenic", text: "Hypoallergenic" },
      ];
      let array = [];
      for (let i = 0; i < paramObject.length; i++) {
        if (this.cat[paramObject[i].name]) array.push(paramObject[i].text);
      }
      return array.join(", ");
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 20px 0;
  margin: 20px 0;
  border-radius: 10px;
  /* background: #e0e0e0; */
  box-shadow: 5px 5px 30px #fa9c45;
  /* box-shadow: inset 5px 5px 10px #ffa857, inset -5px -5px 10px #ffa857; */
}
.inline {
  display: flex;
}

footer {
  display: flex;
  justify-content: space-evenly;
  color: #ffffff;
}
header {
  margin: 1rem 0;
  line-height: 1.5rem;
  text-align: center;
}
p,
li {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4rem;
}

.pet {
  padding: 20px;
  display: flex;
  font-family: nyt-imperial, georgia, "times new roman", times, serif;
  justify-content: space-around;
  align-items: flex-start;
  /* align-content: stretch; */
  /* border-block-start: 2px solid #6c757d; */
  writing-mode: horizontal-tb;
}

figure {
  display: block;
  font-size: 13px;
  text-align: justify;
  width: 100%;
  color: rgb(114, 114, 114);
  line-height: 1.1rem;
}
img {
  border-radius: 0.5rem;
  width: 100%;
}
figcaption {
  font-size: 12px;
  padding: 5px 20px 0;
}
.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 0 40px;
  width: 100%;
  line-height: 1.4rem;
}
h3 {
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
</style>
