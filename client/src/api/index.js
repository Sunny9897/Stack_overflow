import axios from 'axios';
const API=axios.create({baseURL:"https://stack-overflow-ecom.onrender.com"})
//const API =axios.create({baseURL:"http://localhost:5000"})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`

    }
    return req;
})



export const logIn =(authData)=>API.post('/user/login',authData);
export const signUp =(authData)=>API.post('/user/signup',authData);    

export const postQuestion=(questionData)=>API.post('/questions/Ask',questionData)
export const getAllQuestions=()=>API.get('/questions/get');
export const voteQuestion=(id,value,userId)=>API.patch(`/questions/vote/${id}`,{value,userId})
export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`);


export const postAnswer =(id,noOfAnswers,answerBody,userAnswered,userId)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})
export const deleteAnswer=(id,answerId,noOfAnswers)=>API.patch(`/answer/delete/${id}`,{id,answerId,noOfAnswers})

export const getAllUsers=()=>API.get('/user/getAllUsers')
export const updatedProfile=(id,updateData)=>API.patch(`/user/update/${id}`,updateData)
 export const packPayment=(name,email,amount)=>API.post('/Product/payment-success/pay',{name,email,amount})
 export const updateDate=(id)=>API.patch(`/limit/date/${id}`,id);
 export const updatePack=(id)=>API.patch(`/limit/pack/${id}`,id);
 export const getCurrentUser=(id)=>API.get(`/user/getCurrentUser/${id}`,id)
 export const forgotPassword=(email)=>API.post('/user/resetPassword',{email})
export const getLoginHistory=(email,lat,long)=>API.post('/data/loginHistory',{email,lat,long})
export const getHistory=(email)=>API.get(`/data/getLoginHistory/${email}`,email)

 
