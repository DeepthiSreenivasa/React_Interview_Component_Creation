
let productId = [1, '2j', 3];

function getProductDetails() {

    let promiseArr = productId.map((item) => fetch("https://dummyjson.com/products/" + item).then((res) => { if (!res.ok) { throw new Error('Product not found!') }; return res.json() }))


    if (promiseArr.length > 0) {
        Promise.allSettled(promiseArr).then(data => console.log(data)).catch((err) => console.log("Err:::", err))
    }

}

getProductDetails()

//NOTE you can never cancel a promise in between


/***********ALL SETTLED*************/

//SUCCESS CASE : All start simultaneously and will wait for all of them to complete and give back the result
//FAILURE CASE : The failed promise will not be setlled the other promises will be fulfilled
