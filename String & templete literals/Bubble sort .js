let arr = [10, 2, 0, 15, 1, 12, 3];

for (let i = 1; i < arr.length-1; i++) {
    for (let j = 0; i < arr.length-1; i++) {

if(arr[j] > arr[j+1]){
    let temp = arr[j];
    arr[j] = arr[j+1]
    arr[j+1] = temp
}
    }
    console.log(i,arr)
}
    console.log(arr)