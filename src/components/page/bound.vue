<template>
  <div class="bound var-elevation--2">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bound"
}
</script>
<style scoped>
.bound {
  width: 95%;
  height: auto;
  margin: 10px auto;
  padding: 5px;
  border-radius: 5px;
}

</style>