let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
     setTimeout(() => {
         if (money >= 10000) {
            resolve("You can buy a " +car);
         } else {
             reject("You do not have enough money!");
         }
     },100);
    }))
}

money = 1000001;
const promise = buyACar("VinFast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})
