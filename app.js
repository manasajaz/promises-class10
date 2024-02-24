//////call Back///////

// is me hm parametr me function pass krte hn /////

// function runafter(cb) {
//   setTimeout(function () {
//     console.log("done");
//     let data = 5 + 4;
//     cb(data);
//   }, 1000);
// }

// function tobeexecuted(datatoget) {
//   console.log("yes its done", datatoget);
// }

// runafter(tobeexecuted);
// console.log("anas");

///promises//

// function runafter(val) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       let data = 5 + val;
//       resolve(data);
//     }, 1000);
//   });
// }

// runafter(5)
//   .then(function (data) {
//     // console.log(data);
//     return runafter(data);
//   })
//   .then(function (data) {
//     // console.log(data);
//     return runafter(data);
//   })
//   .then(function (data) {
//     console.log(data);
//     // return runafter(data);
//   });

//// asyn await /////

function runafter(val) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let data = 5 + val;
      if (data % 2 === 0) {
        resolve(data);
      } else {
        reject("odd no detect");
      }
    }, 1000);
  });
}

runafter(5)
  .then(function (data) {
    console.log(data);
    return runafter(data);
  })
  .catch(function (error) {
    console.log(error);
  });

/*
(async function () {
  const data = await runafter(5);
  const data1 = await runafter(data);
  const data2 = await runafter(data1);
  const data3 = await runafter(data2);

  console.log(data3);
})();*/

//with out async  ye by default promise return krta hai//

// async function run() {
//   const data = await runafter(5);
//   const data1 = await runafter(data);
//   const data2 = await runafter(data1);
//   const data3 = await runafter(data2);

//   return data3;
// }

// run().then(function (data3get) {
//   console.log(data3get);
// });

///////////////===============================///////////////

///// is jga hmara old function nhi chle ga scope ki wja se,  ye scope change krdeta hai  / ////

// obj = {
//   name: "anas",
//   print: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   },
// };

// obj.print();

//// Arrow function ///
// const add = () => {

// }

// obj = {
//   name: "anas",
//   print: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   },
// };

// obj.print();

/// rest parameter -- operater //
// function myfun(x, y, ...z) {
//   console.log(x, y, z);
// }
// myfun(2, 4, 6, 8, 9, 7);

//// short syntax ////
// let firstName = "anas";

// obj = {
//   firstName,
//   print: function () {
//     console.log(this.firstName);
//   },
// };

// obj.print();

//////destructuring////////

// const obj = {
//   firstName: "Anas",
//   lastName: "ajaz",
//   print: function () {
//     console.log("ok");
//   },
// };

// const { firstName } = obj;
// console.log(firstName);

/// Array destructuring ///

// const arr = ["anas", "ajaz", "ali"];
// const [, lastName, abc] = arr;
// console.log(abc);

//// spread operatre ///
// const arr = ["anas", "ali"];

// const newarr = ["start", ...arr, "end"];
// console.log(newarr);

//////////   oop  //////////
// const obj1 = {
//   Name: "led tv",
//   price: "3000",
// };

// const obj2 = {
//   Title: "TV",
//   amount: "1000",
// };

// const product = [obj1, obj2];

// product.forEach(function (p) {
//   console.log(p.Name);
// });

/// same hai short taraqa hai bs////
// product.forEach((p) => console.log(p.Name));

// class Product {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }
// }

// const product1 = new Product("led tv", 2000);
// const product2 = new Product(" tv", 1000);

// const product = [product1, product2];

// product.forEach((p) => console.log(p.title, p.price));
