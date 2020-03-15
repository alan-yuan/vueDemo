<template>
  <div id="app">
    <header>
      <router-link to="/home">首页</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/user">用户</router-link>
      <router-link :to="'/user/' + detail">用户详情</router-link>
      <!-- <router-link :to="goLink()">用户详情1</router-link> -->
    </header>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      detail: 'userDetail'
    }
  },
  components: {},
  mounted () {
    this.getRouter()
  },
  methods: {
    goback () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    getRouter () {
      console.log(this.$route)
      console.log(this.$router)
    },
    goLink () {
      window.location.href = 'http://www.baidu.com'
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a {
    padding: 0 15px;
    text-decoration: none;
    color: #333;
  }
}
header {
  margin-bottom: 25px;
}
</style>
