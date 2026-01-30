let a = "        Dilkhush Kumar            "
let newA = a.trim();
console.log("After triming : ", newA);
newA = newA.toUpperCase()
console.log("After Upper Case : ", newA);

// -----------------------------------------
let b = a.trim().toLocaleUpperCase()
console.log("After triming and uppercase : ", b);
