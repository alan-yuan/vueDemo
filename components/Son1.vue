<template>
  <div>
    我是子组件Son1:{{dd}}
    <button @click="handle">点击修改</button>
  </div>
</template>

<script>
export default {
  methods: {
    handle () {
      this.$emit('closeTip', '子组件向父组件传值');
    }
  },
  props: {
    dd: {
      type: String,
      default: '默认值'
    }
  }
}
</script>