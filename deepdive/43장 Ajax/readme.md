# Ajax

자바스크립트를 사요여하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 방식.

브라우저에서 제공하는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다.

기존의 웹페이지 경우엔 html 파일 전체를 다시 렌더링 하는 방식으로 동작했다.

이전 방식의 단점
1. 이전 웹페이지와 차이가 없어서 변경할 필요가 없는 부분까지 포함된 완전한 HTML을 서버로부터 매번 다시 전송받기 때문에 불필요한 데이터 통신이 발생한다.
2. 변경할 필요가 없는 부분까지 처음부터 다시 렌더링한다. 이로 인해 화면 전환이 일어나면 화면이 순간적으로 깜빡이는 현상이 발생한다.
3. 클라이언트와 서버와의 통신이 동기 방식으로 동작하기 때문에 서버로부터 응답이 있을때까지 블로킹된다.

그에 비해 Ajax의 경우 부분적인 변환이 가능하며, 변환이 필요없는 부분에 대해선 변하지 않는다.

그에 따른 장점
1. 변경할 부분을 갱신하는 데 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신이 발생하지 않는다.
2. 변경할 필요가 없는 부분은 다시 렌더링하지 않는다.
3. 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 서버에게 요청을 보낸 이후 블로킹이 발생하지 않는다.


## JSON
클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포멧이다.

### JSON 표기 방식
객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트이다.

```
{

    "name": "Lee",
    "age": 20,
    "alive": true,
    "hobby": ["traveling","tennis"]
}
```

### JSON.stringify
객체를 JSON 포맷의 문자열로 변환한다. 서버로 객체를 전송하기 위해 문자열화하는 것이며 이를 <b>직렬화</b>라고 한다.



```
const obj = {

    "name": "Lee",
    "age": 20,
    "alive": true,
    "hobby": ["traveling","tennis"]
}


const prettyJson = JSON.stringify(obj, null, 2);
console.log(prettyJson);
```

JSON.stringify의 경우 가운데 값으로 replacer를 통해 필터링이 가능하다.

```
function filter(key, value){
    return typeof value == 'number' ? undefined:value;
}
```

### JSON.parse

JSON 포멧의 문자열을 객체로 변환한다. 기본적으로 서버는 문자열 데이터를 보내기때문에 <b>역직렬화</b>가 필요하다.


## XMLHttpRequest
브라우저는 주소창이나 HTML의 form 태그 또는 a 태그를 통해 HTTP 요청 전송 기능을 기본 제공한다. 자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLHttpRequest 객체를 사용한다.

### XMLHttpRequest 객체 생성
XMLHttpRequest 생성자 함수를 호출하여 생성한다. 이는 브라우저에서 제공하는 Web API이기 때문에 브라우저에서만 실행된다.

### XMLHttpRequest 객체의 프로퍼티와 메서드

- 객체의 프로토타입 프로퍼티
readyState : HTTP 요청의 현재 상태를 나타내는 정수. ex) UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4
status : HTTP 요청에 대한 응답 상태를 나타내는 정수
statusText : HTTP 요청에 대한 응답 메시지를 나타내는 문자열
responseType : HTTP 응답 타입
response : HTTP 요청에 대한 응답 몸체
responseText : 서버가 전송한 HTTP 요청에 대한 응답 문자열

- 객체의 이벤트 핸들러 프로퍼티
onreadystatechange : readyState 프로퍼티 값이 변경된 경우
onloadstart : HTTP 요청에 대한 응답을 받기 시작한 경우
onprogress : HTTP 요청에 대한 응답을 받는 도중 주기적으로 발생
onabort : abort 메서드에 의해 HTTP 요청이 중단된 경우
onerror : HTTP 요청에 에러가 발생한 경우
onload : HTTP 요청이 성공적으로 완료한 경우
ontimeout : HTTP 요청 시간이 초과한 경우
onloadend : HTTP 요청이 완료한 경우

- 객체의 메서드
open : HTTP 요청 초기화
send : HTTP 요청 전송
abort : 이미 전송된 요청 중단
setRequestHeader : 특정 HTTP 요청 헤더의 값을 설정
getResponseHeader : 특정 HTTP 요청 헤더의 값을 문자열로 변환

### HTTP 요청 전송
다음과 같은 순서에 의해 요청이 전송된다.

1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화한다.
2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더 값을 설정한다.
3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다.

```
const xhr = new XMLHttpRequest();

xhr.open('GET','/users');
xhr.setRequestHeader('content-type', application/json');
xhr.send();
```




