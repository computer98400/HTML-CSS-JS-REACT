
// 동기 처리의 예시
function sleep(func, delay) {
    const delayUntil = Date.now() + delay;


    while(Date.now() < delayUntil);

    func();

}

function foo(){
    console.log('foo');
}
function bar(){
    console.log('bar');
}

console.log("start");
// sleep(foo, 3*1000);

// bar();


// 비동기 처리의 예시
setTimeout(foo, 3 * 1000);
bar();



function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}

setTimeout(foo, 0);
bar();