import userApi from "./axiosClient";


export async function sendUserPersonalizationTOBackend(obj, setAuthUser){
    try {
     const res = await userApi.post('/api/users/', obj)

    if(res?.data?.success){
 setAuthUser(res.data.data)
    }
    return res;
    } catch (err) {
    }
}