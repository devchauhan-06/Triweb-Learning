let str = "Hello Brother how are u";

let regex = new RegExp('are');

console.log(regex.test(str));

const regex1 = /hello/i;  // 'i' Makes it case insensitive
// const regex1 = /hello/;  <--  This would be Case Sensitive 
//const regex1 = /hello/g;  <--  Makes the change global i.e Replace all Type ka

console.log(str.replace(regex1,'Bye'));