<!--
 * @Author: Mr.xiao
 * @Date: 2023-09-15 11:10:38
 * @LastEditTime: 2023-09-18 15:03:46
 * @LastEditors: 雨落潇潇
 * @Description: timer
 * @text: 惑而不从师,其为惑也,终不解矣.
-->
<template>
  <div
    v-show="timer"
    class="box"
  >
    {{ timer }}
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      timer: ''
    }
  },
  created() {
    setInterval(() => {
      let date = new Date()
      // let year = date.getFullYear()
      // let month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
      // let date1 = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      let day = date.getDay()
      let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
      let mimute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      let second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
      let dayArr = ["日", "一", "二", "三", "四", "五", "六"]
      let dayCycle = ''
      for (let i = 0; i < 7; i++) {
        if (day === i) {
          dayCycle = `星期${dayArr[i]}`
        }
      }
      let str = `
      ${dayCycle} ${hours}:${mimute}:${second}`
      this.timer = str
    }, 1000)
  }
}
</script>

<style scoped lang="less">
.box {
  // background-image: linear-gradient(to bottom right, #d4e4e7, #d7d1b2, #a2b5b8);
  background-color: rgba(255, 255, 255, 0.5);
}
.box {
  // width: 976px;
  height: 86px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  position: fixed;
  right: 10%;
  top: 3%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  box-shadow: 1px 1px 10px #fff;
  text-shadow: 0px 1px 30px white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 23px;
  user-select: none;
  padding: 0 20px;
  /* 盒子投影 */
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent), to(rgba(250, 250, 250, 0.5)));
  z-index: 100;
}
</style>