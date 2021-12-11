function doAny(data) {
    console.log(data);
}
// setTimeout(() => { doAny("675745") }, 4005)

// setTimeout(() => {
//     doAny("22222222")
// }, 101);
// setTimeout(() => {
//     doAny("1111111")
// }, 3000);
let sec =0;
setInterval(() => {
   
    sec++
    console.log(sec);
}, 1000);