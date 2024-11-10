let arr = [1,2,3,4,5,6,7];
let sum = 0;
function squareAndSum(arr){
    
     arr.map((ar)=>{
         let squer = ar*ar
         console.log(squer)
         return sum = sum + squer
     })
    
}
squareAndSum(arr)
console.log(sum)
