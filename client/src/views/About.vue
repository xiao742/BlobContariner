<template>
  <div id="About">
    <article>
      <h2>ABOUT ME</h2>
      <p>帅气这个形容词，大概就是为我而创造的吧😏</p>
      <p>谢谢你这么好看还这么关注我鸭！我叫雨落潇潇，你可以亲切的叫我潇潇！或者宝贝、老公…</p>
      <p>有必要强调一下！我还没有脱发！大概是写的代码还不够多吧......</p>
    </article>
    <article>
      <h2>ABOUT SITE</h2>
      <p>
      <pre>前  端：</pre><span>Vue + Element</span></p>
      <p>
      <pre>后  端：</pre><span>Node + Nuxt + Express + Mongodb</span></p>
      <p style="border-bottom: 1px dotted #aaa;">服务器：<a
          href="https://www.aliyun.com/1111/new?userCode=xqfx5ty6"
          target="_blank"
        >阿里云ECS</a></p>
      <p>这个博客我构思很久了，终于在2023年上线啦！我真棒！✌🏻✌🏻✌🏻</p>
      <p>这不能怪我...真的...每当我好不容易挤点时间写好代码准备上线时，总有前端技术在这个时间点做大的更新...ES2015、Node、Vue、Nuxt...我也很绝望啊，每次都是推翻重写，裂开...</p>
    </article>
    <article>
      <h2>ABOUT COPYRIGHT</h2>
      <p>源码开源：<a
          href="https://github.com/xiao742/Blog"
          target="_blank"
        >雨落潇潇的github</a></p>
      <p>还没上传到GitHub呢，等项目上传了，欢迎大家来浏览哦！</p>
    </article>
    <article>
      <h2>OTHER</h2>
      <p>我是一名前端开发者，如果有合作相关事宜的话，可以通过 <a href="/#contact">contact me</a> 联系我。或者可以在👈左侧边栏找到我的联系方式哦。</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="less" scoped>
#About {
  animation: animate 2s;
  transition: 0.6s;
  article {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: "Quicksand", "Microsoft YaHei", sans-serif;
  }
  h2 {
    margin-bottom: 15px;
    font-size: 20px;
    letter-spacing: 3px;
    line-height: 24px;
    border-left: 5px solid #73b899;
    text-indent: 10px;
  }
  p {
    text-indent: 2em;
    color: #444;
    font-size: 14px;
    letter-spacing: 4px;
    line-height: 30px;
    pre {
      text-indent: 0;
      display: inline-block;
      font-family: "Quicksand", "Microsoft YaHei", sans-serif;
      font-size: 14px;
    }
    span {
      color: #bd4147;
      background-color: rgba(27, 31, 35, 0.05);
      font-weight: 700;
    }
    a {
      color: #409eff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>














