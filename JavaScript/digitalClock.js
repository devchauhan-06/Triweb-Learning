function getDigitalTime(){
let dt = new Date();
// console.log(dt);    it gives Current Year-Month-Date-Time

 let hr = dt.getHours();
 let min = dt.getMinutes();
 let sec = dt.getSeconds();

 console.log(hr+":"+min+":"+sec);



}

getDigitalTime()