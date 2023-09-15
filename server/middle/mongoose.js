/*
 * @Author: Mr.xiao
 * @Date: 2022-12-12 17:45:36
 * @LastEditTime: 2023-09-14 10:57:05
 * @LastEditors: 雨落潇潇
 * @Description: 数据库连接
 * @text: 惑而不从师,其为惑也,终不解矣.
 */
const mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost:27017/myBlob", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => { console.log("数据库连接成功") })
  .catch(() => { console.log("数据库连接失败") })









