function a() {
    console.log("1");
}
function b(callback) {
    setTimeout(() => {
        console.log("2");
        if (callback) {
            callback();
        }
    }, 1000);
}
function c() {
    console.log("3");
}

a();
b(c);
