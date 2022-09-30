<template>
  <article class="work">
    <h2>WORK EXPERIENCE</h2>
    <ul>
      <li>
        <div class="left">
          <p class="time">2017.09-2021.07</p>
        </div>
        <div class="right">
          <h3>The process of college education</h3>
          <p class="img">
            <img
              src="../../assets/img/technology/vue.jpg"
              width="auto"
              height="30"
              alt=""
            />
          </p>
          <p class="company">
            Guizhou University of Traditional Chinese Medicine
          </p>
          <p class="content">
            It is a long but short experience, during which I have really
            learned a lot of professional knowledge and made many close friends.
            The most important thing is that since I entered the university, I
            have tempered my will and changed my life. I am proud of being a
            member of this university
          </p>
        </div>
      </li>
      <li>
        <div class="left">
          <p class="time">2021.09-</p>
        </div>
        <div class="right">
          <h3>WEB DEVELOPER</h3>
          <p class="img">
            <img
              src="../../assets/img/technology/vue.jpg"
              width="auto"
              height="30"
              alt=""
            />
          </p>
          <p class="company">Guizhou Shenyue Digital Co., Ltd</p>
          <p class="content">
            As a member of the company, I will abide by the company's rules and
            regulations, constantly thinking, efforts to forge ahead, do a good
            job in the daily tasks, for the company tomorrow's better
            development to do their own meager power
          </p>
        </div>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "Work",
};
</script>

<style scoped lang="less">
.work {
  ul {
    margin-top: 40px;
    li {
      display: flex;
      div.left {
        width: 200px;
        p.time {
          position: relative;
          top: -12px;
          width: 160px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-weight: 700;
          background-color: #bfe2e6;
          &::after {
            position: absolute;
            top: 0;
            right: -30px;
            content: "";
            width: 0;
            height: 0;
            border: 15px solid transparent;
            border-left-color: #bfe2e6;
          }
        }
      }
      div.right {
        box-sizing: border-box;
        flex: 1;
        padding-left: 20px;
        padding-right: 40px;
        padding-bottom: 40px;
        border-left: 2px solid #bfe2e6;
        h3 {
          position: relative;
          margin-bottom: 20px;
          margin-top: -10px;
          line-height: 25px;
          font-size: 20px;
          &::before {
            position: absolute;
            content: "";
            top: 10px;
            left: -23px;
            width: 4px;
            height: 4px;
            background-color: #000;
          }
        }
        p.img {
          margin-bottom: 20px;
        }
        p.company {
          color: #000;
          margin-bottom: 20px;
        }
        p.content {
          color: #777;
          letter-spacing: 1px;
          font-size: 16px;
        }
      }
      &:last-child {
        div.right {
          border-color: transparent;
        }
      }
    }
  }
}
</style>














