<template>
  <div class="box">
    <!--  -->
    <div class="search">
      <n-input round placeholder="搜索框" @keyup="handleKeyUp" />
    </div>
    <!--  -->
    <div class="banner">
      <n-carousel autoplay>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
      </n-carousel>
    </div>
    <!--  -->
    <div class="tag">
      <div class="title"><p>热门话题</p></div>
      <div v-for="i in 12" class="item">
        <p>#区块链</p>
        <p>102</p>
      </div>
    </div>
    <div class="copyright">
      <p>© 2023 PaoPao.info (v0.4.0)</p>
      <p>沪ICP备2020036525号-5</p>
    </div>
    <!--  -->
    <div class="float">
      <n-float-button
        position="relative"
        type="primary"
        menu-trigger="hover"
        class="btn"
      >
        <n-icon>
          <FlowerSharp />
        </n-icon>
        <template #menu>
          <n-float-button type="primary">
            <n-icon size="large">
              <BrushSharp />
            </n-icon>
          </n-float-button>
          <n-float-button type="primary">
            <n-icon size="large">
              <ArrowUpCircleSharp />
            </n-icon>
          </n-float-button>
        </template>
      </n-float-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpCircleSharp, BrushSharp, FlowerSharp } from "@vicons/ionicons5";
const handleKeyUp = () => {
  console.log("111");
};
</script>

<style scoped lang="scss">
.box {
  position: relative;
  width: 250px;
  .search {
    padding: 10px 0;
  }
  .banner {
    height: 160px;
    .carousel-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .tag {
    margin-top: 10px;
    background-color: #f8f8f8;
    .title {
      p {
        color: #454545;
        font-size: 18px;
        padding: 10px 0 0 15px;
      }
    }
    .item {
      margin: 5px 15px;
      display: flex;
      justify-content: space-between;
      p:first-of-type {
        font-size: 15px;
        color: rgb(1, 116, 1);
      }
      p:nth-of-type(2) {
        color: #939191;
        font-size: 15px;
      }
    }
  }
  .copyright {
    margin-top: 15px;
    background-color: #f8f8f8;
    padding: 10px 0 10px 20px;
    p {
      color: #939191;
      font-size: 12px;
    }
  }
  .float {
    position: absolute;
    bottom: 40px;
    height: 50px;
    width: 100%;
    padding-left: 20px;
  }
}
</style>
