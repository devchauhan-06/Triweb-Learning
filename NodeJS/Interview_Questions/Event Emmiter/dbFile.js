const { myEventEmmiter, LOGIN_EVENT } = require("./eventFile");


myEventEmmiter.on(LOGIN_EVENT, (userName) => {
    console.log("Writing in db for user : ", userName);
});