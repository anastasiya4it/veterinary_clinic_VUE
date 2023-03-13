<template>
  <div>
    <div v-for="param in getPoints" :key="param.text" class="points">
      <h3>{{ param.text }}</h3>
      <!-- {{ param.name }} -->
      <div class="item">
        <div v-for="param in param.name" :key="param.index">
          <!-- {{ typeof param }} -->
          <div v-if="param" class="kyp-breed-detail__traits__star active"></div>
          <div v-else class="kyp-breed-detail__traits__star"></div>
        </div>
      </div>
    </div>
    <!-- <h4>{{ getPoints }}</h4> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      paramObject: [
        // { name: "lap", text: "Lap Cat" },
        { name: "intelligence", text: "Intelligence" },
        { name: "energy_level", text: "Energy Level" },
        { name: "grooming", text: "Grooming Requirements" },
        { name: "shedding_level", text: "Shedding Level" },
        { name: "child_friendly", text: "Good With Children" },
        { name: "dog_friendly", text: "Good With Dogs" },
        { name: "stranger_friendly", text: "Good With Stranger" },
        { name: "vocalisation", text: "Chattiness" },
        { name: "adaptability", text: "Adaptability" },
        { name: "affection_level", text: "Affectionate" },
        { name: "social_needs", text: "Social Needs" },
        { name: "health_issues", text: "Health Issues" },
      ],
      booleanArrayForPoints: [],
    };
  },
  props: {
    cat: {
      type: Object,
      required: true,
    },
  },

  computed: {
    nameParam() {
      // this.cat[this.paramObject[0].name];
      let array = [];
      for (let i = 0; i < this.paramObject.length; i++) {
        array.push({
          name: this.cat[this.paramObject[i].name],
          text: this.paramObject[i].text,
        });
      }
      // console.log(this.array);
      return array;
      // paramObject.map((item) => item.reduce((acc, v) => (acc = this.cat.v), 0));
    },
    getPoints() {
      let param;

      for (let i = 0; i < +this.nameParam.length; i++) {
        param = +this.nameParam[i].name;
        // console.log(param);
        let points = [];
        for (let i = 0; i < 5; i++) {
          param > i ? (points[i] = true) : (points[i] = false);
          //     // console.log(points[i]);
        }
        this.booleanArrayForPoints.push({
          name: points,
          text: this.nameParam[i].text,
          // id: Date.now(),
        });
      }
      return this.booleanArrayForPoints;
      // return points;
    },
  },
};
</script>

<style>
.points {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  /* line-height: 1.4rem; */
}
.kyp-breed-detail__traits__star {
  width: 15px;
  height: 15px;
  margin-left: 2px;
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 50px;
}
.active {
  background-color: #f07c0f;
  border: 1px solid #000000;
}
h3 {
  margin: 0 20px 0 0;
}
.item {
  display: flex;
}
</style>
