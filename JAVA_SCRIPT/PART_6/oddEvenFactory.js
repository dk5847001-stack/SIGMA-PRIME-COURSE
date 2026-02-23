


function oddEvenTest(request) {
    if (request == "odd") {
        let odd = function () {
            console.log(!(n % 2) == 0);
        }
        return odd;
    }
    else if (request == "even") {
        let Even = function () {
            console.log((n % 2) == 0);
        }
        return Even;
    }
    else{
        console.log("wrong request");
        
    }
}
let request = "od/..................................................................dd";
let func = oddEvenTest(request)
console.log(request);

