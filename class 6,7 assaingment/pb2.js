const arr = [1,2,3,4,5,6,7,8];


function sumArry(arr){
    let sum = 0;
    arr.forEach((ar)=>{
        sum = sum + ar
    })
    return sum
}
console.log(sumArry(arr))
