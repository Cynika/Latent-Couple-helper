<template>
  <var-divider description="4️⃣输出:复制参数进插件"/>
  <var-space justify="center" align="center">
    <var-input placeholder="divisions分割" readonly v-model="divisions">
      <template #append-icon>
        <var-button  type="primary" size="small" @click="touchCopy(divisions)"><var-icon name="content-copy" /></var-button>
      </template>
    </var-input>
    <var-input placeholder="positions位置" readonly v-model="positions">
      <template #append-icon>
        <var-button  type="primary" size="small" @click="touchCopy(positions)"><var-icon name="content-copy" /></var-button>
      </template>
    </var-input>
    <var-input placeholder="weight权重" readonly v-model="weight">
      <template #append-icon>
        <var-button  type="primary" size="small" @click="touchCopy(weight)"><var-icon name="content-copy" /></var-button>
      </template>
    </var-input>
  </var-space>
  <var-space justify="center" align="center">
    <var-input placeholder="tags提示词" readonly textarea v-model="tags">
      <template #append-icon>
        <var-button  type="primary" size="small" @click="touchCopy(tags)"><var-icon name="content-copy" /></var-button>
      </template>
    </var-input>
  </var-space>
</template>

<script>
import useClipboard from 'vue-clipboard3'

const {toClipboard} = useClipboard()
const copy = async (msg) => {
  try {
    await toClipboard(msg)
    Snackbar.success({content: "复制成功", position: 'bottom', duration: 1000})

  } catch (e) {
    Snackbar.warning({content: "复制失败", position: 'bottom', duration: 1000})
    console.log(e)
  }
}
export default {
  name: "InfoOutput",
  props: {
    colNum: {type: Number, default: 3},
    rowNum: {type: Number, default: 4},
    layout: {type: Array, default: () => []},
  },
  data() {
    return {
      divisions: '',
      positions: '',
      weight: '',
      tags: '',
    };
  },
  watch: {
    rowNum(new_rowNum) {
      console.log('new_rowNum', new_rowNum)
    },
    layout: {
      handler(new_layout) {
        console.log('new_layout', new_layout)
        const divisions = ['1:1']
        const positions = ['0:0']
        const weight = ['0.5']
        const tags = ['background:prompt']
        for (const {x, y, w, h, q, p} of new_layout) {
          const division = `${this.rowNum}:${this.colNum}`
          const position = this.compute_range(x, y, w, h)
          divisions.push(division)
          positions.push(position)
          weight.push(q)
          tags.push(p)
        }
        this.divisions = divisions.join(',')
        this.positions = positions.join(',')
        this.weight = weight.join(',')
        this.tags = tags.join('\nAND ')
      },
      deep: true
    }
  },
  methods: {
    compute_range(x, y, w, h) {
      if (w === 1 && h === 1) {
        return `${y}:${x}`;
      }
      let s = `${y}-${y + h}`;
      let e = `${x}-${x + w}`;
      if (w === 1) {
        return `${s}:${x}`;
      }
      if (h === 1) {
        return `${y}:${e}`;
      }
      return `${s}:${e}`;
    },
    touchCopy(text) {
      copy(text)
    }
  },
}

</script>

<style scoped>

</style>