<!--
 * @Author: Mr.xiao
 * @Date: 2022-12-12 17:45:36
 * @LastEditTime: 2023-09-18 12:52:35
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
      <!--热门文章-->
      <HotArticle></HotArticle>
      <!-- 日历 -->
      <div class="right_container">
        <Calendar></Calendar>
      </div>
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
export default {
  name: "AppSide",
  components: {
    Personal, HotArticle, Visitor, Calendar
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
  width: 270px;
  margin-right: 15px;

  .sticky {
    width: 270px;
    &.fixed {
      position: fixed;
      top: 88px;
    }
  }
}
</style>














