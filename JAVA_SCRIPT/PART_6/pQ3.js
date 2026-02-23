function concationation(a,b,c,d){
    let concats = a.concat(b).concat(c).concat(d);
    return concats;
}

// let sum = concationation(["Dilkhush "], ["Roshan "], ["Amar "], ["Raja"]);
let sum = concationation("Dilkhush ", "Amar ", "Raja ", "Roshan")
console.log(sum);

console.log('');
function Concat(str){
    let result = "";
    for(let i = 0; i<str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(Concat(["Dilkhush ", "Amar ", "Roshan"]));

