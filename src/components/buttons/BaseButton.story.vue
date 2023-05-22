<template>
  <Story
    :layout="{ type: 'grid', iframe: true }"
  >
    <Variant title="default">
      <BaseButton />
    </Variant>
    <Variant title="rounded">
      <BaseButton rounded="true" />
    </Variant>
    <Variant title="blue">
      <BaseButton button-color="blue" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
</script>