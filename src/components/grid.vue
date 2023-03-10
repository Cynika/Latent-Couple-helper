<template>
  <ImagePicker @image-random="onImageRandom" @image-selected="onImageSelected"/>

  <item-adder :prompt="prompt" :quan="quan" @add-Item="addItem"/>

  <AdjustLayout :colNum="colNum"
                :rowNum="rowNum"
                :opacity="opacity"
                :draggable="draggable"
                :resizable="resizable"
                :upscale="upscale"
                @change-colNum="update('colNum', $event)"
                @change-rowNum="update('rowNum', $event)"
                @change-opacity="update('opacity', $event)"
                @change-draggable="update('draggable', $event)"
                @change-resizable="update('resizable', $event)"
                @change-upscale="update('upscale', $event)"
  />

  <var-loading description="LOADING" type="circle" :loading="loading">
    <var-space justify="center" align="center">
      <grid-layout
          :style="{ backgroundImage: `url(${imageUrl})`, width: gridWidth+'px', height: gridHeight+'px'}"
          class="vue-grid-layout"
          v-model:layout="layout"
          :col-num="colNum"
          :row-height="rowHeight"
          :max-rows="rowNum"
          :margin="[1, 1]"
          :vertical-compact="vertical_compact"
          :is-draggable="draggable"
          :is-resizable="resizable"
      >
        <template #default="{ gridItemProps }">
          <grid-item
              v-for="item in layout" :key="item.i" v-bind="gridItemProps"
              :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :q="item.q" :p="item.p"
              :style="{ opacity: opacity }"
          >
            <Area :w="item.w" :h="item.h" :q="item.q" :i="item.i" :p="item.p"
                  @remove-item="removeItem(item.i)"/>
          </grid-item>
        </template>
      </grid-layout>
    </var-space>
  </var-loading>
  <InfoOutput :colNum="colNum" :rowNum="rowNum" :layout="layout"/>
</template>

<script>
import {GridItem, GridLayout} from 'vue3-drr-grid-layout'
import 'vue3-drr-grid-layout/dist/style.css'

import ImagePicker from './grid/imagePicker.vue'
import ItemAdder from './grid/itemAdder.vue'
import Area from './grid/area.vue'
import AdjustLayout from './grid/adjustLayout.vue'
import InfoOutput from './grid/infoOutput.vue'

export default {
  name: "newGrid",
  components: {GridItem, GridLayout, Area, ImagePicker, ItemAdder, AdjustLayout, InfoOutput},
  data() {
    return {
      layout: [
        {x: 0, y: 0, w: 2, h: 2, i: "0", q: 0.3, p: "a"},
        {x: 2, y: 0, w: 1, h: 1, i: "1", q: 0.3, p: "b"},
      ],
      draggable: true,
      resizable: true,
      vertical_compact: false,
      loading: false,
      colNum: 6,
      rowHeight: 30,
      rowNum: 6,
      gridWidth: 640,
      gridHeight: 320,
      opacity: 0.8,
      upscale: 0.6,

      index: 0,
      quan: 0.3,
      prompt: "prompt",

      imageUrl: '',
      imageWidth: 640,
      imageHeight: 320,
      randomApiUrl: 'https://api.ixiaowai.cn/api/api.php?'
    }
  },
  mounted() {
    this.index = this.layout.length;
    this.onImageRandom()
  },
  watch: {
    gridHeight(new_gridHeight) {
      this.rowHeight = new_gridHeight / this.rowNum
    },
    imageWidth(new_imageWidth) {
      this.gridWidth = new_imageWidth * this.upscale
    },
    imageHeight(new_imageHeight) {
      this.gridHeight = new_imageHeight * this.upscale
    },
    rowNum(new_rowNum) {
      this.rowHeight = this.gridHeight / new_rowNum
    },
    upscale(new_upscale) {
      this.gridWidth = this.imageWidth * new_upscale
      this.gridHeight = this.imageHeight * new_upscale
    }
  },
  methods: {
    readImage(Url) {
      this.loading = true
      LoadingBar.start()
      const img = new Image();
      img.src = Url;
      img.onload = () => {
        this.imageUrl = Url
        this.imageWidth = img.width;
        this.imageHeight = img.height;
        this.loading = false
        LoadingBar.finish()
      }
    },
    onImageRandom() {
      this.readImage(this.randomApiUrl + Math.random())
    },
    onImageSelected(Url) {
      this.readImage(Url)
    },
    update(prop, value) {
      this[prop] = value;
    },
    addItem: function ({prompt, quan}) {
      for (let i = 0; i < this.colNum; i++) {
        for (let j = 0; j < this.rowNum; j++) {
          let canInsert = true;
          for (let k = 0; k < this.layout.length; k++) {
            const block = this.layout[k];
            if (i >= block.x && i < block.x + block.w && j >= block.y && j < block.y + block.h) {
              canInsert = false;
              break;
            }
          }
          if (canInsert) {
            this.layout.push({
              x: i, y: j, w: 1, h: 1, i: this.index, q: quan, p: prompt
            });
            this.index++;
            return
          }
        }
      }
    },
    removeItem(val) {
      const index = this.layout.map(item => item.i).indexOf(val);
      this.layout.splice(index, 1);
    },
  }
}
</script>
<style scoped>
.vue-grid-layout {
  width: 100%;
  height: 100%;
  background: #eee no-repeat;
  background-size: cover;
}
</style>