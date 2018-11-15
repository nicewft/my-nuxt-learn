<template>
    <div class="city-box">
      <ul>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
      </ul>
    </div>
</template>  

<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: []
    }
  },
  async asyncData() {
    let {status, data: {result}} = await axios.get('http://127.0.0.1:3000/city/getCitys')
    if (status === 200) {
      return {
        list: result
      }
    }
  }
}
</script>

<style scoped>
</style>
