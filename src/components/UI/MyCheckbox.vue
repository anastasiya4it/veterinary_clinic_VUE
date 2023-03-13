<template>
  <div class="content">
    <label class="checkBox">
      <input id="ch1" type="checkbox" />
      <div class="transition"><slot></slot></div>
    </label>
  </div>
</template>

<script>
export default {
  name: "my-checkbox",
};
</script>

<style scoped>
.clear {
  clear: both;
}

.checkBox {
  display: block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  /* border: 3px solid rgba(255, 255, 255, 0); */
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 0px 2px #be6109;
}

.checkBox div {
  width: 60px;
  height: 60px;
  background-color: #db6b03;
  top: -52px;
  left: -52px;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 100;
}

.checkBox input[type="checkbox"]:checked + div {
  left: -10px;
  top: -10px;
}

.checkBox input[type="checkbox"] {
  position: absolute;
  left: 50px;
  visibility: hidden;
}

.transition {
  transition: 300ms ease;
}
</style>
