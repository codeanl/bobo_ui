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
        <p>
          🎉🎉🎉paopao-ce v0.5.0 版本正式发布了，欢迎大家体验🎉🎉🎉<br />
          - 广场页面添加"动态条栏"的支持；<br />
          - 页面添加关注用户的快捷入口；<br />
          - 优化消息页面；<br />
          - 其他一些功能特性的优化、bug修复等；<br />
          这个版本更新的东西有点多，详情请看release发布页面；<br />
          另: iibiubiu.com可以体验最新开发版(账户:paopao
          密码:paopaoce)，欢迎访问。
        </p>
        <div class="images">
          <n-image-group>
            <n-space>
              <n-image
                v-for="i in 7"
                width="155"
                src="https://geektutu.com/post/quick-golang/golang.jpg"
              />
            </n-space>
          </n-image-group>
        </div>
        <div class="link">
          <div class="linkto" v-for="i in 3">
            <n-icon size="14" color="green">
              <Link />
            </n-icon>
            <a href="https://www.freecodecamp.org"
              >https://www.freecodecamp.org</a
            >
          </div>
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
.list {
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
    font-size: 14px;
    margin: 0px 20px;
    .link {
      .linkto {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      a {
        padding-left: 3px;
        color: green;
        text-decoration: none;
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
}
</style>
