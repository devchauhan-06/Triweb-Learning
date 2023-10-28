const dbFile = require('./dbFile');
const { loginSuccesful } = require('./login')
const { myEventEmmiter, LOGIN_EVENT } = require("./eventFile");


myEventEmmiter.on(LOGIN_EVENT, (userName) => {
    console.log("Sending email to user ", userName);
});


loginSuccesful("Dev");