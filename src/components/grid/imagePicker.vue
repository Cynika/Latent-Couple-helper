<template>
  <var-divider description="1️⃣选择:背景图片"/>
  <var-space justify="center">
    <var-button type="primary" @click="randomImage">随机
      <var-icon name="help-circle"/>
    </var-button>
    <var-button type="primary">
      上传图片
      <var-icon name="upload"/>
      <input type="file" ref="inputFile" @change="onFileSelected"></var-button>
  </var-space>
</template>

<script>
export default {
  name: "ImagePicker",
  data() {
    return {
      Url: '',
      width: 640,
      height: 320,
    }
  },
  methods: {
    randomImage() {
      this.$emit("image-random");
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.Url = reader.result;
        this.$emit("image-selected", this.Url);
      };
    },
  },
}
</script>

<style scoped>

</style>