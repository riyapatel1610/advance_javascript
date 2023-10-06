
let p1 = new Promise((resolve, reject) => {
  if (true) {
    resolve({ name: "riya" });
  } else {
    reject("data not found");
  }
});

p1.then((res1)=>{
    console.log("res1",res1);
    return {res1,city:"surat"};
})
.then((res2)=> {
    JSON.parse({age:22});
    console.log("res2",res2);
    return res2;
})

.then((res3) => {
 console.log("-----res-3------>",res3);
//  print all 3 key
})

.catch((err) => {
console.log("err", err.message);
 });

 