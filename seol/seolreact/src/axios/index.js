import axios from "axios";


function apiInstance() {

    const instance = axios.create({
        baseURL:  "http://3.36.131.59:80/",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    });
    return instance;
}

export { apiInstance };


    
//redis? => 공부를 좀더 해본다.
//모든 토큰은 redis로만 한다.

//[]
//redis의 경우에서
//server로 데이터를 전송할때
//api호출 -> 대ㅔ이터 받는다.
//api 호출(토큰 담고) -> 검증 ->성공 -> 데이터 받는다
//api 호출(토큰 담고) -> 검증 ->실패 -> 다른 페이지로 표현한다.
//토큰발급하는건 8080포트, 토큰을 검증 redis - redis? = DB?
//매순간 api를 보낼때 토큰을 하나 추가해서 보내면 되는지?
//프론트엔드 작업 = 토큰을 일단 공용 저장소에 저장한다.
//세션과 쿠키? 일단은 쿠키?
//프론트쪽에서 쿠키랑 세션에 따라서 처리하는게 다름.
//redux - 페이지에 저장에 저장하는것.
//localstorage - 브라우저에 저장하는것.
//cookie - 브라우저에 저장하는것.
//쿠키를 확인하고, 로그인 이후에 쿠키가 저장되고
//쿠키에 저장되는 시점?
//10초????????????????????????????????????????
//현재는 1분
//afterlogin 페이지를 접속할 땐 무조건 토큰이있는지 확인 -> 실패시 로그인 페이지로 가고
//성공시 -> 진행.

