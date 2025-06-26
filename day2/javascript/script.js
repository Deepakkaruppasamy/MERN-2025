//arrow function
let a=20
let b=20
let sum=()=>{
    console.log('the sum is ',(a+b));
}
sum();

//spread operator
var arr1=[1,2,3];
var arr2=[...arr1,89,77];
console.log(arr1);
console.log(arr2);

//Destructing operator
var marks=[90,99,89,96,77];
var [m1,m2,m3,m4,m5]=marks;
console.log(m5);

//callback function
function demo(){
    console.log('helo from demo funct');
}
var callback=(func)=>{
    func();
}
callback(demo)

//map
var maparray=[10,20,30,87];
var double=maparray.map(num=>num*2);
console.log(maparray);
console.log(double);
//filter
var odd=maparray.filter(num=>num%2!==0)
console.log(odd);
//reduce
var total=maparray.reduce((sum,num)=>sum+num,0)
console.log(total)


var newarr=[1,2,3,4,5]
var ans=newarr.map(num=>num*2).filter(num=>num>5).reduce((val,num)=>val+num,0);
console.log(ans);

