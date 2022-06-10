const promise = test => {
    return new Promise( (resolve, reject)=>{
        if(test){
            resolve('result');
        }else{
            reject('reject');
        }
    })
};


promise(0).then(result => {
    console.log("then test : " ,result);
}).catch(error => {
    console.log("error check :", error);
})


const getmethod = url =>{
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        if(url){

            xhr.open('get',url);
            xhr.send();
            xhr.onload = () =>{
                if(xhr.status == 200){
                    resolve(xhr.response);
                    
                }else{
                    reject(xhr);
                }
            }
        }else{
            reject("uri를 입력해주세요!");
        }
    })
}

getmethod().then( result =>{
    console.log("result : ",result);
}).catch(error => {
    console.log("error status : ",error);
});
