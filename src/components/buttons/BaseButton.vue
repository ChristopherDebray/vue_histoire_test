<template>
  <button
    :class="[
      rounded ? rounded : '',
      buttonColor,
    ]"
    class="bg bg--danger"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  label: {
    default: "Button",
    required: true,
    type: String,
  },
  buttonColor: {
    default: "primary",
    type: String,
  },
  rounded: {
    default: "",
    type: String,
    validator: (value: string) => {
      return ["full", "sm", "md"].includes(value);
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
