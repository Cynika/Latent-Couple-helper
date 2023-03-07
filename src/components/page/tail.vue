<template>
  <var-app-bar title="这里是页面底部,网页基于varlet-ui@vue3+vite4" title-position="center"
               color="linear-gradient(90deg, rgba(70,180,220,1) 0%, rgba(30,65,120,1) 100%)">

    <template #content>
      <var-space justify="center" :size="[20, 20]">
        <var-link
            href="{{url}}" target="_blank" underline="none">
          <var-button text outline text-color="white" type="primary"><var-icon name="play-circle" />观看教程</var-button>
        </var-link>
        <var-link
            href="{{url}}" target="_blank" underline="none">
          <var-button text outline text-color="white" type="primary"><var-icon name="account-circle-outline" />Cynika</var-button>
        </var-link>
        <var-link
            href="{{url}}" target="_blank" underline="none">
          <var-button text outline text-color="white" type="primary"><var-icon name="play-circle-outline" />BiliBili</var-button>
        </var-link>
        <var-link
            href="{{url}}" target="_blank" underline="none">
          <var-button text outline text-color="white" type="primary"><var-icon name="github" />Github</var-button>
        </var-link>
      </var-space>
    </template>
  </var-app-bar>

</template>

<script>
export default {
  name: "tail",
  data() {
    return {
      url: "https://varlet.gitee.io/varlet-ui/#/zh-CN/home",
    };
  },
}


</script>

<style scoped>

</style>