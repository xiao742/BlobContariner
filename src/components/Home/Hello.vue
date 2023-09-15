<template>
  <!--HELLO-->
  <article class="hello">
    <h2>HELLO!</h2>
    <p class="des">
      你好！欢迎来到我的博客！我是一名<span data-v-13314fca="">有点肾虚的</span
      >WEB前端攻城狮，热衷于研究JavaScript、NodeJs、Vue、React、WebGL、Flutter、Electron……这是我的主页！我会在这里发表一些<span
        data-v-13314fca=""
        >不成熟的</span
      >技术文章，记录一些<span data-v-13314fca="">沙雕的</span
      >日常。博客目前使用的是Vue + Nuxt + Element + Node + Express +
      MongoDB搭建的，如果对源码感兴趣的话可以<a
        href="https://github.com/xiao742/Blog"
        target="_blank"
        data-v-13314fca=""
        >点击这里</a
      >。欢迎提出宝贵的建议哦！
    </p>
    <div class="info">
      <div class="personal">
        <h3>personal information</h3>
        <ul>
          <li>
            <p class="dt">NICKNAME</p>
            <p class="dd">雨落潇潇</p>
          </li>
          <li>
            <p class="dt">ADDRESS</p>
            <p class="dd">贵州省都匀市</p>
          </li>
          <li>
            <p class="dt">EMAIL</p>
            <p class="dd">2305742401@qq.com</p>
          </li>
          <li>
            <p class="dt">GITHUB</p>
            <p class="dd">
              <a href="https://github.com/xiao742" target="_blank"
                >https://github.com/xiao742</a
              >
            </p>
          </li>
        </ul>
      </div>
      <div class="skills">
        <h3>skills</h3>
        <ul>
          <li>
            <p class="lang">
              <span class="s1">HTML5 & CSS3</span>
              <span class="s2">80%</span>
            </p>
            <p class="level">
              <span style="width: 80%"></span>
            </p>
          </li>
          <li>
            <p class="lang">
              <span class="s1">Javascript</span>
              <span class="s2">75%</span>
            </p>
            <p class="level">
              <span style="width: 75%"></span>
            </p>
          </li>
          <li>
            <p class="lang">
              <span class="s1">NodeJs</span>
              <span class="s2">70%</span>
            </p>
            <p class="level">
              <span style="width: 70%"></span>
            </p>
          </li>
          <li>
            <p class="lang">
              <span class="s1">Vue & React & 小程序</span>
              <span class="s2">60%</span>
            </p>
            <p class="level">
              <span style="width: 60%"></span>
            </p>
          </li>
          <li>
            <p class="lang">
              <span class="s1">Type Script</span>
              <span class="s2">50%</span>
            </p>
            <p class="level">
              <span style="width: 50%"></span>
            </p>
          </li>
          <li>
            <p class="lang">
              <span class="s1">MySql & MongoDB</span>
              <span class="s2">40%</span>
            </p>
            <p class="level">
              <span style="width: 40%"></span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Hello",
};
</script>

<style scoped lang="less">
.hello {
  div.info {
    display: flex;
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  div.personal {
    overflow: hidden;
    width: 50%;

    ul {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        display: flex;

        p.dt {
          width: 40%;
          font-weight: 700;
        }

        p.dd {
          width: 60%;
        }
      }
    }
  }

  div.skills {
    overflow: hidden;
    width: 50%;
    ul {
      li {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        p.lang {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          letter-spacing: 2px;
          span.s1 {
            font-size: 14px;
          }
          span.s2 {
            font-size: 12px;
            color: #999;
          }
        }
        p.level {
          width: 100%;
          height: 5px;
          background-color: #ececec;
          span {
            display: block;
            height: 100%;
            background-color: #bfe2e6;
          }
        }
      }
    }
  }

  h3 {
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 22px;
    color: #666;
  }
}
</style>














