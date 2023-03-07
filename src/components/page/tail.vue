<template>
  <var-divider description="这里是页面底部,网页基于varlet-ui@vue3+vite4"/>
  <var-app-bar color="linear-gradient(90deg, rgba(72,176,221,1) 0%, black 100%)">
    <var-space justify="center">
        <var-link
            href="{{url}}" target="_blank" underline="none">
          <var-button text outline text-color="white" type="primary">📚观看教程</var-button>
        </var-link>
      <var-link
          href="{{url}}" target="_blank" underline="none">
        <var-button text outline text-color="white" type="primary">📚Cynika</var-button>
      </var-link>
      <var-link
          href="{{url}}" target="_blank" underline="none">
        <var-button text outline text-color="white" type="primary">📚BiliBili</var-button>
      </var-link>
      <var-link
          href="{{url}}" target="_blank" underline="none">
        <var-button text outline text-color="white" type="primary">📚Github</var-button>
      </var-link>
    </var-space>



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
.divider-example-vertical-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
}

</style>