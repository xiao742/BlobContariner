<template>
  <div id="Link">
    <article class="title">
      <h2>友情链接</h2>
      <p>
        请在
        <router-link to="/message">留言区</router-link>
        申请友链，本站友链信息：
      </p>
      <p>名称：雨落潇潇🤣 </p>
      <p>主页：<span>https://github.com/xiao742</span></p>
      <p>图标：<span>https://github.com/xiao742/logo.png</span></p>
      <p>描述：一名没脱发的前端工程师😆</p>
    </article>
    <article class="content">
      <ul>
        <li
          v-for="item in linkData"
          :key="item.src"
        >
          <a
            :href="item.src"
            target="_blank"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 300 150"
              preserveAspectRatio="none"
            >
              <path
                d="M 300 150 V 0 H 0 V 150 H 300"
                fill="none"
                stroke="red"
                stroke-dasharray="900"
                stroke-dashoffset="900"
              ></path>
            </svg>
            <div class="top">
              <p
                class="img"
                :style="{ backgroundImage: `url(${item.icon})` }"
              ></p>
              <p class="name">
                {{ item.name }}
              </p>
            </div>
            <div class="bot">
              <p class="des">{{ item.des }}</p>
            </div>
          </a>
        </li>
      </ul>
    </article>
    <el-button
      v-if="isAdmin"
      icon="el-icon-edit"
      type="primary"
      @click="handleSendLink"
    >有比较好玩的连接🔗？添加在这儿吧！！！😝
    </el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Link",
  data() {
    return {
      isAdmin: false,
      linkData: [],
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  async created() {
    this.isAdmin = this.userInfo.admin
    let res = await this.$axios.get("/links");
    this.linkData = res.data.data;
  },
  methods: {
    handleSendLink() {
      this.$router.push({ path: '/admin' })
    }
  }
};

</script>

<style scoped lang="less">
#Link {
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

  article.content {
    p {
      text-indent: 0;
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        position: relative;
        box-sizing: border-box;
        flex: 1;
        min-width: 260px;
        margin: 0 7.5px 15px;
        background-color: rgba(27, 31, 35, 0.05);

        a {
          box-sizing: border-box;
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          padding: 5px;
          svg {
            position: absolute;
            top: 0;
            left: 0;
            path {
              transition: 1s;
            }
          }
          &:hover {
            svg path {
              stroke-dashoffset: 0;
            }
          }
        }

        div.top {
          display: flex;
          height: 50px;

          p.img {
            width: 50px;
            height: 50px;
            background-position: center center;
            background-size: cover;
            border-radius: 50%;
          }

          p.name {
            flex: 1;
            font-size: 14px;
            height: 50px;
            margin-left: 15px;
            line-height: 50px;
            color: #409eff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        div.bot {
          p {
            font-size: 12px;
            height: 60px;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
  .el-button {
    display: block;
    // width: 100px;
    height: 40px;
    margin: 35px 0;
    border: 0;
    border-radius: 20px;
    box-shadow: 0 0 0 #bbb;
    background-color: #bfe2e6;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 2px;
    font-family: "Quicksand", "sans-serif";
    color: #000;
    outline: 0;
    cursor: pointer;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 3px 5px #bbb;
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














