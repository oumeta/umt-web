<template>
  <n-card :bordered="false">
    <grid
      ref="GG"
      :options="{
        columns: columns,
        rows: rows,

        defaultColumnOption: {
          resizable: true,
          sortable: true,
        },

        rowHeight: 40,
        rowResizable: true,
        fillable: 'xy',
        overscanRowCount: 5,
        overscanColumnCount: 3,
      }"
    ></grid>
  </n-card>
</template>

<script lang="ts" setup>
  //import { menuListApi, deleteMenuApi } from '/@/api/system/menu';
  import { ref, onMounted } from 'vue';
  import {
    RowData,
    ColumnsDef,
    CheckboxRender,
    RatingRender,
    SelectionRender,
    HyperlinkRender,
    RatingEditor,
    InputEditor,
    CheckboxEditor,
    SelectionEditor,
    BooleanTransformer,
    SelectionTransformer,
  } from '@visualjs/grid';
  import Grid from '/@/components/DataGrid/index.vue';
  // import IndexRender from './components/renders/IndexRender';
  //import amis from './components/ok.vue';

  // const bsScroll = ref<Expose.BetterScroll>();

  const rows = ref<RowData[]>([]);
  const height = ref('');

  // const gg = ref(null);

  //  let rows: RowData[] = [];
  const columns = ref<ColumnsDef[]>();
  const languageOptions = {
    English: { bgColor: '#2096f3', fgColor: '#ffffff' },
    Spanish: { bgColor: '#0dc9c9', fgColor: '#ffffff' },
    French: { bgColor: '#00c345', fgColor: '#ffffff' },
    German: { bgColor: '#fad714', fgColor: '#ffffff' },
    Swedish: { bgColor: '#ff9301', fgColor: '#ffffff' },
    Norwegian: { bgColor: '#e9594f', fgColor: '#ffffff' },
    Italian: { bgColor: '#ff708b', fgColor: '#ffffff' },
    Greek: { bgColor: '#8b7af0', fgColor: '#ffffff' },
    Icelandic: { bgColor: '#5586ff', fgColor: '#ffffff' },
    Portuguese: { bgColor: '#7a67ee', fgColor: '#ffffff' },
    Maltese: { bgColor: '#009688', fgColor: '#ffffff' },
  };
  //height.value = '100%';
  columns.value = [
    { headerName: 'ID', field: 'id', width: 100, pinned: 'left' },

    { field: 'B', headerName: 'B', resizable: true, width: 100 },

    { field: 'C', headerName: 'E', resizable: true, width: 100 },
    {
      headerName: 'Rating',
      field: `D`,
      resizable: true,
      cellRender: RatingRender,
      cellEditor: RatingEditor,
    },
    {
      headerName: 'Language',
      field: 'E',
      width: 100,
      resizable: true,
      transformer: new SelectionTransformer({
        allowNotExistOption: false,
        options: Object.keys(languageOptions),
      }),
      cellRender: SelectionRender,
      cellEditor: SelectionEditor,
      cellParams: { options: languageOptions },
    },
  ];
  const columnIteration = 10;
  function pickRandomProperty(obj) {
    let prop;
    let len = 0;
    let randomPos;
    let pos = 0;
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        len += 1;
      }
    }
    randomPos = Math.floor(Math.random() * len);
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (pos === randomPos) {
          return prop;
        }
        pos += 1;
      }
    }
  }
  let Page = 0;
  function addRows() {
    const rowDatas = [];
    for (let i = Page; i < Page + 20; i++) {
      // let rowData: RowData = {};
      const countryData = pickRandomProperty(languageOptions);
      const rowData = {
        id: i,
        B: `fuck${i}`,
        C: i % 2 == 0,
        D: i % 5,
        E: [countryData],
      };
      rowDatas.push(rowData);
      // rows.value.push(rowData);
    }

    return rowDatas;
  }

  const GG = ref(null);

  function initGrid(grid) {
    loadPage();
    grid.on('cellValueChanged', (cell, value) => {
      console.log(cell, value);
    });
    // grid.on('scrollPage', info => {
    //   console.log(info);
    // });
    grid.on('scrollPage', (height) => {
      console.log('nima', height, Page);
      if (height) {
        const { lastIndex, index } = height;
        console.log(lastIndex, index, lastIndex - index < 5);
        lastIndex - index < 5 ? loadPage() : '';
      }
    });
  }
  function loadPage() {
    const rows = addRows();
    console.log(rows);
    Page += 20;
    GG.value.instance.appendRows(rows);
  }
  onMounted(() => {
    initGrid(GG.value.instance);
    // console.log('asdfsad', );
  });

  const amisjson = {
    type: 'page',
    title: '表单页面',
    body: {
      type: 'form',
      mode: 'horizontal',
      api: '/saveForm',
      body: [
        {
          label: 'Name',
          type: 'input-text',
          name: 'name',
        },
        {
          label: 'Email',
          type: 'input-email',
          name: 'email',
        },
      ],
    },
  };
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

<style></style>
