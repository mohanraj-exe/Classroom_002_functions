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
console.log(oddNos([2,3,4,5])) //[3,5]

//b.Convert all the strings to title caps in a string array

function titleCase(arr){
    var result = []
    for (let i=0; i<arr.length; i++){
        
        var arrResult = []
        var word = arr[i].split(' ')
        for (let j=0; j<word.length; j++){
            arrResult.push(word[j].charAt(0).toUpperCase()+ word[j].substr(1).toLowerCase())
        }
        result.push(arrResult.join(' '))
    }
    return result
}
console.log(titleCase(['mohanraj selvam','maheswari selvam'])) //['Mohanraj Selvam','Maheswari Selvam']

//c.sumOfAll
function sumOfAll(arr){
    
    var sum = 0
    var result = []
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumOfAll([2,3,4,5])) // 14
