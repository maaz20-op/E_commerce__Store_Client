import orderApi from './axiosClient.js'


export async function SubmitOrder(totalPayment, productsData, transactionId){
    if(productsData.length === 0) return;
    try {
   const res = await orderApi.post('api/orders', {
    payment: totalPayment,
    buyedProducts:  productsData,
    transactionId,
   }, {
    headers:{
        "Content-Type":"application/json"
    }
   })
   return res
    } catch(err){
    }
}

export async function getAllOrders(){
    try {
    const res = await orderApi.get('/api/orders');
    return res
    } catch(err){
    }   
}

export async function confirmOrder(orderId){
    try {
    const res = await orderApi.patch('/api/orders',{orderId}, {headers: {"Content-Type": "application/json"}});
    return res
    } catch(err){
    }   
}