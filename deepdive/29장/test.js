const arr = [];

console.time('Array Performance Test');

for(let i =0; i< 10000000; i++){
    arr[i] = i;
}


console.timeEnd('Array Performance Test');

const obj = {};

console.time('Object Performance Test');

for(let i =0; i< 10000000; i++){
    obj[i] = i;
}
console.timeEnd('Object Performance Test');


//배열에 프로퍼티를 작성하는 경우
const arr2 = [];

console.time('arr2 Performance Test');

for(let i =0; i< 10000000; i++){
    arr2[i] = i;
}
arr2.check = "test";


console.timeEnd('arr2 Performance Test');

//문자열의 경우
console.log(Object.getOwnPropertyDescriptors('test'));

//객체의 경우
console.log(Object.getOwnPropertyDescriptors({1:11,2:22,3:33}));



//배열의 경우 
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

console.log(Array.from("test"));

console.time("V8 ArrayTest");
a = new Array();
for (var b = 0; b < 10; b++) {
    a[0] |= b;  // 안 좋아요!
}

console.timeEnd("V8 ArrayTest");

//vs.

console.time("V82 ArrayTest");
a = new Array();
a[0] = 0;
for (var b = 0; b < 10; b++) {
    a[0] |= b;  // 훨씬 좋습니다. 2배 더 빨라요.
}
console.timeEnd("V82 ArrayTest");