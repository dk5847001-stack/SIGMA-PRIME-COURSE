function database(data, success, failure) {
    let internateSpeed = Math.floor(Math.random() * 10) + 1;
    if (internateSpeed > 4) {
        success();
    } else {
        failure();
    }
}
database("Dilkhus kumar", () => {
    console.log('Success: Data saved!');
    database("Age: 18", () => {
        console.log('Success2: Data saved!');
        database("Amar Kumar", () => {
            console.log('Success3: Data saved!');
        }, () => {
            console.log('failure3: weak connection, try again!');
        })

    }, () => {
        console.log('failure2: weak connection, try again!');
    });

}, () => {
    console.log('failure: weak connection, try again!');
})