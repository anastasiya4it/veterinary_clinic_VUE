<template>
  <div class="pet">
    <figure>
      <img
        v-bind:src="[preparedCatImage]"
        :key="preparedCatImage"
        v-bind:alt="[preparedCatImage]"
        width="400"
      />
    </figure>
    <!-- <div>{{ preparedCatImage }}</div> -->
    <span class="text">
      <header>
        <h3>{{ cat.name }}</h3>
        <h3>{{ cat.alt_names }}</h3>
      </header>

      <div
        class="temperament"
        v-for="item in arrayedTemperamentList"
        :key="item"
      >
        {{ item }}
      </div>

      <!-- <div>{{ arrayedTemperamentList }}</div> -->
      <div class="description">
        {{ cat.description }}
      </div>
      <div class="life_span">
        {{ cat.life_span }}
      </div>
      <!-- <div class="meta">
        <div class="adx-keywords" v-for="item in getArrayOfKeys" :key="item">
          {{ item }}
        </div>
      </div> -->
      <!-- <div class="abstract">
        {{ post.abstract }}
        <a :href="post.url" target="_blank">More...</a>
      </div> -->
    </span>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
  // methods: {
  // ...mapMutations({
  //   setIdPetImages: "cat/setIdPetImages",
  //   setUrlImages: "cat/setUrlImages",
  //   // setCats: "cat/setCats",
  //   setIsLoading: "cat/setIsLoading",
  // }),
  // ...mapActions({
  //   fetchCatImages: "cat/fetchCatImages",
  // }),
  // getImageCat() {
  //   this.setIdPetImages(this.cat.reference_image_id);
  //   console.log(this.idPetImages);
  //   // console.log(this.fetchCatImages(this.idPetImages));
  // },
  // },
  // computed: {
  // ...mapState({
  //   // cats: (state) => state.cat.cats,
  //   idPetImages: (state) => state.cat.idPetImages,
  //   urlImages: (state) => state.cat.urlImages,
  //   isLoading: (state) => state.cat.isLoading,
  // }),
  // },
  // mounted() {
  //   this.fetchCat();
  // },
  computed: {
    arrayedTemperamentList() {
      return this.cat.temperament.split(",");
    },
    preparedCatImage() {
      let trueUrl;
      this.images.map((item) => {
        if (
          // this.cat.reference_image_id &&
          item.idUrl == this.cat.reference_image_id
        )
          trueUrl = item.url;
        else {
          null;
        }
      });
      return trueUrl;
    },
    // preparedCatImage() {
    //   this.setIdPetImages(this.cat.reference_image_id);
    //   return this.idPetImages;
    // },
    // },
    // watch: {
    //   idPetImages(newValue) {
    //     this.fetchCatImages();
    //   },
  },
};
</script>

<style scoped>
.pet {
  padding: 20px;
  display: flex;
  font-family: nyt-imperial, georgia, "times new roman", times, serif;
  flex-direction: row;
  align-items: stretch;
  /* border-block-start: 2px solid #6c757d; */
  writing-mode: horizontal-tb;
}

figure {
  display: block;
  font-size: 13px;
  text-align: justify;
  width: 40%;
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
  padding: 0 0 0 50px;
  width: 60%;
  line-height: 1.4rem;
}

.abstract {
  padding: 5px;
  font-size: 16px;
}
.byline,
.adx-keywords {
  padding: 7px;
  font-size: 14px;
}
.temperament1 {
  border-radius: 7%;
  border: 1px solid rgb(114, 114, 114);
  margin: 3px;
}
.meta {
  line-height: 1.1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: justify;
}
a {
  font-weight: 500;
  color: rgba(114, 114, 114);
  text-decoration-line: none;
}
a:hover {
  color: rgb(114, 0, 0);
}
@media (max-width: 1336px) {
  figure {
    width: 30%;
  }
  .text {
    padding: 0 0 0 30px;
    width: 70%;
    line-height: 1.3rem;
  }
}
@media (max-width: 768px) {
  .post {
    display: block;
  }
  figure {
    width: 100%;
  }
  .text {
    width: 100%;
    padding: 5px 5px;
  }
}
</style>
