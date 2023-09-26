const express = require("express")
const nodemailer = require("nodemailer")
const visitorDB = require("../../db/visitor")
const router = express.Router()

//获取最近访客信息
router.get("/", async (req, res) => {
  try {
    let data = await visitorDB.find({}, {}, { skip: 0, limit: 12, sort: { time: -1 } })
      .populate("user", { user: 1, face: 1 })
    return res.send({
      code: 0,
      msg: "请求成功",
      data
    })
  } catch (e) {
    return res.send({
      code: 0,
      msg: "服务器出错，请稍后再试~",
      data: []
    })
  }
})
router.post("/send", (req, res) => {

  const { name, email, subject, message } = req.body
  console.log(req.body)
  if (!name || !email || !subject || !message) {
    return res.send({
      code: 1,
      msg: "参数有误",
      data: {}
    })
  }
  const transSender = nodemailer.createTransport({
    host: "smtp.qq.com",
    secure: true,
    port: 465,
    auth: {
      user: "2305742401@qq.com",
      // pass: "CWMODCSJISWSZSIT"
      pass: "blwrmglgspvbecgb"
    },
  })

  //发送内容

  const mailOptions = {
    // from: ``,
    // to: `收件人：邮箱账号:《2305742401@qq.com》`,
    from: "2305742401@qq.com",
    to: "2305742401@qq.com",
    subject: subject || "博客那些事儿",
    html: `
    <h2>发件人：${name},《${email}》</h2>
    <div>消息： ${message}</div>
    <p><${new Date()}/p>
    `,
    date: new Date()
  }

  transSender.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("err========>", err)
      return res.send({
        code: 1,
        msg: "发送邮件失败~",
      })
    } else {
      console.log("info========>", info)

      return res.send({
        code: 0,
        msg: "发送邮件成功～",
      })
    }
  })
  transSender.close(); // 如果没用，关闭连接池
})

module.exports = router








