# 동기식 처리 모델 vs 비동기식 처리 모델

동기식 처리 모델은 직렬적으로 태스크를 수행한다. 태스크는 순차적으로 실행되며 어떤 작업이 수행 중이면 다음 작업은 대기하게 된다.

```
function func1(){
    console.log('func1');
    func2();
}
function func2(){
    console.log('func2');
    func3();
}
function func3(){
    console.log('func3');
}
func1();

```


비동기식 처리 모델은 병렬적으로 테스크를 수행한다. 즉, 테스크가 종료되지 않은 상태라 하더라도 대기하지 않고 다음 테스크를 실행한다. 예를 들어 서버에서 데이터를 가져와서 화면에 표시하는 테스크를 수행할 때, 서버에 데이터를 요청한 이후 서버로부터 데이터가 응답될 때까지 대기하지 않고 즉시 다음 테스크를 수행한다. 이후 서버로부터 데이터가 응답되면 이벤트가 발생하고 이벤트 핸들러가 데이터를 가지고 수행할 테스크를 계속해 수행한다.

> 자바스크립트의 대부분의 DOM 이벤트 핸들러와 Timer 함수, Ajax요청은 비동기식 처리 모델로 동작한다.

```

function func1(){
    console.log('func1');
    func2();
}
function func2(){
    setTimeout(function() {
        console.log('func2');
    }, 0);
    func3();
}
function func3(){
    console.log('func3');
}

func1();
```

위 예제를 실행하면 setTimeout 메소드에 두번째 인수 인터벌을 0초로 설정하여도 콘솔에 "func1 func2 func3"의 순서로 로그가 출력되지 않는다. 이는 setTimeout 메소드가 비동기 함수이기 때문이다.


![image](https://user-images.githubusercontent.com/62691610/165325476-8f83501c-77c8-41df-ad8c-8ca7110b98e4.png)

함수 func1이 호추로디면 함수 func1은 Call Stack에 쌓인다. 그리고 함수 func1은 함수 func2을 호출하므로 함수 func2가 Call Stack에 샇이고 setTimeout가 호출된다. setTimeout의 콜백함수는 즉시 실행되지 않고 지정 대기 시간만큼 기다리다가 "tick"이벤트가 발생하면 테스크 큐로 이동한 후 Call Stack이 비어졌을 때 Call Stack으로 이동되어 실행된다.
