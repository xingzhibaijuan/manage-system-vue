<template>
  <div class="layout-header">
    <div class="logo">后台管理系统</div>
    <!-- 折叠按钮 -->
    <div class="btn-collapse" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <ul class="btn-list">
      <li>
        <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom"
                    >
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
      </li>
      <li>
        <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.layout-header {
  background: rgba(0,0,0,.7);
  display: flex;
  justify-content: flex-end;
}
.logo {
  background: rgba(255,255,255,.2);
  width: 200px;
  line-height: 60px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-style: italic;
}
.btn-collapse {
  line-height: 60px;
  font-size: 25px;
  color: #fff;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
}
.btn-collapse:hover {
  color: rgba(255,255,255,.8);
}
.btn-list {
  margin-left: auto;
  display: flex;
  flex-direction: row;
  list-style: none;
}
</style>

<script>
export default {
  data() {
    return {
      collapse: false
    }
  },
  methods: {
    collapseChage() {
      this.collapse = !this.collapse;
    }
  }
}
</script>