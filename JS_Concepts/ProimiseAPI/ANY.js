
let productId = [ '8k', 18];

function getProductDetails() {

    let promiseObj = productId.map((item) => fetch("https://dummyjson.com/products/" + item).then((res) => { if (!res.ok) { throw new Error('Product not found!') }; return res.json() }))


        Promise.any(promiseObj).then(data => console.log(data)).catch((err) => console.log("Err:::", err))

}

getProductDetails()

//NOTE you can never cancel a promise in between


/***********ANY*************/

//Will give back an obj nor an array

//SUCCESS CASE : 
//FAILURE CASE :

//For both the above cases it will return who FULLFILLED only (SUCCESS PROMISE ONLY)
