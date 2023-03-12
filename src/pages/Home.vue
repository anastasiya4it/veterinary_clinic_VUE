<template>
  <div class="all">
    <div class="part1">
      <div class="title">Let's make you and your pet happy at any time</div>

      <div class="text">
        Veterinary clinic for all common and unusual animals. The veterinarian
        can allocate by phone or go to the house. We work 24/7.
      </div>
      <div class="button">
        <div class="buttom_text">
          <img
            style="margin: 0 10px 0 0"
            src="@/images/Call_a_doctor.png"
            alt="Call a doctor"
            width="41"
            height="41"
          />
          Call a doctor
        </div>
      </div>
    </div>
    <!-- <div class="part2"></div> -->
    <img class="pet" src="@/images/pet.png" alt="Call a doctor" width="800" />
  </div>
</template>

<script></script>

<style scoped>
.all {
  display: flex;
  align-items: center;
  max-width: 1400px;
}
.part1 {
  position: relative;
  left: 10rem;
  top: 1rem;
  /* min-width: 50%; */
}
.pet {
  /* position: relative; */
  /* left: 10rem; */
  margin-top: -5rem;
  float: right;
}

.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 55px;
  margin: 0 20px 20px;
  /* position: relative;
  top: 0px;
  left: -20px; */
}
.text {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin: 0 20px 20px;
}
.buttom_text {
  display: flex;
  align-items: center;
  color: #fff;
}
.button {
  margin: 0 20px;
  /*  */
  position: absolute;
  /* justify-content: space-between; */
  /* margin: 10px; */

  /* align-content: center; */
  padding: 10px 20px;
  background: linear-gradient(273.26deg, #f81717 8.62%, #ce3030 89.53%);
  box-shadow: 0px 9px 34px #fb4040;
  border-radius: 30px;
}
</style>
