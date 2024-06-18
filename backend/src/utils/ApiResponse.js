class Apiresponse {
  constructor(status, data, message = "success") {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

module.exports = { Apiresponse };
