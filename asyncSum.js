(async()=>{
    const t= await sum(7,9)
console.log(t);
})();

sum(6,9).then(rst=>console.log(rst))
sum(5, 9).then(rst =>{data=rst;
console.log(data);
})

async function sum(a, b) {
    result = await a + b;
    return result;
}