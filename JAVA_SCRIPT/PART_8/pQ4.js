// Qs4.WriteafunctioncalleddoubleAndReturnArgswhichacceptsanarrayandavariablenumberofarguments.Thefunctionshouldreturnanewarraywiththeoriginalarrayvaluesandalloftheadditionalargumentsdoubled.Qs5.WriteafunctioncalledmergeObjectsthatacceptstwoobjectsandreturnsanewobjectwhichcontainsallthekeysandvaluesofthefirstobjectandsecondobject.
const doubleAndReturnArgs = (arr, ...args) => [
...arr, 
...args.map((el) => el * 2),
];
console.log(doubleAndReturnArgs([1,2,3],4,4)); // [1,2,3,8,8]
console.log(doubleAndReturnArgs([3],14,10)); // [3,28,20]

