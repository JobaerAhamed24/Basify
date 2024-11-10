const reverseWords = (a)=>{
   return a.split(" ").map(w=>w.split("").reverse().join("")).join(' ')
}

console.log(reverseWords('Hello World'))
