<template>
  <el-container>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <layout-aside></layout-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  padding: 0;
}
</style>

<script>
import layoutAside from './components/aside.vue';
import layoutHeader from './components/header.vue';

export default {
  components: {
    layoutAside,
    layoutHeader
  }  
}
</script>

