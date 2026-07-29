let productID = [1, '2l', 3]

/*****************SUCCESS CASE*******************/

function getProductIDSuccessCase() {


    let promiseArr = productID.map(item => fetch("https://dummyjson.com/products/" + item).then((res) => res.json()));


    console.log("promiseArr::", promiseArr)

    Promise.all(promiseArr).then(data => console.log("Data::", data))


}

getProductIDSuccessCase();

/*****************FAILURE CASE*******************/




function getProductIDFailureCase() {


    let promiseArr = productID.map(item => fetch("https://dummyjson.com/products/" + item).then((res) => { if (!res.ok) { throw new Error("Product ID not found") } return res.json() }));


    Promise.all(promiseArr).then(data => console.log("Data::", data))



}

//getProductIDFailureCase();

// NOTE : Promises can never be cancelled

//FAILURE CASE : As soon as the first one fails others will continue settling/rejected but will not get fullfilled
