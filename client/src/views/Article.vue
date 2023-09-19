<template>
  <div id="Article">
    <article
      v-for="item in articleList"
      :key="item.time"
    >
      <h2>{{item.title}}</h2>
      <div class="time">
        <p class="date">{{new Date(item.time).getDate()}}</p>
        <p class="m-y"><span>{{new Date(item.time).getMonth()+1}}月</span><span>{{new Date(item.time).getFullYear()}}</span></p>
      </div>
      <div class="show">
        <div
          class="img"
          :style="{
            backgroundImage: `url(${urlBase}${item.cover})`
          }"
        ></div>
        <div class="des">
          {{item.des}}
        </div>
      </div>
      <div class="r-b">
        <p>浏览量：{{item.pv}}</p>
        <router-link :to="`/article/${item._id}`"><i class="el-icon-reading"></i> 阅读全文</router-link>
      </div>

    </article>
    <el-button
      v-if="isAdmin"
      icon="el-icon-edit"
      type="primary"
      @click="handleSendArticle"
    >有想法？来发表一篇文章吧！！！😝
    </el-button>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Article",
  data() {
    return {
      isAdmin: false,
      articleList: [],
      url: require("@/assets/img/article/1.jpg")
    }
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  async created() {
    this.isAdmin = this.userInfo.admin
    console.log("this.admin", this.isAdmin);
    let { data } = await this.$axios({
      method: "get",
      url: "/art/all"
    })

    this.articleList = data.data

  },
  methods: {
    handleSendArticle() {
      this.$router.push({ path: '/admin' })
    }
  }
}
</script>

<style scoped lang="less">
#Article {
  animation: animate 2s;
  transition: 0.6s;
  article {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: "Quicksand", "Microsoft YaHei", sans-serif;
    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }

    div.time {
      position: absolute;
      top: 0;
      right: 10px;
      width: 80px;

      .date {
        font-weight: bolder;
        font-size: 40px;
        text-align: center;
        color: #6bc30d;
      }
      .m-y {
        span:nth-child(1) {
          float: left;
        }
        span:nth-child(2) {
          float: right;
        }
      }
    }

    div.show {
      display: flex;
      width: 100%;
      height: 250px;
      div.img {
        box-sizing: border-box;
        width: 50%;
        padding-right: 1%;
        background-size: cover;
        background-position: center;
      }
      div.des {
        box-sizing: border-box;
        width: 50%;
        padding-left: 1%;
      }
    }

    .r-b {
      position: absolute;
      right: 20px;
      bottom: 20px;
      p {
        position: relative;
        top: -10px;
        color: #aaa;
        font-size: 12px;
      }
      a {
        padding: 10px 20px;
        background-color: #409eff;
        color: #fff;
        transition: opacity 0.3s;
        &:hover {
          opacity: 0.8;
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














