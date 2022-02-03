import { apiInstance } from './index.js';


const api = apiInstance();


async function test22(param, success, fail) {
    await api.get(`/test22`).then(success).catch(fail);
}
async function signin(param, success, fail) {
    await api.post(`/signin`,JSON.stringify(param)).then(success).catch(fail);
}

async function profile(param, success, fail) {
    await api.get(`/profile/${param}`).then(success).catch(fail);
}

async function signup(param, success, fail) {
    await api.post(`/signup`,param).then(success).catch(fail);
}

 function insertTeam(param, success, fail) {
     api.post(`/team/create/7`,param).then(success).catch(fail);
}

 function searchTeam(param, success, fail) {
     api.get(`/team`, { team_id: 1 }).then(success).catch(fail);
}
 function searchTeamkeyword(param, success, fail) {
     api.get(`/search/team`, { params: { keyword: param } }).then(success).catch(fail);
}
 function searchUserkeyword(param, success, fail) {
     api.get(`/search/user`, { params: { keyword: param } }).then(success).catch(fail);
}
 function searchUser(param, success, fail) {
     api.get(`/user`, { team_id: 1 }).then(success).catch(fail);
}

export {signin ,profile, signup,test22, insertTeam, searchTeam, searchUser,searchTeamkeyword,searchUserkeyword};