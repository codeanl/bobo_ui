<template>
  <div class="box">
    <div>
      <div class="logo">
        <img
          src="https://cdn.paopao.info/public/avatar/1f/28/84/e0/489b-40e4-948b-ac3c2f931546.jpeg"
        />
      </div>
      <n-menu v-model:value="selectedKeyRef" :options="options" />
    </div>
    <!--  -->
    <div class="myInfo" v-if="userStore.token == ''">
      <div style="display: flex; align-items: center">
        <n-button
          strong
          secondary
          round
          type="primary"
          class="btnbtn"
          @click="showModal = true"
        >
          登录
        </n-button>
        <n-button
          strong
          secondary
          round
          type="info"
          class="btnbtn"
          @click="showModal = true"
        >
          注册
        </n-button>
      </div>
    </div>
    <!--  -->
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 350px"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-tabs
          class="card-tabs"
          default-value="signin"
          size="large"
          animated
          pane-wrapper-style="margin: 0 -4px"
          pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <n-tab-pane name="signin" tab="登录">
            <n-form :model:value="loginForm">
              <n-form-item-row label="用户名">
                <n-input v-model:value="loginForm.username" />
              </n-form-item-row>
              <n-form-item-row label="密码">
                <n-input v-model:value="loginForm.password" />
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong @click="login">
              登录
            </n-button>
          </n-tab-pane>
          <n-tab-pane name="signup" tab="注册">
            <n-form>
              <n-form-item-row label="用户名">
                <n-input />
              </n-form-item-row>
              <n-form-item-row label="密码">
                <n-input />
              </n-form-item-row>
              <n-form-item-row label="重复密码">
                <n-input />
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong @click="rigester">
              注册
            </n-button>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-modal>
    <!--  -->
    <div class="myInfo" v-if="userStore.token != ''">
      <div style="display: flex; align-items: center">
        <n-avatar
          round
          size="medium"
          src="https://assets.paopao.info/public/avatar/default/anna.png"
        />
      </div>
      <div style="margin: 3px">
        <p style="font-size: 14px">{{ userStore.nickname }}</p>
        <p style="font-size: 13px">@{{ userStore.username }}</p>
      </div>
      <div style="margin: 5px 0 0 5px" @click="logout">
        <n-icon>
          <MdExit />
        </n-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MdExit } from "@vicons/ionicons4";
import { NIcon } from "naive-ui";
import { ref, onMounted, reactive } from "vue";
import { RouterLink } from "vue-router";
import { Component, h } from "vue";
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
import { useRoute } from "vue-router";
import { PersonOutline as PersonIcon } from "@vicons/ionicons5";
const selectedKeyRef = ref("广场");
const route = useRoute();

onMounted(() => {
  if (route.path === "/home") {
    selectedKeyRef.value = "广场";
  } else if (route.path === "/setting") {
    selectedKeyRef.value = "设置";
  } else if (route.path === "/profile") {
    selectedKeyRef.value = "主页";
  } else if (route.path === "/artical") {
    selectedKeyRef.value = "文章";
  }
});
//存放用户数据 store
import useUserStore from "../../../../store/user";
let userStore = useUserStore();

const options = ref([
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/",
          },
        },
        { default: () => "广场" }
      ),
    key: "广场",
    icon: renderIcon(PersonIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/artical",
          },
        },
        { default: () => "文章" }
      ),
    key: "文章",
    icon: renderIcon(PersonIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/setting",
          },
        },
        { default: () => "设置" }
      ),
    key: "设置",
    icon: renderIcon(PersonIcon),
    show: userStore.token != "",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/profile",
          },
        },
        { default: () => "主页" }
      ),
    key: "主页",
    icon: renderIcon(PersonIcon),
    show: userStore.token != "",
  },
]);
const showModal = ref(false);

import { useMessage, useDialog } from "naive-ui";
const message = useMessage();
const dialog = useDialog();
const logout = () => {
  dialog.success({
    title: "警告",
    content: "你确定要退出登录吗？",
    positiveText: "确定",
    negativeText: "取消",
    onPositiveClick: () => {
      message.success("退出登录成功");
      userStore.userLogout();
      window.location.reload();
    },
    onNegativeClick: () => {},
  });
};
//表单数据
let loginForm = reactive({
  username: "codeanl",
  password: "123456",
});

//登录按钮
const login = async () => {
  let msg: any = await userStore.userLogin(loginForm);
  if (msg == "OK") {
    message.success(msg);
    showModal.value = false;
    window.location.reload();
  } else {
    message.error(msg);
  }
};

const rigester = () => {
  console.log(userStore.nickname);
};
</script>

<style lang="scss">
.box {
  width: 185px;
  height: 100vh;
  position: relative;
}
.logo {
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30px;
  img {
    width: 42px;
    height: 42px;
  }
}
.myInfo {
  padding: 0 15px;
  height: 45px;
  width: 100%;
  position: absolute;
  bottom: 10px;
  display: flex;
  .btnbtn {
    margin: 0 5px;
  }
}
</style>
