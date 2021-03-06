# 프로그래밍

프로그래밍이란 컴퓨터에게 실행을 요구하는 일종의 <b>커뮤니케이션</b>이다.<br>
대부분의 문제는 복잡하고 명확하지 않을 수도 있다. 따라서 `문제를 명확히 이해`하는 것이 우선되어야하고, `복잡함을 단순하게 분해`, `자료를 정리하고 구분`해야 하며 `순서에 맞게 행위를 배열` 해야한다.

> 즉, 프로그래밍이란 0과 1밖에 알지 못하는 기계가 실행할 수 있도록 정확하고 상세하게 요구사항을 설명하는 작업이다.



컴퓨터는 0과 1로 이뤄져있기 때문에 사람의 생각보다 정밀하고 명확한 기준이 존재하여야만 한다.

ex) 듣다 라는 행위는 컴퓨터에게 적용한다면 어떻게 되는가?<br>
ex) 크다, 작다의 기준은 어떤 것인가? <br>
ex) 감정이란 무엇인가<br>

# 프로그래밍 언어
문제 해결 능력을 바탕으로 정의된 문제 해결 방안은 컴퓨터에게 전달되어야한다. 이때 명령을 수행할 주체는 컴퓨터다. 따라서 사람이 이해할 수 잇는 자연어가 아니라 컴퓨터가 이해할 수 있는 자연어가 아니라 컴퓨터가 이해할 수 있는 언어, 즉, 기계어로 명령을 전달해야 한다.

>앞에서 얘기했든 컴퓨터는 0과 1로 이뤄져있다. 따라서 사람이 원하는 코드 "Hello world"를 출력할 때 나오는 코드는 다음과 같다.
```
7F 45 4C 46 01 01 01 00 00 00 00 00 00 00 00 00 02 00 03 00 01 00 00 00 35 40 B3 04 2c 00 00 00 00 00 00 00 00 00 00 00 34 00 20 00 01 00 00 00 00 00 00 00 00 40 B3 04 B2 0C EB 1C 62 00 00 00 62 00 00 00 05 00 00 00 00 10 00 00 48 65 6C 6C 6F 20 77 6F 72 6C 64 0A B9 4C 40 B3 04 93 CD 80 EB FB
```

이런 기계어를 사람이 직접 작성하는 것은 큰 무리가 있다.<br> 따라서 사람이 이해할 수 잇는 약속된 구문으로 구성된 프로그래밍 언어를 사용해 프로그램을 작성한 후, 그것을 컴퓨터가 이해할 수 잇는 기계어로 변환하는 일종의 번역기를 이용하는 것이다.<br> 이 일종의 번역기를 `컴파일러` 혹은 `인터프리터`라고 한다.<br>

자바스크립트의 경우도 언어인데 hello world를 출력하기 위해 사용되는 코드는 다음과 같다.
```
console.log('hello world');
```

# 구문과 의미
어떤 언어의 문법을 아는것과 해당 언어를 잘 사용한다고 말하는 건 다른것이다.
잘 사용한다는 것은 화자의 말이나 문장을 정확히 이해한 후, 문맥에 따른 적절한 어휘 선택, 그리고 순차적으로 결론을 향해 나아가는 문장 구성이 필요하다. 즉, 문법에 맞는 문장을 구성하는 것은 물론 의미를 가지고 있어야 언어의 역할을 충실히 수행할 수 있다.

결국 문제 해결 능력을 통해 만들어낸 해결 방안은 프로그래밍 언어의 문법을 사용해 표현한다. 즉, 작성된 코드는 해결 방안의 구체적 구현물이다. 그리고 이것은 프로그래밍 언어의 문법에 부합하는 것은 물론이고 수행하고자 하는 바를 정확히 수행하는 것, 즉 요구사항이 실현되어야 의미가 있다.

> 프로그래밍이란 요구사항의 집합을 분석해서 적절한 자료구조와 함수의 집합으로 변환한 후, 그 흐름을 제어하는 것이다.

