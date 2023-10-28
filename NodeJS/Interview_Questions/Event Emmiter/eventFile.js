const { EventEmitter } = require("events");

module.exports.myEventEmmiter = new EventEmitter();
module.exports.LOGIN_EVENT = "loginEvent";