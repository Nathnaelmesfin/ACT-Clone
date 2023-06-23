function mostRepeated(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
        for (let j = 0; j < arr.length; i++){
            if(arr[i] == arr[j]){
                count++
            }
        }
        console.log(count + '' + arr[i] )
    }
}