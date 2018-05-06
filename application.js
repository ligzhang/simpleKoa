const http = require("http")
const context = require("./context")
const request = require("./request")
const response = require("./response")
class Application {
  constructor() {
    this.callbackfn
    this.context = context
    this.request = request
    this.response = response
  }
  listen(...args) {
    let server = http.createServer(this.callback())
    server.listen(...args)
  }
  use(fn) {
    this.callbackfn = fn
  }
  callback() {
    return (req, res) => {
      let ctx = this.createContext(req, res)
      console.log(ctx, "ctx")
      let respond = () => this.responseBody(ctx)
      this.callbackfn(ctx).then(respond)
    }
  }
  createContext(req, res) {
    let ctx = Object.create(this.context)
    ctx.request = Object.create(this.request)

    ctx.response = Object.create(this.response)

    ctx.req = ctx.request.req = req

    ctx.res = ctx.response.res = res

    return ctx
  }
  responseBody(ctx) {
    let content = ctx.body
    if (typeof content === "string") {
      ctx.res.end(content)
    } else if (typeof content === "object") {
      ctx.res.end(JSON.stringify(content))
    }
  }
}

module.exports = Application
