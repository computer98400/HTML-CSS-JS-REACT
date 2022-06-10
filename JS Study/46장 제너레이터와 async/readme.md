# 제너레이터란?
코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수이다.
1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다.
2. 제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다.
3. 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.

> 제너레이터란 함수의 실행 단계를 조정할 수 있는 함수라 생각하면 된다. 함수의 실행 단계를 조작할 수 있기에 특수하다.


# 제너레이터 함수의 정의
function* 키워드로 선언한다. 그리고 하나이상의 yield 표현식을 포함한다.

```
function* genDecFunc(){
    yield 1;
}

cons genExpFunc = function*(){
    yield 1;
};

const obj = {
    * genObjMethod(){
        yield 1;
    }
};

class MyClass {
    * genClsMethod(){
        yield 1;
    }
}
```


# 제너레이터 객체
제너레이터 함수를 호출하면 일반 함수처럼 함수 코드 블록을 실행하는 것이 아니라 제너레이터 객체를 생성해 반환한다. 제너레이터 함수가 반환한 제너레이터 객체는 이터러블이면서 동시에 이터레이터다.
다시 말해, 제너레이터 객체는 Symbol.iterator 메서드를 상속받는 이터러블이면서 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환하는 next 메서드를 소유하는 이터레이터다.

> 제너레이터의 경우 함수 내부의 동작을 이터레이터 형식으로 변경하게 된다. 이는 함수 내부의 실행에 대해서 순서를 정해준다라고 생각하는게 좋을듯싶다.

```
function* genFunc(){
    try{
        yield 1;
        yield 2;
        yield 3;
    }catch(e){
        console.error(e);
    }
}

const generator = genFunc();

console.log(generator.next());
console.log(generator.return('End'));

```
![image](https://user-images.githubusercontent.com/62691610/172547460-ab0f186b-34b4-4224-892d-9bf0085382cf.png)

해당 코드내에서 yield에 따라 실행이 되며 각각의 단계에 대해서 next()를 가지고 있다. = 다음 객체에 대한 설명

# 제너레이터의 일시 중지와 재개

```
function* genFunc(){
    const x = yield 1;
    const y = yield (x+10);

    return x+y;
}

const generator = genFunc(0);

let res = generator.next();

console.log(res);

res = generator.next(10);

console.log(res);

res = generator.next(20);
console.log(res);

```
해당 함수는 제너레이터의 순서에 대한 설명이다. 각 함수내부의 yield를 기준으로 함수가 실행되고 끝나는 모습을 확인할 수 있다. 따라서 res 값의 상태 변화를 체크하면 끝.


# async/ await
제너레이터는 코드가 어렵다. 따라서 ES8에서는 async/await가 도입되었다.
이는 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.
## async 함수
await 키워드는 반드시 async 함수 내부에서 사용해야 한다. async 함수는 async 키워드를 사용해 정의하며 언제나 프로미스를 반환한다. async 함수가 명시적으로 프로미스를 반환하지 않더라도 async 함수는 암묵적으로 반환값을 resolve하는 프로미스를 반환한다.


```
async function foo(n){ return n;};
foo(1).then(v => console.log(v));
```

## await 함수
프로미스가 settled 상태가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환한다. await 키워드는 반드시 프로미스 앞에서 사용해야한다.

```
const getGithubUserName = async id =>{
    const res = await fetch(`https://api.github.com/users/${id}`);
    const { name } = await res.json();
    console.log(name);
}

getGithubUserName('computer98400');
```

> promise.all과 함께 사용한다면 효과적으로 코드를 사용할 수 있다.


## 에러처리
기존의 콜백함수의 경우 비동기 함수가 아니기 때문에 try... catch문을 사용해 에러를 캐치할수없다. ( 다음 챕터입니다~)

async/await의 경우 에러처리는 try ..catch문을 사용할 수 있다. 콜백 함수를 인수로 전달받는 비동기 함수와는 달리 프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있기 때문에 호출자가 명확하다.

```
const foo = async() =>{
    try{   
        const wrongUrl = 'https://wrong.url';
        const response = await fetch(wrongUrl);
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.error(err);
    }
}
foo();
```

<b>async 함수 내에서 catch 문을 사용해서 에러 처리를 하지 않으면 async 함수는 발생한 에러를 reject하는 프로미스를 반환한다.</b>