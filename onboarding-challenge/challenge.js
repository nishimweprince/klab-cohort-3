const item = [
    { name: 'Bike', price: 100 }, 
    { name: 'TV', price: 200 }, 
    { name: 'Album', price: 10 }, 
    { name: 'Book', price: 5 }, 
    { name: 'Phone', price: 500 }, 
    { name: 'Computer', price: 1000 }
];

function cheapest(array) {

    let least = array[0].price;

    for (let i=0; i<array.length; i++){

        if (array[i].price <= least){
            least = array[i].price;
        }

    }
    
     return `The cheapest item costs ${least}.`;
}

function expensive(array) {
    let most = array[0].price;

    for (let i=0; i<array.length; i++){

        if (array[i].price >= most){
            most = array[i].price;
        }

    }
    
     return `The most expensive item costs ${most}.`;
}

function productTotal(array){
    let total = 0;

    for (let i=0; i<array.length; i++){

        total += array[i].price;

    }

    return `The total cost is ${total}.`;
}

function totalAboveTen(array){
    let total = 0;

    for (let i=0; i<array.length; i++){
        if (array[i].price < 10){
            continue;
        }

        else {
            total += array[i].price;
        }
    }

    return `The total cost of products above $10 is ${total}`;
}

console.log(cheapest(item));
console.log(expensive(item));
console.log(productTotal(item));
console.log(totalAboveTen(item));