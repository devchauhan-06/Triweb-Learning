const { myEventEmmiter, LOGIN_EVENT } = require("./eventFile");

module.exports.loginSuccesful = (userName) => {
    setInterval(() => {
        myEventEmmiter.emit(LOGIN_EVENT, userName);
    }, 2000)
}