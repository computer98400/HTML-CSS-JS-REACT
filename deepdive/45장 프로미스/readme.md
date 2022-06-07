# 프로미스

비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용하지만 가독성이 나쁘고 비동기 처리 중 발생한 에러의 처리가 곤란하여 여러 개의 비동기 처리를 한번에 처리하는 데도 한계가 있다.
따라서 ES6부터 비동기 처리를 위한 또 다른 패턴으로 프로미스를 도입했다.

### 프로미스란 비동기 처리 상태와 처리 결과를 관리하는 객체이다.


## 비동기 처리를 위한 콜백 패턴의 단점
비동기 함수의 경우 함수 내부에 비동기로 동작하는 코드를 포함한 함수를 말한다. 비동기 함수를 호출하게 되면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료된다. 따라서 <b>비동기 함수 내부의 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않는다.</b>

setTimeout 함수의 콜백 함수에서의 예시이다.

```
let g = 0;
setTimeout(()=>{ g = 100}, 0);
console.log(g);
```

함수 내부의 비동기 함수를 사용하는 경우(이벤트 핸들러) 함수가 실행된 뒤에 이벤트 핸들러에 의해 이후 동작을 하게 된다.

```
const get = url =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () =>{
        if(xhr.status === 200){
            return JSON.parse(xhr.response);
        }
        console.error(`${xhr.status} ${xhr.statusText}`);
    }
}

const response  = get('http://jsonplaceholder.typicode.com/posts/1');
console.log(response);
```

위 코드에서 비동기 함수 get이 호출되면 함수 코드를 평가하는 과정에서 get 함수의 실행 컨텍스트가 생성되고 콜스택에 푸시된다. 이후 함수 코드 실행 과정에서 xhr.onload 이벤트 핸들러 프로퍼티에 이벤트 핸들러가 바인딩된다.
get 함수가 종료하면 get 함수의 실행 컨텍스트가 콜 스택에서 팝되고, 곧바로 console.log()가 실행된다. 
xhr.onload 이벤트 핸들러 프로퍼티에 바인딩한 이벤트 핸들러는 결고 console.log보다 먼저 실행되지 않는것이다.

테스크 큐 내부 동작
get 함수 -> console.log() -> xhr.onload

> 이벤트 핸들러의 경우 콜스택이 비어있을 때만 동작한다는 점을 생각하면 쉽다.

따라서 비동기 함수를 통해 비동기 함수를 부르는 경우 <b>콜백 헬</b>이 발생된다.

```
get('/step1', a =>{
    get(`/step1${a}`, b =>{
        get(`/step1${b}`, c =>{
            get(`/step1${c}`, d =>{
                console.log(d);
            })
        })
    })
})
```
## 에러처리의 한계
에러처리에 대한 내용은 이후 47장에서 확인할 수 있다.

# 프로미스의 생성
Promise의 경우도 생성자 함수를 통해 생성한다. ES6에 명시되어있는 표준 빌트인 객체이다.

Promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 전달받는데 이 콜백 함수는 resolve와 reject 함수를 인수로 전달받는다.

```
const promise = new Promise((resolve, reject)=>{
    if(){
        resolve('result');
    }else{
        reject('failure reason');
    }
})
```
Promise 생성자 함수가 인수로 전달받은 콜백 함수 내부에 비동기 처리를 수행한다. 이때 비동기 처리가 성공하면 콜백 함수의 인수로 전달받은 resolve 함수를 호출하고, 비동기 처리가 실패하면 reject 함수를 호출한다.

```
const get = url =>{
    return new Promise((resolve, reject) =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () =>{
        if(xhr.status === 200){
            return JSON.parse(xhr.response);
        }
        console.error(`${xhr.status} ${xhr.statusText}`);
    };
    });
};
```

비동기 함수 get은 함수 내부에서 프로미스를 생성하고 반환한다. 비동기 처리는 Promise 생성자 함수가 인수로 전달받은 콜백 함수 내부에서 수행한다. 만약 비동기 처리가 성공하면 비동기 처리 결과를 resolve 함수에 인수로 전달하면서 호출하고, 비동기 처리가 실패하면 에러를 reject 함수에 인수로 전달하면서 호출한다.

프로미스의 상태
- pending : 비동기 처리가 수행되지 않은 상태
- fulfilled : 비동기 처리가 수행된 상태(성공) -> resolve 함수 호출
- rejected : 비동기 처리가 수행된 상태(실패) -> reject 함수 호출

> promise의 상태에 따라 함수가 호출되는 것이다.

```

const fulfilled = new Promise(resolve => resolve(1));

```

# 프로미스의 후속 처리 메서드

## Promise.prototype.then
then의 경우 두개의 콜백 함수를 인수로 전달받는다.
1. 첫번째 콜백한수는 프로미스가 fulfilled상태가 되면 호출된다. 이때 콜백 함수는 프로미스의 비동기 처리 결과를 인수로 전달받는다.
2. 두번째 콜백함수는 프로미스가 rejected 상태가 되면 호출된다. 이때 에러를 인수로 전달받는다.


## Promise.prototype.catch
한 개의 콜백 함수를 인수로 전달받는다. catch 메서드의 콜백함수는 프로미스가 rejected상태인 경우만 호출된다.



## Promise.prototype.finally
한개의 콜백 함수를 인수로 전달받는다. finally 메서드의 콜백 함수는 프로미스의 성공 또는 실패와 상관없이 무조건 한 번 호출된다. finally 메서드는 프로미스의 상태와 상관없이 공통적으로 수행해야 할 처리 내용이 있을 때 유용하다. finally 메서드도 then/catch메서드와 마찬가지로 언제나 프로미스를 반환한다.


