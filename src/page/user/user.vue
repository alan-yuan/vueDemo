<template>
  <div class="user">
    <p><router-link to="detail">用户详情</router-link></p>
    <p><router-view></router-view></p>
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '用户中心'
    }
  },
  watch: {}
}
</script>

<style></style>
