/*
 * @Author: Mr.xiao
 * @Date: 2022-12-12 17:45:36
 * @LastEditTime: 2023-09-18 10:48:01
 * @LastEditors: 雨落潇潇
 * @Description: 
 * @text: 惑而不从师,其为惑也,终不解矣.
 */
const express = require("express")

const router = express.Router()

//登陆路由
router.use("/login", require("./login/index"))

//注册路由
router.use("/reg", require("./register/index"))

//更新路由
router.use("/update", require("./update/index"))

//上传路由
router.use("/upload", require("./upload/index"))

//留言路由
router.use("/msg", require("./msg/index"))

//访客路由
router.use("/visit", require("./visit/index"))

//文章路由
router.use("/art", require("./art/index"))

//友链路由
router.use("/links", require("./links/index"))

//管理员路由
router.use("/admin", require("./admin/index"))


module.exports = router









