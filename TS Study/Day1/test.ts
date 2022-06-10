// const obj = { width: 10, height: 15 };
// const area = obj.width * obj.heitgh;

// console.log(4 / []);

const message = "Hello World";

// message();

console.log(message.toLowerCase());

// function fn(x) {
//     x.flip();
// }
const user = { name: "Daniel", age: 26 };
console.log(user.location); // undefined;

function flipCoin() {
    return Math.random < 0.5;
}

const value = Math.random() < 0.5 ? "a" : "b";

if (value !== "a") {
    
} else if (value === "b") { //value의 값은 a 혹은 b만을 출력하기 때문에 TS에서 잡아준다.
    
}