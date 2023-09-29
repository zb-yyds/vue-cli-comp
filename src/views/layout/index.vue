<template>
  <RouterView />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps({})
const emit = defineEmits([])
onMounted(() => {})
</script>

<script lang="ts">
export default { name: 'Layout' }
</script>
<style lang="scss" scoped></style>
