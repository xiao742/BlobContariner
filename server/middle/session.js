/*
 * @Author: Mr.xiao
 * @Date: 2022-12-12 17:45:36
 * @LastEditTime: 2023-09-14 12:03:34
 * @LastEditors: 雨落潇潇
 * @Description: session
 * @text: 惑而不从师,其为惑也,终不解矣.
 */


const session = require("express-session")
const MongoStore = require("connect-mongo")

module.exports = session({
  secret: "yuluoxiaoxiao",
  resave: false,
  rolling: true,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: "mongodb://localhost:27017/myBlob"
  })
})







