<template>
  <div id="DataGrid" ref="gridWrap" class="v-grid-default-theme"></div>

  <!-- <div ref="bsWrap" class="h-full text-left">
    <div ref="bsContent" class="inline-block" :class="{ 'h-full': !isScrollY }">
      <slot></slot>
    </div>
  </div> -->
</template>

<script setup lang="ts">
  import { ref, computed, watch, onMounted } from 'vue';
  // import { useElementSize } from '@vueuse/core';
  import { Grid, GridOptions } from '@visualjs/grid';
  import '@visualjs/grid/dist/style.css';
  import '@visualjs/grid/dist/themes/default.css';

  // import BScroll from '@better-scroll/core';
  // import type { Options } from '@better-scroll/core';

  interface Props {
    /** better-scroll的配置: https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html */
    options: GridOptions;
  }

  const props = defineProps<Props>();

  const gridWrap = ref<HTMLElement>();
  const instance = ref<Grid>();
  // const bsContent = ref<HTMLElement>();
  // const isScrollY = computed(() => Boolean(props.options.scrollY));

  function initGrid() {
    if (!gridWrap.value) return;
    instance.value = new Grid(gridWrap.value, props.options);
  }

  onMounted(() => {
    initGrid();
  });

  defineExpose({
    instance,
  });
</script>
<style scoped>
  #DataGrid {
    width: calc(100% - 10px);
    height: calc(100vh - 150px);
  }

  .v-grid-root {
    height: calc(100% - 50px);
  }
</style>
