import productApi from "./axiosClient";


export async function createProduct(fromData, navigate){
    try {
     const res = await productApi.post('/api/products', fromData, {
        headers: {
            "Content-Type": "multipart/form-data",
        } 
     } )
    return res;
    } catch (err) {
    }
}  

export async function deleteProduct(prodId) {
  try {
    const res = await productApi.delete('/api/products', {
      headers: { "Content-Type": "application/json" },
      data: { id: prodId } 
    });
    return res;
  } catch (err) {
  }
}

export async function getCartProducts(currentCartData){
  try {
 const res = await productApi.post('/api/products/cart',  {
      headers: { "Content-Type": "application/json" },
      data: { idArray: currentCartData } 
    })
  return res
  } catch(err){

  }
}

export async function getAllProducts({page, limit}){
    try {
     const res = await productApi.get(`/api/products?page=${page}&limit=${limit}`)
return res;
    } catch (err) {
    console.log(err)
    }
} 

export async function getProductByID(id){
    try {
     const res = await productApi.get(`/api/products/${id}`)
if(res.data.success) return res?.data?.data;

    } catch (err) {
    }
}

export async function createReview(fromData){
    try {
     const res = await productApi.post(`/api/products/review`, fromData, {
        headers: {
            'Content-Type': 'application/json'
        }
     })
return res?.data?.data;
    } catch (err) {
    }
}



