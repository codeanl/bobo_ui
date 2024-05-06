<template>
  <n-list hoverable clickable class="n-list">
    <n-list-item>
      <p class="listTitle">基本信息</p>
      <div class="profileInfo">
        <div>
          <n-avatar class="avatar" size="medium" :src="userStore.avatar" />
        </div>
        <div class="profileInfoName">
          <div style="margin-right: 5px">
            <p style="font-size: 13px">昵称: {{ userStore.nickname }}</p>
            <p style="font-size: 13px">用户名: @{{ userStore.username }}</p>
          </div>
          <n-button quaternary round type="success"> 修改 </n-button>
        </div>
      </div>
    </n-list-item>
    <n-list-item>
      <p class="listTitle">邮箱号</p>
      <n-alert title="邮箱绑定提示" type="warning" v-if="userStore.email == ''">
        成功绑定邮箱后，才能进行换头像、发动态、回复等交互~
        <n-button quaternary round type="success"> 立即绑定 </n-button>
      </n-alert>
      <div class="youPhone" v-if="userStore.email != ''">
        <p>{{ userStore.email }}</p>
        <n-button quaternary round type="success"> 更换 </n-button>
      </div>
    </n-list-item>
    <n-list-item>
      <p class="listTitle">账号安全</p>
      <div class="youPhone">
        <p>您已设置密码</p>
        <n-button quaternary round type="success"> 重置 </n-button>
      </div>
    </n-list-item>
  </n-list>
</template>

<script setup lang="ts">
//存放用户数据 store
import useUserStore from "../../store/user";
let userStore = useUserStore();
</script>

<style scoped>
.listTitle {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0 15px 0;
}
.profileInfo {
  .avatar {
    width: 80px;
    height: 80px;
  }
  .profileInfoName {
    margin-top: 10px;
    display: flex;
  }
}
.youPhone {
  display: flex;
  align-items: center;
}
</style>
