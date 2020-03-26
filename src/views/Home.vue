<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div ref="content" class="content">
      <div class="item" v-for="(item,index) in files" :key="index">
        <img
         class="img-item"  
         :src="item">
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  data() {
    return {
      files: [],
    };
  },
  name: "Home",
  components: {
    // HelloWorld
  },
  methods: {
    // 获取全部要预加载的文件
    getFiles() {
      this.files = require
        .context("../assets", false, /.(png|jpg|jpeg|gif|bmp|webp)$/)
        .keys()
        .map(item => require(`../assets${item.slice(1)}`));
      // console.log(this.files);
    }
  },
  created() {
    this.getFiles();
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

  .item {
    align-self: center;
    width: 50%;
    .img-item {
      width: 100%;
  }
  }
  .content {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
</style>