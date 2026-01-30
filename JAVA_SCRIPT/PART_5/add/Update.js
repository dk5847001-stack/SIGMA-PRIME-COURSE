const obj = {
    Name: "Dilkhush Kumar",
    Prn: "51",
    Branch: "Btech cse",
    Marks: 96,
    City: "madhepura"
}
console.log("Origional Object : ", obj);
console.log('');
obj["Marks"] = "A"
obj.Gender = "Male"
console.log(obj);
console.log('After Deletion...');
delete obj.Branch;
console.log(obj);


