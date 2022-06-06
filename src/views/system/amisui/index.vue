<template>
  <div>
    <amis :amisjson="amisjson"></amis>
  </div>
</template>

<script setup lang="ts">
  import Amis from './amis.vue';
  import pageJson from '/@/page/crud.json';
  const amisjson = pageJson;
  //  	{
  //   type: 'page',
  //   title: '表单页面',
  //   body: {
  //     type: 'form',
  //     mode: 'horizontal',
  //     api: '/saveForm',
  //     body: [
  //       {
  //         label: 'Name',
  //         type: 'input-text',
  //         name: 'name',
  //       },
  //       {
  //         label: 'Email',
  //         type: 'input-email',
  //         name: 'email',
  //       },
  //     ],
  //   },
  // };
  // grid.value.on('cellValueChanged', (cell, value) => {
  //   console.log(cell, value);
  // });
  // rows.value = [
  //   { id: 'r_01', A: 'A-01', B: 'B-01', C: 'C-01', D: 'D-01', E: 'E-01' },
  //   { id: 'r_02', A: 'A-02', B: 'B-02', C: 'C-02', D: 'D-02', E: 'E-02' },
  //   { id: 'r_03', A: 'A-03', B: 'B-03', C: 'C-03', D: 'D-03', E: 'E-03' },
  //   { id: 'r_04', A: 'A-04', B: 'B-04', C: 'C-04', D: 'D-04', E: 'E-04' }
  // ];
</script>

<style>
  html,
  body,
  #app {
    height: 100%;
  }

  .tab-shadow {
    box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
  }
</style>
