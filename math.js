
let arrNum=[3,5,1,6,8];
let arr1=[];
let arr2=[];
let arr3=[];
//Array
for( var i=0;i<arrNum.length;i++)
{
    if (arrNum[i]%2==0)
    {
        arr1.push(arrNum[i]);
    }
    else 
    {
        arr2.push(arrNum[i]);
    }
}
console.log(arr1);
console.log(arr2);
console.log(arrNum.sort().reverse());
console.log(arrNum.pop());
console.log(arrNum.push(9));

//Array.forEach()
arrNum.forEach(element => console.log(element));
//Array.filter()
let bigNum = arrNum.filter(arrNum => arrNum > 3);
console.log(bigNum);
//Array.reduce()
let sum=arrNum.reduce((accumulator, item) => accumulator + item);
console.log(sum);
//date
var d = new Date();
console.log(d);
var h = new Date("2015");
console.log(h);
console.log(d.getHours());
console.log(d.setFullYear(2020));
//math
console.log(Math.round(4.6));
console.log(Math.pow(2,6));
console.log(Math.sqrt(8));
console.log(Math.floor(Math.random()*100));
