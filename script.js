//Assignment-2 
//a.OddNos Example
function oddNos(arr){
    
    var result = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] % 2!== 0){
            result.push(arr[i])
        }
    }
    return result
}
console.log(oddNos([2,3,4,5]))

//c.sumOfAll
function sumOfAll(arr){
    
    var sum = 0
    var result = []
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumOfAll([2,3,4,5]))
