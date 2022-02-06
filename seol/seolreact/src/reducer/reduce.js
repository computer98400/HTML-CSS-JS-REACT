
const ADDTOKEN = 'ADDTOKEN';        //이름 정하고
const DELETETOKEN = 'DELETETOKEN';

//액션 생성자
export const ADDTK = (diff) => ({ type: ADDTK, diff: diff });    //순수함수 정의 => 그냥 기능. ADDTOKEN 동작을 정의할수잇음. 근데 그게 매번 정의해서 쓸순없으니까 편의성


export const DELETETK = () => ({ type: DELETETK });


//store 부분이 됨.
const initialState = {
    token : 'testset'
};

const tokenCHECK = (state = initialState, action) => {
    //console.log(state);
    //console.log(action);
    switch (action.type) {
        case ADDTK:
            console.log("check", action.diff);
            return {
                token: action.diff
            };
        case DELETETK:
            console.log("check222", action.diff);
            return {
                token: ''
            };
        default:
            console.log("check3333", action.diff);
            return state;
    }
}

export { tokenCHECK };
