<template>
  <div id="Personal">
    <article class="top">
      <div class="img"></div>
      <div class="name">
        <p class="p1">NILE</p>
        <p class="p2">WEB Developer</p>
      </div>
      <div class="clear"></div>
      <div class="contact">
        <a
          href="https://github.com/xiao742"
          target="_blank"
          class="iconfont icon-github"
        ></a>
        <a
          title="我关注的全是不可描述，不给你们看"
          class="iconfont icon-twitter"
        ></a>
        <a
          href="https://weibo.com/u/6524414862"
          target="_blank"
          class="iconfont icon-tubiaozhizuo-"
        ></a>
        <el-popover
          placement="bottom"
          width="150"
          trigger="click"
        >
          <img
            style="display: block"
            src="../assets/img/personal/weixin.pic.jpg"
            width="150"
            height="150"
            alt="微信图标"
          />
          <a
            slot="reference"
            class="iconfont icon-weixin"
          ></a>
        </el-popover>
        <a
          target="_blank"
          href="http://wpa.qq.com/msgrd?v=3&uin=2797547366&site=qq&menu=yes"
          class="iconfont icon-QQ"
        ></a>
      </div>
    </article>
    <article class="bottom">
      <a
        href="https://github.com/xiao742/Blog"
        target="_blank"
      >DOWNLOAD CV<i class="el-icon-download"></i></a>
    </article>
  </div>
</template>

<script>
export default {
  name: "Personal",
};
</script>

<style scoped lang="less">
#Personal {
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0 0 4px #ddd;
  article {
    &.top {
      width: 100%;
      background-color: #bfe2e6;
      .img {
        overflow: hidden;
        float: left;
        width: 60px;
        height: 60px;
        margin-top: 20px;
        margin-left: 30px;
        border: 2px solid #fff;
        border-radius: 50%;
        background: url("../assets/img/personal/xiaoxiao.pic.jpg") no-repeat
          center center/cover;
      }
      .name {
        float: right;
        margin-top: 29px;
        margin-right: 30px;
        .p1 {
          font-size: 20px;
          font-weight: bolder;
          letter-spacing: 5px;
        }
        .p2 {
          font-family: "Quicksand", "sans-serif";
          color: #555;
          font-weight: 700;
          letter-spacing: 3px;
          font-size: 12px;
          margin-top: 5px;
        }
      }
      .contact {
        margin-top: 15px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-around;
        a {
          display: block;
          font-size: 20px;
          color: #525252;
          transition: color 0.3s;
          cursor: pointer;
        }
      }
    }
    &.bottom {
      width: 100%;
      padding: 20px 0;
      background-color: #fff;
      a {
        display: block;
        width: 65%;
        height: 40px;
        border-radius: 23px;
        margin: 0 auto;
        box-shadow: 0 0 0 #888;
        font-family: "Quicksand", "sans-serif";
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        font-weight: 700;
        color: #000;
        letter-spacing: 1px;
        background-color: #bfe2e6;
        transition: box-shadow 0.3s;

        &:hover {
          box-shadow: 0 2px 10px #888;
        }
      }
    }
  }
}
</style>
