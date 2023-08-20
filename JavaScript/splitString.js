const cities = String("Dehradun,Almora,Uttarkashi,Rishikesh");
const carr = cities.split(",");

console.log(carr);

carr.forEach((city) => {

    console.log("I Love ",city);
})