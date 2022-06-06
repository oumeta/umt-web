<template>
  <div id="box"></div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';

  console.log('ces ');
  const props = defineProps({
    amisjson: {
      type: Object,
      required: true,
    },
  });

  onMounted(() => {
    // @ts-ignore
    const amis = amisRequire('amis/embed');
    console.log(amis);

    const amisScoped = amis.embed('#box', props.amisjson);
  });
</script>
