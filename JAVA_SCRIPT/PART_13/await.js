function GetRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        resolve();
        }, 1000);
    })
}
async function getCall() {
    await GetRandomNumber();
    await GetRandomNumber();
    await GetRandomNumber();
    await GetRandomNumber();
    await GetRandomNumber();
    await GetRandomNumber();
    await GetRandomNumber();
}
getCall();