function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};

}
let object1 = {a:1, b:2};
let object2 = {c:3, d:4};
let mergedObject = mergeObjects(object1, object2);
console.log("Merged Object : ", mergedObject);
// Output: Merged Object :  { a: 1, b: 2, c: 3, d: 4 }