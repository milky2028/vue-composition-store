<template>
  <div>Thing Route</div>
</template>

<script lang="ts">
import { createComponent, onMounted, inject, Ref } from '@vue/composition-api';
import { Modules } from '../store/store';

export default createComponent({
  setup() {
    const { thing1 } = inject(Modules.thing1) as { thing1: Ref<boolean> };
    onMounted(() => thing1.value = true)
  }
})
</script>