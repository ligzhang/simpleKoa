module.exports = {
  get body() {
    return this._body
  },
  set body(data) {
    this._body = data
  },
  get status() {
    return this.res.statusCode
  },
  set status(statusCode) {
    if (typeof statusCode !== "number") {
      throw new Error("statusCode should be a number")
    }
    this.res.statusCode = statusCode
  }
}
