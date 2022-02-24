//복수 값을 반환하는 예제(객체)
function getSize(width, height, depth){
    var area = width * height;
    var volume = width * height * depth;
    return {'area': area,
            'volume' : volume
            }  //1

}
console.log(getSize(3,2,3).area+' '+getSize(3,2,3).volume);


//가변 인자 함수 예시
function manyArgs(){
    var res = '매개변수로 받은 값은 ';
    
    for(var i =0; i < arguments.length; i++){
        res += arguments[i]+',';
    }
    return res.substring(0,res.length-1)+'이 있습니다';
}

console.log(manyArgs(1,2,3))
