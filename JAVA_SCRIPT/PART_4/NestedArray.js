let arr = [
["Dilkhush", "Amar", "Raja", "Pujesh",],
["Soni", "Payal", "Puja", "Minakshi"]
];

for(let i = 0; i<arr.length; i++){
    console.log("Group Name : ", arr[i]);
    for(j = 0; j<arr[i].length; j++){
        console.log("Index = " + j + " and Name : " + arr[i][j]);
        
    }
}

