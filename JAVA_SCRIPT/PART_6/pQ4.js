let greet = "Helo!"
console.log(greet);

function outergreet(){
    let greet = "Namaste"
    console.log(greet);
    function innergreet(){
        console.log(greet);
    }
    innergreet();
}
outergreet();