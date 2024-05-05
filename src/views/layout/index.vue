<template>
  <n-modal-provider>
    <n-dialog-provider>
      <n-message-provider>
        <div class="ddbox">
          <!--  -->
          <div class="left-div">
            <Menu></Menu>
          </div>
          <!--  -->
          <n-flex justify="center">
            <div class="contentbox">
              <div class="header">
                <div><p>白虎社区</p></div>
                <div>
                  <n-switch v-model:value="active" size="small">
                    <template #checked-icon>
                      <n-icon :component="Sunny" />
                    </template>
                    <template #unchecked-icon>
                      <n-icon :component="Moon" />
                    </template>
                  </n-switch>
                </div>
              </div>
              <div style="padding-top: 55px"></div>
              <!--  -->
              <div class="ddddccc" v-if="userStore.token == ''">
                <div><p>登录后，精彩更多</p></div>
                <div>
                  <n-button
                    strong
                    secondary
                    round
                    type="primary"
                    class="btnbtn"
                  >
                    登录
                  </n-button>
                  <n-button strong secondary round type="info" class="btnbtn">
                    注册
                  </n-button>
                </div>
              </div>
              <router-view></router-view>
            </div>
          </n-flex>
          <!--  -->
          <div class="right-div">
            <Tag></Tag>
          </div>
        </div>
      </n-message-provider>
    </n-dialog-provider>
  </n-modal-provider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Moon, Sunny } from "@vicons/ionicons5";
const active = ref(false);
import Menu from "../layout/compoents/menu/index.vue";
import Tag from "../layout/compoents/tag/index.vue";

//存放用户数据 store
import useUserStore from "../../store/user";
let userStore = useUserStore();
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  height: 100%;
}

.ddbox {
  position: relative;
  .left-div {
    position: absolute;
    left: calc(50% - 500px);
    top: 0;
    width: 185px;
    height: 100vh;
  }
  .right-div {
    position: absolute;
    top: 0;
    right: calc(50% - 500px);
    width: 185px;
    height: 80vh;
  }
  .contentbox {
    width: 600px;
    border: 1px solid #f0eeee;
    overflow: auto;
    max-height: 100vh;
    .header {
      background-color: #ffffff;
      z-index: 999;
      padding: 0 15px;
      height: 55px;
      width: 598px;
      border-bottom: 1px solid #f0eeee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      p {
        font-size: 16px;
        font-weight: bold;
      }
    }
    .ddddccc {
      border-bottom: 1px solid #f0eeee;
      display: flex;
      padding: 10px 0;
      flex-direction: column;
      justify-content: center; /* 水平居中 */
      align-items: center; /* 垂直居中 */
      p {
        font-size: 14px;
        color: rgb(118, 117, 117);
        padding: 10px 0;
      }
      .btnbtn {
        margin: 3px;
      }
    }
  }
}
</style>
