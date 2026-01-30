let jsonRes = 
'{"fact": "Approximately 1/3 of cat owners think their pets are able to read their minds.", "length":78}';
// convert JSON to js object
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);
console.log('***********************************************************');
console.log(validRes);

let student = {
    name: "Dilkhush Kumar",
    age: 19,
};
console.log('**********************************************************');
// convert  js object to JSON
let json = JSON.stringify(student);
console.log(json);

