let grandfather = {
    name: "Balubhai",
    age: 85,
    child: [
      {
        id: 1001,
        name: "vinubhai",
        age: 65,
        occupation: "retired",
        vehicle: [
          {
            name: "activa",
            number: 1010,
          },
          {
            name: "nissan micra",
            number: 6549,
          },
          {
            name: "xuv700",
            number: 6569,
          },
        ],
        son: [
          {
            name: "vivek",
            age: 38,
          },
          {
            name: "sameer",
            age: 35,
          },
          {
            name: "sanket",
            age: 30,
          },
        ],
      },
      {
        id: 1002,
        name: "dhirajbhai",
        age: 50,
        occupation: "farmar",
        vehicle: [
          {
            name: "ather",
            number: 1737,
          },
          {
            name: "soda",
            number: 8743,
          },
          {
            name: "swift",
            number: 1610,
          },
        ],
        son: [
          {
            name: "riya",
            age: 21,
          },
          {
            name: "meet",
            age: 18,
          },
        ],
      },
      {
        id: 1003,
        name: "pradipbhai",
        age: 45,
        occupation: "farmar",
        vehicle: [
          {
            name: "vespa",
            number: 4185,
          },
          {
            name: "swift",
            number: 3559,
          },
        ],
        son: [
          {
            name: "drashil",
            age: 20,
          },
          {
            name: "kenil",
            age: 17,
          },
        ],
      },
    ],
  };

 
// // 1)print your grandfather name from family object
  for(let key in grandfather){
    console.log(`${key}:${grandfather[key]}`)
  } 
  // or
  console.log(grandfather.name)
  // 2)print 2nd family 's second chlid of grand father.
  console.log(grandfather.child[1].name);
  // 3. dada's 2nd child's 2nd son
  console.log(grandfather.child[1].son[1].name);
//   4. dada's 3nd child's 1st vehicle name
console.log(grandfather.child[2].vehicle[0].name)
// 5. dada's 1st child's 1st vehicle number
console.log(grandfather.child[0].vehicle[0].number)







 