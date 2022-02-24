# 타입 체크
동적 타입 언어의 경우 변수에 어떤 값이 할당될지 예측하기 어렵다.
```
function sum(a,b){
    return a+b;
}
```
위의 코드는 2개의 number 타입 인수를 전달받아 그 합계를 반환하려는 함수일 것이다. 자바스크립트 문법상 어떠한 문제도 없으므로 자바스크립트 엔진은 아무런 이의 제기없이 위 코드를 실행할 것이다. 개발자의 의도와 다르게 문자열이 들어가게 된다면 예외가 발생하게 되는 것이다. 이는 변수나 반환값의 타입이 사전에 지정하지 않는 자바스크립트의 동적 타이핑에 의한 것이다.
<b>따라서 자바스크립트는 타입 체크가 필요하다.</b>

# typeof

타입 연산자 `typeof`는 피연산자의 데이터 타입을 문자열로 반환한다.
```
typeof '';            //string
typeof 1;             //number
typeof NaN;           //number
typeof true;          //boolean
typeof [];            //object
typeof {};            //object
typeof new String();  //object
typeof new Date();    //object
typeof /test/gi;      //object
typeof function() {}; //function
typeof undefined;     //undefined
typeof null;          //object( 설계적 결함)
typeof undeclared;    //object( 설계적 결함)

```
위의 코드를 보게 되면 string number boolean 의 경우를 제외하곤 대부분 object로 반환된다. 따라서 null을 제외한 원시 타입을 체크하는 데는 문제가 없지만 <b>객체의 종류까지 구분하여 체크하려할 때는 사용하기 곤란하다.</b>


# Object.prototype.toString
`Object.prototype.toString`메소드는 객체를 나타내는 문자열을 반환한다.

```
var obj = new Object();
obj.toString(); //[object Object]
```
`Function.prototype.call` 메소드를 사용하면 모든 타입의 값의 타입을 알아낼 수 있다.
```
Object.prototype.toString.call('')
Object.prototype.toString.call(new String())
Object.prototype.toString.call(1)
Object.prototype.toString.call(new Number())
Object.prototype.toString.call(NaN)
Object.prototype.toString.call(Infinity)
Object.prototype.toString.call(true)
Object.prototype.toString.call(undefined)
Object.prototype.toString.call()
Object.prototype.toString.call(null)
Object.prototype.toString.call([])
Object.prototype.toString.call({})
Object.prototype.toString.call(new Date())
Object.prototype.toString.call(Math)
Object.prototype.toString.call(/test/i)
Object.prototype.toString.call(document)
Object.prototype.toString.call(argument)
Object.prototype.toString.call(undeclared)

```
> 출력값의 형태는 [object 해당객체]로 나온다. 따라서 괄호와 object구문을 제외한 함수를 직접 만들어서 사용하게된다.

```
function getType(target){
    return Object.prototype.toString.call(target).slice(8,-1);
}
```
이후 가장 위에있는 sum함수에 대해서 타입 체크를 진행한다.이때 타입체크의 경우 해당 함수 내에서 사용하는 것이 바람직하다.

```
function sum(a,b){
    if(getType(a) !== 'Number' || getType(b) !== 'Number'){
        throw new TypeError('파라미터에 number 타입이 아닌 값이 할당되었습니다.');
    }
    return a +b;
}
console.log(sum(10,'20'))   //TypeError : 파라미터에 number 타입이 아닌 값이 할당되었습니다.
```

# instanceof
```
function css(elem, prop, val){
    elem.style[prop] = val;
}

css({}, 'color', 'red'); //TypeError
```

타입 연산자에는 `typeof`이외에 `instanceof`를 제공한다. instanceof 연산자는 피연산자인 객체가 우항에 명시한 타입의 인스턴스인지 여부를 알려준다. 이때 타입이란 constructor를 말하며 <b>프로토타입 체인에 존재하는 모든 constructor를 검색하여 일치하는 constructor가 있다면 true를 반환한다.</b>

> 모든 객체의 경우 object를 상속받는다. 따라서 사용자 정의 객체의 경우에도 프로토타입 체인에 포함되기 때문에 instanceof를 통해서 자신이 만든 객체인지도 확인이 가능하다.


# 유사 배열 객체
배열인지 체크하기 위해서는 Array.isArray 메소드를 사용한다.
```
console.log(Array.isArray([]));     //true
console.log(Array.isArray({}));     //false
console.log(Array.isArray('123'));  //false
```
유사 배열 객체는 length 프로퍼티를 갖는 객체로 문자열, arguments, HTMLCollection, NodeList 등은 유사 배열이다. length 프로퍼티가 잇으므로 순회할 수 있으며 call, apply 함수를 사용하여 배열의 메소드를 사용할 수도 있다.
