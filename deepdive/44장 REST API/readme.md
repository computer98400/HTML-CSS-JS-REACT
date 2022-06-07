# REST
HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처이고, REST API는 REST를 기반으로 서비스 API를 구현한 것이다.

## REST API의 구성
자원, 행위, 표현의 3가지 요소로 구성된다.

- 자원 : URI
- 행위 : HTTP 요청 메서드
- 표현 : 페이로드



## REST API 설계 원칙
1. URI는 리소스를 표현해야 한다.
리소스를 식별할 수 잇는 이름은 동사보다는 명사를 사용한다. 따라서 이름에 get 같은 행위에 대한 표현이 들어가서는 안 된다.

2. 리소스에 대한 행위는 HTTP 요청 메서드로 표현한다.
클라이언트가 서버에게 요청의 종류와 목적을 알리는 방법이다.

- GET
- POST
- PUT
- PATCH
- DELETE

리소스에 대한 행위는 HTTP요청 메서드를 통해 표현하며 URI에 표현하지 않는다.
```
bad case
GET /todos/delete/1

good case
DELETE /todos/1
```

