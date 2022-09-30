

const session = require("express-session")
const MongoStore = require("connect-mongo")

module.exports = session({
  secret: "yuluoxiaoxiao",
  resave: false,
  rolling: true,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: "mongodb://localhost:27017/myBlog"
  })
})







