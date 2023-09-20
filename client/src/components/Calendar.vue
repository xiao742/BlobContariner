<!--
 * @Author: Mr.xiao
 * @Date: 2023-09-18 11:25:36
 * @LastEditTime: 2023-09-20 11:55:59
 * @LastEditors: 雨落潇潇
 * @Description: 日历
 * @text: 惑而不从师,其为惑也,终不解矣.
-->

<template>
  <div id="container">
    <h4 class="clock">Calendar</h4>
    <div class="calendar_container">
      <el-calendar
        v-model="time"
        class="calendar card"
      >
      </el-calendar>
    </div>
  </div>
</template>
<script>
let LunarCalendar = require("lunar-calendar") //引入lunar.js库
export default {
  data() {
    return {
      time: new Date()
    }
  },
  methods: {

    // 获取农历
    getLunar() {
      let calendarHeaderBtnList = document.querySelectorAll(".el-button--plain")
      document.querySelector(".el-button-group").removeChild(document.querySelectorAll(".el-button--plain")[1])
      const date = new Date();
      const lunarDate = LunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
      console.log(lunarDate);

      calendarHeaderBtnList[0].innerText = `${lunarDate.GanZhiYear}(${lunarDate.zodiac})年`
      calendarHeaderBtnList[2].innerText = `农历：${lunarDate.lunarMonthName}${lunarDate.lunarDayName}`
      calendarHeaderBtnList[0].setAttribute("disabled", "true")
      calendarHeaderBtnList[2].setAttribute("disabled", "true")

      return lunarDate;

    }
  },
  mounted() {
    this.getLunar()
  }
}

</script>

<style lang="less" scoped>
#container {
  box-sizing: bor der-box;
  overflow: hidden;
  border-radius: 5px;
  background-color: #fff;
  width: 100%;
  margin-top: 15px;
  box-shadow: 0 0 4px #ddd;
  // padding: 20px;
  > h4.clock {
    font-family: "Quicksand", "sans-serif";
    line-height: 20px;
    border-bottom: 1px solid #e8e9e7;
    color: #383937;
    font-size: 16px;
    margin-bottom: 20px;
    padding: 20px 20px 10px 20px;
  }
  .calendar_container {
    padding: 0px 10px 20px 10px;
  }
  /deep/.el-calendar__header {
    padding: 12px 0;
    justify-content: space-around;
  }
  .card {
    // margin-bottom: 2vh;
    border-radius: 5px;
    padding: 10px;
    // border: 1px solid #c5c4c4;
    transition: 0.6s;
    .card-head {
      font-size: 18px;
      line-height: 5vh;
      border-bottom: 1px solid #fff;
    }
    .card-item {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
    }
    // 书签样式
    .bookmark {
      display: inline-block;
      margin: 5px;
      padding: 5px;
      font-size: 14px;
      border-radius: 2px;
      color: #ffffff;
      cursor: pointer;
    }
  }

  .calendar {
    background-image: linear-gradient(
      to bottom right,
      #e0ffff,
      #afeeee,
      #e0ffff,
      #afeeee
    );

    font-size: 15px;
    border-radius: 5px;
    padding: 0;
    /deep/ .el-button {
      padding: 5px;
    }
    /deep/ .el-calendar-day {
      border: 0;
      height: 30px;
    }
  }
  .calendar-night {
    background-color: rgba(50, 50, 50, 0.6);
    color: #ffffff;
    /deep/ .el-calendar__title {
      color: #ffffff;
    }
    /deep/ .el-button {
      background-color: gray;
      color: #ffffff;
    }
    /deep/.is-selected {
      background-color: #999;
      color: #fff;
    }
    /deep/ .el-calendar-day:hover {
      background-color: #999;
    }
  }
  /deep/.el-calendar-table td.is-selected {
    background-color: #2f4f4f;
    color: #fff;
  }
  /deep/.el-calendar-table .el-calendar-day:hover {
    background-color: #2f4f4f;
    color: #fff;
  }
  /deep/.calendar .el-button {
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 5px rgb(0, 0, 0);
    color: #fff;
    &:hover {
      background-color: #2f4f4f;
      color: #fff;
    }
  }
  /deep/.el-calendar-table .el-calendar-day {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /deep/.el-calendar__title {
    font-weight: bold;
  }
}
</style>