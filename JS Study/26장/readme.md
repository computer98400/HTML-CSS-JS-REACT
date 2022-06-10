# 정규표현식

문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용한다.

```
const tel = '0101234567팔'

const myRegExp = /^[0-9]+$/;

console.log(myRegExp.test(tel));
```
## 정규표현식 리터럴
시작 및 종료 기호를 `/`를 통해서 표현하게 되며 가운데는 패턴, 마지막엔 `flag`를 작성하게 된다.

![image](https://user-images.githubusercontent.com/62691610/159715201-1a920dd6-70d3-48a4-a305-1154d1e9daf1.png)

## 플래그

- i = Ignore Case = 대소문자를 구별하지 않고 검색한다.
- g = Global = 문자열 내의 모든 패턴을 검색한다.
- m = Multi Line = 문자열의 행이 바뀌더라도 검색을 계속한다.


## 패턴
검색하고 싶은 문자열을 지정한다. 이때 문자열의 따옴표는 생략한다. 따옴표를 포함하면 따옴표까지도 검색한다. 또한 패턴은 특별한 의미를 가지는 메타문자또는 기호로 표현할 수 있다.

```
const regexr = /.../;
const regexr2 = /.../g;
console.log('AA BB Aa Bb'.match(regexr));
console.log('AA BB Aa Bb'.match(regexr2));
```

.은 임의의 문자 한 개를 의미한다. .을 3개 연속하여 패턴을 생성하였으므로 3자리 문자를 추출한다.
이때 기본적으로 추출을 반복하지 않으며 반복을 위해선 플래그 g를 사용한다.

모든 문자를 1개씩 선택하는 경우
```
console.log('AA BB Aa Bb'.match(/./g));
```

. 대신에 문자 또는 문자열을 지정할 시엔 일치하는 대상을 찾아낸다.

기본적으론 대소문자를 구별하여 반환하게 되며 대소문자를 구별하지 않게 하려면 플래그 i를 사용한다.

```
const regexr = /A/ig;

console.log(targetStr.match(regexr));
```

앞선 패턴을 최소 한번 반복하려면 앞선 패턴 뒤에 +를 붙인다.


```
const regexr = /A+/g;
console.log('AA AAA BB Aa Bb'.match(regexr));
```


```
const targetStr = 'AA BB Aa Bb';

//|를 사용하면 or의 의미를 가지게 된다.
const regexr = /A|B/g;

console.log(targetStr.match(regexr));
//분해되지 않은 단어 레벨로 추출하기 위해서는 +를 같이 사용하면 된다.
const regexr2 = /A+|B+/g;

console.log(targetStr.match(regexr2));

//여러 문자를 포함하고 있는 경우 |를 사용하는데 불편할 수 있다. 이땐 []를 사용하여 표현하게 된다.

const regexr3 = /[AB]+/g;

console.log(targetStr.match(regexr3));
```

숫자를 표현하는 경우엔 \d를 사용하게 된다.
```
const targetStr = 'AA BB Aa Bb 24,000';

const regexr4 = /[\d,]+/g;

console.log(targetStr.match(regexr4));

//숫자를 제외한 문자들의 경우 \D를 사용한다.
const regexr5 = /[\D,]+/g;


console.log(targetStr.match(regexr5));


const targetStr = 'AA BB Aa Bb 24,000';

//숫자와 문자를 포함하는 경우 \w를 사용한다.
const regexr4 = /[\w,]+/g;

console.log(targetStr.match(regexr4));

//숫자,문자를 제외한 문자들의 경우 \D를 사용한다.
const regexr5 = /[\W,]+/g;


console.log(targetStr.match(regexr5));

const fileName = 'index.html';

const regexr = /html$/;
console.log(regexr.test(fileName));

const targetStr = '12345';

const regexr = /^\d+$/;

console.log(regexr.test(targetStr));


```


