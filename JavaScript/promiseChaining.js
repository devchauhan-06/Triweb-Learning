function user()
{
    return new Promise((resolve,reject) =>
    {
        resolve({name:"dev"})
    });
}
user()
.then((username) =>{
    return username.name;
})
.then((uname) => {
    console.log(uname);
})
.catch((err) =>
console.log(err));
