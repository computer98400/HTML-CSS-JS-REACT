Math 객체는 수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체이다. Math 객체는 생성자 함수가 아니다. 따라서 Math객체는 정적 프로퍼티와 메소드만을 제공한다.

# Math Property

## Math.PI
PI값 반환

# Math Method

## Math.abs
인수의 절댓값을 반환한다. 반드이 0 또는 양수이어야한다.

```
Math.abs(-1);    
Math.abs('-1'); 
Math.abs('');   
Math.abs([]);   
Math.abs(null); 
Math.abs(undefined);
Math.abs({});   
Math.abs('string'); 
Math.abs(); 
```
## Math.round
인수의 소수점 이하를 반올림한 정수를 반환한다.
```
Math.round(1.4)
Math.round(1.6)
Math.round(-1.4)
Math.round(-1.6)
Math.round(1)
Math.round()
```

## Math.ceil
인수의 소수점 이하를 올림한 정수를 반환한다.

```
Math.ceil(1.4)
Math.ceil(1.6)
Math.ceil(-1.4)
Math.ceil(-1.4)
Math.ceil(1)
Math.ceil()
```

## Math.floor
인수의 소수점 이하를 내림한 정수를 반환한다.
- 양수인 경우, 소수점 이하를 떼어 버린 다음 정수를 반환한다.
- 음수인 경우, 소수점 이하를 떼어 버린 다음 -1을 한 정수를 반환한다.
```
Math.floor(1.9);
Math.floor(9.1);
Math.floor(-1.9);
Math.floor(-9.1);
Math.floor(1);
Math.floor();
```

## Math.sqrt
인수의 제곱근을 반환한다.
```
Math.sqrt(9)
Math.sqrt(-9)
Math.sqrt(2)
Math.sqrt(1)
Math.sqrt(0)
Math.sqrt()
```

## Math.random()
임의의 부동 소수점을 반환한다. 반환된 부동 소수점은 0부터 1미만이다.
```
Math.random()

const random = Math.floor((Math.random() * 10) +1);
```

## Math.pow
첫번째 인수를 밑, 두번째 인수를 지수로하여 거듭제곱을 반환한다.
```
Math.pow(2,8)
Math.pow(2,-1)
Math.pow(2)

2 ** 8
```

## Math.max
인수 중에서 가장 큰 수를 반환한다.
```
Math.max(1,2,3)

const arr = [1,2,3]
const max = Math.max.apply(null, arr)

Math.max(...arr);
```

## Math.min
인수중에서 가장 작은 수를 반환한다.

```
Math.min(1,2,3)

const arr = [1,2,3]
const min = Math.min.apply(null, arr)

Math.min(...arr);
```