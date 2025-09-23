let users = [
  { id: 1, name: "Satyam", age: 22, city: "Delhi", isStudent: true },
  { id: 2, name: "Anjali", age: 21, city: "Mumbai", isStudent: false },
  { id: 3, name: "Rohit", age: 23, city: "Bangalore", isStudent: true },
  { id: 4, name: "Priya", age: 20, city: "Kolkata", isStudent: true },
  { id: 5, name: "Arjun", age: 25, city: "Delhi", isStudent: false }
];

//forEach loop
users.forEach(user=>{
    let {id,name,age,city,isStudent}=user;
    console.log(id,name,age,city,isStudent);
})

let name=users.map(user =>user.name);
console.log(name);

let delhiUser=users.filter(user=>user.city==="Delhi");



//function 
function getSum(a,b,c){
  return a+b+c;
}
int getSum(1,2,3);


let sol=function(a,b,c){
  return a+b+c;
}

let squreNumber=function(num){
  let ans=num**2;
  return ans;
}
console.log(squreNumber);


//arrow function
const ans=(a,b)=>{
  const ans=a**y;
  return ans;

}
ans(2,10);

