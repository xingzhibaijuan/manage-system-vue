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
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
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

