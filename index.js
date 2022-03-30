//use npm repository inorder to implement array=[100,"John","200","Jane","400","Jene"] and return numbercount, stringcount
const _ = require("lodash");
array = [100, "John", 200, "Jane", 400, "Jene"];
let countData = (array) => {
  let numbercount = 0;
  let stringcount = 0;
  _.forEach(array, (value) => {
    _.isNumber(value) ? numbercount++ : numbercount;
    _.isString(value) ? stringcount++ : stringcount;
  });
  return { numbercount, stringcount };
};
console.log(countData(array));
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
 console.log(_.sortBy(users, [function(o) { return o.user; }])) ;
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
console.log(_.sortBy(users, ['user', 'age']));
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]