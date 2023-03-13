<template>
  <div class="input-container">
    <input type="text" id="input" required="" />
    <label for="input" class="label">Cat breed search</label>
    <div class="underline"></div>
  </div>
</template>
<!-- placeholder="Cat breed search"
 :value="modelValue"
      @input="updateInput" -->
<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
/*transform: translateY(-50%) scale(0.9); #db6b03 #ffa857 */
/* Input container */
.input-container {
  position: relative;
  margin: 50px auto;
  width: 100%;
}

.input-container input[type="text"] {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 3px solid #db6b03;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;
  color: #db6b03;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  top: -20px;
  font-size: 18px;
  color: #db6b03;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #db6b03;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type="text"]:focus ~ .underline,
.input-container input[type="text"]:valid ~ .underline {
  transform: scaleX(1);
}
</style>
