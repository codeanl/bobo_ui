<template>
  <n-list hoverable clickable class="n-list">
    <n-list-item class="list" v-for="i in 15">
      <!--  -->
      <div class="info">
        <div class="profile">
          <n-avatar
            round
            size="medium"
            src="https://cdn.paopao.info/public/avatar/1f/28/84/e0/489b-40e4-948b-ac3c2f931546.jpeg"
          />
          <p>长谷川安</p>
          <p>@codeanl</p>
          <n-tag type="warning" size="small"> 置顶</n-tag>
        </div>
        <div class="time">
          <p>东莞市</p>
          <p>2024.01.01</p>
        </div>
      </div>
      <!--  -->
      <div class="content">
        <div class="contentcontent">
          <p>标题标题标题标题标题标题标题标题</p>
          <p>
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </p>
        </div>
        <div class="contentimage" style="width: 140px; height: 100px">
          <img
            style="width: 100%; height: 100%"
            src="https://cdn.paopao.info/public/avatar/1f/28/84/e0/489b-40e4-948b-ac3c2f931546.jpeg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <!--  -->
      <div class="start">
        <div class="lick btn">
          <n-icon size="18">
            <Heart />
          </n-icon>
          <p>11</p>
        </div>
        <div class="commit btn">
          <n-icon size="18">
            <ChatbubbleEllipses />
          </n-icon>
          <p>11</p>
        </div>
        <div class="share btn">
          <n-icon size="18">
            <ShareSocial />
          </n-icon>
          <p>11</p>
        </div>
      </div>
    </n-list-item>
  </n-list>
</template>

<script setup lang="ts">
import {
  ShareSocial,
  ChatbubbleEllipses,
  Heart,
  Link,
} from "@vicons/ionicons5";
</script>

<style scoped lang="scss">
.info {
  display: flex;
  justify-content: space-between;
  .profile {
    display: flex;
    align-items: center;
    p:first-of-type {
      font-size: 14px;
      font-weight: bold;
      margin: 0 5px;
    }
    p:nth-of-type(2) {
      font-size: 12px;
      color: #625f5f;
      margin-right: 5px;
    }
  }
  .time {
    display: flex;
    align-items: center;
    p {
      font-size: 12px;
      margin: 0 5px;
    }
  }
}
.content {
  display: flex;
  .contentcontent {
    width: 420px;
    padding: 5px 15px 0 0;
    p:first-of-type {
      font-size: 16px;
      font-weight: bold;
    }
    p:nth-of-type(2) {
      font-size: 14px;
      margin-right: 5px;
    }
  }
}
.start {
  margin: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn {
    p {
      padding-left: 10px;
    }
    align-items: center;
    appearance: none;
    display: flex;
  }
}
</style>
