let str = "asbcdefghijkldfadfgagdgds";
function GetUnique(str){
    let ans = "";
    for(let i = 0; i<str.length; i++){
        let CurrChar = str[i]
        if(ans.indexOf(CurrChar) == -1){
            ans += CurrChar;
        }
    }
    return ans;
}
console.log(GetUnique(str));
