<template>
  <div class="vuex">
    - vuex {{ $store.state.count }}
    <button @click="increment()">增加</button>
    <button @click="decrement()">减少</button>
    {{ count }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '../store/store'
export default {
  methods: {
    ...mapActions(['increment', 'decrement'])
  },
  computed: {
    count () {
      //   return 66
      //   return store.state.count
      return store.state.count
    }
  }
}
</script>

<style></style>
