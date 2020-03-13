<template>
  <div>
    父组件: {{msg}}
    <Son1 :dd="msg" @closeTip="change"></Son1>
    <Son2 name='Tom' age="23" address="江西"></Son2>
  </div>
</template>

<script>
import Son1 from './Son1'
import Son2 from './Son2'

export default {
  components: {
    Son1,
    Son2
  },
  data () {
    return {
      msg: "我是父组件"
    }
  },
  methods: {
    change (val) {
      this.msg = val;
    }
  }

}
</script>