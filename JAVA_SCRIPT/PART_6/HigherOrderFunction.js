function multiplegreeting(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}
 let a = function() {
        console.log('Namaste!');
    }
multiplegreeting(a, 10)