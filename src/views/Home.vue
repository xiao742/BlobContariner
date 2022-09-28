<template>
  <div id="Home">
    <!--欢迎页-->
    <Hello></Hello>
    <!--文章-->
    <Article></Article>
    <!--工作经历-->
    <Work></Work>
    <!--联系我-->
    <Contact></Contact>
  </div>
</template>

<script>
import Hello from "@/components/Home/Hello";
import Article from "@/components/Home/Article";
import Work from "@/components/Home/Work";
import Contact from "@/components/Home/Contact";
export default {
  name: "Home",
  components: {
    Hello,Article,Work,Contact
  }
}
</script>

<style scoped lang="less">
#Home{
  font-family: "Quicksand","Microsoft YaHei",sans-serif;
  /deep/ article{
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    >h2{
      margin-bottom: 15px;
      font-size: 30px;
      letter-spacing: 3px;
      padding-top: 10px;
    }
    >p.des{
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
      text-indent: 2em;
      color: #444;
      font-size: 14px;
      letter-spacing: 4px;
      line-height: 30px;
      a{
        text-decoration: underline;
        color: #aaa;
      }
    }


  }
}
</style>














