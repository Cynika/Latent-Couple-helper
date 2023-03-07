<template>
  <var-divider description="3️⃣调整:布局列数,行数,透明度,放大倍数"/>
  <var-space justify="center" align="center">
    <var-counter :min="1" :max="64" v-model="colNum" @change="handleChange('colNum', colNum)"/>
    <var-counter :min="1" :max="64" v-model="rowNum" @change="handleChange('rowNum', rowNum)"/>
    <var-counter :min="0.0" :max="1.0" :step="0.1" :decimal-length="1" v-model="opacity"
                 @change="handleChange('opacity', opacity)"/>
    <var-counter :min="0.0" :max="2.0" :step="0.1" :decimal-length="1" v-model="upscale"
                 @change="handleChange('upscale',upscale)"/>
    <var-checkbox v-model="draggable" @change="handleChange('draggable', draggable)">可移动</var-checkbox>
    <var-checkbox v-model="resizable" @change="handleChange('resizable', resizable)">可调整</var-checkbox>
  </var-space>
</template>

<script>
export default {
  name: 'AdjustLayout',
  props: {
    colNum: {type: Number, default: 3},
    rowNum: {type: Number, default: 4},
    opacity: {type: Number, default: 0.5},
    draggable: {type: Boolean, default: true},
    resizable: {type: Boolean, default: true},
    upscale: {type: Number, default: 0.8},
  },
  data() {
    return {
      colNum: this.colNum,
      rowNum: this.rowNum,
      opacity: this.opacity,
      draggable: this.draggable,
      resizable: this.resizable,
      upscale: this.upscale,
    }
  },
  methods: {
    handleChange(propName, propValue) {
      this.$emit(`change-${propName}`, propValue);
    },
  },
};
</script>