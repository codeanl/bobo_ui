<template>
  <div class="myprofile">
    <div class="myavatar">
      <n-avatar style="width: 100%; height: 100%" :src="userStore.avatar" />
    </div>
    <div class="myprofileinfo">
      <div class="myinfoinfo">
        <p style="font-size: 14px; font-weight: bold">
          {{ userStore.nickname }}
        </p>
        <p style="font-size: 14px">@{{ userStore.username }}</p>
      </div>
      <div class="myinfoinfo toccc">
        <p style="font-size: 13px; color: rgb(65, 64, 64)">
          UID.{{ userStore.uuid }}
        </p>
        <p style="font-size: 13px; color: rgb(65, 64, 64)">
          {{
            userStore.created_at.substring(
              0,
              userStore.created_at.indexOf(
                "-",
                userStore.created_at.indexOf("-") + 1
              )
            )
          }}
          加入
        </p>
      </div>
      <div class="myinfoinfo">
        <p style="font-size: 13px; color: rgb(65, 64, 64)">关注 0</p>
        <p style="font-size: 13px; color: rgb(65, 64, 64)">粉丝 0</p>
      </div>
    </div>
  </div>
  <!--  -->
  <div class="ntags">
    <n-tabs type="line" animated>
      <n-tab-pane name="图文" tab="图文"> 111 </n-tab-pane>
      <n-tab-pane name="文章" tab="文章"> Hey Jude </n-tab-pane>
      <n-tab-pane name="喜欢" tab="喜欢"> 七里香 </n-tab-pane>
    </n-tabs>
  </div>
  <!-- <n-list clickable class="n-list">
    <n-list-item> </n-list-item>
  </n-list> -->
</template>

<script setup lang="ts">
//存放用户数据 store
import useUserStore from "../../store/user";
let userStore = useUserStore();
</script>

<style scoped lang="scss">
.myprofile {
  display: flex;
  margin: 15px;
  .myavatar {
    width: 80px;
    height: 80px;
  }
  .myprofileinfo {
    margin: 0 10px 0 10px;
    .myinfoinfo {
      display: flex;
      font-size: 12px;
      p:first-of-type {
        margin-right: 5px;
      }
    }
  }
}

.ntags {
  margin: 15px 15px 0 15px;
}
</style>
