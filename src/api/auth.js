import authApi from './axiosClient';




export async function SignupUserLocal(email, password, navigate){
try {
 const response = await authApi.post("/api/auth/signup", {
      email,
      password,
  },  {
  headers: {
    "Content-Type": "application/json",
}});


 if(response.data.success){
navigate('/user-information') // redirect to Home
 } 
 return response;
} catch(err) {
}
}

export async function LoginUserLocal(email, password, navigate, setAuthUser){
try {
 const response = await authApi.post("/api/auth/login", {
      email,
      password,
  },  {
  headers: {
    "Content-Type": "application/json",
}});
 if(response.data.success){
  setAuthUser(response.data.data)
navigate('/') // redirect to Home
 } 
 return response;
} catch(err) {
navigate('/register')
}
}

export async function getCode(email){
try {
 const res = await authApi.get(`http://localhost:3001/api/auth/send-code/${email}`);
 console.log(res.data.code)

 if(res.data.success) console.log('code receive')
 else console.log("error in code senfing ")
 return res
} catch(err){
 console.log(err)
}

}

export async function getLoggedInUser(){
  try {
 const res = await authApi.get('/api/auth/verify');
 return res;
  } catch(err){
  }
 
}

export async function logoutUser(){
  try {
 const res = await authApi.post('/api/auth/logout',{}, {
  headers: {
    'Content-Type': 'application/json'
  }
 })
 return res;
  } catch(err){
  }
 
}

