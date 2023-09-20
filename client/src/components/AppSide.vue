<!--
 * @Author: Mr.xiao
 * @Date: 2022-12-12 17:45:36
 * @LastEditTime: 2023-09-20 10:53:49
 * @LastEditors: 雨落潇潇
 * @Description: 
 * @text: 惑而不从师,其为惑也,终不解矣.
-->
<template>
  <div id="AppSide">
    <!--个人信息-->
    <Personal />

    <!--吸附大盒子-->
    <div
      class="sticky"
      :class="{
        'fixed': ifFixed
      }"
    >
      <!-- 时钟 -->
      <Clock></Clock>
      <!--热门文章-->
      <HotArticle></HotArticle>
      <!-- 日历 -->
      <Calendar></Calendar>
      <!--最新访客-->
      <Visitor></Visitor>

    </div>

  </div>
</template>

<script>
import Personal from "@/components/Personal";
import HotArticle from "@/components/HotArticle";
import Visitor from "@/components/Visitor";
import Calendar from "@/components/Calendar";
import Clock from "@/components/Clock";
export default {
  name: "AppSide",
  components: {
    Personal, HotArticle, Visitor, Calendar, Clock
  },
  data() {
    return {
      ifFixed: false
    }
  },
  methods: {
    //滚动吸顶
    fixed() {
      window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop
        console.log(scrollTop)
        this.ifFixed = scrollTop >= 240
      })
    }
  },
  mounted() {
    this.fixed()
  }
}
</script>

<style scoped lang="less">
#AppSide {
  width: 285px;
  margin-right: 15px;

  .sticky {
    width: 285px;
    &.fixed {
      position: fixed;
      position: -webkit-sticky;
      top: 88px;
      z-index: 99;
    }
  }
}
</style>














