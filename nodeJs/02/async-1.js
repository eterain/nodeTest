function a() {
    console.log("1");
}
function b() {
    setTimeout(() => {
        console.log("2");
    }, 1000);
}
function c() {
    console.log("3");
}

//비동기처리 : settimeout()을 이용하여 1초 후에 b()함수 실행
a();
b();
c();
