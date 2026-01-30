async function great(){
    throw "weak connection!"
    return "result"
}
great()
.then((result)=>{
console.log('Promise was resolved!');
console.log('promise result: ', result);
})
.catch((err)=>{
    console.log('Promise was rejected');
    console.log('promise rejected with err: ',err);
})

let demo = async ()=>{
    return 5;
}
console.log(demo);
