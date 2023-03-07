<template>
  <var-app-bar title="Latent Couple 助手" title-position="left"
               color="linear-gradient(90deg, rgba(70,180,220,1) 0%, rgba(30,65,120,1) 100%)">

    <template #left>
      <var-space style="margin: 15px">
        <var-link
            href="{{url}}" target="_blank" underline="none">
          <var-button text outline text-color="white" type="primary">📚观看教程</var-button>
        </var-link>
      </var-space>
    </template>

    <template #right>
      <toggle-theme color="transparent"/>
    </template>

  </var-app-bar>
</template>

<script>
import ToggleTheme from "./toggleTheme.vue";

export default {
  name: "bar",
  components: {ToggleTheme},
  data() {
    return {
      url: "https://varlet.gitee.io/varlet-ui/#/zh-CN/home",
    };
  },
}
</script>
<style scoped>

</style>

