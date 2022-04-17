# Ecma 인터내셔널
정보 통신에 대한 표준을 제정하는 비열리 표준화 기구.
대표적으로 CD롬 볼륨과 파일 구조, C#언어규격, JSON 포멧..

이중 <b>ECMA-262</b>라는 표준이 바로 스크립트 언어에 대한 표준이다.

# 스크립트 언어
독립된 시스템에서 작동하도록 특별히 설계된 프로그래밍 언어
응용 프로그램과 독립적으로 사용자가 직접 프로그램을 의도에 따라 동작시킬 수 있다.


## ECMAScript
Ecma 인터내셔널에 의해 제정된 ECMA-262 기술 규격에 의해 정의된 범용 스크립트 언어이다. 스크립트 언어가 준수해야하는 규칙 및 세부사항을 정의해둔 문서이다.

![image](https://user-images.githubusercontent.com/62691610/163711596-59aa1f72-1842-459e-a40a-a755e3cf6ab7.png)
위 사진속에서 ES6라고 부르는 아카이브 파일들이 존재함을 알 수 있음.


## ECMAScript 내에서의 While문 예시
![image](https://user-images.githubusercontent.com/62691610/163712547-5724ceb6-35b8-4bd4-9147-d23545f4f3ad.png)
- 원문 사진입니다.


## JavaScript
ECMAScript 사양을 준수하는 범용 스크립트 언어이다.
>즉, JavaScript는 스크립트 언어를 어떻게 쓰느냐에 대한 언어이고, ECMAScript는 스크립트언어를 어떻게 만드느냐에 대한 명세서라고 보면된다.

# 자바스크립트 엔진과 ES간의 관계

엔진 : JavaScript로 작성된 스크립트를 기계가 실행 가능하게 변경

크롬의 V8, 파이어폭스의 SpiderMonkey, 엣지의 Chakra 등이 각기 다른 ES를 지원하게 됨

> 각기 다른 ES버전을 사용하는 이유? : 안나옵니다 ㅠㅠ

하지만 대부분의 자바스크립트 엔진의 경우 ES5를 지원하게 된다. 
-> 따라서 우리는 ES6이후의 문법을 ES5로 변경하는 작업이 필요하게 된다.

# V8버전 정보
![image](https://user-images.githubusercontent.com/62691610/163712391-6bdab333-a75d-4023-b48c-61c8887a80e2.png)
- 지속적인 ECMAScript에 대한 업데이트가 되는중

![image](https://user-images.githubusercontent.com/62691610/163712866-175ddd25-b970-4867-b6d1-4982135ba98a.png)
- ES6에 대한 모든 내용이 적용되는게 아니라 각각 적용되는 걸 볼 수 있습니다.

# SpiderMonkey버전 정보
![image](https://user-images.githubusercontent.com/62691610/163712189-498793b3-95b6-4ab8-b2b9-6501a6c3ebbc.png)
- ES5가 적요된 시점을 확인할 수 있었습니다.


![image](https://user-images.githubusercontent.com/62691610/163712907-5f9540a3-43df-46bc-9e79-94898436aca4.png)
- 오픈소스로써 Jake Champion이란 분이 new Set에 대해 구현했다는 내용이 나옵니다.


# Babel
> Babel is a JavaScript compiler.

babel은 자바스크립트 컴파일러이다. 이는 각기 다른 버전의 코드간의 호환성을 적용시켜주는 역할을 하게 된다. (ES6 -> ES5)
ES6부터 만들어진 Class, Arrow function등을 이전 버젼으로 낮춰주는 역할


