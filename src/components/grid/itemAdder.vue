<template>
  <var-divider description=" 2️⃣添加:新区域"/>
  <var-space justify="center" align="center">
    <var-input placeholder="请输入提示词(例如prompt)" clearable v-model="prompt"/>
    <var-input placeholder="请输入权重(例如0.5)" clearable v-model="quan"/>
    <var-button type="primary" @click="addItem">添加</var-button>
  </var-space>
</template>

<script>
export default {
  name: "ItemAdder",
  props: {
    prompt: {type: String, default: "prompt"},
    quan: {type: Number, default: 0.5},
  },
  data() {
    return {
      prompt: this.prompt,
      quan: this.quan,
    };
  },
  methods: {
    addItem() {
      this.$emit("addItem", {
        prompt: this.prompt,
        quan: this.quan,
      });
    },
  },
};
</script>