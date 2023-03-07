<template>
  <div class="bound var-elevation--4" >
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
  margin: 15px;
  padding: 15px;
  border-radius: 5px;
}

</style>