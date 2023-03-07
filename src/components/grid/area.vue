<template>
  <div>
    <var-chip class="itemLeft" size="small">{{ w }}*{{ h }}:{{ q }}</var-chip>
    <var-chip class="itemRight" size="small">
      {{ i }}
      <template #right>
        <var-icon name="close-circle" size="16" @click="removeItem"/>
      </template>
    </var-chip>
    <div class="text">
      <var-ellipsis style="max-width: 100px">
        {{ p }}
      </var-ellipsis>
    </div>
  </div>
</template>

<script>
export default {
  name: "Area",
  props: {
    w: {type: Number, required: true},
    h: {type: Number, required: true},
    q: {type: Number, required: true},
    i: {type: String, required: true},
    p: {type: String, required: true}
  },
  methods: {
    removeItem() {
      this.$emit('remove-item', this.i);
    }
  }
}
</script>
<style scoped>
.text {
  text-align: center;
  position: absolute;
  margin: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.itemLeft {
  position: absolute;
  left: 2px;
  bottom: 0;
}

.itemRight {
  position: absolute;
  right: 2px;
  top: 0;
}
</style>