
// // 동기 처리의 예시(자바스크립트 엔진만을 사용해서 구현한 예제)
// function sleep(func, delay) {

//     //시간을 밀리초 단위로 판단하는 Date함수를 사용했다.(따라서 number값이 될 수 있음.)
//     const delayUntil = Date.now() + delay;
//     while(Date.now() < delayUntil);

//     func();
// }

// function foo(){
//     console.log('foo');
// }
// function bar(){
//     console.log('bar');
// }

// console.log("start");

// sleep(foo, 3 * 1000);

// bar();


// // // 비동기 처리의 예시
// setTimeout(foo, 3 * 1000);
// bar();



function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}
//setTimeout의 경우엔  기본적인 차이(4ms) 를 가지고있음.
setTimeout(foo, 0);
bar();