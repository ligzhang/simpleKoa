const simpleKoa = require("./application")

const app = new simpleKoa()
app.use(async ctx => {
  ctx.body = "hello world"
})
app.listen(3000)
