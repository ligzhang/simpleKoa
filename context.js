module.exports = {
  get query() {
    return this.request.query
  },
  get body() {
    return this.response.body
  },
  get status() {
    return this.response.status
  },
  set body(data) {
    this.response.body = data
  },
  set status(status) {
    this.response.status = status
  }
}
